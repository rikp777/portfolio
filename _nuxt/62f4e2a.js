(window.webpackJsonp=window.webpackJsonp||[]).push([[14,7,16],{335:function(t,e,r){"use strict";r.r(e);r(16);var o={methods:{onImageLoadError:function(){this.imageLoadError=!0}},computed:{imageURL:function(){var t="https://ui-avatars.com/api/?uppercase=false&background=212324&color=4f46e5&rounded=true&name=".concat(this.name);return!this.photoURL||this.imageLoadError?t:this.photoURL}},data:function(){return{imageLoadError:!1}},props:{name:{type:String},photoURL:{type:String,required:!1}}},n=r(5),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("img",{attrs:{src:t.imageURL,alt:"user photo"},on:{error:t.onImageLoadError}})}),[],!1,null,null,null);e.default=component.exports},340:function(t,e,r){"use strict";r.r(e);var o={props:{post:{type:Object}}},n=r(5),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("nuxt-link",{staticClass:"flex transition duration-700 ease-in-out transform hover:translate-y-0.5 hover:scale-105 flex-col rounded-xl shadow-lg overflow-hidden",attrs:{to:t.localePath("/projects/"+t.post.slug)}},[t.post.image?r("div",{staticClass:"hidden sm:flex flex-shrink-0 bg-gray-900"},[r("img",{staticClass:"h-36 w-full object-cover",attrs:{src:t.post.image,alt:"Blog Image"}})]):t._e(),t._v(" "),r("div",{staticClass:"flex-1 bg-gray-900 p-5 flex flex-col justify-between"},[r("div",{staticClass:"flex-1"},[r("p",{staticClass:"text-xs font-medium text-hot-pink hover:text-hot-pink"},[t._l(t.post.category,(function(e,o){return[r("span",{key:e.name,staticClass:"hover:text-pink-600"},[t._v("\n              "+t._s(e.name)),o<t.post.category.length-1?r("span",[t._v(",")]):t._e()])]}))],2),t._v(" "),r("div",[r("h3",{staticClass:"mt-0.5 text-md leading-7 font-semibold text-gray-200"},[t._v("\n            "+t._s(t.post.title)+"\n          ")]),t._v(" "),r("p",{staticClass:"mt-2 text-xs text-gray-400"},[t._v("\n            "+t._s(t.post.description)+"\n          ")])])]),t._v(" "),r("div",{staticClass:"mt-2 flex items-center"},[r("div",{staticClass:"flex-shrink-0"},[r("a",{attrs:{target:"_blank",rel:"noreferrer",href:"https://twitter.com/"+t.post.author.twitter}},[r("UserAvatar",{staticClass:"h-9 w-9 rounded-full",attrs:{name:t.post.author.name,"photo-u-r-l":t.post.author.image}})],1)]),t._v(" "),r("div",{staticClass:"ml-3"},[r("p",{staticClass:"text-xs font-medium text-gray-200"},[r("a",{staticClass:"hover:text-indigo-600",attrs:{target:"_blank",rel:"noreferrer",href:"https://twitter.com/"+t.post.author.twitter}},[t._v("\n              "+t._s(t.post.author.name)+"\n            ")])]),t._v(" "),r("div",{staticClass:"flex text-xs text-gray-300"},[r("time",{attrs:{datetime:t.post.createdAt}},[t._v("\n              "+t._s(new Date(t.post.createdAt).toLocaleDateString("en-US",{year:"numeric",month:"short",day:"numeric"}))+"\n            ")]),t._v(" "),r("span",{staticClass:"mx-1"},[t._v("\n              ·\n            ")]),t._v(" "),r("span",[t._v("\n              "+t._s(t.post.readingTime)+"\n            ")])])])])])])}),[],!1,null,"b5d1bc1c",null);e.default=component.exports;installComponents(component,{UserAvatar:r(335).default})},438:function(t,e,r){"use strict";r.r(e);var o={props:{posts:{type:Array}}},n=r(5),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.$config.projects.enabled?r("div",{staticClass:"bg-gray-800 border-t border-b border-dashed border-gray-700"},[r("div",{staticClass:"max-w-7xl pb-6 mx-auto border-l border-r border-dashed border-gray-700",attrs:{"data-aos":"fade-up"}},[r("div",{staticClass:"max-w-prose text-center mx-auto py-4"},[r("p",{staticClass:"text-xs leading-6 text-indigo-600 font-semibold tracking-wide lowercase"},[t._v(t._s(t.$t("recentProject.subtext")))]),t._v(" "),r("nuxt-link",{staticClass:"mt-2 text-3xl hover:text-hot-pink leading-8 font-extrabold tracking-tight text-gray-500",attrs:{to:t.localePath("/projects")}},[t._v(t._s(t.$t("recentProject.header")))])],1),t._v(" "),r("div",{staticClass:"gap-4 mx-4 grid max-w-7xl grid-flow-row sm:grid-flow-col",attrs:{"data-aos":"zoom-in"}},t._l(t.posts,(function(t){return r("BlogCard",{key:t.slug,attrs:{post:t}})})),1)])]):t._e()}),[],!1,null,"e2ca7202",null);e.default=component.exports;installComponents(component,{BlogCard:r(340).default})}}]);