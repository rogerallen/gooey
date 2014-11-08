if(!lt.util.load.provided_QMARK_('lt.plugins.gooey')) {
goog.provide('lt.plugins.gooey');
goog.require('cljs.core');
goog.require('lt.util.dom');
goog.require('lt.util.dom');
goog.require('lt.objs.command');
goog.require('lt.objs.command');
goog.require('lt.objs.tabs');
goog.require('lt.objs.tabs');
goog.require('lt.object');
goog.require('lt.object');
lt.plugins.gooey.main_panel = (function main_panel(this$){var e__10057__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",1013907515),"gooey alpha"], null));var seq__10169_10175 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#panel","div#panel",1723248388)], null)], null)));var chunk__10170_10176 = null;var count__10171_10177 = 0;var i__10172_10178 = 0;while(true){
if((i__10172_10178 < count__10171_10177))
{var vec__10173_10179 = cljs.core._nth.call(null,chunk__10170_10176,i__10172_10178);var ev__10058__auto___10180 = cljs.core.nth.call(null,vec__10173_10179,0,null);var func__10059__auto___10181 = cljs.core.nth.call(null,vec__10173_10179,1,null);lt.util.dom.on.call(null,e__10057__auto__,ev__10058__auto___10180,func__10059__auto___10181);
{
var G__10182 = seq__10169_10175;
var G__10183 = chunk__10170_10176;
var G__10184 = count__10171_10177;
var G__10185 = (i__10172_10178 + 1);
seq__10169_10175 = G__10182;
chunk__10170_10176 = G__10183;
count__10171_10177 = G__10184;
i__10172_10178 = G__10185;
continue;
}
} else
{var temp__4092__auto___10186 = cljs.core.seq.call(null,seq__10169_10175);if(temp__4092__auto___10186)
{var seq__10169_10187__$1 = temp__4092__auto___10186;if(cljs.core.chunked_seq_QMARK_.call(null,seq__10169_10187__$1))
{var c__9414__auto___10188 = cljs.core.chunk_first.call(null,seq__10169_10187__$1);{
var G__10189 = cljs.core.chunk_rest.call(null,seq__10169_10187__$1);
var G__10190 = c__9414__auto___10188;
var G__10191 = cljs.core.count.call(null,c__9414__auto___10188);
var G__10192 = 0;
seq__10169_10175 = G__10189;
chunk__10170_10176 = G__10190;
count__10171_10177 = G__10191;
i__10172_10178 = G__10192;
continue;
}
} else
{var vec__10174_10193 = cljs.core.first.call(null,seq__10169_10187__$1);var ev__10058__auto___10194 = cljs.core.nth.call(null,vec__10174_10193,0,null);var func__10059__auto___10195 = cljs.core.nth.call(null,vec__10174_10193,1,null);lt.util.dom.on.call(null,e__10057__auto__,ev__10058__auto___10194,func__10059__auto___10195);
{
var G__10196 = cljs.core.next.call(null,seq__10169_10187__$1);
var G__10197 = null;
var G__10198 = 0;
var G__10199 = 0;
seq__10169_10175 = G__10196;
chunk__10170_10176 = G__10197;
count__10171_10177 = G__10198;
i__10172_10178 = G__10199;
continue;
}
}
} else
{}
}
break;
}
return e__10057__auto__;
});
lt.plugins.gooey.add_interface = (function add_interface(x){var a = (new Interface.Panel({"container": lt.util.dom.$.call(null,new cljs.core.Keyword(null,"#panel","#panel",2122357555))}));return null;
});
lt.object.object_STAR_.call(null,new cljs.core.Keyword("lt.plugins.gooey","gooey.open","lt.plugins.gooey/gooey.open",3576914873),new cljs.core.Keyword(null,"tags","tags",1017456523),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gooey.open","gooey.open",2320904271)], null),new cljs.core.Keyword(null,"behaviors","behaviors",607554515),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("lt.plugins.gooey","on-close-destroy","lt.plugins.gooey/on-close-destroy",4798572319),new cljs.core.Keyword("lt.plugins.gooey","add-interface-on-init","lt.plugins.gooey/add-interface-on-init",1835669352)], null),new cljs.core.Keyword(null,"name","name",1017277949),"gooey",new cljs.core.Keyword(null,"init","init",1017141378),(function (this$){return lt.plugins.gooey.main_panel.call(null,this$);
}));
lt.plugins.gooey.__BEH__on_close_destroy = (function __BEH__on_close_destroy(this$){var temp__4092__auto___10200 = new cljs.core.Keyword("lt.objs.tabs","tabset","lt.objs.tabs/tabset",3378091779).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$));if(cljs.core.truth_(temp__4092__auto___10200))
{var ts_10201 = temp__4092__auto___10200;if(cljs.core._EQ_.call(null,cljs.core.count.call(null,new cljs.core.Keyword(null,"objs","objs",1017308622).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ts_10201))),1))
{lt.objs.tabs.rem_tabset.call(null,ts_10201);
} else
{}
} else
{}
return lt.object.raise.call(null,this$,new cljs.core.Keyword(null,"destroy","destroy",2571277164));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.gooey","on-close-destroy","lt.plugins.gooey/on-close-destroy",4798572319),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.gooey.__BEH__on_close_destroy,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"close","close",1108660586),null], null), null));
lt.plugins.gooey.__BEH__add_interface_on_init = (function __BEH__add_interface_on_init(this$){return lt.plugins.gooey.add_interface.call(null,this$);
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.gooey","add-interface-on-init","lt.plugins.gooey/add-interface-on-init",1835669352),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.gooey.__BEH__add_interface_on_init,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init","init",1017141378),null], null), null));
lt.plugins.gooey.open = lt.object.create.call(null,new cljs.core.Keyword("lt.plugins.gooey","gooey.open","lt.plugins.gooey/gooey.open",3576914873));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword("lt.plugins.gooey","open","lt.plugins.gooey/open",4336940716),new cljs.core.Keyword(null,"desc","desc",1016984067),"gooey: open a tab",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){return lt.objs.tabs.add_or_focus_BANG_.call(null,lt.plugins.gooey.open);
})], null));
}

//# sourceMappingURL=gooey_compiled.js.map