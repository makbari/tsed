(window.webpackJsonp=window.webpackJsonp||[]).push([[403],{842:function(t,s,a){"use strict";a.r(s);var n=a(44),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"iprovider"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#iprovider"}},[t._v("#")]),t._v(" IProvider "),a("Badge",{attrs:{text:"Interface",type:"interface"}})],1),t._v(" "),a("section",{staticClass:"symbol-info"},[a("table",{staticClass:"is-full-width"},[a("tbody",[a("tr",[a("th",[t._v("Module")]),a("td",[a("div",{staticClass:"lang-typescript"},[a("span",{staticClass:"token keyword"},[t._v("import")]),t._v(" { IProvider } "),a("span",{staticClass:"token keyword"},[t._v("from")]),t._v(" "),a("span",{staticClass:"token string"},[t._v('"@tsed/di"')])])])]),a("tr",[a("th",[t._v("Source")]),a("td",[a("a",{attrs:{href:"https://github.com/TypedProject/tsed/blob/v5.56.0/packages/di/src/interfaces/IProvider.ts#L0-L0"}},[t._v("/packages/di/src/interfaces/IProvider.ts")])])])])])]),t._v(" "),a("h2",{attrs:{id:"overview"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[t._v("#")]),t._v(" Overview")]),t._v(" "),a("div",{staticClass:"language-typescript"},[a("pre",{pre:!0,attrs:{class:"language-typescript"}},[a("code",{pre:!0,attrs:{class:"typescript-lang "}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("interface")]),t._v(" IProvider<T"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(" = ")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("any")]),t._v("> "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    /**\n     * An injection token. "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Typically an instance of `"),a("a",{pre:!0,attrs:{href:"/api/core/interfaces/Type.html"}},[a("span",{pre:!0,attrs:{class:"token"}},[t._v("Type")])]),t._v("` or `InjectionToken`"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" but can be `"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("any")]),t._v("`"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(".\n     */\n    provide"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("a",{pre:!0,attrs:{href:"/api/di/interfaces/TokenProvider.html"}},[a("span",{pre:!0,attrs:{class:"token"}},[t._v("TokenProvider")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    /**\n     * "),a("a",{pre:!0,attrs:{href:"/api/di/class/Provider.html"}},[a("span",{pre:!0,attrs:{class:"token"}},[t._v("Provider")])]),t._v(" type\n     */\n    type?"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("a",{pre:!0,attrs:{href:"/api/di/interfaces/ProviderType.html"}},[a("span",{pre:!0,attrs:{class:"token"}},[t._v("ProviderType")])]),t._v(" | "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("string")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    /**\n     * Instance build by the injector\n     */\n    instance?"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" T"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    /**\n     * Define dependencies to build the provider\n     */\n    deps?"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("a",{pre:!0,attrs:{href:"/api/di/interfaces/TokenProvider.html"}},[a("span",{pre:!0,attrs:{class:"token"}},[t._v("TokenProvider")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    /**\n     * Class to instantiate for the `token`.\n     */\n    useClass?"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("a",{pre:!0,attrs:{href:"/api/core/interfaces/Type.html"}},[a("span",{pre:!0,attrs:{class:"token"}},[t._v("Type")])]),t._v("<T>"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    /**\n     * Provide a function to build the provider\n     */\n    useFactory?"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Function"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    /**\n     * Provide an async function to build the provider\n     */\n    useAsyncFactory?"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Function"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    /**\n     * Provide predefined value\n     */\n    useValue?"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("any")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    /**\n     * "),a("a",{pre:!0,attrs:{href:"/api/di/decorators/Scope.html"}},[a("span",{pre:!0,attrs:{class:"token"}},[t._v("Scope")])]),t._v(" used by the injector to build the provider.\n     */\n    scope?"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("a",{pre:!0,attrs:{href:"/api/di/interfaces/ProviderScope.html"}},[a("span",{pre:!0,attrs:{class:"token"}},[t._v("ProviderScope")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    /**\n     * A list of resolvers which will be used to resolve missing Symbol/Class when injector invoke a Class. This property allow external DI usage.\n     */\n    resolvers?"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("a",{pre:!0,attrs:{href:"/api/di/interfaces/IDIResolver.html"}},[a("span",{pre:!0,attrs:{class:"token"}},[t._v("IDIResolver")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    /**\n     *\n     */\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("key"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("string")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("any")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);