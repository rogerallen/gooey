(ns lt.plugins.gooey
  (:require [lt.object :as object]
            [lt.objs.tabs :as tabs]
            [lt.objs.command :as cmd])
  (:require-macros [lt.macros :refer [defui behavior]]))

(defui main-panel [this]
  [:h1 "gooey"])

(object/object* ::gooey.open
                :tags [:gooey.open]
                :behaviors [::on-close-destroy]
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

(def open (object/create ::gooey.open))

(cmd/command {:command ::open
              :desc "gooey: open a tab"
              :exec (fn []
                      (tabs/add-or-focus! open))})
