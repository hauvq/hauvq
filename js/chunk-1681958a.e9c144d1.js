(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1681958a"],{"222d":function(t,e,r){"use strict";r.r(e);var s=function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.isReady?r("div",{staticClass:"print-page__wrapper",attrs:{id:"print-page"}},[t._m(0),r("div",{staticClass:"print-page__header"},[r("div",{staticClass:"print-page__header-info"},[r("h1",{staticClass:"print-page__header-title"},[t._v("\n        "+t._s(t.$t("orderTitle"))+t._s(" #"+t.ordersInfo.mainOrderIncId)+"\n      ")])]),r("div",{staticClass:"print-page__header-order-date"},[t._v("\n      "+t._s(t.$t("orderDate"))+": "+t._s(t._f("formatDateTime")(t.ordersInfo.orderDate))+"\n    ")])]),r("OrdersDetailInformation",{attrs:{billingAddress:t.billingAddress,paymentInfo:t.paymentInfo}}),r("OrdersDetailSubOrders",{attrs:{subOrders:t.subOrders}}),t.ordersDetailProps.isInvoices?t._e():r("OrdersDetailSummary",{attrs:{ordersSummary:t.ordersSummary}})],1):t._e()},a=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"print-head"},[s("img",{staticClass:"logo",attrs:{src:r("a5f7"),alt:"aha logo"}}),s("address",[t._v("\n      Netgengið ehf.\n      "),s("br"),t._v("Skútuvogi 12A "),s("br"),t._v("104 Reykjavík "),s("br"),t._v("KT: 650311-1160 "),s("br"),t._v("VSK:\n      107580\n    ")])])}],i=(r("8e6e"),r("ac6a"),r("456d"),r("bd86")),n=r("2f62"),d=r("4499"),o=r("2bd0"),l=r("97f1"),c=r("bfc0");function _(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),r.push.apply(r,s)}return r}function u(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?_(r,!0).forEach(function(e){Object(i["a"])(t,e,r[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):_(r).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))})}return t}var b={name:"ViewPrintOrders",components:{OrdersDetailInformation:d["a"],OrdersDetailSubOrders:o["a"],OrdersDetailSummary:l["a"]},data:function(){return{isReady:!1,orderId:void 0,ordersInfo:void 0,billingAddress:void 0,paymentInfo:void 0,subOrders:void 0,ordersSummary:void 0}},computed:u({},Object(n["c"])(["printData"]),{ordersDetailProps:function(){return{subPath:"",isInvoices:!1}}}),methods:{statusColor:function(t){return Object(c["a"])(t)}},mounted:function(){var t=this.printData;if(t){var e=t.orderId,r=t.ordersInfo,s=t.billingAddress,a=t.paymentInfo,i=t.subOrders,n=t.ordersSummary;this.orderId=e,this.ordersInfo=r,this.billingAddress=s,this.paymentInfo=a,this.subOrders=i,this.ordersSummary=n,this.isReady=!0,window.print()}}},f=b,v=(r("ef5c"),r("2877")),m=Object(v["a"])(f,s,a,!1,null,"e7606572",null);e["default"]=m.exports},2847:function(t,e){t.exports=function(t){t.options.__i18n=t.options.__i18n||[],t.options.__i18n.push('{"is":{"billingAddress":"Heimilisfang","paymentMethod":"Greiðslumáti","printOrder":"Prenta pöntun","creditCardType":"Tegund korts: ","creditCardNumber":"Kortanúmer: "},"en":{"billingAddress":"Billing address","paymentMethod":"Payment method","printOrder":"Print Order","creditCardType":"Credit Card Type: ","creditCardNumber":"Credit Card Number: "}}'),delete t.options._Ctor}},"2bd0":function(t,e,r){"use strict";var s=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"orders-detail-suborders__container"},t._l(t.orderedStores,function(e,s){return r("div",{key:s},[t.isInvoices||!t.isInvoices&&0===s?r("div",{staticClass:"orders-detail-suborders__title-text-container"},[r("h1",{staticClass:"orders-detail-suborders__title-text"},[t._v(t._s(t.$t("itemsOrdered")))]),t.isInvoices?r("div",{staticClass:"orders-detail-suborders__tile-print",on:{click:t.printOrder}},[t._v("\n        "+t._s(t.$t("printReceipt"))+"\n      ")]):t._e()]):t._e(),r("div",{staticClass:"orders-detail-suborders__content"},[r("div",{staticClass:"orders-detail-suborders__content-header"},[r("div",{staticClass:"orders-detail-suborders__content-header-left"},[r("div",{staticClass:"orders-detail-suborders__content-header-title"},[t._v(t._s(e.store))]),r("div",{class:["orders-detail-suborders__status","color__status--"+t.statusColor(e.order_status)]},[t._v("\n            "+t._s(e.order_status)+"\n          ")])]),r("div",{staticClass:"orders-detail-suborders__content-header-right"},[t._v("\n          "+t._s(t.$t("referenceNumber"))+": \n          "+t._s("#"+e.order_ref_number)+"\n        ")])]),r("div",{staticClass:"orders-detail-suborders__content-body"},[r("table",{staticClass:"orders-detail-suborders__table",attrs:{id:"my-orders-table"}},[r("thead",[r("tr",{staticClass:"orders-detail-suborders__table-tr"},[r("th",{staticClass:"orders-detail-suborders__table-th left"},[t._v(t._s(t.$t("productName")))]),r("th",{staticClass:"orders-detail-suborders__table-th"},[t._v(t._s(t.$t("price")))]),r("th",{staticClass:"orders-detail-suborders__table-th"},[t._v(t._s(t.$t("quantity")))]),r("th",{staticClass:"orders-detail-suborders__table-th"},[t._v(t._s(t.$t("subTotal")))])])]),r("tbody",t._l(Object.values(e.items),function(e){return r("tr",{key:e.item_id,staticClass:"orders-detail-suborders__table-tr"},[r("td",{staticClass:"orders-detail-suborders__table-th left"},[r("div",{staticClass:"orders-detail-suborders__table-th-name"},[t._v(t._s(e.name))]),r("div",{staticClass:"orders-detail-suborders__table-th-sku"},[t._v(t._s(e.sku))])]),r("td",{staticClass:"orders-detail-suborders__table-th"},[t._v(t._s(t._f("formatISK")(+e.price)))]),r("td",{staticClass:"orders-detail-suborders__table-th"},[r("strong",[t._v(t._s(parseInt(e.qty_ordered)))])]),r("td",{staticClass:"orders-detail-suborders__table-th"},[t._v(t._s(t._f("formatISK")(+e.row_total_incl_tax)))])])}),0)])])])])}),0)},a=[],i=(r("ac6a"),r("8615"),r("bfc0")),n={name:"OrdersDetailSubOrders",props:{subOrders:Object,subPath:String,isInvoices:Boolean},computed:{orderedStores:function(){return Object.values(this.subOrders)}},methods:{statusColor:function(t){return Object(i["a"])(t)},printOrder:function(){}}},d=n,o=(r("a003"),r("2877")),l=Object(o["a"])(d,s,a,!1,null,"1a153bb1",null);e["a"]=l.exports},4499:function(t,e,r){"use strict";var s=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"orders-detail-info__container"},[r("div",{staticClass:"orders-detail-info__billing-address"},[r("h3",{staticClass:"orders-detail-info__billing-address-title"},[t._v("\n      "+t._s(t.$t("billingAddress"))+"\n    ")]),r("div",{staticClass:"orders-detail-info__billing-address-content"},[t._v("\n      "+t._s(t.fullName)+"\n    ")]),r("div",{staticClass:"orders-detail-info__billing-address-content"},[t._v("\n      "+t._s(t.street)+"\n    ")]),r("div",{staticClass:"orders-detail-info__billing-address-content"},[t._v("\n      "+t._s(t.address)+"\n    ")]),r("div",{staticClass:"orders-detail-info__billing-address-content"},[t._v("\n      "+t._s(t.countryName)+"\n    ")]),r("div",{staticClass:"orders-detail-info__billing-address-content"},[t._v("\n      "+t._s(t.phoneNumber)+"\n    ")])]),r("div",{staticClass:"orders-detail-info__payment-info"},[r("h3",{staticClass:"orders-detail-info__billing-address-title"},[t._v("\n      "+t._s(t.$t("paymentMethod"))+"\n    ")]),r("div",{staticClass:"orders-detail-info__billing-address-content bold"},[t._v("\n      "+t._s(t.paymentInfo.title)+"\n    ")]),t.creditCardType?r("div",{staticClass:"orders-detail-info__billing-address-content"},[r("span",{attrs:{id:"card-title"}},[t._v(t._s(t.$t("creditCardType")))]),r("span",{attrs:{id:"card-value"}},[t._v(t._s(t.creditCardType))])]):t._e(),t.creditCardNumber?r("div",{staticClass:"orders-detail-info__billing-address-content"},[r("span",{attrs:{id:"card-title"}},[t._v(t._s(t.$t("creditCardNumber")))]),r("span",{attrs:{id:"card-value"}},[t._v(t._s(t.creditCardNumber))])]):t._e(),t.isInvoices?r("div",{staticClass:"orders-detail-info__billing-address-print",on:{click:t.printOrder}},[t._v("\n      "+t._s(t.$t("printOrder"))+"\n    ")]):t._e()])])},a=[],i=(r("ac6a"),r("8615"),r("f23c")),n=r("1503"),d={name:"OrdersDetailInformation",props:{billingAddress:Object,paymentInfo:Object,subPath:String,isInvoices:Boolean},computed:{fullName:function(){var t=this.billingAddress,e=t.firstname,r=t.lastname,s="";return e&&r&&(s="".concat(e," ").concat(r)),s},street:function(){return"".concat(Object(i["a"])(this.billingAddress,"street",""))},address:function(){var t=this.billingAddress,e=t.city,r=t.postcode,s="";return e&&r&&(s="".concat(e,", ").concat(r)),s},countryName:function(){var t=Object(i["a"])(this.billingAddress,"country_id");return t?Object(i["a"])(n["c"],"".concat(t.toLowerCase()),"Unknow"):""},phoneNumber:function(){var t=Object(i["a"])(this.billingAddress,"telephone");return t?"T: ".concat(t.charAt()?t.substring(4,t.length):t):""},creditCardType:function(){var t=Object(i["a"])(this.paymentInfo,"additional");return t?Object.values(t[0])[0]:""},creditCardNumber:function(){var t=Object(i["a"])(this.paymentInfo,"additional");return t?Object.values(t[1])[0]:""}},methods:{printOrder:function(){}}},o=d,l=(r("e3ea"),r("2877")),c=r("a1db"),_=Object(l["a"])(o,s,a,!1,null,"218ba960",null);"function"===typeof c["default"]&&Object(c["default"])(_);e["a"]=_.exports},51687:function(t,e,r){},"79e7":function(t,e,r){},"97f1":function(t,e,r){"use strict";var s=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"orders-detail-summary__container"},[r("div",{staticClass:"orders-detail-summary__title"},[t._v(t._s(t.$t("orderSummary")))]),r("div",{staticClass:"orders-detail-summary__content"},[r("table",{staticClass:"orders-detail-summary__table",attrs:{border:"1"}},[r("tbody",[r("tr",{staticClass:"orders-detail-summary__table-tr"},[r("td",{staticClass:"orders-detail-summary__table-label"},[t._v(t._s(t.$t("subTotal")))]),r("td",{staticClass:"orders-detail-summary__table-content"},[t._v(t._s(t._f("formatISK")(+t.ordersSummary.subtotal)))])]),r("tr",{staticClass:"orders-detail-summary__table-tr"},[r("td",{staticClass:"orders-detail-summary__table-label"},[t._v(t._s(t.$t("grandTotal")))]),r("td",{staticClass:"orders-detail-summary__table-content"},[t._v(t._s(t._f("formatISK")(+t.ordersSummary.grand_total)))])])])])])])},a=[],i={name:"OrdersDetailSummary",props:{ordersSummary:Object,subPath:String}},n=i,d=(r("e9ba"),r("2877")),o=Object(d["a"])(n,s,a,!1,null,"0dbeea18",null);e["a"]=o.exports},a003:function(t,e,r){"use strict";var s=r("51687"),a=r.n(s);a.a},a1db:function(t,e,r){"use strict";var s=r("2847"),a=r.n(s);e["default"]=a.a},a5f7:function(t,e,r){t.exports=r.p+"img/logo.c4a7b4a8.svg"},a718:function(t,e,r){},bfc0:function(t,e,r){"use strict";r("7f7f"),r("7514");var s=[{name:"Tilbúið",value:"ready"},{name:"Staðfest",value:"complete"},{name:"Í vinnslu",value:"processing"},{name:"Lokið",value:"closed"},{name:"Afhent",value:"delivered"},{name:"Hætt við",value:"canceled"}],a=s,i=r("f23c");function n(t){var e=a.find(function(e){var r=e.name;return r===t});return Object(i["a"])(e,"value","")}r.d(e,"a",function(){return n})},cfc4:function(t,e,r){},e3ea:function(t,e,r){"use strict";var s=r("cfc4"),a=r.n(s);a.a},e9ba:function(t,e,r){"use strict";var s=r("a718"),a=r.n(s);a.a},ef5c:function(t,e,r){"use strict";var s=r("79e7"),a=r.n(s);a.a}}]);
//# sourceMappingURL=chunk-1681958a.e9c144d1.js.map