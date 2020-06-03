(window.webpackJsonp=window.webpackJsonp||[]).push([[676],{1119:function(s,a,t){"use strict";t.r(a);var e=t(44),n=Object(e.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"ajv"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ajv"}},[s._v("#")]),s._v(" AJV "),t("Badge",{attrs:{text:"beta",type:"warn"}})],1),s._v(" "),t("Banner",{attrs:{src:"https://ajv.js.org/images/ajv_logo.png",href:"https://ajv.js.org/",height:"100"}}),s._v(" "),t("p",[s._v("This tutorial shows you how you can validate your data with decorators.")]),s._v(" "),t("p",[s._v("Validation feature uses "),t("a",{attrs:{href:"https://github.com/epoberezkin/ajv",target:"_blank",rel:"noopener noreferrer"}},[s._v("Ajv"),t("OutboundLink")],1),s._v("\nand "),t("a",{attrs:{href:"http://json-schema.org/latest/json-schema-validation.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("json-schema"),t("OutboundLink")],1),s._v(" to perform the model validation.")]),s._v(" "),t("Projects",{attrs:{type:"examples"}}),s._v(" "),t("h2",{attrs:{id:"installation"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#installation"}},[s._v("#")]),s._v(" Installation")]),s._v(" "),t("p",[s._v("Before using the validation decorators, we need to install the "),t("a",{attrs:{href:"https://www.npmjs.com/package/ajv",target:"_blank",rel:"noopener noreferrer"}},[s._v("ajv"),t("OutboundLink")],1),s._v(" module.")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" --save ajv\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" --save @tsed/ajv\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[s._v("Then import "),t("code",[s._v("@tsed/ajv")]),s._v(" in your "),t("RouterLink",{attrs:{to:"/api/common/server/components/ServerLoader.html"}},[s._v("ServerLoader")]),s._v(":")],1),s._v(" "),t("div",{staticClass:"language-typescript line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-typescript"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("ServerLoader"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" ServerSettings"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"@tsed/common"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"@tsed/ajv"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// import ajv ts.ed module")]),s._v("\n\n@"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ServerSettings")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    rootDir"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" __dirname\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Server")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("extends")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ServerLoader")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br")])]),t("p",[s._v("The AJV module allows a few settings to be added through the ServerSettings (all are optional):")]),s._v(" "),t("ul",[t("li",[t("em",[s._v("options")]),s._v(" are AJV specific options passed directly to the AJV constructor,")]),s._v(" "),t("li",[t("em",[s._v("errorFormatter")]),s._v(" can be used to alter the output produced by the "),t("code",[s._v("@tsed/ajv")]),s._v(" package.")])]),s._v(" "),t("p",[s._v("The error message could be changed like this:")]),s._v(" "),t("div",{staticClass:"language-typescript line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-typescript"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("ServerLoader"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" ServerSettings"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"@tsed/common"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"@tsed/ajv"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// import ajv ts.ed module")]),s._v("\n\n@"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ServerSettings")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    rootDir"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" __dirname"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n     ajv"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n       "),t("span",{pre:!0,attrs:{class:"token function-variable function"}},[s._v("errorFormatter")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("error")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token template-string"}},[t("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[s._v("`")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("At ")]),t("span",{pre:!0,attrs:{class:"token interpolation"}},[t("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[s._v("${")]),s._v("error"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("modelName"),t("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[s._v("}")])]),t("span",{pre:!0,attrs:{class:"token interpolation"}},[t("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[s._v("${")]),s._v("error"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("dataPath"),t("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[s._v("}")])]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v(", value '")]),t("span",{pre:!0,attrs:{class:"token interpolation"}},[t("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[s._v("${")]),s._v("error"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("data"),t("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[s._v("}")])]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("' ")]),t("span",{pre:!0,attrs:{class:"token interpolation"}},[t("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[s._v("${")]),s._v("error"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("message"),t("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[s._v("}")])]),t("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[s._v("`")])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n       verbose"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Server")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("extends")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ServerLoader")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br")])]),t("h2",{attrs:{id:"decorators"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#decorators"}},[s._v("#")]),s._v(" Decorators")]),s._v(" "),t("p",[s._v("Ts.ED gives some decorators to write your validation model:")]),s._v(" "),t("ul",{staticClass:"api-list"},[t("li",{staticClass:"api-item",attrs:{"data-symbol":"common/jsonschema;AllowTypes;decorator;@;false;false;false;false"}},[t("a",{staticClass:"symbol-container symbol-type-decorator symbol-name-commonjsonschema-AllowTypes",attrs:{href:"#/api/common/jsonschema/allowtypes",title:"AllowTypes"}},[t("span",{staticClass:"symbol decorator"}),s._v("AllowTypes")])]),t("li",{staticClass:"api-item",attrs:{"data-symbol":"common/jsonschema;Default;decorator;@;false;false;false;false"}},[t("a",{staticClass:"symbol-container symbol-type-decorator symbol-name-commonjsonschema-Default",attrs:{href:"#/api/common/jsonschema/default",title:"Default"}},[t("span",{staticClass:"symbol decorator"}),s._v("Default")])]),t("li",{staticClass:"api-item",attrs:{"data-symbol":"common/jsonschema;Email;decorator;@;false;false;false;false"}},[t("a",{staticClass:"symbol-container symbol-type-decorator symbol-name-commonjsonschema-Email",attrs:{href:"#/api/common/jsonschema/email",title:"Email"}},[t("span",{staticClass:"symbol decorator"}),s._v("Email")])]),t("li",{staticClass:"api-item",attrs:{"data-symbol":"common/jsonschema;Enum;decorator;@;false;false;false;false"}},[t("a",{staticClass:"symbol-container symbol-type-decorator symbol-name-commonjsonschema-Enum",attrs:{href:"#/api/common/jsonschema/enum",title:"Enum"}},[t("span",{staticClass:"symbol decorator"}),s._v("Enum")])]),t("li",{staticClass:"api-item",attrs:{"data-symbol":"common/jsonschema;ExclusiveMaximum;decorator;@;false;false;false;false"}},[t("a",{staticClass:"symbol-container symbol-type-decorator symbol-name-commonjsonschema-ExclusiveMaximum",attrs:{href:"#/api/common/jsonschema/exclusivemaximum",title:"ExclusiveMaximum"}},[t("span",{staticClass:"symbol decorator"}),s._v("ExclusiveMaximum")])]),t("li",{staticClass:"api-item",attrs:{"data-symbol":"common/jsonschema;ExclusiveMinimum;decorator;@;false;false;false;false"}},[t("a",{staticClass:"symbol-container symbol-type-decorator symbol-name-commonjsonschema-ExclusiveMinimum",attrs:{href:"#/api/common/jsonschema/exclusiveminimum",title:"ExclusiveMinimum"}},[t("span",{staticClass:"symbol decorator"}),s._v("ExclusiveMinimum")])]),t("li",{staticClass:"api-item",attrs:{"data-symbol":"common/jsonschema;Format;decorator;@;false;false;false;false"}},[t("a",{staticClass:"symbol-container symbol-type-decorator symbol-name-commonjsonschema-Format",attrs:{href:"#/api/common/jsonschema/format",title:"Format"}},[t("span",{staticClass:"symbol decorator"}),s._v("Format")])]),t("li",{staticClass:"api-item",attrs:{"data-symbol":"common/jsonschema;MaxItems;decorator;@;false;false;false;false"}},[t("a",{staticClass:"symbol-container symbol-type-decorator symbol-name-commonjsonschema-MaxItems",attrs:{href:"#/api/common/jsonschema/maxitems",title:"MaxItems"}},[t("span",{staticClass:"symbol decorator"}),s._v("MaxItems")])]),t("li",{staticClass:"api-item",attrs:{"data-symbol":"common/jsonschema;MaxLength;decorator;@;false;false;false;false"}},[t("a",{staticClass:"symbol-container symbol-type-decorator symbol-name-commonjsonschema-MaxLength",attrs:{href:"#/api/common/jsonschema/maxlength",title:"MaxLength"}},[t("span",{staticClass:"symbol decorator"}),s._v("MaxLength")])]),t("li",{staticClass:"api-item",attrs:{"data-symbol":"common/jsonschema;MaxProperties;decorator;@;false;false;false;false"}},[t("a",{staticClass:"symbol-container symbol-type-decorator symbol-name-commonjsonschema-MaxProperties",attrs:{href:"#/api/common/jsonschema/maxproperties",title:"MaxProperties"}},[t("span",{staticClass:"symbol decorator"}),s._v("MaxProperties")])]),t("li",{staticClass:"api-item",attrs:{"data-symbol":"common/jsonschema;Maximum;decorator;@;false;false;false;false"}},[t("a",{staticClass:"symbol-container symbol-type-decorator symbol-name-commonjsonschema-Maximum",attrs:{href:"#/api/common/jsonschema/maximum",title:"Maximum"}},[t("span",{staticClass:"symbol decorator"}),s._v("Maximum")])]),t("li",{staticClass:"api-item",attrs:{"data-symbol":"common/jsonschema;MinItems;decorator;@;false;false;false;false"}},[t("a",{staticClass:"symbol-container symbol-type-decorator symbol-name-commonjsonschema-MinItems",attrs:{href:"#/api/common/jsonschema/minitems",title:"MinItems"}},[t("span",{staticClass:"symbol decorator"}),s._v("MinItems")])]),t("li",{staticClass:"api-item",attrs:{"data-symbol":"common/jsonschema;MinLength;decorator;@;false;false;false;false"}},[t("a",{staticClass:"symbol-container symbol-type-decorator symbol-name-commonjsonschema-MinLength",attrs:{href:"#/api/common/jsonschema/minlength",title:"MinLength"}},[t("span",{staticClass:"symbol decorator"}),s._v("MinLength")])]),t("li",{staticClass:"api-item",attrs:{"data-symbol":"common/jsonschema;MinProperties;decorator;@;false;false;false;false"}},[t("a",{staticClass:"symbol-container symbol-type-decorator symbol-name-commonjsonschema-MinProperties",attrs:{href:"#/api/common/jsonschema/minproperties",title:"MinProperties"}},[t("span",{staticClass:"symbol decorator"}),s._v("MinProperties")])]),t("li",{staticClass:"api-item",attrs:{"data-symbol":"common/jsonschema;Minimum;decorator;@;false;false;false;false"}},[t("a",{staticClass:"symbol-container symbol-type-decorator symbol-name-commonjsonschema-Minimum",attrs:{href:"#/api/common/jsonschema/minimum",title:"Minimum"}},[t("span",{staticClass:"symbol decorator"}),s._v("Minimum")])]),t("li",{staticClass:"api-item",attrs:{"data-symbol":"common/jsonschema;MultipleOf;decorator;@;false;false;false;false"}},[t("a",{staticClass:"symbol-container symbol-type-decorator symbol-name-commonjsonschema-MultipleOf",attrs:{href:"#/api/common/jsonschema/multipleof",title:"MultipleOf"}},[t("span",{staticClass:"symbol decorator"}),s._v("MultipleOf")])]),t("li",{staticClass:"api-item",attrs:{"data-symbol":"common/jsonschema;Pattern;decorator;@;false;false;false;false"}},[t("a",{staticClass:"symbol-container symbol-type-decorator symbol-name-commonjsonschema-Pattern",attrs:{href:"#/api/common/jsonschema/pattern",title:"Pattern"}},[t("span",{staticClass:"symbol decorator"}),s._v("Pattern")])]),t("li",{staticClass:"api-item",attrs:{"data-symbol":"common/jsonschema;Schema;decorator;@;false;false;false;false"}},[t("a",{staticClass:"symbol-container symbol-type-decorator symbol-name-commonjsonschema-Schema",attrs:{href:"#/api/common/jsonschema/schema",title:"Schema"}},[t("span",{staticClass:"symbol decorator"}),s._v("Schema")])]),t("li",{staticClass:"api-item",attrs:{"data-symbol":"common/jsonschema;Title;decorator;@;false;false;false;false"}},[t("a",{staticClass:"symbol-container symbol-type-decorator symbol-name-commonjsonschema-Title",attrs:{href:"#/api/common/jsonschema/title",title:"Title"}},[t("span",{staticClass:"symbol decorator"}),s._v("Title")])]),t("li",{staticClass:"api-item",attrs:{"data-symbol":"common/jsonschema;UniqueItems;decorator;@;false;false;false;false"}},[t("a",{staticClass:"symbol-container symbol-type-decorator symbol-name-commonjsonschema-UniqueItems",attrs:{href:"#/api/common/jsonschema/uniqueitems",title:"UniqueItems"}},[t("span",{staticClass:"symbol decorator"}),s._v("UniqueItems")])])]),s._v(" "),t("h2",{attrs:{id:"examples"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#examples"}},[s._v("#")]),s._v(" Examples")]),s._v(" "),t("h4",{attrs:{id:"model-validation"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#model-validation"}},[s._v("#")]),s._v(" Model validation")]),s._v(" "),t("p",[s._v("A model can be used on a method controller along with "),t("RouterLink",{attrs:{to:"/api/common/filters/decorators/BodyParams.html"}},[s._v("@BodyParams")]),s._v(" or other decorators, and will\nbe validated by Ajv.")],1),s._v(" "),t("div",{staticClass:"language-typescript line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-typescript"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("Required"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" MaxLength"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" MinLength"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" Minimum"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" Maximum"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" Format"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" Enum"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" Pattern"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" Email"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"@tsed/common"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("CalendarModel")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    \n    @"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("MaxLength")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("20")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    @"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("MinLength")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    @"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("Required")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    title"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("string")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n    @"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("Minimum")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    @"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("Maximum")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    rating"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("number")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n    @"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("Email")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    email"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("string")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n    @"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("Format")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"date"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// or date-time, etc...")]),s._v("\n    createDate"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" Date"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    \n    @"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("Pattern")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token regex"}},[s._v("/hello/")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    customInput"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("string")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    \n    @"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("Enum")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"value1"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"value2"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    customInput"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"value1"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"value2"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br")])]),t("blockquote",[t("p",[s._v("All validation decorators are compatible with the Swagger documentation.")])]),s._v(" "),t("h2",{attrs:{id:"validation-error"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#validation-error"}},[s._v("#")]),s._v(" Validation error")]),s._v(" "),t("p",[s._v("When a validation error occurs, AJV generates a list of errors with a full description like this:")]),s._v(" "),t("div",{staticClass:"language-json line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-json"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"keyword"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"minLength"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"dataPath"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('".password"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"schemaPath"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"#/properties/password/minLength"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"params"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"limit"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("6")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"message"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"should NOT be shorter than 6 characters"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"modelName"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"User"')]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br")])]),t("p",[s._v("This information can be retrieved in the response headers:")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v(' connection: keep-alive\n content-length: 18\n content-type: text/html; charset=utf-8\n date: Wed, 16 May 2018 07:32:23 GMT\n errors: [{"keyword": "minLength","dataPath": ".password", "schemaPath": "#/properties/password/minLength", "params": {"limit": 6}, "message": "should NOT be shorter than 6 characters", "modelName": "User"}]\n etag: W/"12-Bpa0T7/lBA6+IACzRWwBc4S6NUY"\n vary: Accept-Encoding\n x-powered-by: Express\n')])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br")])])],1)}),[],!1,null,null,null);a.default=n.exports}}]);