(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-624a8a94","chunk-1de23d68","chunk-e28b030a"],{1881:function(t,e,i){"use strict";function r(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}function n(t,e){if(null==t)return{};var i,r,n=a(t,e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(r=0;r<s.length;r++)i=s[r],e.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(t,i)&&(n[i]=t[i])}return n}function a(t,e){if(null==t)return{};var i,r,n={},a=Object.keys(t);for(r=0;r<a.length;r++)i=a[r],e.indexOf(i)>=0||(n[i]=t[i]);return n}function s(t){t.configure;var e=n(t,["configure"]);return e}function c(t){return{stateToRoute:function(e){return s(e[t]||{})},routeToState:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return r({},t,s(e))}}}i.d(e,"a",function(){return c})},2333:function(t,e,i){"use strict";var r=i("aa5d"),n=i.n(r);n.a},"282f":function(t,e,i){"use strict";var r=i("4629"),n=i.n(r);n.a},"34fe":function(t,e){t.exports=function(t){t.options.__i18n=t.options.__i18n||[],t.options.__i18n.push('{"is":{"view":"Skoða"},"en":{"view":"View"}}'),delete t.options._Ctor}},3757:function(t,e,i){"use strict";i.r(e);var r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{class:["grid-grocery-item",t.showQuantityControlInMobile&&"grid-grocery-item--show-qty-control-mobile"]},[t.entity_id?i("div",{class:["items-grid__item",t.isOverlayShowing&&"items-grid__item--show-overlay",t.isInGroceriesScreen&&"cursor-pointer"],on:{click:t.showGroceryProductModal}},[i("div",{staticClass:"items-grid__image",on:{click:t.toggleOverlay}},[t.percentDiscount?i("span",{staticClass:"items-grid__item-discount-percent"},[t._v(t._s(t.percentDiscount))]):t._e(),i("div",[i("ImageViewer",{staticClass:"img img-responsive",attrs:{src:t.cloudinaryImage,alt:t.name,loading:"lazy"}})],1),this.quantity?i("div",{staticClass:"items-grid__item-in-cart"},[t._v("\n        "+t._s(this.quantity)+"\n      ")]):t._e(),i("div",{staticClass:"item-grid__image-overlay"},[this.quantity?i("div",{staticClass:"center-center width"},[i("div",{staticClass:"quantity"},[t._v(t._s(this.quantity)+" "+t._s(t.$t("inCart")))]),i("div",{staticClass:"item-grid__overlay-btns-container"},[i("base-button",{staticClass:"primary",attrs:{size:"small"},nativeOn:{click:function(e){return t.handleDecreaseCartQty(e)}}},[i("i",{staticClass:"fa fa-minus"})]),i("base-button",{staticClass:"primary btn--small btn--fit-width",nativeOn:{click:function(e){return t.handleIncreaseCartQty(e)}}},[i("i",{staticClass:"fa fa-plus"}),t._v("\n              "+t._s(t.$t("add"))+"\n            ")])],1)]):i("base-button",{staticClass:"center-center width primary",nativeOn:{click:function(e){return t.handleIncreaseCartQty(e)}}},[t._v(t._s(t.$t("addToCart")))])],1)]),i("div",{staticClass:"items-grid__content"},[i("div",{staticClass:"items-grid__name"},[i("router-link",{attrs:{to:t.urlStripped}},[t._v(t._s(t.translatedName))])],1),i("div",{staticClass:"details"},[i("span",{directives:[{name:"show",rawName:"v-show",value:t.calc_special_price,expression:"calc_special_price"}],staticClass:"special_price"},[t._v(t._s(t._f("formatISK")(t.calc_special_price)))]),i("span",{staticClass:"price"},[t._v(t._s(t._f("formatISK")(t.calc_price)))]),i("span",{staticClass:"unit_text"},[t._v(t._s(t.unit_text))])]),i("QuantityControl",{staticClass:"quantity-control--specific-store",attrs:{updateQuantity:t.updateCartQuantity,quantity:t.quantity}})],1)]):i("div",{staticClass:"items-grid__item"},[i("div",{staticClass:"items-grid__image app-ph"}),i("div",{staticClass:"items-grid__placeholder-text app-ph"})])])},n=[],a=(i("8e6e"),i("ac6a"),i("456d"),i("7f7f"),i("a481"),i("6762"),i("2fdb"),i("bd86")),s=(i("c5f6"),i("82ea")),c=i("e700"),o=i("8685"),l=i("f23c"),u=i("935a"),d=i("2f62"),f=i("c0ea"),h=i("78cc"),p=i("fda7");function m(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),i.push.apply(i,r)}return i}function g(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?m(i,!0).forEach(function(e){Object(a["a"])(t,e,i[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):m(i).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))})}return t}var v={name:"GridGroceryItem",mixins:[o["a"]],components:{BaseButton:s["a"],ImageViewer:c["a"],QuantityControl:f["a"]},props:{name:String,en_name:String,image:{type:String,default:""},entity_id:Number,objectID:String,stores:Array,catname:String,unit_text:String,price:Number,url:String,special_price:[String,Number],ingredients:String,showQuantityControlInMobile:{type:Boolean,default:!1},imgHeight:{type:Number,default:400}},data:function(){return{isOverlayShowing:!1}},computed:g({},Object(d["d"])(["isInGroceriesScreen"]),{imgRelativeURL:function(){return this.image&&this.image.includes("http")?this.image.replace("https://cdn.aha.is/media/catalog/product/",""):this.image},cloudinaryImage:function(){return"no_selection"!==this.image&&this.image?new p["a"](this.imgRelativeURL).height(this.imgHeight).toURL():""},calc_special_price:function(){return this.special_price&&this.special_price!==this.price?this.price:""},calc_price:function(){return this.special_price?parseInt(this.special_price):this.price},percentDiscount:function(){var t=this.calc_special_price,e=this.calc_price;return t?"- "+(100-Math.ceil(100*e/t))+"%":""},urlStripped:function(){return this.url?this.url.replace("https://www.aha.is",""):""},translatedName:function(){return Object(h["a"])({isStr:this.name,enStr:this.en_name})}}),methods:{showGroceryProductModal:function(){var t=this.name,e=this.calc_special_price,i=this.calc_price,r=this.unit_text,n=this.imgRelativeURL,a=this.cartItem,s=this.ingredients;this.isInGroceriesScreen&&this.$store.dispatch("toggleModal",{modalKey:u["k"],isVisible:!0,name:t,unit_text:r,calc_special_price:e,calc_price:i,productImg:n,inCartQty:Object(l["a"])(a,"cart_qty",0),updateCartQuantity:this.updateCartQuantity,ingredients:s})},handleIncreaseCartQty:function(t){t.stopPropagation(),this.increaseCartQty()},handleDecreaseCartQty:function(t){t.stopPropagation(),this.decreaseCartQty()},toggleOverlay:function(t){var e=this;t.stopPropagation(),this.isOverlayShowing=!0,clearTimeout(this.overlayActiveTimer),this.overlayActiveTimer=setTimeout(function(){return e.isOverlayShowing=!1},3e3)}}},y=v,b=(i("4f7d"),i("2877")),_=i("5287"),O=Object(b["a"])(y,r,n,!1,null,"6c2e4e8e",null);"function"===typeof _["default"]&&Object(_["default"])(O);e["default"]=O.exports},4629:function(t,e,i){},"4f7d":function(t,e,i){"use strict";var r=i("ce0e"),n=i.n(r);n.a},5287:function(t,e,i){"use strict";var r=i("f37e"),n=i.n(r);e["default"]=n.a},"58ec":function(t,e,i){},6413:function(t,e,i){"use strict";e["a"]={name:"itemsCountMixin",methods:{showCategory:function(){return this.$store.dispatch("setCounts",this.first.count),this.first.value},showSubCategory:function(){if(0!==this.level)return this.isDeadEnd&&this.$store.dispatch("setCounts",this.first.count),this.first.value;var t=this.items.reduce(function(t,e){return t+e.count},0);this.$store.dispatch("setCounts",t)}}}},73331:function(t,e,i){"use strict";i("ac6a");var r=i("75fc");e["a"]=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return Object(r["a"])(Array(Math.floor(t)).keys()).map(function(t){return t+e})}},"78cc":function(t,e,i){"use strict";i.d(e,"a",function(){return n});var r=i("9225");function n(t){var e=t.isStr,i=t.enStr,n=t.fallback,a=void 0===n||n,s="en"===r["a"].locale?i:e;return a?s||("en"===r["a"].locale?e:i):s}},"801a":function(t,e,i){"use strict";var r=i("ebaf"),n=i.n(r);n.a},"996b":function(t,e,i){"use strict";var r=i("ec62"),n=i.n(r);n.a},"9a95":function(t,e,i){"use strict";var r=i("34fe"),n=i.n(r);e["default"]=n.a},a01a:function(t,e,i){"use strict";i.r(e);var r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"grid-search-item"},[i("div",{staticClass:"items-grid__item"},[i("div",{staticClass:"items-grid__image"},[i("router-link",{attrs:{to:t.urlStripped},nativeOn:{click:function(e){return t.redirectToUrl(e)}}},[i("ImageViewer",{attrs:{alt:t.name,src:t.cloudinaryImage,loading:"lazy"}}),i("div",{staticClass:"item-grid__image-overlay"},[i("div",{staticClass:"center-center width"},[i("base-button",{staticClass:"primary"},[t._v(t._s(t.$t("view")))])],1)])],1)],1),i("div",{staticClass:"items-grid__content"},[i("div",{staticClass:"items-grid__left clearfix"},[i("h2",{staticClass:"items-grid__name"},[i("router-link",{attrs:{to:t.urlStripped},nativeOn:{click:function(e){return t.redirectToUrl(e)}}},[t._v(t._s(t.translatedName))])],1),i("div",{staticClass:"items-grid__store-distances"},[i("GridSearchItemStoreDistance",{attrs:{storeList:t.stores}})],1)])])])])},n=[],a=(i("8e6e"),i("ac6a"),i("456d"),i("bd86")),s=(i("7f7f"),i("a481"),i("6762"),i("2fdb"),i("c5f6"),i("82ea")),c=i("e700"),o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"store-distace-list"},t._l(t.storeListWithDistance,function(e,r){return i("div",{key:e.store_id+"__"+r,staticClass:"store-distance"},[i("router-link",{staticClass:"store-distance__url",attrs:{to:"/"+e.store_url}},[i("div",{staticClass:"store-distance__name ellipsis"},[t._v(t._s(t.getTranslatedName(e)))]),!t.isMissingAddressData&&e.distance?i("div",{staticClass:"store-distance__distance"},[t._v("\n        ("+t._s(e.distance)+" Km)\n      ")]):t._e()])],1)}),0)},l=[],u=(i("28a5"),i("768b")),d=(i("55dd"),i("2f62"));function f(t){return t*(Math.PI/180)}function h(t,e){var i=t.lat,r=t.lng,n=e.lat,a=e.lng,s=6380,c=f(n-i),o=f(a-r),l=Math.sin(c/2)*Math.sin(c/2)+Math.cos(f(i))*Math.cos(f(n))*Math.sin(o/2)*Math.sin(o/2),u=2*Math.atan2(Math.sqrt(l),Math.sqrt(1-l)),d=s*u;return d}var p=i("78cc");function m(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),i.push.apply(i,r)}return i}function g(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?m(i,!0).forEach(function(e){Object(a["a"])(t,e,i[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):m(i).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))})}return t}var v={name:"GridSearchItemStoreDistance",props:{storeList:Array},computed:g({},Object(d["c"])(["searchAnchorPoint","isMissingAddressData"]),{storeListWithDistance:function(){var t=this.calculateStoreDistance,e=this.storeList,i=void 0===e?[]:e;return i.map(function(e){return g({},e,{distance:t(e.geolocation)})}).sort(function(t,e){return t.distance-e.distance})}}),methods:{calculateStoreDistance:function(t){var e=this.searchAnchorPoint,i=this.getCoordinateFromString,r=i(t);if(e)return Math.ceil(10*h(e,r))/10},getCoordinateFromString:function(t){var e=t.replace(/\s/g,"").split(","),i=Object(u["a"])(e,2),r=i[0],n=i[1];return{lat:r,lng:n}},getTranslatedName:function(t){return Object(p["a"])({isStr:t.store_name,enStr:t.en_store_name})}}},y=v,b=(i("da48"),i("2877")),_=Object(b["a"])(y,o,l,!1,null,"75c698ba",null),O=_.exports,w=i("fda7");function C(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),i.push.apply(i,r)}return i}function j(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?C(i,!0).forEach(function(e){Object(a["a"])(t,e,i[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):C(i).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))})}return t}var S={name:"GridSearchItem",components:{BaseButton:s["a"],GridSearchItemStoreDistance:O,ImageViewer:c["a"]},props:{price:Number,name:String,en_name:String,image:String,special_price:String,objectID:String,attribute_set_name:String,stores:Array,url:String,_geoloc:[Array,Object]},computed:{imgRelativeURL:function(){return this.image&&this.image.includes("http")?this.image.replace("https://cdn.aha.is/media/catalog/product/",""):this.image},cloudinaryImage:function(){return this.image&&"no_selection"!==this.image&&-1===this.image.indexOf("no_selection")?new w["a"](this.imgRelativeURL).height(150).toURL():""},parentUrl:function(){var t=this.stores?this.stores[0].store_url:"/404";return t},urlStripped:function(){var t=this.attribute_set_name,e=this.url,i=this.parentUrl,r=e.replace("https://www.aha.is/","");switch(t){case"Store":return"/verslun/".concat(r);case"Store Item":return"/".concat(r);case"Restaurants":return"/veitingar/".concat(r);case"Food":return"/veitingar/".concat(i);case"Aha":return"/tilbod-dagsins/".concat(r);default:return"/404"}},translatedName:function(){return Object(p["a"])({isStr:this.name,enStr:this.en_name})}},methods:j({},Object(d["b"])(["addToCart","stopSearching"]),{addToCart:function(){this.addToCart({product:this.entity_id,super_product:this.parent_product_id})},redirectToUrl:function(){var t=this.url,e=this.stopSearching,i=t.replace("https://www.aha.is/","");this.$route.path==="/".concat(i)&&e()}})},P=S,R=(i("801a"),i("9a95")),k=Object(b["a"])(P,r,n,!1,null,"066a4107",null);"function"===typeof R["default"]&&Object(R["default"])(k);e["default"]=k.exports},aa5d:function(t,e,i){},ab96:function(t,e,i){"use strict";i.r(e);var r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("section",{staticClass:"container"},[i("AisCategoryFilterSimpleURL",{attrs:{baseFilter:"categories.category_id: 5212",store:{name:"Flokkar",entity_id:5212},levels:5,attribute:"categories",rootPath:"Flokkar"},scopedSlots:t._u([{key:"customRender",fn:function(){return[i("div",{staticClass:"container gap view-category"},[i("FilterAndOptions",{attrs:{hideMoreOptions:""}}),i("h2",{key:"categoryName",staticClass:"view-category__page-title"},[t._v("\n          "+t._s(t.categoryName)+"\n        ")])],1)]},proxy:!0}])})],1)},n=[],a=(i("8e6e"),i("ac6a"),i("456d"),i("bd86")),s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.urlPathToCategoryMapping?i("ais-instant-search",{key:t.remountKey,staticClass:"row",attrs:{"index-name":"products","search-client":t.searchClient,routing:t.routing,"search-function":t.searchFunction}},[i("ais-hierarchical-menu",{staticClass:"category-filter category-filter--chip-list card category-filter--sub-cat",attrs:{attributes:t.attributes,limit:10,"class-names":{"ais-HierarchicalMenu-item":"category-filter__item"},"show-more":"","show-more-limit":100,"show-parent-level":!1,"root-path":t.rootPath},scopedSlots:t._u([{key:"default",fn:function(e){var r=e.items,n=e.refine,a=e.createURL;return i("div",{},[i("AisHierarchicalMenuChipListSimpleURL",{attrs:{items:r,refine:t.refineAndScroll(n),createURL:a,name:t.name}})],1)}}])}),t._t("customRender"),i("div",{ref:"categoryFilterModalWrapperRef",staticClass:"category-list__sidebar default col-xs-3"},[i("BaseModal",{staticClass:"category-filter-modal",attrs:{isVisible:!0,clickOutsideToClose:!1,disableBodyScroll:!1},on:{hide:t.hideFilterModal},scopedSlots:t._u([{key:"header",fn:function(){return[t._v(t._s(t.$t("filter")))]},proxy:!0},{key:"footer",fn:function(){return[i("div",{staticClass:"btns-container btns-container--center"},[i("p",{directives:[{name:"show",rawName:"v-show",value:null!==t.counts,expression:"counts !== null"}],staticClass:"category-list__count"},[t._v("\n            "+t._s(t.counts)+" "+t._s(t.$t(1===t.counts?"itemFound":"itemsFound"))+"\n          ")]),i("div",{staticClass:"btn-container-groups"},[i("BaseButton",{staticClass:"tertiary btn--px-20 btn--mx-15",nativeOn:{click:function(e){return t.resetFilter(e)}}},[t._v(t._s(t.$t("resetFilter")))]),i("BaseButton",{staticClass:"primary btn--px-20 btn--mx-15",nativeOn:{click:function(e){return t.hideFilterModal(e)}}},[t._v(t._s(t.$t("showResults")))])],1)])]},proxy:!0}])},[i("div",{staticClass:"category-filter"},[i("div",{staticClass:"accordion",attrs:{id:"filter-accordion"}},[i("div",{staticClass:"card"},[i("div",{staticClass:"collapse in",attrs:{id:"collapseOne","aria-labelledby":"headingOne"}},[i("div",{staticClass:"card-body"},[i("div",{staticClass:"category-list"},[i("ais-configure",{attrs:{filters:t.filters,hitsPerPage:24}}),i("ais-hierarchical-menu",{staticClass:"category-filter card",attrs:{attributes:t.attributes,limit:100,"class-names":{"ais-HierarchicalMenu-item":"category-filter__item"},"show-more-limit":100,showParentLevel:"","root-path":t.rootPath},scopedSlots:t._u([{key:"default",fn:function(e){var r=e.items,n=e.refine,a=e.createURL;return i("div",{},[i("AisHierarchicalMenuListSimpleURL",{attrs:{items:r,refine:t.refineAndScroll(n),createURL:a,name:t.name}})],1)}}])})],1)])])])])])])],1),i("div",{staticClass:"category-list__content col-xs-12 col-sm-9"},[i("AisInfiniteLoading",{staticClass:"row",attrs:{"transform-items":t.transformItems},scopedSlots:t._u([{key:"items",fn:function(e){var r=e.items;return t._l(r,function(e){return i("GridSearchItem",t._b({key:e&&e.objectID,staticClass:"col-xs-6 col-sm-4 col-md-3",attrs:{entity_id:parseInt(e&&e.objectID)}},"GridSearchItem",e,!1))})}}])})],1)],2):i("div",{staticClass:"row"},[t._m(0),i("div",{staticClass:"category-list__content col-xs-12 col-sm-9"},[i("div",{staticClass:"row"},t._l([].concat(Array(12)),function(e,r){return i("grid-grocery-item",t._b({key:r,staticClass:"col-xs-6 col-sm-4 col-md-3"},"grid-grocery-item",e,!1))}),1)])])},c=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"category-list__sidebar category-list__sidebar--app-ph col-xs-3"},[i("div",{staticClass:"category-filter"},[i("div",{staticClass:"app-ph"})])])}],o=i("75fc"),l=(i("28a5"),i("c5f6"),i("bb29")),u=i.n(l),d=i("1881"),f=i("3757"),h=i("a01a"),p=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{class:[0!==t.level&&"category-list__inner","category-list--lv-"+t.level]},t._l(t.items,function(e){return i("ul",{key:e.value},[i("li",{class:["category-filter__item",e.isRefined&&"category-filter__item--refined"]},[e.isRefined?i("i",{staticClass:"icon--arrow-left"}):t._e(),i("router-link",{attrs:{to:t.createURL(e.value),event:""},nativeOn:{click:function(i){t.handleLinkClick({value:e.value,to:t.createURL(e.value)})}}},[t._v(t._s(e.label))]),e.isRefined&&!t.hasData(e)?i("ais-refinement-list",{staticClass:"category-filter__refinement",attrs:{attribute:"brand"}}):t._e(),t.hasData(e)?i("AisHierarchicalMenuListSimpleURL",{attrs:{items:[].concat(e.data),refine:t.refine,createURL:t.createURL,level:t.level+1,name:t.name}}):t._e()],1)])}),0)])},m=[],g=(i("7f7f"),i("2f62")),v=i("6413");function y(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),i.push.apply(i,r)}return i}function b(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?y(i,!0).forEach(function(e){Object(a["a"])(t,e,i[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):y(i).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))})}return t}var _=function(){for(var t=arguments.length,e=new Array(t),i=0;i<t;i++)e[i]=arguments[i];return function(t){return e.reduce(function(t,e){return e(t)},t)}},O=function(t){return t.value.split(" > ")},w=function(t){return t.join(" > ")},C=function(t){return function(e){return e[e.length-t]||""}},j=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return function(e){var i=Object(o["a"])(e);return i.splice(-t,t),i}},S={name:"AisHierarchicalMenuListSimpleURL",mixins:[v["a"]],props:{level:{type:Number,default:0},items:Array,refine:Function,createURL:Function,name:String},methods:b({},Object(g["b"])(["toggleNoResetModal"]),{hasData:function(t){return t.data&&t.data.length},canShow:function(t){return!t.isRefined&&!this.first.isRefined},handleLinkClick:function(t){var e=t.value,i=t.to;this.toggleNoResetModal(!0),this.refine(e),this.$router.push({path:i,hash:"internal"})}}),computed:{isChildRefined:function(){var t=this.first,e=this.hasData;return t.isRefined&&e(t)&&t.data[0].isRefined},isDeadEnd:function(){var t=this.first,e=this.hasData;return t.isRefined&&!e(t)},isInner:function(){return!!this.level},first:function(){return this.items[0]},category:function(){var t=this.level,e=this.name,i=this.first,r=t?_(O,C(2))(i):e,n=_(O,j(),w)(i);return{label:r,value:n}}}},P=S,R=(i("e4b5"),i("2877")),k=Object(R["a"])(P,p,m,!1,null,null,null),M=k.exports,D=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",[i("ul",{staticClass:"category-filter__list"},t._l(t.items,function(e){return i("li",{key:e.value,class:t.classObj(e)},[i("router-link",{attrs:{to:t.createURL(e.value),event:""},nativeOn:{click:function(i){t.handleLinkClick({value:e.value,to:t.createURL(e.value)})}}},[t._v(t._s(e.label))])],1)}),0)])])},I=[],L=i("ec79");function x(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),i.push.apply(i,r)}return i}function A(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?x(i,!0).forEach(function(e){Object(a["a"])(t,e,i[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):x(i).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))})}return t}var F={name:"AisHierarchicalMenuChipListSimpleURL",mixins:[L["a"]],props:{level:{type:Number,default:0},items:Array,refine:Function,createURL:Function,name:String},methods:A({},Object(g["b"])(["toggleNoResetModal"]),{classObj:function(t){return{"category-filter__item":!0,"category-filter__item--selected":t.isRefined}},handleLinkClick:function(t){var e=t.value,i=t.to;this.toggleNoResetModal(!0),this.refine(e),this.$router.push({path:i,hash:"internal"})}})},U=F,N=(i("2333"),Object(R["a"])(U,D,I,!1,null,null,null)),T=N.exports,E=i("82ea"),$=i("73331"),B=i("f23c"),q=i("c1ec"),G=i("935a"),Q=i("d7ba"),H=i("c150");function K(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),i.push.apply(i,r)}return i}function V(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?K(i,!0).forEach(function(e){Object(a["a"])(t,e,i[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):K(i).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))})}return t}var z={name:"AisCategoryFilterSimpleURL",components:{GridSearchItem:h["default"],GridGroceryItem:f["default"],AisHierarchicalMenuListSimpleURL:M,AisHierarchicalMenuChipListSimpleURL:T,BaseButton:E["a"],BaseModal:q["a"],AisInfiniteLoading:H["a"]},props:{store:Object,baseFilter:String,attribute:{type:String,default:"store_categories"},levels:{type:Number,default:3},rootPath:{type:String,default:""},myProductIDs:{type:Array,default:function(){return[]}},isMyProductsFiltered:{type:Boolean,default:!1}},data:function(){var t=this.$router,e=this,i=this.updateRemountKey,r={read:function(){var i=t.currentRoute.path,r=i.split("/"),n="",s=e.urlPathToCategoryMapping,c=e.attribute,l=r.map(function(t){return n+="".concat(n?"/":"").concat(t),Object(B["a"])(s,"".concat(n,".name"))}),u=Object(a["a"])({},"".concat(c,".lvl0"),Object(o["a"])(l).filter(Boolean));return{hierarchicalMenu:u}},write:function(t){},createURL:function(t){var i=t.hierarchicalMenu,r=i?t.hierarchicalMenu["".concat(e.attribute,".lvl0")]:[],n=e.getPathByCategoryNames(r);return"".concat(r.length?"/".concat(n):location.pathname)},onUpdate:function(t){var e=this;this._onPopState=function(r){var n=r.state,a=n;i(),t(a||e.read())},window.addEventListener("popstate",this._onPopState)},dispose:function(){window.removeEventListener("popstate",this._onPopState),this.write()}};return{searchClient:u()("5D97PB00YB","6e6550362dda457bf773b121e6e6acf0"),routing:{router:r,stateMapping:Object(d["a"])("products")},remountKey:void 0}},computed:V({},Object(g["c"])(["urlPathToCategoryMapping","getPathByCategoryNames","getModalVisibilityState","getModalState","counts"]),{isShowFilterModal:function(){return this.getModalVisibilityState(G["c"])},attributes:function(){var t=this;return Object($["a"])(this.levels).map(function(e){return"".concat(t.attribute,".lvl").concat(e)})},name:function(){return Object(B["a"])(this.store,"name","")},id:function(){return Object(B["a"])(this.store,"entity_id","")},filterMyProducts:function(){return this.myProductIDs.length&&this.isMyProductsFiltered?" AND (".concat(this.myProductIDs.map(function(t){return"objectID: ".concat(t)}).join(" OR "),")"):""},filters:function(){return"".concat(this.baseFilter).concat(this.isMyProductsFiltered?"".concat(this.filterMyProducts):"")}}),methods:V({},Object(g["b"])(["hideModal","setCounts"]),{hideFilterModal:function(){this.hideModal(G["c"])},transformItems:function(t){return t.map(function(t){return V({},t,{entity_id:+t.objectID})})},refineAndScroll:function(t){return function(e){setTimeout(function(){return t(e)},100),window.scrollTo(0,0)}},updateRemountKey:function(){this.remountKey=+new Date},resetFilter:function(){var t=this.getModalState(G["c"]),e=t.routerToReset;this.$router.push(e),this.updateRemountKey()},searchFunction:function(t){return Object(Q["a"])({helpers:t})}}),beforeDestroy:function(){this.setCounts(null)},watch:{$route:function(t,e){"#internal"!==t.hash&&this.updateRemountKey()},isShowFilterModal:function(t){this.$refs.categoryFilterModalWrapperRef.style&&(this.$refs.categoryFilterModalWrapperRef.style.visibility=t?"visible":"hidden")}}},W=z,J=(i("996b"),i("c6fa")),Y=Object(R["a"])(W,s,c,!1,null,"513c75c2",null);"function"===typeof J["default"]&&Object(J["default"])(Y);var X=Y.exports,Z=i("4a86");function tt(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),i.push.apply(i,r)}return i}function et(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?tt(i,!0).forEach(function(e){Object(a["a"])(t,e,i[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):tt(i).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))})}return t}var it={name:"ViewCategory",components:{AisCategoryFilterSimpleURL:X,FilterAndOptions:Z["a"]},computed:et({},Object(g["c"])(["urlPathToCategoryMapping"]),{categoryName:function(){var t=this.$route,e=this.urlPathToCategoryMapping,i=Object(B["a"])(t,"path").slice(1);return Object(B["a"])(e,"".concat(i,".name"))}}),methods:et({},Object(g["b"])(["setNavBarTitle"])),mounted:function(){this.setNavBarTitle({en:this.categoryName,is:this.categoryName})},watch:{categoryName:function(t){this.setNavBarTitle({en:t,is:t})}}},rt=it,nt=(i("282f"),Object(R["a"])(rt,r,n,!1,null,"b88e8796",null));e["default"]=nt.exports},c226:function(t,e,i){},c6fa:function(t,e,i){"use strict";var r=i("eac2"),n=i.n(r);e["default"]=n.a},ce0e:function(t,e,i){},da48:function(t,e,i){"use strict";var r=i("58ec"),n=i.n(r);n.a},e4b5:function(t,e,i){"use strict";var r=i("c226"),n=i.n(r);n.a},eac2:function(t,e){t.exports=function(t){t.options.__i18n=t.options.__i18n||[],t.options.__i18n.push('{"is":{"filter":"Filter","showResults":"Show results","resetFilter":"Núllstilla síu","showMore":"Sjá fleiri vörur"},"en":{"filter":"Filter","showResults":"Show results","resetFilter":"Reset filter","showMore":"Show more items"}}'),delete t.options._Ctor}},ebaf:function(t,e,i){},ec62:function(t,e,i){},ec79:function(t,e,i){"use strict";e["a"]={name:"subCategoryCenter",data:function(){return{chipItemActivetimmerId:null}},methods:{scrollToCenterScreen:function(){window.screen.width<768&&(clearTimeout(this.chipItemActivetimmerId),this.chipItemActivetimmerId=setTimeout(function(){var t=document.getElementsByClassName("category-filter__item--selected");t[0]&&t[0].scrollIntoView({behavior:"smooth",inline:"center",block:"center"})},100))}},mounted:function(){window.addEventListener("resize",this.scrollToCenterScreen.bind(this))},updated:function(){this.scrollToCenterScreen()},beforeDestroy:function(){clearTimeout(this.chipItemActivetimmerId),window.removeEventListener("resize",this.scrollToCenterScreen.bind(this))}}},f37e:function(t,e){t.exports=function(t){t.options.__i18n=t.options.__i18n||[],t.options.__i18n.push('{"en":{"inCart":"in cart","add":"Add"},"is":{"inCart":"í körfu","add":"Bæta við"}}'),delete t.options._Ctor}},fda7:function(t,e,i){"use strict";function r(t){return{data:{basePath:"https://images.aha.is/image/upload",imgPath:t||"/b/o/bo_kunarkart.jpg",width:void 0,height:void 0,pad:!1,background:"",dpa:"dpr_auto",trim:"e_trim:10",quality:"q_auto"},width:function(t){return this.data.width=t,this},height:function(t){return this.data.height=t,this},pad:function(t){return this.data.pad=t,this},dpa:function(t){return this.data.dpa=t,this},background:function(t){return this.data.background=t,this},trim:function(t){return this.data.trim=t,this},quality:function(t){return this.data.quality=t,this},toURL:function(){var t=this.data,e=t.basePath,i=t.imgPath,r=t.width,n=t.height,a=t.trim,s=t.quality,c=[r&&"w_".concat(r),n&&"h_".concat(n),s].filter(Boolean);return"".concat(e,"/").concat(a,"/").concat(c.join(","),"/products/").concat(i)}}}i.d(e,"a",function(){return r})}}]);
//# sourceMappingURL=chunk-624a8a94.cd873988.js.map