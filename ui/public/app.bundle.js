(()=>{"use strict";var e,t={3712:(e,t,r)=>{r(7147);var n=l(r(7294)),a=l(r(3935)),u=r(4369),o=l(r(5566));function l(e){return e&&e.__esModule?e:{default:e}}var c=n.default.createElement(u.BrowserRouter,null,n.default.createElement(o.default,null));a.default.render(c,document.getElementById("contents"))},6164:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){return n.default.createElement(a.Switch,null,n.default.createElement(a.Redirect,{exact:!0,from:"/",to:"/products"}),n.default.createElement(a.Route,{path:"/products",component:u.default}),n.default.createElement(a.Route,{path:"/view/:id",component:l.default}),n.default.createElement(a.Route,{path:"/edit/:id",component:o.default}),n.default.createElement(a.Route,{component:i}))};var n=c(r(7294)),a=r(4369),u=c(r(8277)),o=c(r(6563)),l=c(r(2915));function c(e){return e&&e.__esModule?e:{default:e}}var i=function(){return n.default.createElement("h1",{style:{color:"black"}},"Page Not Found")}},5148:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n,a=(n=r(7294))&&n.__esModule?n:{default:n},u=r(9216),o=r(915);t.default=function(){return a.default.createElement(u.Navbar,{fluid:!0},a.default.createElement(u.Navbar.Header,null,a.default.createElement(u.Navbar.Brand,null,"My Company Inventory")),a.default.createElement(u.Nav,null,a.default.createElement(o.LinkContainer,{exact:!0,to:"/products"},a.default.createElement(u.NavItem,null,"Products"))))}},6449:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n,a=(n=r(7294))&&n.__esModule?n:{default:n};function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function o(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function l(e,t){return(l=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var c=function(e){var t,r;function n(t){var r,n;return(r=e.call(this,t)||this).state={value:(n=t.value,null!=n?n.toString():"")},r.onBlur=r.onBlur.bind(o(r)),r.onChange=r.onChange.bind(o(r)),r}r=e,(t=n).prototype=Object.create(r.prototype),t.prototype.constructor=t,l(t,r);var c=n.prototype;return c.onChange=function(e){e.target.value.match(/^\d*$/)&&this.setState({value:e.target.value})},c.onBlur=function(e){var t,r=this.props.onChange,n=this.state.value;r(e,(t=parseInt(n,10),Number.isNaN(t)?null:t))},c.render=function(){var e=this.state.value;return a.default.createElement("input",u({type:"text"},this.props,{value:e,onBlur:this.onBlur,onChange:this.onChange}))},n}(a.default.Component);t.default=c},5566:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){return n.default.createElement("div",null,n.default.createElement(u.default,null),n.default.createElement(a.default,null))};var n=o(r(7294)),a=o(r(6164)),u=o(r(5148));function o(e){return e&&e.__esModule?e:{default:e}}},4792:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=o(r(7294)),a=o(r(5697)),u=r(9216);function o(e){return e&&e.__esModule?e:{default:e}}function l(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function c(e,t){return(c=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var d=function(e){var t,r;function a(){var t;return i(l(t=e.call(this)||this),"handlePriceChange",(function(){t.setState({price:document.forms.productAdd.price.value})})),i(l(t),"handleSubmit",(function(e){e.preventDefault();var r=document.forms.productAdd,n=r.price.value.replace(/\$/g,""),a={Name:r.name.value,Price:n,Category:r.category.value,Image:r.imageurl.value},u=t.props.createProduct;t.setState({price:"$"}),r.name.value="",r.category.value="",r.imageurl.value="",r.price.value="",u(a)})),t.state={price:"$"},t}return r=e,(t=a).prototype=Object.create(r.prototype),t.prototype.constructor=t,c(t,r),a.prototype.render=function(){return n.default.createElement("div",{style:{paddingTop:20}},n.default.createElement("h3",null,"Add a new product to Inventory"),n.default.createElement("hr",null),n.default.createElement(u.Form,{name:"productAdd",onSubmit:this.handleSubmit},n.default.createElement("div",{className:"formContainer"},n.default.createElement("div",{className:"formCol"},n.default.createElement(u.FormGroup,{controlId:"category",name:"category"},n.default.createElement(u.ControlLabel,null,"Category"),n.default.createElement(u.FormControl,{componentClass:"select",placeholder:"select",name:"category"},n.default.createElement("option",{value:""}),n.default.createElement("option",{value:"Shirts"},"Shirts"),n.default.createElement("option",{value:"Jeans"},"Jeans"),n.default.createElement("option",{value:"Jackets"}," Jackets"),n.default.createElement("option",{value:"Sweaters"},"Sweaters "),n.default.createElement("option",{value:"Accessories"},"Accessories"))),n.default.createElement(u.FormGroup,null,n.default.createElement(u.ControlLabel,null,"Product Name"),n.default.createElement(u.FormControl,{type:"text",name:"name"}))),n.default.createElement("div",{className:"formCol"},n.default.createElement(u.FormGroup,null,n.default.createElement(u.ControlLabel,null,"Price Per Unit"),n.default.createElement(u.InputGroup,null,n.default.createElement(u.InputGroup.Addon,null,"$"),n.default.createElement(u.FormControl,{type:"text",name:"price",onChange:this.handlePriceChange}))),n.default.createElement(u.FormGroup,null,n.default.createElement(u.ControlLabel,null,"Image URL"),n.default.createElement(u.FormControl,{type:"text",name:"imageurl"})))),n.default.createElement(u.Button,{bsStyle:"primary",as:"input",type:"submit",value:"Submit"},"Add Product")))},a}(n.default.Component),f=d;t.default=f,d.propTypes={createProduct:a.default.func.isRequired}},6563:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=l(r(7294)),a=r(4369),u=r(9216),o=l(r(9006));function l(e){return e&&e.__esModule?e:{default:e}}function c(e,t){if(null==e)return{};var r,n,a={},u=Object.keys(e);for(n=0;n<u.length;n++)r=u[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}function i(e,t,r,n,a,u,o){try{var l=e[u](o),c=l.value}catch(e){return void r(e)}l.done?t(c):Promise.resolve(c).then(n,a)}function d(e){return function(){var t=this,r=arguments;return new Promise((function(n,a){var u=e.apply(t,r);function o(e){i(u,n,a,o,l,"next",e)}function l(e){i(u,n,a,o,l,"throw",e)}o(void 0)}))}}function f(){return(f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function s(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}l(r(6449)),l(r(9515));var m=function(e){var t,r;function l(){var t,r,n,a;return a=function(e,r){console.log("event.target name",e.target.name);var n=e.target,a=n.name,u=n.value,o=void 0===r?u:r;t.setState((function(e){var t;return{product:f({},e.product,(t={},t[a]=o,t))}}))},(n="onChange")in(r=s(t=e.call(this)||this))?Object.defineProperty(r,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):r[n]=a,t.state={product:{}},t.handleSubmit=t.handleSubmit.bind(s(t)),t}r=e,(t=l).prototype=Object.create(r.prototype),t.prototype.constructor=t,p(t,r);var i=l.prototype;return i.componentDidMount=function(){this.loadData()},i.componentDidUpdate=function(e){var t=e.match.params.id;this.props.match.params.id!==t&&this.loadData()},i.handleSubmit=function(){var e=d(regeneratorRuntime.mark((function e(t){var r,n,a,u;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),r=this.state.product,n=r.id,a=c(r,["id"]),e.next=6,(0,o.default)("mutation productUpdate(\n      $id: Int!\n      $modify: ProductUpdateInputs!\n    ) {\n      productUpdate(\n        id: $id\n        modify: $modify\n      ) {\n        id Category Name Price Image\n      }\n    }",{modify:a,id:n});case 6:(u=e.sent)&&(this.setState({product:u.productUpdate}),alert("Update Product Successfully"));case 8:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}(),i.loadData=function(){var e=d(regeneratorRuntime.mark((function e(){var t,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.props.match.params.id,e.next=4,(0,o.default)("query Product($id: Int!) {\n      Product(id: $id) {\n        id Name Price Category Image\n      }\n    }",{id:t});case 4:r=e.sent,this.setState({product:r.Product});case 6:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}(),i.render=function(){var e=this.state.product,t=e.Name,r=e.Price,o=e.Image,l=e.id,c=e.Category;return l?n.default.createElement("div",{style:{color:"white"}},n.default.createElement("form",{onSubmit:this.handleSubmit},n.default.createElement("h1",null,"Editing Product ID: "+l),n.default.createElement("table",null,n.default.createElement("tbody",null,n.default.createElement("tr",null,n.default.createElement(u.FormGroup,null,n.default.createElement(u.ControlLabel,null,"Name"),n.default.createElement(u.FormControl,{type:"text",name:"Name",value:t,onChange:this.onChange,key:l}))),n.default.createElement("tr",null,n.default.createElement(u.FormGroup,{controlId:"form-category"},n.default.createElement(u.ControlLabel,null,"Category"),n.default.createElement(u.FormControl,{componentClass:"select",value:c,name:"Category",onChange:this.onChange},n.default.createElement("option",{value:"Shirts"},"Shirts"),n.default.createElement("option",{value:"Jeans"},"Jeans"),n.default.createElement("option",{value:"Jackets"}," Jackets"),n.default.createElement("option",{value:"Sweaters"},"Sweaters "),n.default.createElement("option",{value:"Accessories"},"Accessories")))),n.default.createElement("tr",null,n.default.createElement(u.FormGroup,null,n.default.createElement(u.ControlLabel,null,"Price"),n.default.createElement(u.FormControl,{name:"Price",value:r,onChange:this.onChange,key:l}))),n.default.createElement("tr",null,n.default.createElement(u.FormGroup,null,n.default.createElement(u.ControlLabel,null,"Image:"),n.default.createElement(u.FormControl,{name:"Image",value:o,onChange:this.onChange,key:l}))),n.default.createElement("tr",null,n.default.createElement("tr",null,n.default.createElement(u.Button,{bsStyle:"primary",as:"input",type:"submit",value:"Submit"},"Submit")),n.default.createElement("td",null)))),n.default.createElement("div",{style:{padding:"10px 0"}},n.default.createElement(a.Link,{to:"/edit/"+(l-1)},"Prev")," | ",n.default.createElement(a.Link,{to:"/edit/"+(l+1)},"Next")),n.default.createElement("div",{style:{padding:"10px 0"}},n.default.createElement(a.Link,{to:"/"},"Back to Home")))):n.default.createElement("h1",null,"Loading Data...")},l}(n.default.Component);t.default=m},2915:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=u(r(7294)),a=u(r(9006));function u(e){return e&&e.__esModule?e:{default:e}}function o(e,t,r,n,a,u,o){try{var l=e[u](o),c=l.value}catch(e){return void r(e)}l.done?t(c):Promise.resolve(c).then(n,a)}function l(e,t){return(l=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var c=function(e){var t,r;function u(){var t;return(t=e.call(this)||this).state={product:{}},t}r=e,(t=u).prototype=Object.create(r.prototype),t.prototype.constructor=t,l(t,r);var c=u.prototype;return c.componentDidMount=function(){this.loadData()},c.loadData=function(){var e,t=(e=regeneratorRuntime.mark((function e(){var t,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.props.match.params.id,e.next=4,(0,a.default)("query Product($id: Int!) {\n      Product(id: $id) {\n        id Category Name Price Image\n      }\n    }",{id:t});case 4:(r=e.sent)?this.setState({product:r.Product}):this.setState({product:null});case 6:case"end":return e.stop()}}),e,this)})),function(){var t=this,r=arguments;return new Promise((function(n,a){var u=e.apply(t,r);function l(e){o(u,n,a,l,c,"next",e)}function c(e){o(u,n,a,l,c,"throw",e)}l(void 0)}))});return function(){return t.apply(this,arguments)}}(),c.render=function(){var e=this.state.product;return n.default.createElement("img",{style:{maxWidth:"100vw"},src:e.Image,alt:e.Name})},u}(n.default.Component);t.default=c},8277:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=l(r(7294)),a=l(r(9883)),u=l(r(4792)),o=l(r(9006));function l(e){return e&&e.__esModule?e:{default:e}}function c(e,t,r,n,a,u,o){try{var l=e[u](o),c=l.value}catch(e){return void r(e)}l.done?t(c):Promise.resolve(c).then(n,a)}function i(e){return function(){var t=this,r=arguments;return new Promise((function(n,a){var u=e.apply(t,r);function o(e){c(u,n,a,o,l,"next",e)}function l(e){c(u,n,a,o,l,"throw",e)}o(void 0)}))}}function d(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var s=function(e){var t,r;function l(){var t;return(t=e.call(this)||this).state={products:[]},t.createProduct=t.createProduct.bind(d(t)),t.deleteProduct=t.deleteProduct.bind(d(t)),t}r=e,(t=l).prototype=Object.create(r.prototype),t.prototype.constructor=t,f(t,r);var c=l.prototype;return c.componentDidMount=function(){this.loadData()},c.loadData=function(){var e=i(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=3,(0,o.default)("query {\n      productList {\n        id Category Name Price Image\n      }\n    }");case 3:(t=e.sent)&&this.setState({products:t.productList});case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}(),c.createProduct=function(){var e=i(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=3,(0,o.default)("mutation productAdd($product: ProductInputs!) {\n      productAdd(product: $product) {\n        id \n      }\n    }",{product:t});case 3:e.sent&&this.loadData();case 5:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}(),c.deleteProduct=function(){var e=i(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=3,(0,o.default)("mutation productDelete($id: Int!) {\n      productDelete(id: $id)\n    }",{id:t});case 3:if(e.sent.productDelete){e.next=7;break}return alert("Product deleted unsuccessfully"),e.abrupt("return",!1);case 7:return alert("Product deleted successfully"),this.loadData(),e.abrupt("return",!0);case 10:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}(),c.render=function(){var e=this.state.products;return n.default.createElement("div",{style:{color:"black"}},n.default.createElement(a.default,{products:e,deleteProduct:this.deleteProduct}),n.default.createElement(u.default,{createProduct:this.createProduct}))},l}(n.default.Component);t.default=s},883:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n,a=(n=r(7294))&&n.__esModule?n:{default:n},u=r(4369),o=r(9216);t.default=function(e){var t=e.index,r=e.product,n=e.deleteProduct;return a.default.createElement("tr",{key:t},a.default.createElement("td",{className:"table-col"},r.Name),a.default.createElement("td",{className:"table-col"},"$",r.Price),a.default.createElement("td",{className:"table-col"},r.Category),a.default.createElement("td",{className:"table-col"},a.default.createElement(u.Link,{to:"/view/"+r.id},"View")),a.default.createElement("td",null,a.default.createElement(u.Link,{to:"/edit/"+r.id},"Edit")," | ",a.default.createElement(o.Button,{bsStyle:"primary",type:"button",onClick:function(){n(r.id)}},"Delete",a.default.createElement(o.Glyphicon,{style:{paddingLeft:10},glyph:"remove"}))))}},9883:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=u(r(7294)),a=(r(9216),u(r(883)));function u(e){return e&&e.__esModule?e:{default:e}}t.default=function(e){var t=e.products,r=e.deleteProduct;return n.default.createElement("div",null,n.default.createElement("p",null,"Showing all available products"),n.default.createElement("hr",null),n.default.createElement("table",null,n.default.createElement("thead",null,n.default.createElement("tr",null,n.default.createElement("th",{className:"table-col"},"Product Name"),n.default.createElement("th",{className:"table-col"},"Price"),n.default.createElement("th",{className:"table-col"},"Category"),n.default.createElement("th",{className:"table-col"},"Image"),n.default.createElement("th",{className:"table-col"},"Action"))),n.default.createElement("tbody",null,t.map((function(e,t){return n.default.createElement(a.default,{product:e,index:t,key:e.id,deleteProduct:r})})))))}},9515:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n,a=(n=r(7294))&&n.__esModule?n:{default:n};function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function o(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function l(e,t){return(l=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var c=function(e){var t,r;function n(t){var r,n;return(r=e.call(this,t)||this).state={value:(n=t.value,null!=n?n:"")},r.onBlur=r.onBlur.bind(o(r)),r.onChange=r.onChange.bind(o(r)),r}r=e,(t=n).prototype=Object.create(r.prototype),t.prototype.constructor=t,l(t,r);var c=n.prototype;return c.onChange=function(e){this.setState({value:e.target.value})},c.onBlur=function(e){var t;(0,this.props.onChange)(e,0===(t=this.state.value).trim().length?null:t)},c.render=function(){var e=this.state.value,t=this.props,r=t.tag,n=void 0===r?"input":r,o=function(e,t){if(null==e)return{};var r,n,a={},u=Object.keys(e);for(n=0;n<u.length;n++)r=u[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(t,["tag"]);return a.default.createElement(n,u({},o,{value:e,onBlur:this.onBlur,onChange:this.onChange}))},n}(a.default.Component);t.default=c},9006:(e,t)=>{function r(e,t,r,n,a,u,o){try{var l=e[u](o),c=l.value}catch(e){return void r(e)}l.done?t(c):Promise.resolve(c).then(n,a)}function n(e){return function(){var t=this,n=arguments;return new Promise((function(a,u){var o=e.apply(t,n);function l(e){r(o,a,u,l,c,"next",e)}function c(e){r(o,a,u,l,c,"throw",e)}l(void 0)}))}}function a(){return(a=n(regeneratorRuntime.mark((function e(t,r){var n,a,u;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return void 0===r&&(r={}),e.next=3,fetch(window.ENV.UI_API_ENDPOINT,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({query:t,variables:r})});case 3:return n=e.sent,e.next=6,n.text();case 6:return a=e.sent,u=JSON.parse(a),e.abrupt("return",u.data);case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){return a.apply(this,arguments)}}},r={};function n(e){var a=r[e];if(void 0!==a)return a.exports;var u=r[e]={exports:{}};return t[e](u,u.exports,n),u.exports}n.m=t,e=[],n.O=(t,r,a,u)=>{if(!r){var o=1/0;for(i=0;i<e.length;i++){for(var[r,a,u]=e[i],l=!0,c=0;c<r.length;c++)(!1&u||o>=u)&&Object.keys(n.O).every((e=>n.O[e](r[c])))?r.splice(c--,1):(l=!1,u<o&&(o=u));l&&(e.splice(i--,1),t=a())}return t}u=u||0;for(var i=e.length;i>0&&e[i-1][2]>u;i--)e[i]=e[i-1];e[i]=[r,a,u]},n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e={143:0};n.O.j=t=>0===e[t];var t=(t,r)=>{var a,u,[o,l,c]=r,i=0;for(a in l)n.o(l,a)&&(n.m[a]=l[a]);for(c&&c(n),t&&t(r);i<o.length;i++)u=o[i],n.o(e,u)&&e[u]&&e[u][0](),e[o[i]]=0;n.O()},r=self.webpackChunkassignment6_ui=self.webpackChunkassignment6_ui||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})();var a=n.O(void 0,[736],(()=>n(3712)));a=n.O(a)})();