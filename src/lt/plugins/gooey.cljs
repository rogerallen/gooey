(ns lt.plugins.gooey
  (:require [lt.object :as object]
            [lt.objs.tabs :as tabs]
            [lt.objs.command :as cmd]
            [lt.util.dom :as dom])
  (:require-macros [lt.macros :refer [defui behavior]]))

(defn load-script [url]
  (let [script (js/document.createElement "script")]
    (dom/attr script {:src url
                      :type "text/javascript"})
    (dom/append (dom/$ :head) script)))

(defui main-panel [this]
  [:h1 "gooey 3"]
  [:div#panel])

;;    var a = new Interface.Panel({
;;        container:$('#panel'),
;;    });
;;    var l1 = new Interface.Label({
;;        bounds: [.0,.8,.1,.1],
;;        hAlign:'center',
;;        value: 'k1: '+Math.floor(127*0.25),
;;    });
;;    var k1 = new Interface.Knob({
;;        bounds:       [.0,.0,.1],
;;        value:        .25,
;;        usesRotation: true,
;;        centerZero:   false,
;;        onvaluechange: function() {
;;            l1.setValue('k1: '+Math.floor(127*this.value));
;;            // FIXME
;;        },
;;    });
;;    a.add(l1, k1);
(defn add-interface [x]
  (let [a (js/Interface.Panel.
           #js {:container       (dom/$ :#panel)})
        ;;l1 (js/Interface.Label.
        ;;    #js {:bounds         #js [0.0 0.8 0.1 0.1]
        ;;         :hAlign         "center"
        ;;         :value          "k1 = 0.0"})
        ;;k1 (js/Interface.Knob.
        ;;    #js {:bounds         #js [0.0 0.0 0.1]
        ;;         :value          0.0
        ;;         :usesRotation   true
        ;;         :centerZero     false
        ;;         :onvaluechange: (fn []
        ;;                           (.setValue
        ;;                            l1 (str "k1 = " (.value this))))})
        ]
    ;;(.add a l1 k1)
    nil))

(object/object* ::gooey.open
                :tags [:gooey.open]
                :behaviors [::on-close-destroy
                            ::add-interface-on-init]
                :name "gooey"
                :init (fn [this]
                        (main-panel this)))

(behavior ::on-close-destroy
          :triggers #{:close}
          :reaction (fn [this]
                      (when-let [ts (:lt.objs.tabs/tabset @this)]
                        (when (= (count (:objs @ts)) 1)
                          (tabs/rem-tabset ts)))
                      (object/raise this :destroy)))

(behavior ::add-interface-on-init
          :triggers #{:init}
          :reaction (fn [this]
                      (add-interface this)))

(def open (object/create ::gooey.open))

(cmd/command {:command ::open
              :desc "gooey: open a tab"
              :exec (fn []
                      (tabs/add-or-focus! open))})
