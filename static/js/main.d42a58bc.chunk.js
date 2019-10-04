(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,a){e.exports=a(29)},25:function(e,t,a){},26:function(e,t,a){},27:function(e,t,a){},28:function(e,t,a){},29:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(5),c=a.n(o),s=a(3),i=a(11),l=a(9),d=a(10),u=a(4),p=a(14);function m(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}function O(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?m(a,!0).forEach(function(t){Object(l.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):m(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}var E={ADD_TODOS:"TODOS::ADD",SWITCH_LOADING:"LOADING::SWITCH",IS_INITIALIZED:"INITIALIZED::IS",HAS_ERROR:"ERROR::HAS",IS_SORT:"IS::SORT",ADD_SORTED_TODOS:"SORTED_TODOS::ADD"},f=function(e){return{type:E.SWITCH_LOADING,payload:e}},S=function(e){return{type:E.HAS_ERROR,payload:e}},_=function(){return function(e){var t;e(f(!0)),e((t=!0,{type:E.IS_INITIALIZED,payload:t})),e(S(!1)),Promise.all([fetch("https://jsonplaceholder.typicode.com/todos"),fetch("https://jsonplaceholder.typicode.com/users")]).then(function(e){var t=Object(d.a)(e,2),a=t[0],n=t[1];return Promise.all([a.json(),n.json()])}).then(function(t){var a=Object(d.a)(t,2),n=a[0],r=a[1].reduce(function(e,t){return O({},e,Object(l.a)({},t.id,t))},{});function o(e,t){return e.map(function(e){return O({},e,{user:t[e.userId]})})}var c,s=o(n,r),i=o(n,r).sort(function(e,t){return e.title<t.title?-1:e.title>t.title?1:0});e(f(!1)),e(function(e){return{type:E.ADD_TODOS,payload:e}}(s)),e((c=i,{type:E.ADD_SORTED_TODOS,payload:c}))}).catch(function(){e(S(!0)),e(f(!1))})}},b={todos:[],todosSorted:[],isLoading:!1,isInitialized:!1,hasError:!1,isSorted:!1};var D=Object(u.c)(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case E.ADD_TODOS:return O({},e,{todos:Object(i.a)(t.payload)});case E.ADD_SORTED_TODOS:return O({},e,{todosSorted:Object(i.a)(t.payload)});case E.SWITCH_LOADING:return O({},e,{isLoading:t.payload});case E.IS_INITIALIZED:return O({},e,{isInitialized:t.payload});case E.HAS_ERROR:return O({},e,{hasError:t.payload});case E.IS_SORT:return O({},e,{isSorted:!e.isSorted});default:return e}},Object(u.a)(p.a));a(25);var I=function(e){var t=e.user;return r.a.createElement("div",{className:"user"},r.a.createElement("p",{className:"user__responsible"},"responsible:",r.a.createElement("span",{className:"user_indent"},t.name)),r.a.createElement("p",{className:"user__email"},"contact:",r.a.createElement("span",{className:"user_indent"},t.email)))};a(26);var y=function(e){var t=e.todo;return r.a.createElement("li",{className:"todo__list todo-card"},r.a.createElement("a",{href:"https://trello.com",className:"todo-card"},r.a.createElement("h2",null,t.title),r.a.createElement("p",{className:"todo-list__completed"},"completed:",r.a.createElement("span",{className:"todo-list_indent ".concat(!1===t.completed?"text-red":"text-green")},!1===t.completed?"\u2a2f":"\u2713")),r.a.createElement("div",{className:"todo-list__user"},r.a.createElement(I,{user:t.user}))))};a(27);var T=function(e){var t=e.todos,a=void 0===t?[]:t,n=e.todosSorted,o=void 0===n?[]:n,c=e.isSorted;return r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,r.a.createElement("span",{className:"todo-title"},"Todos: ")),r.a.createElement("ul",{className:"todo-list__items"},c?o.map(function(e){return r.a.createElement(y,{todo:e,key:e.id})}):a.map(function(e){return r.a.createElement(y,{todo:e,key:e.id})})))},v=Object(s.b)(function(e){return{todos:e.todos,todosSorted:e.todosSorted,isSorted:e.isSorted}})(T),h=(a(28),function(e){var t=e.isLoading,a=e.receiveTodosAndUsers,n=e.isInitialized,o=e.hasError,c=e.sortTodos;return t?r.a.createElement("p",{className:"loading"},"Loading..."):o?r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",{className:"App__title"},"You want to upload again."),r.a.createElement("button",{type:"button",className:"btn btn-warning load load-again",onClick:a},"Load again")):n?r.a.createElement("div",{className:"App"},r.a.createElement("button",{type:"button",onClick:c,className:"btn btn-primary load"},"Sort"),r.a.createElement(v,null)):r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",{className:"App__title"},"Want to upload a list of todos?"),r.a.createElement("button",{type:"button",className:"btn btn-primary load",onClick:a},"Load"))}),N=Object(s.b)(function(e){return{isLoading:e.isLoading,isInitialized:e.isInitialized,hasError:e.hasError}},function(e){return{receiveTodosAndUsers:function(){return e(_())},sortTodos:function(){return e({type:E.IS_SORT})}}})(h);c.a.render(r.a.createElement(s.a,{store:D},r.a.createElement(N,null)),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.d42a58bc.chunk.js.map