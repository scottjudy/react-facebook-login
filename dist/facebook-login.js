!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("react")):"function"==typeof define&&define.amd?define(["react"],t):"object"==typeof exports?exports.FacebookLogin=t(require("react")):e.FacebookLogin=t(e.react)}(this,function(e){return function(e){function t(n){if(o[n])return o[n].exports;var r=o[n]={exports:{},id:n,loaded:!1};return e[n].call(r.exports,r,r.exports,t),r.loaded=!0,r.exports}var o={};return t.m=e,t.c=o,t.p="",t(0)}([function(e,t,o){e.exports=o(2)},function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var i=function(){function e(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}(),a=o(5),c=n(a),p=o(3),l=n(p),u=function(e){function t(o){var n=this;r(this,t),e.call(this,o),this.responseApi=function(e){FB.api("/me",{fields:n.props.fields},function(t){Object.assign(t,e),n.props.callback(t)})},this.checkLoginState=function(e){e.authResponse?n.responseApi(e.authResponse):n.props.callback&&n.props.callback({status:e.status})},this.click=function(){FB.login(n.checkLoginState,{scope:n.props.scope})}}return s(t,e),i(t,null,[{key:"propTypes",value:{callback:a.PropTypes.func.isRequired,appId:a.PropTypes.string.isRequired,xfbml:a.PropTypes.bool,cookie:a.PropTypes.bool,scope:a.PropTypes.string,textButton:a.PropTypes.string,autoLoad:a.PropTypes.bool,size:a.PropTypes.string,fields:a.PropTypes.string,cssClass:a.PropTypes.string,version:a.PropTypes.string,icon:a.PropTypes.string,language:a.PropTypes.string},enumerable:!0},{key:"defaultProps",value:{textButton:"Login with Facebook",scope:"public_profile, email",xfbml:!1,cookie:!1,size:"metro",fields:"name",cssClass:"kep-login-facebook",version:"2.3",language:"en_US"},enumerable:!0}]),t.prototype.componentDidMount=function(){var e=this,t=document.createElement("div");t.id="fb-root",document.body.appendChild(t),window.fbAsyncInit=function(){FB.init({appId:e.props.appId,xfbml:e.props.xfbml,cookie:e.props.cookie,version:"v"+e.props.version}),e.props.autoLoad&&FB.getLoginStatus(e.checkLoginState)},function(t,o,n){var r=t.getElementsByTagName(o)[0],s=r,i=r;t.getElementById(n)||(i=t.createElement(o),i.id=n,i.src="//connect.facebook.net/"+e.props.language+"/all.js",s.parentNode.insertBefore(i,s))}(document,"script","facebook-jssdk")},t.prototype.renderWithFontAwesome=function(){return c["default"].createElement("div",null,c["default"].createElement("link",{rel:"stylesheet",href:"//maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css"}),c["default"].createElement("button",{className:this.props.cssClass+" "+this.props.size,onClick:this.click},c["default"].createElement("i",{className:"fa "+this.props.icon})," ",this.props.textButton),c["default"].createElement("style",{dangerouslySetInnerHTML:{__html:l["default"]}}))},t.prototype.render=function(){return this.props.icon?this.renderWithFontAwesome():c["default"].createElement("div",null,c["default"].createElement("button",{className:this.props.cssClass+" "+this.props.size,onClick:this.click},this.props.textButton),c["default"].createElement("style",{dangerouslySetInnerHTML:{__html:l["default"]}}))},t}(c["default"].Component);t["default"]=u,e.exports=t["default"]},function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}t.__esModule=!0;var r=o(1),s=n(r);t["default"]=s["default"],e.exports=t["default"]},function(e,t,o){t=e.exports=o(4)(),t.push([e.id,".kep-login-facebook{font-family:Helvetica,sans-serif;font-weight:700;-webkit-font-smoothing:antialiased;color:#fff;cursor:pointer;display:inline-block;font-size:calc(.27548vw + 12.71074px);text-decoration:none;text-transform:uppercase;transition:background-color .3s,border-color .3s;background-color:#4c69ba;border:calc(.06887vw + .67769px) solid #4c69ba;padding:calc(.34435vw + 13.38843px) calc(.34435vw + 18.38843px)}.kep-login-facebook.small{padding:calc(.34435vw + 3.38843px) calc(.34435vw + 8.38843px)}.kep-login-facebook.medium{padding:calc(.34435vw + 8.38843px) calc(.34435vw + 13.38843px)}.kep-login-facebook.metro{border-radius:0}.kep-login-facebook .fa{margin-right:calc(.34435vw + 3.38843px)}",""]),t.locals={"kep-login-facebook":"kep-login-facebook",small:"small",medium:"medium",metro:"metro",fa:"fa"}},function(e,t){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var o=this[t];o[2]?e.push("@media "+o[2]+"{"+o[1]+"}"):e.push(o[1])}return e.join("")},e.i=function(t,o){"string"==typeof t&&(t=[[null,t,""]]);for(var n={},r=0;r<this.length;r++){var s=this[r][0];"number"==typeof s&&(n[s]=!0)}for(r=0;r<t.length;r++){var i=t[r];"number"==typeof i[0]&&n[i[0]]||(o&&!i[2]?i[2]=o:o&&(i[2]="("+i[2]+") and ("+o+")"),e.push(i))}},e}},function(t,o){t.exports=e}])});