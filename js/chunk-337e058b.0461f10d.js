(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-337e058b"],{2778:function(t,e){t.exports=function(t){t.options.__i18n=t.options.__i18n||[],t.options.__i18n.push('{"is":{"passwordUpdate":"Breyta lykilorði","currentPassword":"Núverandi lykilorð","saveChange":"Vista"},"en":{"passwordUpdate":"Password Update","currentPassword":"Current password","saveChange":"Save changes"}}'),delete t.options._Ctor}},5538:function(t,e,a){},6207:function(t,e,a){"use strict";var s=a("2778"),r=a.n(s);e["default"]=r.a},6508:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.dataReady?a("div",{staticClass:"account-detail__container"},[a("account-detail-info"),a("account-detail-password")],1):t._e()},r=[],n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"account-detail-info__container account-page"},[a("LoadingWrapper",{attrs:{loadingKeys:[t.LOADING_KEY_FETCHING_ACCOUNT_INFO]}},[a("BaseButton",{staticClass:"tertiary btn--px-20 account-detail-info__logout-btn",nativeOn:{click:function(e){return t.logout(e)}}},[t._v(t._s(t.$t("logout")))]),a("div",{staticClass:"account-page__title"},[a("h2",[t._v(t._s(t.$t("personalDetail")))])]),a("form",{on:{submit:function(e){return e.preventDefault(),t.editCustomer(e)}}},[a("div",{staticClass:"account-detail-info__body"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-xs-12"},[a("div",{staticClass:"account-detail-info__label"},[t._v("\n              "+t._s(t.$t("firstName"))+"\n            ")]),a("div",{staticClass:"account-detail-info__input__container"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.customerInfo.firstname,expression:"customerInfo.firstname"}],staticClass:"account-detail-info__input__text",attrs:{autofocus:"",type:"text",name:"account.firstname",id:"account_firstname"},domProps:{value:t.customerInfo.firstname},on:{input:function(e){e.target.composing||t.$set(t.customerInfo,"firstname",e.target.value)}}})]),t.errorMsg.firstname?a("p",{staticClass:"account-detail-info__error"},[t._v("\n              "+t._s(t.errorMsg.firstname)+"\n            ")]):t._e()])]),a("div",{staticClass:"row row__container"},[a("div",{staticClass:"col-xs-12"},[a("div",{staticClass:"account-detail-info__label"},[t._v(t._s(t.$t("lastName")))]),a("div",{staticClass:"account-detail-info__input__container"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.customerInfo.lastname,expression:"customerInfo.lastname"}],staticClass:"account-detail-info__input__text",attrs:{type:"text",name:"account.lastname",id:"account_lastname"},domProps:{value:t.customerInfo.lastname},on:{input:function(e){e.target.composing||t.$set(t.customerInfo,"lastname",e.target.value)}}})]),t.errorMsg.lastname?a("p",{staticClass:"account-detail-info__error"},[t._v("\n              "+t._s(t.errorMsg.lastname)+"\n            ")]):t._e()])]),a("div",{staticClass:"row row__container"},[a("div",{staticClass:"col-xs-12"},[a("div",{staticClass:"account-detail-info__label"},[t._v(t._s(t.$t("email")))]),a("div",{staticClass:"account-detail-info__input__container"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.customerInfo.email,expression:"customerInfo.email"}],staticClass:"account-detail-info__input__text",attrs:{type:"text",name:"account.email",id:"account_email"},domProps:{value:t.customerInfo.email},on:{input:function(e){e.target.composing||t.$set(t.customerInfo,"email",e.target.value)}}})]),t.errorMsg.email?a("p",{staticClass:"account-detail-info__error"},[t._v("\n              "+t._s(t.errorMsg.email)+"\n            ")]):t._e()])])]),a("div",{staticClass:"row row__container"},[a("div",{staticClass:"col-xs-12"},[a("div",{staticClass:"account-detail-info__label"},[t._v("\n            "+t._s(t.$t("socialSecurityNumber"))+"\n          ")]),a("div",{staticClass:"account-detail-info__input__container"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.customerInfo.nationid,expression:"customerInfo.nationid"}],staticClass:"account-detail-info__input__text",attrs:{type:"number",name:"account.social-security-number",id:"account_social-security-number"},domProps:{value:t.customerInfo.nationid},on:{input:function(e){e.target.composing||t.$set(t.customerInfo,"nationid",e.target.value)}}})])])]),a("div",{staticClass:"account-detail-info__footer"},[a("div",{staticClass:"account-detail-info__btn--save__wrap"},[a("base-button",{staticClass:"primary btn btn--rounded btn-block",attrs:{type:"submit"}},[t._v(t._s(t.$t("saveChange")))])],1)])])],1)],1)},o=[],i=(a("8e6e"),a("ac6a"),a("456d"),a("96cf"),a("3b8d")),c=a("bd86"),u=a("2f62"),d=a("9225"),l=a("82ea"),p=a("022f"),_=a("9505"),m=a("b508");a("4917");function f(t){if(t)return t.match(/\w+@\w+\.\w+/g)}var v=a("f23c");function w(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),a.push.apply(a,s)}return a}function g(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?w(a,!0).forEach(function(e){Object(c["a"])(t,e,a[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):w(a).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))})}return t}var b={name:"AccountDetailInfo",components:{BaseButton:l["a"],LoadingWrapper:p["a"]},data:function(){return{errorMsg:{},LOADING_KEY_FETCHING_ACCOUNT_INFO:_["h"]}},computed:g({},Object(u["c"])(["customerInfo","shippingAddress"])),methods:g({},Object(u["b"])(["notification","logout","toggleLoading"]),{validateCustomer:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=t.firstname,s=t.lastname,r=t.email;return e.firstname=d["a"].t(a?"":"error.invalidTxt"),e.lastname=d["a"].t(s?"":"error.invalidTxt"),e.email=d["a"].t(r?f(r)?"":"error.invalidEmail":"error.invalidTxt"),this.errorMsg=e,!(e.firstname||e.lastname||e.email)},editCustomer:function(){var t=Object(i["a"])(regeneratorRuntime.mark(function t(){var e,a,s,r,n,o,i,c,u,d,l;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(e=this.validateCustomer,a=this.customerInfo,s=this.shippingAddress,r=this.notification,n=this.toggleLoading,!e(a)){t.next=15;break}return o=a.firstname,i=a.lastname,c=a.email,u=a.nationid,d={firstname:o,lastname:i,email:c,nationid:u,shipping_address_id:s.customer_address_id,change_password:"0"},t.prev=4,n({loadingKey:_["h"],isLoading:!0}),t.next=8,Object(m["g"])(d);case 8:l=t.sent,l&&(n({loadingKey:_["h"],isLoading:!1}),r({type:l.status,message:Object(v["a"])(l,"data.errors.0",l.message)})),t.next=15;break;case 12:t.prev=12,t.t0=t["catch"](4),r({type:"error",message:Object(v["a"])(t.t0,"response.data.messages.error.0.message",t.t0.message)});case 15:case"end":return t.stop()}},t,this,[[4,12]])}));function e(){return t.apply(this,arguments)}return e}()})},C=b,P=(a("c47f"),a("2877")),h=a("d1a6"),y=Object(P["a"])(C,n,o,!1,null,"05694668",null);"function"===typeof h["default"]&&Object(h["default"])(y);var O=y.exports,x=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"account-detail-password__container"},[a("LoadingWrapper",{attrs:{loadingKeys:[t.LOADING_KEY_FETCHING_ACCOUNT_PASSWORD]}},[a("div",{staticClass:"account-detail-password__header"},[a("h2",{staticClass:"account-detail-password__header__title"},[t._v("\n        "+t._s(t.$t("passwordUpdate"))+"\n      ")])]),a("form",{on:{submit:function(e){return e.preventDefault(),t.changePassword(e)}}},[a("div",{staticClass:"account-detail-password__body"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-xs-12"},[a("div",{staticClass:"account-detail-password__label"},[t._v("\n              "+t._s(t.$t("currentPassword"))+"\n            ")]),a("div",{staticClass:"account-detail-password__input__container"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.customer.password,expression:"customer.password"}],staticClass:"account-detail-password__input__text",attrs:{type:"password",name:"account.password",id:"account_password",autocomplete:"current-password"},domProps:{value:t.customer.password},on:{input:function(e){e.target.composing||t.$set(t.customer,"password",e.target.value)}}})]),t.errorMsg.password?a("p",{staticClass:"account-detail-password__error"},[t._v("\n              "+t._s(t.errorMsg.password)+"\n            ")]):t._e()])]),a("div",{staticClass:"row row__container"},[a("div",{staticClass:"col-xs-12"},[a("div",{staticClass:"account-detail-password__label"},[t._v("\n              "+t._s(t.$t("newPassword"))+"\n            ")]),a("div",{staticClass:"account-detail-password__input__container"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.customer.newPassword,expression:"customer.newPassword"}],staticClass:"account-detail-password__input__text",attrs:{type:"password",name:"account.newPassword",id:"account_newPassword",autocomplete:"new-password"},domProps:{value:t.customer.newPassword},on:{input:function(e){e.target.composing||t.$set(t.customer,"newPassword",e.target.value)}}})]),t.errorMsg.newPassword?a("p",{staticClass:"account-detail-password__error"},[t._v("\n              "+t._s(t.errorMsg.newPassword)+"\n            ")]):t._e()])]),a("div",{staticClass:"row row__container"},[a("div",{staticClass:"col-xs-12"},[a("div",{staticClass:"account-detail-password__label"},[t._v("\n              "+t._s(t.$t("confirmPassword"))+"\n            ")]),a("div",{staticClass:"account-detail-password__input__container"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.customer.confirmPassword,expression:"customer.confirmPassword"}],staticClass:"account-detail-password__input__text",attrs:{type:"password",name:"account.confirmPassword",id:"account_confirmPassword",autocomplete:"confirm-password"},domProps:{value:t.customer.confirmPassword},on:{input:function(e){e.target.composing||t.$set(t.customer,"confirmPassword",e.target.value)}}})]),t.errorMsg.confirmPassword?a("p",{staticClass:"account-detail-password__error"},[t._v("\n              "+t._s(t.errorMsg.confirmPassword)+"\n            ")]):t._e()])])]),a("div",{staticClass:"account-detail-password__footer"},[a("div",{staticClass:"account-detail-password__btn--save__wrap"},[a("base-button",{staticClass:"primary btn btn--rounded btn-block",attrs:{type:"submit"}},[t._v(t._s(t.$t("saveChange")))])],1)])])])],1)},j=[];function N(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),a.push.apply(a,s)}return a}function I(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?N(a,!0).forEach(function(e){Object(c["a"])(t,e,a[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):N(a).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))})}return t}var D={name:"AccountDetailPassword",components:{BaseButton:l["a"],LoadingWrapper:p["a"]},data:function(){return{customer:{password:"",newPassword:"",confirmPassword:""},errorMsg:{},LOADING_KEY_FETCHING_ACCOUNT_PASSWORD:_["i"]}},methods:I({},Object(u["b"])(["notification","toggleLoading"]),{validatePassword:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=t.password,s=t.newPassword,r=t.confirmPassword;return e.password=d["a"].t(a?"":"error.invalidTxt"),""===s&&""===r?(e.newPassword=d["a"].t("error.invalidTxt"),e.confirmPassword=d["a"].t("error.invalidTxt")):""===s&&r?e.newPassword=d["a"].t("error.invalidTxt"):s&&""===r?e.confirmPassword=d["a"].t("error.invalidTxt"):s!==r&&(e.confirmPassword=d["a"].t("error.dulicatePassword")),this.errorMsg=e,!(e.password||e.newPassword||e.confirmPassword)},changePassword:function(){var t=Object(i["a"])(regeneratorRuntime.mark(function t(){var e,a,s,r,n,o,i,c;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(e=this.validatePassword,a=this.customer,s=this.notification,r=this.toggleLoading,!e(a)){t.next=15;break}return n=a.password,o=a.newPassword,i={change_password:"1",current_password:n,password:o},t.prev=4,r({loadingKey:_["i"],isLoading:!0}),t.next=8,Object(m["g"])(i);case 8:c=t.sent,c&&(r({loadingKey:_["i"],isLoading:!1}),s({type:c.status,message:Object(v["a"])(c,"data.errors.0",c.message)})),t.next=15;break;case 12:t.prev=12,t.t0=t["catch"](4),s({type:"error",message:Object(v["a"])(t.t0,"response.data.messages.error.0.message",t.t0.message)});case 15:case"end":return t.stop()}},t,this,[[4,12]])}));function e(){return t.apply(this,arguments)}return e}()})},$=D,E=(a("6b23"),a("6207")),L=Object(P["a"])($,x,j,!1,null,"395dc8e1",null);"function"===typeof E["default"]&&Object(E["default"])(L);var k=L.exports,A={name:"ViewMyAccountDetail",components:{AccountDetailInfo:O,AccountDetailPassword:k},computed:{dataReady:function(){return this.$store.state.customer}}},M=A,T=Object(P["a"])(M,s,r,!1,null,null,null);e["default"]=T.exports},"6b23":function(t,e,a){"use strict";var s=a("6ed8"),r=a.n(s);r.a},"6ed8":function(t,e,a){},c47f:function(t,e,a){"use strict";var s=a("5538"),r=a.n(s);r.a},c8fe:function(t,e){t.exports=function(t){t.options.__i18n=t.options.__i18n||[],t.options.__i18n.push('{"is":{"personalDetail":"Um mig","firstName":"Fornafn","lastName":"Eftirnafn","email":"Netfang","socialSecurityNumber":"Kennitala (þarf eingöngu ef greiða á með millifærslu)","saveChange":"Vista","logout":"Skrá út"},"en":{"personalDetail":"Personal Details","firstName":"First name","lastName":"Last name","email":"Email","socialSecurityNumber":"Social security number (required only if transfer is required)","saveChange":"Save changes","logout":"Log out"}}'),delete t.options._Ctor}},d1a6:function(t,e,a){"use strict";var s=a("c8fe"),r=a.n(s);e["default"]=r.a}}]);
//# sourceMappingURL=chunk-337e058b.0461f10d.js.map