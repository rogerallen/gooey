if(!lt.util.load.provided_QMARK_('lt.plugins.gooey')) {
goog.provide('lt.plugins.gooey');
goog.require('cljs.core');
goog.require('lt.objs.command');
goog.require('lt.objs.command');
goog.require('lt.objs.tabs');
goog.require('lt.objs.tabs');
goog.require('lt.object');
goog.require('lt.object');
lt.plugins.gooey.main_panel = (function main_panel(this$){var e__10057__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",1013907515),"gooey"], null));var seq__10323_10329 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__10324_10330 = null;var count__10325_10331 = 0;var i__10326_10332 = 0;while(true){
if((i__10326_10332 < count__10325_10331))
{var vec__10327_10333 = cljs.core._nth.call(null,chunk__10324_10330,i__10326_10332);var ev__10058__auto___10334 = cljs.core.nth.call(null,vec__10327_10333,0,null);var func__10059__auto___10335 = cljs.core.nth.call(null,vec__10327_10333,1,null);lt.util.dom.on.call(null,e__10057__auto__,ev__10058__auto___10334,func__10059__auto___10335);
{
var G__10336 = seq__10323_10329;
var G__10337 = chunk__10324_10330;
var G__10338 = count__10325_10331;
var G__10339 = (i__10326_10332 + 1);
seq__10323_10329 = G__10336;
chunk__10324_10330 = G__10337;
count__10325_10331 = G__10338;
i__10326_10332 = G__10339;
continue;
}
} else
{var temp__4092__auto___10340 = cljs.core.seq.call(null,seq__10323_10329);if(temp__4092__auto___10340)
{var seq__10323_10341__$1 = temp__4092__auto___10340;if(cljs.core.chunked_seq_QMARK_.call(null,seq__10323_10341__$1))
{var c__9414__auto___10342 = cljs.core.chunk_first.call(null,seq__10323_10341__$1);{
var G__10343 = cljs.core.chunk_rest.call(null,seq__10323_10341__$1);
var G__10344 = c__9414__auto___10342;
var G__10345 = cljs.core.count.call(null,c__9414__auto___10342);
var G__10346 = 0;
seq__10323_10329 = G__10343;
chunk__10324_10330 = G__10344;
count__10325_10331 = G__10345;
i__10326_10332 = G__10346;
continue;
}
} else
{var vec__10328_10347 = cljs.core.first.call(null,seq__10323_10341__$1);var ev__10058__auto___10348 = cljs.core.nth.call(null,vec__10328_10347,0,null);var func__10059__auto___10349 = cljs.core.nth.call(null,vec__10328_10347,1,null);lt.util.dom.on.call(null,e__10057__auto__,ev__10058__auto___10348,func__10059__auto___10349);
{
var G__10350 = cljs.core.next.call(null,seq__10323_10341__$1);
var G__10351 = null;
var G__10352 = 0;
var G__10353 = 0;
seq__10323_10329 = G__10350;
chunk__10324_10330 = G__10351;
count__10325_10331 = G__10352;
i__10326_10332 = G__10353;
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
lt.object.object_STAR_.call(null,new cljs.core.Keyword("lt.plugins.gooey","gooey.open","lt.plugins.gooey/gooey.open",3576914873),new cljs.core.Keyword(null,"tags","tags",1017456523),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gooey.open","gooey.open",2320904271)], null),new cljs.core.Keyword(null,"behaviors","behaviors",607554515),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("lt.plugins.gooey","on-close-destroy","lt.plugins.gooey/on-close-destroy",4798572319)], null),new cljs.core.Keyword(null,"name","name",1017277949),"gooey",new cljs.core.Keyword(null,"init","init",1017141378),(function (this$){return lt.plugins.gooey.main_panel.call(null,this$);
}));
lt.plugins.gooey.__BEH__on_close_destroy = (function __BEH__on_close_destroy(this$){var temp__4092__auto___10354 = new cljs.core.Keyword("lt.objs.tabs","tabset","lt.objs.tabs/tabset",3378091779).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$));if(cljs.core.truth_(temp__4092__auto___10354))
{var ts_10355 = temp__4092__auto___10354;if(cljs.core._EQ_.call(null,cljs.core.count.call(null,new cljs.core.Keyword(null,"objs","objs",1017308622).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ts_10355))),1))
{lt.objs.tabs.rem_tabset.call(null,ts_10355);
} else
{}
} else
{}
return lt.object.raise.call(null,this$,new cljs.core.Keyword(null,"destroy","destroy",2571277164));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.gooey","on-close-destroy","lt.plugins.gooey/on-close-destroy",4798572319),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.gooey.__BEH__on_close_destroy,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"close","close",1108660586),null], null), null));
lt.plugins.gooey.open = lt.object.create.call(null,new cljs.core.Keyword("lt.plugins.gooey","gooey.open","lt.plugins.gooey/gooey.open",3576914873));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword("lt.plugins.gooey","open","lt.plugins.gooey/open",4336940716),new cljs.core.Keyword(null,"desc","desc",1016984067),"gooey: open a tab",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){return lt.objs.tabs.add_or_focus_BANG_.call(null,lt.plugins.gooey.open);
})], null));
}

//# sourceMappingURL=gooey_compiled.js.map