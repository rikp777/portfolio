(window.webpackJsonp=window.webpackJsonp||[]).push([[23,10,15,17,19],{392:function(t,e,o){var content=o(422);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(42).default)("c1526d60",content,!0,{sourceMap:!1})},398:function(t,e,o){"use strict";o.r(e);var n={name:"Technologies.vue"},r=o(7),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"max-w-7xl mx-auto border-l border-r border-dashed border-gray-700 pt-4 pb-6 px-4"},[o("div",{staticClass:"max-w-prose text-center mx-auto pb-4"},[o("p",{staticClass:"text-xs leading-6 text-indigo-600 font-semibold tracking-wide lowercase"},[t._v(t._s(t.$t("technologies.subtext")))]),t._v(" "),o("a",{staticClass:"mt-2 text-3xl hover:text-hot-pink leading-8 font-extrabold tracking-tight text-gray-500",attrs:{href:"",target:"_blank",rel:"noreferrer"}},[t._v(t._s(t.$t("technologies.header")))])]),t._v(" "),o("div",{staticClass:"grid grid-cols-1 sm:grid-cols-6 bg-gray-900 rounded-lg"},t._l(t.$config.technologies.meta,(function(e,n){return o("div",{key:"rec-"+n,staticClass:"relative h-full rounded-lg text-base w-full"},[o("blockquote",{staticClass:"relative"},[o("div",{staticClass:"rounded-t-lg px-5 py-5 sm:px-8 sm:py-8y"},[o("div",{staticClass:"flex flex-row"},[o("a",{attrs:{href:e.url,target:"_blank",rel:"noreferrer"}},[o("cite",{staticClass:"flex items-center rounded-b-lg not-italic"},[o("span",{staticClass:"text-gray-400 font-semibold py-2"},[o("strong",{staticClass:"text-gray-200 font-semibold uppercase"},[t._v(t._s(e.name))])])])])]),t._v(" "),o("div",{staticClass:"relative text-sm text-gray-300 font-light mt-4"},t._l(e.frameworks,(function(e,n){return o("div",{key:n},[o("a",{staticClass:"hover:text-hot-pink",attrs:{href:e.url,target:"_blank"}},[t._v(t._s(e.name))]),t._v(" "),o("div",{directives:[{name:"show",rawName:"v-show",value:e.subs,expression:"framework.subs"}],staticClass:"mt-2"},t._l(e.subs,(function(sub,e){return o("ul",{key:e,staticClass:"ml-5 list-disc"},[o("li",[o("a",{staticClass:"hover:text-hot-pink",attrs:{href:sub.url,target:"_blank"}},[t._v(t._s(sub.name))])])])})),0)])})),0),t._v(" "),o("div",{directives:[{name:"show",rawName:"v-show",value:e.subs,expression:"technology.subs"}],staticClass:"relative text-sm text-gray-300 font-light mt-4"},[o("h2",{},[t._v("Libs:")]),t._v(" "),t._l(e.subs,(function(sub,e){return o("ul",{key:e,staticClass:"ml-5 list-disc"},[o("li",[o("a",{staticClass:"hover:text-hot-pink",attrs:{href:sub.url,target:"_blank"}},[t._v(t._s(sub.name))])])])}))],2)])])])})),0)])}),[],!1,null,"0840ff92",null);e.default=component.exports},399:function(t,e,o){"use strict";o.r(e);o(176),o(48);var n={data:function(){return{companies:[]}},methods:{sortCompanies:function(){var t=this.$config.workedAt.meta.sort((function(a,b){var t=b.positions[b.positions.length-1].startAt,e=a.positions[a.positions.length-1].startAt;return new Date(t)-new Date(e)}));this.companies=t},getDateFormat:function(t){var e=this.$moment();return null!=t&&(e=this.$moment(t,"DD-MM-YYYY")),e},showStringDiffTotal:function(t){var a=this.getDateFormat(t[t.length-1].endAt),b=this.getDateFormat(t[0].startAt),e=a.diff(b,"year");b.add(e,"years");var o=a.diff(b,"months");return b.add(o,"months"),0==e?"".concat(o," ").concat(this.$t("monthsShort")):0==o?"".concat(e," ").concat(this.$t("yearsShort")):"".concat(e," ").concat(this.$t("yearsShort")," ").concat(o," ").concat(this.$t("monthsShort"))},showStringDiff:function(t){var a=this.getDateFormat(t.endAt),b=this.getDateFormat(t.startAt),e=a.diff(b,"year");b.add(e,"years");var o=a.diff(b,"months");return b.add(o,"months"),0==e?"".concat(o," ").concat(this.$t("monthsShort")):0==o?"".concat(e," ").concat(this.$t("yearsShort")):"".concat(e," ").concat(this.$t("yearsShort")," ").concat(o," ").concat(this.$t("monthsShort")," ")}},created:function(){this.sortCompanies()}},r=o(7),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"max-w-7xl mx-auto border-l border-r border-dashed border-gray-700 pt-4 pb-6 px-4"},[o("div",{staticClass:"max-w-prose text-center mx-auto pb-4"},[o("p",{staticClass:"text-xs leading-6 text-indigo-600 font-semibold tracking-wide lowercase"},[t._v(t._s(t.$t("workedAt.subtext")))]),t._v(" "),o("a",{staticClass:"mt-2 text-3xl hover:text-hot-pink leading-8 font-extrabold tracking-tight text-gray-500",attrs:{href:"https://linkedin.com/in/",target:"_blank",rel:"noreferrer"}},[t._v(t._s(t.$t("workedAt.header")))])]),t._v(" "),o("div",{staticClass:"grid grid-cols-1 gap-4 sm:grid-cols-2"},t._l(t.companies,(function(e,n){return o("div",{key:"rec-"+n,staticClass:"relative h-full bg-gray-900 rounded-lg shadow-lg text-base w-full"},[o("blockquote",{staticClass:"relative"},[o("div",{staticClass:"rounded-t-lg px-5 py-5 sm:px-8 sm:py-8y"},[e.profession?t._e():o("div",{staticClass:"relative"},[t._m(0,!0)]),t._v(" "),o("div",{staticClass:"flex flex-row"},[o("a",{attrs:{href:e.url,target:"_blank",rel:"noreferrer"}},[o("cite",{staticClass:"flex items-center rounded-b-lg not-italic"},[o("div",{directives:[{name:"show",rawName:"v-show",value:e.src,expression:"company.src"}],staticClass:"flex-shrink-0 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 mr-4"},[o("img",{staticClass:" h-8",attrs:{src:e.src,alt:"Varun"}})]),t._v(" "),o("span",{staticClass:"text-gray-400 font-semibold py-2"},[o("strong",{directives:[{name:"show",rawName:"v-show",value:!e.src,expression:"!company.src"}],staticClass:"text-gray-200 font-semibold"},[t._v(t._s(e.name))]),t._v("\n                    "+t._s(t.getDateFormat(e.positions[e.positions.length-1].startAt).format("MMM YYYY"))+" - "+t._s(t.showStringDiffTotal(e.positions))+"\n                  ")])])])]),t._v(" "),o("div",{directives:[{name:"show",rawName:"v-show",value:e.description,expression:"company.description"}],staticClass:"relative text-sm text-gray-300 font-medium mt-4"},[o("svg",{staticClass:"absolute top-0 left-0 transform -translate-x-3 -translate-y-2 h-8 w-8 text-gray-800",attrs:{fill:"currentColor",viewBox:"0 0 32 32"}},[o("path",{attrs:{d:"M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z"}})]),t._v(" "),o("p",{staticClass:"relative"},[t._v("\n                "+t._s(t.$t("descriptions."+e.description))+"\n              ")])]),t._v(" "),o("div",{staticClass:"relative text-sm text-gray-300 font-medium mt-4"},[t._l(e.positions,(function(e,n){return[o("div",{staticClass:"content my-3"},[o("div",{staticClass:"text-white font-bold"},[t._v("\n                    "+t._s(e.title)+"\n                  ")]),t._v(" "),o("div",{staticClass:"text-white  text-xs"},[t._v("\n                    "+t._s(t.$t("workTypes."+e.type))+"\n                  ")]),t._v(" "),o("div",{staticClass:"text-gray-200 "},[t._v("\n                    "+t._s(t.getDateFormat(e.startAt).format("MMMM YYYY"))+" -\n                    "),[null==e.endAt?o("span",[t._v("\n                                "+t._s(t.$t("present"))+"\n                              ")]):o("span",[t._v("\n                                "+t._s(t.getDateFormat(e.endAt).format("MMMM YYYY"))+"\n                              ")])],t._v("\n                    |\n                    "),o("span",[t._v("\n                              "+t._s(t.showStringDiff(e))+"\n                            ")])],2),t._v(" "),o("div",{directives:[{name:"show",rawName:"v-show",value:e.description,expression:"position.description"}],staticClass:"text-sm text-gray-300 font-medium mt-2"},[t._v("\n                    "+t._s(t.$t("descriptions."+e.description))+"\n                  ")])])]}))],2)]),t._v(" "),e.profession?t._e():o("div",{staticClass:"flex justify-end m-3"},[o("span",{staticClass:"inline-flex items-center justify-end px-2 py-1 mr-2 text-xs font-bold leading-none text-red-200 bg-red-800 rounded-full show md:hidden"},[t._v("non prof")])])])])})),0)])}),[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"absolute top-0 right-0"},[o("span",{staticClass:"inline-flex items-center justify-center px-2 py-1 mr-2 text-xs font-bold leading-none text-red-200 bg-red-800 rounded-full hidden md:block"},[t._v("non prof")])])}],!1,null,"86a99e1e",null);e.default=component.exports},421:function(t,e,o){"use strict";o(392)},422:function(t,e,o){var n=o(41)((function(i){return i[1]}));n.push([t.i,"[data-v-df1c2260] .vue-typer .custom.char{--tw-text-opacity:1;color:rgb(79 70 229 / var(--tw-text-opacity))}[data-v-df1c2260] .vue-typer .custom.char.selected{--tw-bg-opacity:1;background-color:rgb(79 70 229 / var(--tw-bg-opacity));--tw-text-opacity:1;color:rgb(255 255 255 / var(--tw-text-opacity))}[data-v-df1c2260] .vue-typer .custom.caret{width:5px;--tw-bg-opacity:1;background-color:rgb(79 70 229 / var(--tw-bg-opacity))}.hover-arrow[data-v-df1c2260]{position:relative;stroke-width:1px}",""]),n.locals={},t.exports=n},430:function(t,e,o){"use strict";o.r(e);o(176),o(48),o(5),o(20),o(83);var n=o(486),r={name:"HeroSection",data:function(){return{tooltipShow:[],companies:[],elementVisible:!0}},methods:{toggleTooltip:function(t){console.log(this.tooltipShow[t]),this.tooltipShow[t]?this.$set(this.tooltipShow,t,!1):(this.$set(this.tooltipShow,t,!0),Object(n.a)(this.$refs["btnRef-".concat(t)][0],this.$refs["tooltipRef-".concat(t)][0],{placement:"right",modifiers:[{name:"preventOverflow",options:{mainAxis:!0,altAxis:!0,altBoundary:!0,tether:!1}},{name:"offset",options:{offset:[0,12]}}]}))},sortCompanies:function(){var t=this.$config.workedAt.meta.sort((function(a,b){var t=b.positions[b.positions.length-1].startAt,e=a.positions[a.positions.length-1].startAt;return new Date(t)-new Date(e)}));this.companies=t},getDateFormat:function(t){var e=this.$moment();return null!=t&&(e=this.$moment(t,"DD-MM-YYYY")),e},showStringDiffTotal:function(t){var a=this.getDateFormat(t[t.length-1].endAt),b=this.getDateFormat(t[0].startAt),e=a.diff(b,"year");b.add(e,"years");var o=a.diff(b,"months");return b.add(o,"months"),0==e?"".concat(o," ").concat(this.$t("monthsShort")):0==o?"".concat(e," ").concat(this.$t("yearsShort")):"".concat(e," ").concat(this.$t("yearsShort")," ").concat(o," ").concat(this.$t("monthsShort")," ")},showStringDiff:function(t){var a=this.getDateFormat(t.endAt),b=this.getDateFormat(t.startAt),e=a.diff(b,"year");b.add(e,"years");var o=a.diff(b,"months");return b.add(o,"months"),0==e?"".concat(o," ").concat(this.$t("months")):0==o?"".concat(e," ").concat(this.$t("years")):"".concat(e," ").concat(this.$t("years")," ").concat(o," ").concat(this.$t("months"))}},created:function(){var t=this;this.sortCompanies(),0==this.tooltipShow.length&&this.$config.internships.meta.forEach((function(e,o){t.tooltipShow[o]=!1})),setTimeout((function(){return t.elementVisible=!1}),5200)}},l=(o(421),o(7)),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"relative bg-gray-800 overflow-hidden"},[o("div",{staticClass:"relative"},[o("main",{},[o("div",{staticClass:"mx-auto py-8 max-w-7xl border-l border-r border-dashed border-gray-700"},[o("div",{staticClass:"lg:grid lg:grid-cols-12",attrs:{"data-aos":"zoom-in"}},[o("div",{staticClass:"px-4 sm:px-6 lg:border-r lg:border-dashed lg:border-gray-700 sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left lg:flex lg:items-center"},[o("div",[t.$config.projects.enabled?o("nuxt-link",{staticClass:"group inline-flex hover:bg-black items-center text-white bg-gray-900 rounded-full p-0.5 pr-2 sm:text-base lg:text-sm xl:text-base hover:text-gray-200",attrs:{to:t.localePath("/projects")}},[o("span",{staticClass:"px-3 py-0.5 text-white text-xs font-semibold leading-5 tracking-wide bg-indigo-600 rounded-full"},[t._v(t._s(t.$t("hero.iBlogTech")))]),t._v(" "),o("span",{staticClass:"ml-4 text-xs"},[t._v(t._s(t.$t("hero.haveALook")))]),t._v(" "),o("svg",{staticClass:"transition duration-500 transform block group-hover:rotate-180 hover-arrow ml-2 w-5 h-5 text-gray-500",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"}},[o("path",{attrs:{"fill-rule":"evenodd",d:"M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z","clip-rule":"evenodd"}})])]):t._e(),t._v(" "),o("h1",{staticClass:"mt-4 text-3xl tracking-tight font-extrabold text-white sm:mt-5 sm:leading-none lg:mt-6 lg:text-3xl xl:text-3xl"},[o("div",{directives:[{name:"show",rawName:"v-show",value:t.elementVisible,expression:"elementVisible"}],attrs:{"data-aos":"zoom-in-up"}},[o("small",{staticClass:"md:block"},[o("span",{staticClass:"text-gray-300 font-extralight"},[t._v(t._s(t.$t("hero.intro[0]")))]),t._v(" "),o("br"),t._v(" "),o("span",{staticClass:"text-3xl"},[t._v(t._s(t.$config.name))])]),t._v(" "),o("div",[o("vue-typer",{attrs:{text:t.$t("hero.intro[1]"),repeat:0,"pre-type-delay":"1800"}})],1)]),t._v(" "),o("div",{class:{hidden:t.elementVisible," animate-fade":!t.elementVisible}},[o("span",{staticClass:"md:block"},[t._v(t._s(t.$t("hero.friendlyNeighborhood")))]),t._v(" "),o("div",[o("vue-typer",{attrs:{text:t.$t("hero.words"),shuffle:!0,"pre-type-delay":"1800"}})],1)])]),t._v(" "),o("p",{staticClass:"mt-3 text-base text-gray-300 sm:mt-5",class:{hidden:t.elementVisible," animate-fade":!t.elementVisible}},[t._v("\n                  "+t._s(t.$t("hero.description"))+"\n                ")]),t._v(" "),t.$config.internships.enabled?o("p",{staticClass:"mt-8 text-sm text-white lowercase tracking-wide font-semibold sm:mt-10 uppercase "},[t._v(t._s(t.$t("internships.title")))]):t._e(),t._v(" "),t.$config.internships.enabled?o("div",{staticClass:"mt-5 w-full sm:mx-auto lg:ml-0"},[o("div",{staticClass:"flex flex-wrap space-x-1 items-start items-center space-x-4"},t._l(t.companies,(function(e,n){return o("div",{key:n},["internship"==e.positions[0].type?o("div",{staticClass:"mx-2 mb-5"},[o("small",{staticClass:"text-gray-300 hidden md:inline-block mb-4",domProps:{textContent:t._s(t.getDateFormat(e.positions[e.positions.length-1].startAt).format("MMM YYYY"))}}),t._v(" "),o("a",{ref:"btnRef-"+n,refInFor:!0,staticClass:"flex items-center justify-center",attrs:{href:e.url,target:"_blank"},on:{mouseenter:function(e){return t.toggleTooltip(n)},mouseleave:function(e){return t.toggleTooltip(n)}}},[o("img",{staticClass:"h-8 rounded-sm sm:h-9 mr-5 ",attrs:{src:e.src,alt:e.name}})]),t._v(" "),o("div",{staticClass:"hidden md:inline-block"},[o("div",{ref:"tooltipRef-"+n,refInFor:!0,staticClass:" bg-gray-900 border-0 ml-3 block z-50 font-normal leading-normal text-sm max-w-xs text-left no-underline break-words rounded-lg",class:{hidden:!t.tooltipShow[n],"md:block animate-fade":t.tooltipShow[n]}},[o("div",[o("div",{staticClass:"bg-indigo-600 text-white font-semibold p-3 mb-0 uppercase rounded-t-lg"},[t._v("\n                                "+t._s(e.name)+" - "+t._s(t.showStringDiffTotal(e.positions))+"\n                              ")]),t._v(" "),t._l(e.positions,(function(e,n){return[o("div",{staticClass:"content my-3"},[o("div",{staticClass:"text-white font-bold px-3"},[t._v("\n                                    "+t._s(e.title)+"\n                                  ")]),t._v(" "),o("div",{staticClass:"text-white px-3 text-xs"},[t._v("\n                                    "+t._s(t.$t("workTypes."+e.type))+"\n                                  ")]),t._v(" "),o("div",{staticClass:"text-gray-200 px-3"},[t._v("\n                                    "+t._s(t.getDateFormat(e.startAt).format("MMMM YYYY"))+" -\n                                    "),[null==e.endAt?o("span",[t._v("\n                                        "+t._s(t.$t("present"))+"\n                                      ")]):o("span",[t._v("\n                                        "+t._s(t.getDateFormat(e.endAt).format("MMMM YYYY"))+"\n                                      ")])],t._v("\n                                    |\n                                    "),o("span",[t._v("\n                                      "+t._s(t.showStringDiff(e))+"\n                                    ")])],2),t._v(" "),o("div",{directives:[{name:"show",rawName:"v-show",value:e.description,expression:"position.description"}],staticClass:"text-sm text-gray-300 font-medium px-3 mt-2"},[t._v("\n                                    "+t._s(t.$t("descriptions."+e.description))+"\n                                  ")])])]}))],2)])])]):t._e()])})),0)]):t._e()],1)]),t._v(" "),o("div",{staticClass:"mt-8 px-5 sm:mt-16 lg:mt-0 lg:col-span-6"},[o("div",{staticClass:"flex-shrink-0 w-full sm:mx-auto flex flex-1 items-center justify-center rounded-lg sm:overflow-hidden"},[o("img",{staticClass:"rounded-md h-80",attrs:{src:t.$config.image,alt:t.$config.name}})])])])])])])])}),[],!1,null,"df1c2260",null);e.default=component.exports},431:function(t,e,o){"use strict";o.r(e);var n={data:function(){return{}},methods:{}},r=o(7),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"max-w-7xl mx-auto border-l border-r border-dashed border-gray-700 pt-4 pb-6 px-4"},[o("div",{staticClass:"max-w-prose text-center mx-auto pb-4"},[o("p",{staticClass:"text-xs leading-6 text-indigo-600 font-semibold tracking-wide lowercase"},[t._v(t._s(t.$t("recommendations.subtext")))]),t._v(" "),o("a",{staticClass:"mt-2 text-3xl hover:text-hot-pink leading-8 font-extrabold tracking-tight text-gray-500",attrs:{href:"https://linkedin.com/in/",target:"_blank",rel:"noreferrer"}},[t._v(t._s(t.$t("recommendations.header")))])]),t._v(" "),o("div",{staticClass:"grid grid-cols-1 gap-4 sm:grid-cols-2"},t._l(t.$t("recommendations.meta"),(function(e,n){return o("div",{key:"rec-"+n,staticClass:"relative h-full bg-gray-900 rounded-lg shadow-lg text-base w-full"},[o("blockquote",{staticClass:"relative"},[o("div",{staticClass:"rounded-t-lg px-5 py-5 sm:px-8 sm:py-8y"},[o("div",{staticClass:"flex flex-row"},[o("a",{attrs:{href:e.linkedin,target:"_blank",rel:"noreferrer"}},[o("cite",{staticClass:"flex items-center rounded-b-lg not-italic"},[o("div",{directives:[{name:"show",rawName:"v-show",value:e.image,expression:"rec.image"}],staticClass:"flex-shrink-0 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 rounded-full border border-hot-pink mr-4"},[o("img",{staticClass:"w-8 h-8 rounded-full bg-indigo-300",attrs:{src:e.image,alt:"Varun"}})]),t._v(" "),o("span",{staticClass:"text-gray-400 font-semibold py-2"},[o("strong",{staticClass:"text-gray-200 font-semibold"},[t._v(t._s(e.name))]),t._v("\n                "+t._s(e.designation)+"\n              ")])])])]),t._v(" "),o("div",{staticClass:"relative text-sm text-gray-300 font-medium mt-4"},[o("svg",{staticClass:"absolute top-0 left-0 transform -translate-x-3 -translate-y-2 h-8 w-8 text-gray-800",attrs:{fill:"currentColor",viewBox:"0 0 32 32"}},[o("path",{attrs:{d:"M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z"}})]),t._v(" "),o("p",{staticClass:"relative"},[t._v("\n              "+t._s(e.content)+"\n            ")])])])])])})),0)])}),[],!1,null,"15f6a529",null);e.default=component.exports},489:function(t,e,o){"use strict";o.r(e);var n=o(3),r=(o(21),o(48),o(24),o(156)),l={head:function(){return{title:"🏠 ".concat(this.$t("nav.home")," -- ").concat(this.$config.name)}},data:function(){return{posts:null,isOpen:!1}},methods:{deny:function(){this.isOpen=!1,localStorage.setItem("GDPR:accepted",!1)},accept:function(){var t=this;console.log("Accept cookies"),Object(r.a)().then((function(e){t.isOpen=!1,localStorage.setItem("GDPR:accepted",!0),location.reload()}))},getGDPR:function(t){return localStorage.getItem("GDPR:accepted",!0)}},created:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var o,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t.getGDPR()),!0==!t.getGDPR()&&(t.isOpen=!0),o="fetchAllPosts",console.time(o),e.prev=4,e.next=7,t.$content("projects",{deep:!0}).without(["body","toc","dir","extension","path","tags"]).limit(3).skip(0).sortBy("createdAt","desc").fetch();case 7:n=e.sent,t.posts=n,e.next=14;break;case 11:e.prev=11,e.t0=e.catch(4),console.error(e.t0);case 14:return e.prev=14,console.timeEnd(o),e.finish(14);case 17:console.log(t.$router.options.routes);case 18:case"end":return e.stop()}}),e,null,[[4,11,14,17]])})))()}},c=o(7),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("HeroSection"),t._v(" "),t.$config.social.github?o("GithubCalendar"):t._e(),t._v(" "),t.$config.recommendations.enabled?o("Recommendations"):t._e(),t._v(" "),t.$config.technologies.enabled?o("Technologies"):t._e(),t._v(" "),t.$config.workedAt.enabled?o("WorkExperience"):t._e(),t._v(" "),t.$config.projects.enabled&&t.posts?o("LazyRecentBlog",{attrs:{posts:t.posts}}):t._e(),t._v(" "),t.isOpen?o("div",{staticClass:"fixed bottom-0 left-0 lg:flex items-center p-4 bg-gray-100 shadow-sm justify-center w-full"},[o("div",{staticClass:"text-5xl pb-2 leading-none"},[t._v("\n      🍪\n    ")]),t._v(" "),o("div",{staticClass:"lg:mx-8"},[o("h1",{staticClass:"font-medium "},[t._v(t._s(t.$t("cookies.title")))]),t._v(" "),o("p",{staticClass:"mt-2"},[t._v("\n        "+t._s(t.$t("cookies.dueTo"))),o("a",{staticClass:"hover:text-blue-600 text-blue-400",attrs:{href:t.$t("cookies.moreInfo")}},[t._v("info")]),o("br"),t._v("\n        "+t._s(t.$t("cookies.settings"))),o("br")])]),t._v(" "),o("div",{staticClass:"flex justify-center mt-4 lg:mt-0 text-center"},[o("div",{staticClass:"button ml-2 md:ml-0 hover:text-green-600 cursor-pointer bg-green-600 md:bg-gray-100 rounded-md text-center text-gray-100 md:text-black h-auto mr-2 py-1 px-2",on:{click:t.accept}},[t._v(t._s(t.$t("cookies.ok"))+"\n      ")]),t._v(" "),o("div",{staticClass:"button md:ml-2 hover:text-red-600 cursor-not-allowed bg-red-600 md:bg-gray-100 rounded-md text-center text-gray-100 md:text-black h-auto py-1 px-2 ",on:{click:t.deny}},[t._v(t._s(t.$t("cookies.no"))+"\n      ")])])]):t._e()],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{HeroSection:o(430).default,GithubCalendar:o(475).default,Recommendations:o(431).default,Technologies:o(398).default,WorkExperience:o(399).default})}}]);