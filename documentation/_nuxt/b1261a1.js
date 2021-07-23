(window.webpackJsonp=window.webpackJsonp||[]).push([[26,2,3],{1179:function(t,e,n){"use strict";n.r(e);n(106),n(640);var h={props:["anchors"],data:function(){return{url:""}},beforeMount:function(){this.url=window.location.href.split("#")[0]}},d=n(81),component=Object(d.a)(h,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"page-anchor"},[n("a-anchor",{attrs:{targetOffset:80,offsetTop:85}},t._l(t.anchors,(function(title,e){return n("a-anchor-link",{key:e,attrs:{href:t.url+"#"+e,title:title}})})),1)],1)}),[],!1,null,null,null);e.default=component.exports},1180:function(t,e,n){"use strict";n.r(e);var h={inheritAttrs:!0,props:["code","lang"],data:function(){return{}},methods:{onCopy:function(t){this.$message.success({content:"Copied!"})}}},d=n(81),component=Object(d.a)(h,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"highlight-section"},[n("a-button",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:t.code.trim(),expression:"code.trim()",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:t.onCopy,expression:"onCopy",arg:"success"}],staticClass:"btn-copy",attrs:{type:"primary",icon:"copy",size:"small"}},[t._v("Copy")]),t._v(" "),n("highlight-code",{staticStyle:{"max-height":"500px"},attrs:{lang:t.lang?t.lang:"html"}},[t._v("\n\t\t"+t._s(t.code)+"\n\t")])],1)}),[],!1,null,null,null);e.default=component.exports},1188:function(t,e,n){var content=n(1209);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(135).default)("16a78992",content,!0,{sourceMap:!1})},1208:function(t,e,n){"use strict";n(1188)},1209:function(t,e,n){var h=n(134)(!1);h.push([t.i,"table[data-v-16b44f4e]{width:100%}table td[data-v-16b44f4e],table th[data-v-16b44f4e]{padding:10px 20px;border:1px solid #ddd;vertical-align:middle}table th[data-v-16b44f4e]{background-color:#eee}table td>*[data-v-16b44f4e],table th>*[data-v-16b44f4e]{margin-bottom:0}",""]),t.exports=h},1240:function(t,e,n){"use strict";n.r(e);var h={head:function(){return{title:"Typography | Muse Dashboard Ant Design Vue @ Creative Tim",meta:[{hid:"description",name:"description",content:"Documentation and examples for Muse Dashboard typography."}]}},data:function(){return{anchors:{Headings:"Headings","Heading-Classes":"Heading Classes",Paragraphs:"Paragraphs"},regularHeadings:'\n<h1 class="font-regular">h1. Muse heading</h1>\n<h2 class="font-regular">h2. Muse heading</h2>\n<h3 class="font-regular">h3. Muse heading</h3>\n<h4 class="font-regular">h4. Muse heading</h4>\n<h5 class="font-regular">h5. Muse heading</h5>\n<h6 class="font-regular">h6. Muse heading</h6>',semiBoldHeadings:'\n<h1 class="font-semibold">h1. Muse heading</h1>\n<h2 class="font-semibold">h2. Muse heading</h2>\n<h3 class="font-semibold">h3. Muse heading</h3>\n<h4 class="font-semibold">h4. Muse heading</h4>\n<h5 class="font-semibold">h5. Muse heading</h5>\n<h6 class="font-semibold">h6. Muse heading</h6>',boldHeadings:"\n<h1>h1. Muse heading</h1>\n<h2>h2. Muse heading</h2>\n<h3>h3. Muse heading</h3>\n<h4>h4. Muse heading</h4>\n<h5>h5. Muse heading</h5>\n<h6>h6. Muse heading</h6>",headingsClasses:'\n<p class="h1">h1. Muse heading</p>\n<p class="h2">h2. Muse heading</p>\n<p class="h3">h3. Muse heading</p>\n<p class="h4">h4. Muse heading</p>\n<p class="h5">h5. Muse heading</p>\n<p class="h6">h6. Muse heading</p>',paragraph:"\n<p>\n\tLorem, ipsum dolor sit amet consectetur adipisicing elit. Libero porro voluptatum\n\tlaboriosam eveniet asperiores, expedita provident commodi ullam perferendis id,\n\trem enim quisquam earum architecto ut nobis repellendus magni dolorum.\n</p>",componentRegistration:"\nimport { Button } from 'ant-design-vue';\nVue.use(Button);"}}},d=(n(1208),n(81)),component=Object(d.a)(h,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"page-row"},[n("div",{staticClass:"page-content"},[t._m(0),t._v(" "),n("a-divider"),t._v(" "),t._m(1),t._v(" "),n("section",{staticClass:"mb-24"},[n("a-divider",{attrs:{orientation:"left"}},[t._v("Regular")]),t._v(" "),t._m(2),t._v(" "),n("muse-snippet",{attrs:{code:t.regularHeadings}})],1),t._v(" "),n("section",{staticClass:"mb-24"},[n("a-divider",{attrs:{orientation:"left"}},[t._v("Semibold")]),t._v(" "),t._m(3),t._v(" "),n("muse-snippet",{attrs:{code:t.semiBoldHeadings}})],1),t._v(" "),n("section",{staticClass:"mb-24"},[n("a-divider",{attrs:{orientation:"left"}},[t._v("Bold")]),t._v(" "),t._m(4),t._v(" "),n("muse-snippet",{attrs:{code:t.boldHeadings}})],1),t._v(" "),n("section",{staticClass:"mb-24",attrs:{id:"Heading-Classes"}},[n("h2",[t._v("Heading Classes")]),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),n("muse-snippet",{attrs:{code:t.headingsClasses}})],1),t._v(" "),n("section",{staticClass:"mb-24",attrs:{id:"Paragraphs"}},[n("h2",[t._v("Paragraphs")]),t._v(" "),t._m(7),t._v(" "),n("muse-snippet",{attrs:{code:t.paragraph}})],1),t._v(" "),t._m(8)],1),t._v(" "),n("muse-anchor",{attrs:{anchors:t.anchors}})],1)])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"mb-24"},[n("h1",[t._v("Typography")]),t._v(" "),n("p",{staticClass:"text-dark"},[t._v("\n\t\t\t\t\t\tDocumentation and examples for Muse Dashboard typography.\n\t\t\t\t\t")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"mb-24",attrs:{id:"Headings"}},[n("h2",[t._v("Headings")]),t._v(" "),n("p",[t._v("\n\t\t\t\t\t\tAll HTML headings, "),n("code",[t._v("<h1>")]),t._v(" through "),n("code",[t._v("<h6>")]),t._v(" are available.\n\t\t\t\t\t")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("table",[n("thead",[n("tr",[n("th",[t._v("Heading")]),t._v(" "),n("th",[t._v("Example")])])]),t._v(" "),n("tbody",[n("tr",[n("td",[n("p",[n("code",[t._v("<h1></h1>")])])]),t._v(" "),n("td",[n("span",{staticClass:"h1 font-regular"},[t._v("h1. Muse heading")])])]),t._v(" "),n("tr",[n("td",[n("p",[n("code",[t._v("<h2></h2>")])])]),t._v(" "),n("td",[n("span",{staticClass:"h2 font-regular"},[t._v("h2. Muse heading")])])]),t._v(" "),n("tr",[n("td",[n("p",[n("code",[t._v("<h3></h3>")])])]),t._v(" "),n("td",[n("span",{staticClass:"h3 font-regular"},[t._v("h3. Muse heading")])])]),t._v(" "),n("tr",[n("td",[n("p",[n("code",[t._v("<h4></h4>")])])]),t._v(" "),n("td",[n("span",{staticClass:"h4 font-regular"},[t._v("h4. Muse heading")])])]),t._v(" "),n("tr",[n("td",[n("p",[n("code",[t._v("<h5></h5>")])])]),t._v(" "),n("td",[n("span",{staticClass:"h5 font-regular"},[t._v("h5. Muse heading")])])]),t._v(" "),n("tr",[n("td",[n("p",[n("code",[t._v("<h6></h6>")])])]),t._v(" "),n("td",[n("span",{staticClass:"h6 font-regular"},[t._v("h6. Muse heading")])])])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("table",[n("thead",[n("tr",[n("th",[t._v("Heading")]),t._v(" "),n("th",[t._v("Example")])])]),t._v(" "),n("tbody",[n("tr",[n("td",[n("p",[n("code",[t._v("<h1></h1>")])])]),t._v(" "),n("td",[n("span",{staticClass:"h1 font-semibold"},[t._v("h1. Muse heading")])])]),t._v(" "),n("tr",[n("td",[n("p",[n("code",[t._v("<h2></h2>")])])]),t._v(" "),n("td",[n("span",{staticClass:"h2 font-semibold"},[t._v("h2. Muse heading")])])]),t._v(" "),n("tr",[n("td",[n("p",[n("code",[t._v("<h3></h3>")])])]),t._v(" "),n("td",[n("span",{staticClass:"h3 font-semibold"},[t._v("h3. Muse heading")])])]),t._v(" "),n("tr",[n("td",[n("p",[n("code",[t._v("<h4></h4>")])])]),t._v(" "),n("td",[n("span",{staticClass:"h4 font-semibold"},[t._v("h4. Muse heading")])])]),t._v(" "),n("tr",[n("td",[n("p",[n("code",[t._v("<h5></h5>")])])]),t._v(" "),n("td",[n("span",{staticClass:"h5 font-semibold"},[t._v("h5. Muse heading")])])]),t._v(" "),n("tr",[n("td",[n("p",[n("code",[t._v("<h6></h6>")])])]),t._v(" "),n("td",[n("span",{staticClass:"h6 font-semibold"},[t._v("h6. Muse heading")])])])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("table",[n("thead",[n("tr",[n("th",[t._v("Heading")]),t._v(" "),n("th",[t._v("Example")])])]),t._v(" "),n("tbody",[n("tr",[n("td",[n("p",[n("code",[t._v("<h1></h1>")])])]),t._v(" "),n("td",[n("span",{staticClass:"h1"},[t._v("h1. Muse heading")])])]),t._v(" "),n("tr",[n("td",[n("p",[n("code",[t._v("<h2></h2>")])])]),t._v(" "),n("td",[n("span",{staticClass:"h2"},[t._v("h2. Muse heading")])])]),t._v(" "),n("tr",[n("td",[n("p",[n("code",[t._v("<h3></h3>")])])]),t._v(" "),n("td",[n("span",{staticClass:"h3"},[t._v("h3. Muse heading")])])]),t._v(" "),n("tr",[n("td",[n("p",[n("code",[t._v("<h4></h4>")])])]),t._v(" "),n("td",[n("span",{staticClass:"h4"},[t._v("h4. Muse heading")])])]),t._v(" "),n("tr",[n("td",[n("p",[n("code",[t._v("<h5></h5>")])])]),t._v(" "),n("td",[n("span",{staticClass:"h5"},[t._v("h5. Muse heading")])])]),t._v(" "),n("tr",[n("td",[n("p",[n("code",[t._v("<h6></h6>")])])]),t._v(" "),n("td",[n("span",{staticClass:"h6"},[t._v("h6. Muse heading")])])])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",[t._v("\n\t\t\t\t\t\tAll HTML headings are also available using heading classes from "),n("code",[t._v("<h1>")]),t._v(" to "),n("code",[t._v("<h6>")]),t._v(".\n\t\t\t\t\t")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("table",[n("thead",[n("tr",[n("th",[t._v("Heading")]),t._v(" "),n("th",[t._v("Example")])])]),t._v(" "),n("tbody",[n("tr",[n("td",[n("p",[n("code",[t._v('<p class="h1"></p>')])])]),t._v(" "),n("td",[n("p",{staticClass:"h1"},[t._v("h1. Muse heading")])])]),t._v(" "),n("tr",[n("td",[n("p",[n("code",[t._v('<p class="h2"></p>')])])]),t._v(" "),n("td",[n("p",{staticClass:"h2"},[t._v("h2. Muse heading")])])]),t._v(" "),n("tr",[n("td",[n("p",[n("code",[t._v('<p class="h3"></p>')])])]),t._v(" "),n("td",[n("p",{staticClass:"h3"},[t._v("h3. Muse heading")])])]),t._v(" "),n("tr",[n("td",[n("p",[n("code",[t._v('<p class="h4"></p>')])])]),t._v(" "),n("td",[n("p",{staticClass:"h4"},[t._v("h4. Muse heading")])])]),t._v(" "),n("tr",[n("td",[n("p",[n("code",[t._v('<p class="h5"></p>')])])]),t._v(" "),n("td",[n("p",{staticClass:"h5"},[t._v("h5. Muse heading")])])]),t._v(" "),n("tr",[n("td",[n("p",[n("code",[t._v('<p class="h6"></p>')])])]),t._v(" "),n("td",[n("p",{staticClass:"h6"},[t._v("h6. Muse heading")])])])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"showcase pb-10"},[n("p",[t._v("\n\t\t\t\t\t\t\tLorem, ipsum dolor sit amet consectetur adipisicing elit. Libero porro voluptatum\n\t\t\t\t\t\t\tlaboriosam eveniet asperiores, expedita provident commodi ullam perferendis id,\n\t\t\t\t\t\t\trem enim quisquam earum architecto ut nobis repellendus magni dolorum.\n\t\t\t\t\t\t")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",{staticClass:"text-right font-semibold mb-24"},[t._v("\n\t\t\t\t\tLooking for more Ant Design Vue? Please check the\n\t\t\t\t\t"),n("a",{attrs:{target:"_blank",href:"https://antdv.com/docs/vue/introduce/"}},[t._v("official docs")]),t._v(".\n\t\t\t\t")])}],!1,null,"16b44f4e",null);e.default=component.exports;installComponents(component,{MuseSnippet:n(1180).default,MuseAnchor:n(1179).default})}}]);