(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,,,function(e,t,a){e.exports=a(20)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(4),s=a.n(o),c=a(8),l=a(2),i=a(5),d=a(6),u=a(9),m=a(7),p=a(10),f=a(1);a(16);var b=function(e){var t=e.user;return r.a.createElement("div",{className:"user"},r.a.createElement("p",{className:"user__responsible"},"responsible:",r.a.createElement("span",{className:"user_indent"},t.name)),r.a.createElement("p",{className:"user__email"},"contact:",r.a.createElement("span",{className:"user_indent"},t.email)))};a(17);var E=function(e){var t=e.todo;return r.a.createElement("li",{className:"todo__list todo-card"},r.a.createElement("a",{href:"https://trello.com",className:"todo-card"},r.a.createElement("h2",null,t.title),r.a.createElement("p",{className:"todo-list__completed"},"completed:",r.a.createElement("span",{className:"todo-list_indent ".concat(!1===t.completed?"text-red":"text-green")},!1===t.completed?"\u2a2f":"\u2713")),r.a.createElement("div",{className:"todo-list__user"},r.a.createElement(b,{user:t.user}))))};a(18);var h=function(e){var t=e.todos;return r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,r.a.createElement("span",{className:"todo-title"},"Todos: ")),r.a.createElement("ul",{className:"todo-list__items"},t.map(function(e){return r.a.createElement(E,{todo:e,key:e.id})})))};a(19);function O(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}function g(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?O(a,!0).forEach(function(t){Object(f.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):O(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}var v=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={preparedTodos:[],isLoading:!1,hasError:!1,isInitialized:!1,isSorted:!1},a.receiveTodosAndUsers=function(){a.setState({isLoading:!0,hasError:!1,isInitialized:!0}),Promise.all([fetch("https://jsonplaceholder.typicode.com/todos"),fetch("https://jsonplaceholder.typicode.com/users")]).then(function(e){var t=Object(l.a)(e,2),a=t[0],n=t[1];return Promise.all([a.json(),n.json()])}).then(function(e){var t=Object(l.a)(e,2),n=function(e,t){return e.map(function(e){return g({},e,{user:t[e.userId]})})}(t[0],t[1].reduce(function(e,t){return g({},e,Object(f.a)({},t.id,t))},{}));a.setState({preparedTodos:n,sortedTodos:Object(c.a)(n).sort(function(e,t){return e.title<t.title?-1:e.title>t.title?1:0}),isLoading:!1})}).catch(function(){a.setState({hasError:!0,isLoading:!1})})},a.sortTodos=function(){a.setState(function(e){return{isSorted:!e.isSorted}})},a}return Object(p.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this.state,t=e.preparedTodos,a=e.isLoading,n=e.hasError,o=e.isInitialized,s=e.isSorted,c=e.sortedTodos;return a?r.a.createElement("p",{className:"loading"},"Loading..."):n?r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",{className:"App__title"},"You want to upload again."),r.a.createElement("button",{type:"button",className:"btn btn-warning load load-again",onClick:this.receiveTodosAndUsers},"Load again")):o?r.a.createElement("div",{className:"App"},r.a.createElement("button",{type:"button",onClick:this.sortTodos,className:"btn btn-primary load"},"Sort"),r.a.createElement(h,{todos:s?c:t})):r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",{className:"App__title"},"Want to upload a list of todos?"),r.a.createElement("button",{type:"button",className:"btn btn-primary load",onClick:this.receiveTodosAndUsers},"Load"))}}]),t}(r.a.Component);s.a.render(r.a.createElement(v,null),document.getElementById("root"))}],[[11,1,2]]]);
//# sourceMappingURL=main.966effc3.chunk.js.map