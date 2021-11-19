(window.webpackJsonp=window.webpackJsonp||[]).push([[16,5,14],{333:function(t,e,r){var n=r(10),o=r(148);t.exports=n?o:function(t){return Set.prototype.values.call(t)}},334:function(t,e,r){"use strict";r.r(e);r(13);var n={methods:{onImageLoadError:function(){this.imageLoadError=!0}},computed:{imageURL:function(){var t="https://ui-avatars.com/api/?uppercase=false&background=212324&color=4f46e5&rounded=true&name=".concat(this.name);return!this.photoURL||this.imageLoadError?t:this.photoURL}},data:function(){return{imageLoadError:!1}},props:{name:{type:String},photoURL:{type:String,required:!1}}},o=r(5),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("img",{attrs:{src:t.imageURL,alt:"user photo"},on:{error:t.onImageLoadError}})}),[],!1,null,null,null);e.default=component.exports},337:function(t,e,r){"use strict";r.r(e);var n={props:{post:{type:Object}}},o=r(5),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("nuxt-link",{staticClass:"flex transition duration-700 ease-in-out transform hover:translate-y-0.5 hover:scale-105 flex-col rounded-xl shadow-lg overflow-hidden",attrs:{to:t.localePath("/projects/"+t.post.slug)}},[t.post.image?r("div",{staticClass:"hidden sm:flex flex-shrink-0 bg-gray-900"},[r("img",{staticClass:"h-36 w-full object-cover",attrs:{src:t.post.image,alt:"Blog Image"}})]):t._e(),t._v(" "),r("div",{staticClass:"flex-1 bg-gray-900 p-5 flex flex-col justify-between"},[r("div",{staticClass:"flex-1"},[r("p",{staticClass:"text-xs font-medium text-hot-pink hover:text-hot-pink"},t._l(t.post.category,(function(e){return r("a",{key:e.name,staticClass:"hover:underline hover:text-hot-pink",attrs:{href:"#"}},[t._v("\n            "+t._s(e.name)+"\n          ")])})),0),t._v(" "),r("div",[r("h3",{staticClass:"mt-0.5 text-md leading-7 font-semibold text-gray-200"},[t._v("\n            "+t._s(t.post.title)+"\n          ")]),t._v(" "),r("p",{staticClass:"mt-2 text-xs text-gray-400"},[t._v("\n            "+t._s(t.post.description)+"\n          ")])])]),t._v(" "),r("div",{staticClass:"mt-2 flex items-center"},[r("div",{staticClass:"flex-shrink-0"},[r("a",{attrs:{target:"_blank",rel:"noreferrer",href:"https://twitter.com/"+t.post.author.twitter}},[r("UserAvatar",{staticClass:"h-9 w-9 rounded-full",attrs:{name:t.post.author.name,"photo-u-r-l":t.post.author.image}})],1)]),t._v(" "),r("div",{staticClass:"ml-3"},[r("p",{staticClass:"text-xs font-medium text-gray-200"},[r("a",{staticClass:"hover:text-indigo-600",attrs:{target:"_blank",rel:"noreferrer",href:"https://twitter.com/"+t.post.author.twitter}},[t._v("\n              "+t._s(t.post.author.name)+"\n            ")])]),t._v(" "),r("div",{staticClass:"flex text-xs text-gray-300"},[r("time",{attrs:{datetime:t.post.createdAt}},[t._v("\n              "+t._s(new Date(t.post.createdAt).toLocaleDateString("en-US",{year:"numeric",month:"short",day:"numeric"}))+"\n            ")]),t._v(" "),r("span",{staticClass:"mx-1"},[t._v("\n              ·\n            ")]),t._v(" "),r("span",[t._v("\n              "+t._s(t.post.readingTime)+"\n            ")])])])])])])}),[],!1,null,"f2a89800",null);e.default=component.exports;installComponents(component,{UserAvatar:r(334).default})},341:function(t,e,r){"use strict";var n=r(229),o=r(230);t.exports=n("Set",(function(t){return function(){return t(this,arguments.length?arguments[0]:void 0)}}),o)},342:function(t,e,r){"use strict";var n=r(2),o=r(10),c=r(343);n({target:"Set",proto:!0,real:!0,forced:o},{addAll:function(){return c.apply(this,arguments)}})},343:function(t,e,r){"use strict";var n=r(4),o=r(38);t.exports=function(){for(var t=n(this),e=o(t.add),r=0,c=arguments.length;r<c;r++)e.call(t,arguments[r]);return t}},344:function(t,e,r){"use strict";var n=r(2),o=r(10),c=r(231);n({target:"Set",proto:!0,real:!0,forced:o},{deleteAll:function(){return c.apply(this,arguments)}})},345:function(t,e,r){"use strict";var n=r(2),o=r(10),c=r(39),l=r(4),f=r(38),d=r(60),v=r(24);n({target:"Set",proto:!0,real:!0,forced:o},{difference:function(t){var e=l(this),r=new(d(e,c("Set")))(e),n=f(r.delete);return v(t,(function(t){n.call(r,t)})),r}})},346:function(t,e,r){"use strict";var n=r(2),o=r(10),c=r(4),l=r(26),f=r(333),d=r(24);n({target:"Set",proto:!0,real:!0,forced:o},{every:function(t){var e=c(this),r=f(e),n=l(t,arguments.length>1?arguments[1]:void 0,3);return!d(r,(function(t,r){if(!n(t,t,e))return r()}),{IS_ITERATOR:!0,INTERRUPTED:!0}).stopped}})},347:function(t,e,r){"use strict";var n=r(2),o=r(10),c=r(39),l=r(4),f=r(38),d=r(26),v=r(60),h=r(333),m=r(24);n({target:"Set",proto:!0,real:!0,forced:o},{filter:function(t){var e=l(this),r=h(e),n=d(t,arguments.length>1?arguments[1]:void 0,3),o=new(v(e,c("Set"))),x=f(o.add);return m(r,(function(t){n(t,t,e)&&x.call(o,t)}),{IS_ITERATOR:!0}),o}})},348:function(t,e,r){"use strict";var n=r(2),o=r(10),c=r(4),l=r(26),f=r(333),d=r(24);n({target:"Set",proto:!0,real:!0,forced:o},{find:function(t){var e=c(this),r=f(e),n=l(t,arguments.length>1?arguments[1]:void 0,3);return d(r,(function(t,r){if(n(t,t,e))return r(t)}),{IS_ITERATOR:!0,INTERRUPTED:!0}).result}})},349:function(t,e,r){"use strict";var n=r(2),o=r(10),c=r(39),l=r(4),f=r(38),d=r(60),v=r(24);n({target:"Set",proto:!0,real:!0,forced:o},{intersection:function(t){var e=l(this),r=new(d(e,c("Set"))),n=f(e.has),o=f(r.add);return v(t,(function(t){n.call(e,t)&&o.call(r,t)})),r}})},350:function(t,e,r){"use strict";var n=r(2),o=r(10),c=r(4),l=r(38),f=r(24);n({target:"Set",proto:!0,real:!0,forced:o},{isDisjointFrom:function(t){var e=c(this),r=l(e.has);return!f(t,(function(t,n){if(!0===r.call(e,t))return n()}),{INTERRUPTED:!0}).stopped}})},351:function(t,e,r){"use strict";var n=r(2),o=r(10),c=r(39),l=r(4),f=r(38),d=r(148),v=r(24);n({target:"Set",proto:!0,real:!0,forced:o},{isSubsetOf:function(t){var e=d(this),r=l(t),n=r.has;return"function"!=typeof n&&(r=new(c("Set"))(t),n=f(r.has)),!v(e,(function(t,e){if(!1===n.call(r,t))return e()}),{IS_ITERATOR:!0,INTERRUPTED:!0}).stopped}})},352:function(t,e,r){"use strict";var n=r(2),o=r(10),c=r(4),l=r(38),f=r(24);n({target:"Set",proto:!0,real:!0,forced:o},{isSupersetOf:function(t){var e=c(this),r=l(e.has);return!f(t,(function(t,n){if(!1===r.call(e,t))return n()}),{INTERRUPTED:!0}).stopped}})},353:function(t,e,r){"use strict";var n=r(2),o=r(10),c=r(4),l=r(333),f=r(24);n({target:"Set",proto:!0,real:!0,forced:o},{join:function(t){var e=c(this),r=l(e),n=void 0===t?",":String(t),o=[];return f(r,o.push,{that:o,IS_ITERATOR:!0}),o.join(n)}})},354:function(t,e,r){"use strict";var n=r(2),o=r(10),c=r(39),l=r(4),f=r(38),d=r(26),v=r(60),h=r(333),m=r(24);n({target:"Set",proto:!0,real:!0,forced:o},{map:function(t){var e=l(this),r=h(e),n=d(t,arguments.length>1?arguments[1]:void 0,3),o=new(v(e,c("Set"))),x=f(o.add);return m(r,(function(t){x.call(o,n(t,t,e))}),{IS_ITERATOR:!0}),o}})},355:function(t,e,r){"use strict";var n=r(2),o=r(10),c=r(4),l=r(38),f=r(333),d=r(24);n({target:"Set",proto:!0,real:!0,forced:o},{reduce:function(t){var e=c(this),r=f(e),n=arguments.length<2,o=n?void 0:arguments[1];if(l(t),d(r,(function(r){n?(n=!1,o=r):o=t(o,r,r,e)}),{IS_ITERATOR:!0}),n)throw TypeError("Reduce of empty set with no initial value");return o}})},356:function(t,e,r){"use strict";var n=r(2),o=r(10),c=r(4),l=r(26),f=r(333),d=r(24);n({target:"Set",proto:!0,real:!0,forced:o},{some:function(t){var e=c(this),r=f(e),n=l(t,arguments.length>1?arguments[1]:void 0,3);return d(r,(function(t,r){if(n(t,t,e))return r()}),{IS_ITERATOR:!0,INTERRUPTED:!0}).stopped}})},357:function(t,e,r){"use strict";var n=r(2),o=r(10),c=r(39),l=r(4),f=r(38),d=r(60),v=r(24);n({target:"Set",proto:!0,real:!0,forced:o},{symmetricDifference:function(t){var e=l(this),r=new(d(e,c("Set")))(e),n=f(r.delete),o=f(r.add);return v(t,(function(t){n.call(r,t)||o.call(r,t)})),r}})},358:function(t,e,r){"use strict";var n=r(2),o=r(10),c=r(39),l=r(4),f=r(38),d=r(60),v=r(24);n({target:"Set",proto:!0,real:!0,forced:o},{union:function(t){var e=l(this),r=new(d(e,c("Set")))(e);return v(t,f(r.add),{that:r}),r}})},413:function(t,e,r){"use strict";r.r(e);var n=r(3),o=r(62),c=(r(21),r(56),r(9),r(341),r(14),r(342),r(344),r(345),r(346),r(347),r(348),r(349),r(350),r(351),r(352),r(353),r(354),r(355),r(356),r(357),r(358),r(17),r(43),r(33),r(13),"all"),l={computed:{categories:function(){return[c].concat(Object(o.a)(new Set(this.posts.map((function(t){return t.category})))))},postsByCategories:function(){var t=this;return this.currentCategory===c?this.posts:this.posts.filter((function(e){return e.category===t.currentCategory}))}},data:function(){return{currentCategory:c,ALL:c}},head:function(){return{title:"blog -- ".concat(this.$config.name)}},asyncData:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.$content,n="fetchAllPosts",console.time(n),e.next=5,r("posts").without(["body","toc","dir","extension","path","tags"]).sortBy("createdAt","desc").fetch();case 5:return o=e.sent,console.timeEnd(n),e.abrupt("return",{posts:o});case 8:case"end":return e.stop()}}),e)})))()}},f=r(5),component=Object(f.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"relative max-w-7xl border-r border-l border-dashed border-gray-700 py-6 mx-auto"},[r("div",{staticClass:"text-center",attrs:{"data-aos":"fade-up"}},[r("h2",{staticClass:"text-2xl tracking-tight font-extrabold text-gray-200"},[t._v("\n      "+t._s(t.$t("blog.header"))+"\n    ")]),t._v(" "),r("p",{staticClass:"mt-2 px-2 max-w-2xl mx-auto text-sm leading-7 text-gray-400"},[t._v("\n      "+t._s(t.$t("blog.subtext"))+"\n    ")])]),t._v(" "),r("div",{staticClass:"select-none px-4 items-center justify-center sm:justify-start overflow-hidden flex pt-4",attrs:{"data-aos":"zoom-in"}},[r("nav",{staticClass:"flex flex-wrap items-center justify-center flex-row space-x-2 sm:space-x-4",attrs:{"aria-label":"Tabs"}},t._l(t.categories,(function(e){return r("button",{key:e,staticClass:"flex text-gray-300 focus:outline-none focus:ring-transparent focus:ring-offset-transparent hover:text-hot-pink px-3 py-2 font-medium text-sm rounded-xl",class:{"bg-gray-900 text-gray-300":e===t.currentCategory},on:{click:function(r){t.currentCategory=e}}},[t._v("\n        "+t._s(e)+"\n      ")])})),0)]),t._v(" "),r("div",{staticClass:"mt-5 gap-4 mx-4 grid max-w-none lg:grid-cols-3",attrs:{"data-aos":"zoom-in"}},t._l(t.postsByCategories,(function(t){return r("BlogCard",{key:t.slug,attrs:{post:t}})})),1)])}),[],!1,null,"27b96d73",null);e.default=component.exports;installComponents(component,{BlogCard:r(337).default})}}]);