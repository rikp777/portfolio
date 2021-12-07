(window.webpackJsonp=window.webpackJsonp||[]).push([[13,16],{335:function(t,e,r){"use strict";r.r(e);r(16);var o={methods:{onImageLoadError:function(){this.imageLoadError=!0}},computed:{imageURL:function(){var t="https://ui-avatars.com/api/?uppercase=false&background=212324&color=4f46e5&rounded=true&name=".concat(this.name);return!this.photoURL||this.imageLoadError?t:this.photoURL}},data:function(){return{imageLoadError:!1}},props:{name:{type:String},photoURL:{type:String,required:!1}}},n=r(5),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("img",{attrs:{src:t.imageURL,alt:"user photo"},on:{error:t.onImageLoadError}})}),[],!1,null,null,null);e.default=component.exports},382:function(t,e,r){"use strict";r.r(e);var o={props:{project:{type:Object},showImage:{type:Boolean,default:!0}}},n=r(5),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"flex flex-col rounded-xl shadow-lg overflow-hidden"},[r("div",{staticClass:"flex-1 bg-gray-900 p-5 flex flex-row justify-between"},[r("div",{staticClass:"flex-1 flex flex-col justify-between"},[r("div",[r("nuxt-link",{staticClass:"group",attrs:{to:t.localePath("/projects/"+t.project.slug)}},[r("h3",{staticClass:"mt-0.5 group-hover:text-indigo-500 text-md leading-7 font-semibold text-gray-200"},[t._v("\n              "+t._s(t.project.title)+" "),t.project.id?r("span",[t._v("- "+t._s(t.project.id))]):t._e()]),t._v(" "),r("p",{staticClass:"text-xs text-gray-400"},[t._v("\n              "+t._s(t.project.description)+"\n            ")])]),t._v(" "),r("div",{staticClass:"mt-3"},[r("div",{staticClass:"text-xs font-medium text-hot-pink hover:text-hot-pink"},[t.project.tech?r("p",{staticClass:"text-hot-pink"},[t._v("Tech:\n                "),t._l(t.project.tech,(function(e){return t.project.tech?r("span",[t._v(t._s(e.name)+" ")]):t._e()}))],2):t._e()]),t._v(" "),r("div",{staticClass:"text-xs font-medium text-purple-600 hover:text-hot-pink"},[r("p",{staticClass:"text-purple-600"},[t._v("Cat:\n                "),t._l(t.project.category,(function(e){return t.project.category?r("span",[t._v(t._s(e.name)+" ")]):t._e()}))],2)])])],1),t._v(" "),t.project.website||t.project.github?r("div",{staticClass:"flex mt-2 space-x-2 flex-row"},[r("p",{staticClass:"text-gray-600 text-xs"},[t._v("Links:")]),t._v(" "),t.project.website?r("a",{staticClass:"hover:text-indigo-500 text-gray-600",attrs:{target:"_blank",rel:"noreferrer",href:t.project.website}},[r("svg",{staticClass:"h-5 w-5",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor"}},[r("path",{attrs:{"fill-rule":"evenodd",d:"M4.083 9h1.946c.089-1.546.383-2.97.837-4.118A6.004 6.004 0 004.083 9zM10 2a8 8 0 100 16 8 8 0 000-16zm0 2c-.076 0-.232.032-.465.262-.238.234-.497.623-.737 1.182-.389.907-.673 2.142-.766 3.556h3.936c-.093-1.414-.377-2.649-.766-3.556-.24-.56-.5-.948-.737-1.182C10.232 4.032 10.076 4 10 4zm3.971 5c-.089-1.546-.383-2.97-.837-4.118A6.004 6.004 0 0115.917 9h-1.946zm-2.003 2H8.032c.093 1.414.377 2.649.766 3.556.24.56.5.948.737 1.182.233.23.389.262.465.262.076 0 .232-.032.465-.262.238-.234.498-.623.737-1.182.389-.907.673-2.142.766-3.556zm1.166 4.118c.454-1.147.748-2.572.837-4.118h1.946a6.004 6.004 0 01-2.783 4.118zm-6.268 0C6.412 13.97 6.118 12.546 6.03 11H4.083a6.004 6.004 0 002.783 4.118z","clip-rule":"evenodd"}})])]):t._e(),t._v(" "),t.project.github?r("a",{staticClass:"hover:text-indigo-500 text-gray-600",attrs:{target:"_blank",rel:"noreferrer",href:t.project.github}},[r("span",{staticClass:"sr-only"},[t._v("GitHub")]),t._v(" "),r("svg",{staticClass:"h-5 w-5",attrs:{"aria-hidden":"true",fill:"currentColor",viewBox:"0 0 24 24"}},[r("path",{attrs:{"fill-rule":"evenodd",d:"M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z","clip-rule":"evenodd"}})])]):t._e()]):t._e(),t._v(" "),r("div",{staticClass:"mt-2 flex items-center"},[r("div",{staticClass:"flex-shrink-0"},[r("a",{attrs:{target:"_blank",rel:"noreferrer",href:"#"}},[r("UserAvatar",{staticClass:"h-9 w-9 rounded-full",attrs:{name:t.project.author.name,"photo-u-r-l":t.project.author.image}})],1)]),t._v(" "),r("div",{staticClass:"ml-3"},[r("p",{staticClass:"text-xs font-medium text-gray-200"},[r("a",{staticClass:"hover:text-indigo-600",attrs:{target:"_blank",rel:"noreferrer",href:"#"}},[t._v("\n                "+t._s(t.project.author.name)+"\n              ")])]),t._v(" "),r("div",{staticClass:"flex text-xs text-gray-300"},[r("time",{attrs:{datetime:t.project.createdAt}},[t._v("\n                "+t._s(new Date(t.project.createdAt).toLocaleDateString("en-US",{year:"numeric",month:"short",day:"numeric"}))+"\n              ")]),t._v(" "),r("span",{staticClass:"mx-1"},[t._v("\n              ·\n            ")]),t._v(" "),r("span",[t._v("\n              "+t._s(t.project.readingTime)+"\n            ")])])])])]),t._v(" "),r("div",{directives:[{name:"show",rawName:"v-show",value:t.showImage,expression:"showImage"}]},[r("img",{staticClass:"h-16 rounded-md ",attrs:{src:t.project.image,alt:"logo"}})])])])}),[],!1,null,"0e15bbf0",null);e.default=component.exports;installComponents(component,{UserAvatar:r(335).default})}}]);