(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-04268801"],{1517:function(t,e,i){
/*!
  * Bootstrap offcanvas.js v5.1.3 (https://getbootstrap.com/)
  * Copyright 2011-2021 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
(function(e,n){t.exports=n(i("848f"),i("109e"),i("6a95"),i("302d"))})(0,(function(t,e,i,n){"use strict";const s=t=>t&&"object"===typeof t&&"default"in t?t:{default:t},a=s(t),c=s(e),o=s(i),r=s(n),l=1e3,d="transitionend",u=t=>null===t||void 0===t?""+t:{}.toString.call(t).match(/\s([a-z]+)/i)[1].toLowerCase(),b=t=>{let e=t.getAttribute("data-bs-target");if(!e||"#"===e){let i=t.getAttribute("href");if(!i||!i.includes("#")&&!i.startsWith("."))return null;i.includes("#")&&!i.startsWith("#")&&(i="#"+i.split("#")[1]),e=i&&"#"!==i?i.trim():null}return e},h=t=>{const e=b(t);return e?document.querySelector(e):null},g=t=>{if(!t)return 0;let{transitionDuration:e,transitionDelay:i}=window.getComputedStyle(t);const n=Number.parseFloat(e),s=Number.parseFloat(i);return n||s?(e=e.split(",")[0],i=i.split(",")[0],(Number.parseFloat(e)+Number.parseFloat(i))*l):0},p=t=>{t.dispatchEvent(new Event(d))},f=t=>!(!t||"object"!==typeof t)&&("undefined"!==typeof t.jquery&&(t=t[0]),"undefined"!==typeof t.nodeType),m=t=>f(t)?t.jquery?t[0]:t:"string"===typeof t&&t.length>0?document.querySelector(t):null,O=(t,e,i)=>{Object.keys(i).forEach(n=>{const s=i[n],a=e[n],c=a&&f(a)?"element":u(a);if(!new RegExp(s).test(c))throw new TypeError(`${t.toUpperCase()}: Option "${n}" provided type "${c}" but expected type "${s}".`)})},j=t=>!(!f(t)||0===t.getClientRects().length)&&"visible"===getComputedStyle(t).getPropertyValue("visibility"),_=t=>!t||t.nodeType!==Node.ELEMENT_NODE||(!!t.classList.contains("disabled")||("undefined"!==typeof t.disabled?t.disabled:t.hasAttribute("disabled")&&"false"!==t.getAttribute("disabled"))),y=t=>{t.offsetHeight},v=()=>{const{jQuery:t}=window;return t&&!document.body.hasAttribute("data-bs-no-jquery")?t:null},C=[],w=t=>{"loading"===document.readyState?(C.length||document.addEventListener("DOMContentLoaded",()=>{C.forEach(t=>t())}),C.push(t)):t()},k=t=>{w(()=>{const e=v();if(e){const i=t.NAME,n=e.fn[i];e.fn[i]=t.jQueryInterface,e.fn[i].Constructor=t,e.fn[i].noConflict=()=>(e.fn[i]=n,t.jQueryInterface)}})},A=t=>{"function"===typeof t&&t()},E=(t,e,i=!0)=>{if(!i)return void A(t);const n=5,s=g(e)+n;let a=!1;const c=({target:i})=>{i===e&&(a=!0,e.removeEventListener(d,c),A(t))};e.addEventListener(d,c),setTimeout(()=>{a||p(e)},s)},N=".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",x=".sticky-top";class L{constructor(){this._element=document.body}getWidth(){const t=document.documentElement.clientWidth;return Math.abs(window.innerWidth-t)}hide(){const t=this.getWidth();this._disableOverFlow(),this._setElementAttributes(this._element,"paddingRight",e=>e+t),this._setElementAttributes(N,"paddingRight",e=>e+t),this._setElementAttributes(x,"marginRight",e=>e-t)}_disableOverFlow(){this._saveInitialAttribute(this._element,"overflow"),this._element.style.overflow="hidden"}_setElementAttributes(t,e,i){const n=this.getWidth(),s=t=>{if(t!==this._element&&window.innerWidth>t.clientWidth+n)return;this._saveInitialAttribute(t,e);const s=window.getComputedStyle(t)[e];t.style[e]=i(Number.parseFloat(s))+"px"};this._applyManipulationCallback(t,s)}reset(){this._resetElementAttributes(this._element,"overflow"),this._resetElementAttributes(this._element,"paddingRight"),this._resetElementAttributes(N,"paddingRight"),this._resetElementAttributes(x,"marginRight")}_saveInitialAttribute(t,e){const i=t.style[e];i&&c.default.setDataAttribute(t,e,i)}_resetElementAttributes(t,e){const i=t=>{const i=c.default.getDataAttribute(t,e);"undefined"===typeof i?t.style.removeProperty(e):(c.default.removeDataAttribute(t,e),t.style[e]=i)};this._applyManipulationCallback(t,i)}_applyManipulationCallback(t,e){f(t)?e(t):a.default.find(t,this._element).forEach(e)}isOverflowing(){return this.getWidth()>0}}const P={className:"modal-backdrop",isVisible:!0,isAnimated:!1,rootElement:"body",clickCallback:null},D={className:"string",isVisible:"boolean",isAnimated:"boolean",rootElement:"(element|string)",clickCallback:"(function|null)"},I="backdrop",$="fade",M="show",S="mousedown.bs."+I;class H{constructor(t){this._config=this._getConfig(t),this._isAppended=!1,this._element=null}show(t){this._config.isVisible?(this._append(),this._config.isAnimated&&y(this._getElement()),this._getElement().classList.add(M),this._emulateAnimation(()=>{A(t)})):A(t)}hide(t){this._config.isVisible?(this._getElement().classList.remove(M),this._emulateAnimation(()=>{this.dispose(),A(t)})):A(t)}_getElement(){if(!this._element){const t=document.createElement("div");t.className=this._config.className,this._config.isAnimated&&t.classList.add($),this._element=t}return this._element}_getConfig(t){return t={...P,..."object"===typeof t?t:{}},t.rootElement=m(t.rootElement),O(I,t,D),t}_append(){this._isAppended||(this._config.rootElement.append(this._getElement()),o.default.on(this._getElement(),S,()=>{A(this._config.clickCallback)}),this._isAppended=!0)}dispose(){this._isAppended&&(o.default.off(this._element,S),this._element.remove(),this._isAppended=!1)}_emulateAnimation(t){E(t,this._getElement(),this._config.isAnimated)}}const q={trapElement:null,autofocus:!0},G={trapElement:"element",autofocus:"boolean"},T="focustrap",R="bs.focustrap",F="."+R,W="focusin"+F,z="keydown.tab"+F,V="Tab",U="forward",K="backward";class Q{constructor(t){this._config=this._getConfig(t),this._isActive=!1,this._lastTabNavDirection=null}activate(){const{trapElement:t,autofocus:e}=this._config;this._isActive||(e&&t.focus(),o.default.off(document,F),o.default.on(document,W,t=>this._handleFocusin(t)),o.default.on(document,z,t=>this._handleKeydown(t)),this._isActive=!0)}deactivate(){this._isActive&&(this._isActive=!1,o.default.off(document,F))}_handleFocusin(t){const{target:e}=t,{trapElement:i}=this._config;if(e===document||e===i||i.contains(e))return;const n=a.default.focusableChildren(i);0===n.length?i.focus():this._lastTabNavDirection===K?n[n.length-1].focus():n[0].focus()}_handleKeydown(t){t.key===V&&(this._lastTabNavDirection=t.shiftKey?K:U)}_getConfig(t){return t={...q,..."object"===typeof t?t:{}},O(T,t,G),t}}const B=(t,e="hide")=>{const i="click.dismiss"+t.EVENT_KEY,n=t.NAME;o.default.on(document,i,`[data-bs-dismiss="${n}"]`,(function(i){if(["A","AREA"].includes(this.tagName)&&i.preventDefault(),_(this))return;const s=h(this)||this.closest("."+n),a=t.getOrCreateInstance(s);a[e]()}))},J="offcanvas",Y="bs.offcanvas",X="."+Y,Z=".data-api",tt=`load${X}${Z}`,et="Escape",it={backdrop:!0,keyboard:!0,scroll:!1},nt={backdrop:"boolean",keyboard:"boolean",scroll:"boolean"},st="show",at="offcanvas-backdrop",ct=".offcanvas.show",ot="show"+X,rt="shown"+X,lt="hide"+X,dt="hidden"+X,ut=`click${X}${Z}`,bt="keydown.dismiss"+X,ht='[data-bs-toggle="offcanvas"]';class gt extends r.default{constructor(t,e){super(t),this._config=this._getConfig(e),this._isShown=!1,this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._addEventListeners()}static get NAME(){return J}static get Default(){return it}toggle(t){return this._isShown?this.hide():this.show(t)}show(t){if(this._isShown)return;const e=o.default.trigger(this._element,ot,{relatedTarget:t});if(e.defaultPrevented)return;this._isShown=!0,this._element.style.visibility="visible",this._backdrop.show(),this._config.scroll||(new L).hide(),this._element.removeAttribute("aria-hidden"),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.classList.add(st);const i=()=>{this._config.scroll||this._focustrap.activate(),o.default.trigger(this._element,rt,{relatedTarget:t})};this._queueCallback(i,this._element,!0)}hide(){if(!this._isShown)return;const t=o.default.trigger(this._element,lt);if(t.defaultPrevented)return;this._focustrap.deactivate(),this._element.blur(),this._isShown=!1,this._element.classList.remove(st),this._backdrop.hide();const e=()=>{this._element.setAttribute("aria-hidden",!0),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._element.style.visibility="hidden",this._config.scroll||(new L).reset(),o.default.trigger(this._element,dt)};this._queueCallback(e,this._element,!0)}dispose(){this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}_getConfig(t){return t={...it,...c.default.getDataAttributes(this._element),..."object"===typeof t?t:{}},O(J,t,nt),t}_initializeBackDrop(){return new H({className:at,isVisible:this._config.backdrop,isAnimated:!0,rootElement:this._element.parentNode,clickCallback:()=>this.hide()})}_initializeFocusTrap(){return new Q({trapElement:this._element})}_addEventListeners(){o.default.on(this._element,bt,t=>{this._config.keyboard&&t.key===et&&this.hide()})}static jQueryInterface(t){return this.each((function(){const e=gt.getOrCreateInstance(this,t);if("string"===typeof t){if(void 0===e[t]||t.startsWith("_")||"constructor"===t)throw new TypeError(`No method named "${t}"`);e[t](this)}}))}}return o.default.on(document,ut,ht,(function(t){const e=h(this);if(["A","AREA"].includes(this.tagName)&&t.preventDefault(),_(this))return;o.default.one(e,dt,()=>{j(this)&&this.focus()});const i=a.default.findOne(ct);i&&i!==e&&gt.getInstance(i).hide();const n=gt.getOrCreateInstance(e);n.toggle(this)})),o.default.on(window,tt,()=>a.default.find(ct).forEach(t=>gt.getOrCreateInstance(t).show())),B(gt),k(gt),gt}))},fd15:function(t,e,i){"use strict";i.r(e);i("a4d3"),i("e01a");var n=i("7a23"),s={class:"container"},a={class:"bi bi-cart3 position-relative"},c={key:0,class:"position-absolute start-100 translate-middle badge rounded-pill bg-danger px-1",style:{"font-size":"6px",top:"10px"}},o=Object(n["g"])("span",{class:"visually-hidden"},"unread messages",-1),r={class:"row py-3"},l=["src"],d={class:"card-body pb-0"},u={key:0},b={key:1},h={class:"d-block"},g={class:"card-footer bg-transparent border-top-0"},p=["onClick","disabled"],f={class:"spinner-border spinner-border-sm",role:"status","aria-hidden":"true"},m=Object(n["i"])("商品詳細資訊(modal)"),O={class:"spinner-border spinner-border-sm",role:"status","aria-hidden":"true"},j=Object(n["i"])("商品詳細資訊(router-link)"),_={class:"spinner-border spinner-border-sm",role:"status","aria-hidden":"true"},y=Object(n["i"])("商品詳細資訊(router-link2)"),v=["onClick","disabled"],C={class:"spinner-border spinner-border-sm",role:"status","aria-hidden":"true"},w=Object(n["i"])("加到購物車");function k(t,e,i,k,A,E){var N=Object(n["E"])("router-link"),x=Object(n["E"])("GuestProductModal"),L=Object(n["E"])("CartCanvass");return Object(n["y"])(),Object(n["f"])("div",s,[Object(n["g"])("a",{href:"#",style:{position:"fixed",bottom:"20px",right:"20px","z-index":"9","font-size":"50px"},onClick:e[0]||(e[0]=Object(n["T"])((function(t){return E.guestOpenCart()}),["prevent"]))},[Object(n["g"])("i",a,[A.cartNum>0?(Object(n["y"])(),Object(n["f"])("span",c,[Object(n["i"])(Object(n["H"])(A.cartNum)+" ",1),o])):Object(n["e"])("",!0)])]),Object(n["g"])("div",r,[(Object(n["y"])(!0),Object(n["f"])(n["a"],null,Object(n["D"])(A.guestProduct,(function(t){return Object(n["y"])(),Object(n["f"])("div",{class:"card col-3 px-0",key:t.id},[Object(n["g"])("img",{src:t.imageUrl,alt:"",class:"img-fluid h-50 card-img-top"},null,8,l),Object(n["g"])("div",d,[Object(n["g"])("h2",null,Object(n["H"])(t.title),1),Object(n["g"])("p",null,Object(n["H"])(t.description),1),t.origin_price===t.price?(Object(n["y"])(),Object(n["f"])("div",u," 售價"+Object(n["H"])(t.origin_price),1)):(Object(n["y"])(),Object(n["f"])("div",b,[Object(n["g"])("span",h," 原價"+Object(n["H"])(t.origin_price)+"，特價"+Object(n["H"])(t.price),1)]))]),Object(n["g"])("div",g,[Object(n["g"])("button",{class:Object(n["s"])(["btn btn-outline-warning w-100 mb-1",{buttonDisabledCursor:t.id===A.isGuestPageLoading}]),onClick:function(e){return E.guestProductDetail(t.id)},disabled:t.id===A.isGuestPageLoading},[Object(n["S"])(Object(n["g"])("span",f,null,512),[[n["N"],t.id===A.isGuestPageLoading]]),m],10,p),Object(n["j"])(N,{to:"/products/product/".concat(t.id),class:Object(n["s"])(["btn btn-outline-warning w-100 mb-1",{buttonDisabledCursor:t.id===A.isGuestPageLoading}]),disabled:t.id===A.isGuestPageLoading},{default:Object(n["R"])((function(){return[Object(n["S"])(Object(n["g"])("span",O,null,512),[[n["N"],t.id===A.isGuestPageLoading]]),j]})),_:2},1032,["to","disabled","class"]),Object(n["j"])(N,{to:"/product/".concat(t.id),class:Object(n["s"])(["btn btn-outline-warning w-100 mb-1",{buttonDisabledCursor:t.id===A.isGuestPageLoading}]),disabled:t.id===A.isGuestPageLoading},{default:Object(n["R"])((function(){return[Object(n["S"])(Object(n["g"])("span",_,null,512),[[n["N"],t.id===A.isGuestPageLoading]]),y]})),_:2},1032,["to","disabled","class"]),Object(n["g"])("button",{class:Object(n["s"])(["btn btn-success w-100",{buttonDisabledCursor:t.id===A.isGuestPageLoading}]),onClick:function(e){return E.guestAddCart(t.id)},disabled:t.id===A.isGuestPageLoading},[Object(n["S"])(Object(n["g"])("span",C,null,512),[[n["N"],t.id===A.isGuestPageLoading]]),w],10,v)])])})),128))]),Object(n["j"])(x,{ref:"guestModal",onSendId:E.getId},null,8,["onSendId"]),Object(n["j"])(L,{ref:"guestCart",onSendCartnum:E.guestGetCartItmeNum},null,8,["onSendCartnum"])])}i("99af");var A=Object(n["g"])("h1",null,"產品頁",-1),E={class:"modal fade",tabindex:"-1","aria-hidden":"true",ref:"guestProductModal"},N={class:"modal-dialog modal-xl modal-dialog-scrollable"},x={class:"modal-content"},L={class:"modal-header"},P={class:"modal-title"},D={class:"modal-body"},I=["src","alt"],$={class:"d-flex"},M={class:"badge bg-primary"},S={key:0},H={key:1},q={class:"modal-footer gap-3"},G=["disabled"],T=Object(n["g"])("i",{class:"bi bi-dash"},null,-1),R=[T],F={style:{"min-width":"20px"}},W=["disabled"],z=Object(n["g"])("i",{class:"bi bi-plus"},null,-1),V=[z],U=["disabled"],K={class:"spinner-border spinner-border-sm",role:"status","aria-hidden":"true"},Q=Object(n["i"])(" 加入購物車");function B(t,e,i,s,a,c){return Object(n["y"])(),Object(n["f"])(n["a"],null,[A,Object(n["g"])("div",E,[Object(n["g"])("div",N,[Object(n["g"])("div",x,[Object(n["g"])("div",L,[Object(n["g"])("h5",P,Object(n["H"])(a.product.title),1),Object(n["g"])("button",{type:"button",class:"btn-close","aria-label":"Close",onClick:e[0]||(e[0]=function(t){return c.guestModalClose()})})]),Object(n["g"])("div",D,[Object(n["g"])("img",{class:"img-fluid",src:a.product.imageUrl,alt:"".concat(a.product.title," 照片")},null,8,I),Object(n["g"])("div",$,[Object(n["g"])("p",null,[Object(n["i"])(Object(n["H"])(a.product.title),1),Object(n["g"])("span",M,Object(n["H"])(a.product.category),1)])]),Object(n["g"])("p",null,"商品描述:"+Object(n["H"])(a.product.description),1),Object(n["g"])("p",null,"商品內容:"+Object(n["H"])(a.product.content),1),a.product.origin_price===a.product.price?(Object(n["y"])(),Object(n["f"])("div",S,[Object(n["g"])("p",null,"售價:"+Object(n["H"])(a.product.origin_price),1)])):(Object(n["y"])(),Object(n["f"])("div",H,[Object(n["g"])("p",null," 原價"+Object(n["H"])(a.product.origin_price)+"，特價"+Object(n["H"])(a.product.price),1)]))]),Object(n["g"])("div",q,[Object(n["g"])("button",{type:"button",class:"btn btn-success",onClick:e[1]||(e[1]=function(t){return a.qty-=1}),disabled:a.qty<2},R,8,G),Object(n["g"])("span",F,Object(n["H"])(a.qty),1),Object(n["g"])("button",{type:"button",class:"btn btn-success",onClick:e[2]||(e[2]=function(t){return a.qty+=1}),disabled:a.qty>=100},V,8,W),Object(n["g"])("button",{type:"button",class:"btn btn-success",onClick:e[3]||(e[3]=function(t){return c.addCart(a.product.id)}),disabled:a.product.id===a.isLoading},[Object(n["S"])(Object(n["g"])("span",K,null,512),[[n["N"],a.product.id===a.isLoading]]),Q],8,U),Object(n["g"])("button",{type:"button",class:"btn btn-secondary",onClick:e[4]||(e[4]=function(t){return c.guestModalClose()})},"關閉")])])])],512)],64)}var J=i("7c2b"),Y=i.n(J),X={data:function(){return{bsModal:"",product:{},qty:1,isLoading:""}},emits:["sendId"],methods:{guestModalOpen:function(t){var e=this;this.$http.get("".concat("https://vue3-course-api.hexschool.io/v2","/api/").concat("chun-chia","/product/").concat(t)).then((function(t){e.product=t.data.product,e.bsModal.show()}))["catch"]((function(t){console.dir(t)}))},guestModalClose:function(){this.bsModal.hide()},addCart:function(t){var e=this,i={data:{product_id:"",qty:1}};i.data.product_id=t,i.data.qty=this.qty,this.$emit("sendId",t),this.isLoading=t,this.$http.post("".concat("https://vue3-course-api.hexschool.io/v2","/api/").concat("chun-chia","/cart"),i).then((function(t){e.$emit("sendId",""),e.isLoading="",e.qty=1}))["catch"]((function(t){console.dir(t.response)}))}},mounted:function(){this.bsModal=new Y.a(this.$refs.guestProductModal)}},Z=i("6b0d"),tt=i.n(Z);const et=tt()(X,[["render",B]]);var it=et,nt={class:"offcanvas offcanvas-end","data-bs-scroll":"true","data-bs-backdrop":"false",tabindex:"-1","aria-labelledby":"offcanvasScrollingLabel",ref:"rightCart",style:{width:"700px"}},st={class:"offcanvas-header"},at=Object(n["g"])("h5",{class:"offcanvas-title"},"購物車",-1),ct={class:"offcanvas-body d-flex flex-column"},ot={class:"align-self-end"},rt=["disabled"],lt={class:"table table-hover table-striped"},dt=Object(n["g"])("thead",null,[Object(n["g"])("tr",null,[Object(n["g"])("th",{scope:"col"},"#"),Object(n["g"])("th",{scope:"col"}),Object(n["g"])("th",{scope:"col"},"商品名稱"),Object(n["g"])("th",{scope:"col"},"總價格"),Object(n["g"])("th",{scope:"col"},"數量"),Object(n["g"])("th",{scope:"col"},"單價"),Object(n["g"])("th",{scope:"col"}),Object(n["g"])("th",{scope:"col"})])],-1),ut={scope:"row"},bt=["src"],ht={style:{"text-align":"center"}},gt={key:0,style:{"text-align":"center"}},pt={key:1},ft={style:{"text-align":"center"}},mt=["onClick"],Ot={class:"spinner-border spinner-border-sm",role:"status","aria-hidden":"true"},jt=["onClick"],_t={class:"align-self-end d-flex gap-5 px-3"},yt=Object(n["g"])("p",{class:"text-center fw-bold"},"小計",-1),vt={class:"text-center"},Ct={class:"align-self-end px-3"},wt=["disabled"];function kt(t,e,i,s,a,c){return Object(n["y"])(),Object(n["f"])("div",nt,[Object(n["g"])("div",st,[at,Object(n["g"])("button",{type:"button",class:"btn-close text-reset","aria-label":"Close",onClick:e[0]||(e[0]=function(t){return c.cartClose()})})]),Object(n["g"])("div",ct,[Object(n["g"])("div",ot,[Object(n["g"])("button",{type:"button",class:Object(n["s"])(["btn btn-outline-danger",{buttonDisabledCursor:0===a.cartLength}]),onClick:e[1]||(e[1]=function(t){return c.deleteAllCarts()}),disabled:0===a.cartLength},"刪除所有",10,rt)]),Object(n["g"])("table",lt,[dt,Object(n["g"])("tbody",null,[(Object(n["y"])(!0),Object(n["f"])(n["a"],null,Object(n["D"])(a.cartData.carts,(function(t,i){return Object(n["y"])(),Object(n["f"])("tr",{key:t.product.title+i},[Object(n["g"])("th",ut,Object(n["H"])(i+1),1),Object(n["g"])("td",null,[Object(n["g"])("img",{src:t.product.imageUrl,alt:"",style:{width:"50px",height:"30px"}},null,8,bt)]),Object(n["g"])("td",null,Object(n["H"])(t.product.title),1),Object(n["g"])("td",ht,Object(n["H"])(t.final_total),1),a.isChangeNum&&t.id===a.cartId?Object(n["e"])("",!0):(Object(n["y"])(),Object(n["f"])("td",gt,Object(n["H"])(t.qty),1)),a.isChangeNum&&t.id===a.cartId?(Object(n["y"])(),Object(n["f"])("td",pt,[Object(n["S"])(Object(n["g"])("input",{type:"number",min:"1",max:"100","onUpdate:modelValue":e[2]||(e[2]=function(t){return a.changeNum=t}),class:"form-control",style:{width:"65px"}},null,512),[[n["M"],a.changeNum]])])):Object(n["e"])("",!0),Object(n["g"])("td",ft,Object(n["H"])(t.product.origin_price>t.product.price?t.product.origin_price:t.product.price),1),Object(n["g"])("td",null,[Object(n["g"])("button",{type:"button",class:"btn btn-outline-primary",onClick:function(e){return c.changeCartNum(t.qty,t.id,t.product_id)}},[Object(n["S"])(Object(n["g"])("span",Ot,null,512),[[n["N"],t.id===a.isCartLoading]]),Object(n["i"])(" "+Object(n["H"])(a.isChangeNum&&t.id===a.cartId?"確定修改":"修改數量"),1)],8,mt)]),Object(n["g"])("td",null,[Object(n["g"])("button",{type:"button",class:"btn btn-outline-dark",onClick:function(e){return c.deleteCart(t.id)}},"刪除",8,jt)])])})),128))])]),Object(n["g"])("div",_t,[yt,Object(n["g"])("p",vt,Object(n["H"])(a.cartData.final_total)+"元",1)]),Object(n["g"])("div",Ct,[Object(n["g"])("button",{type:"button",class:Object(n["s"])(["btn btn-danger",{buttonDisabledCursor:0===a.cartLength}]),onClick:e[3]||(e[3]=function(t){return c.toInputPage()}),disabled:0===a.cartLength},"確認",10,wt)])])],512)}var At=i("1517"),Et=i.n(At),Nt={data:function(){return{bsOffcanvas:"",cartData:{},isChangeNum:!1,changeNum:1,cartId:"",isCartLoading:"",cartLength:0}},emits:["send-cartnum"],methods:{toInputPage:function(){!0===this.isChangeNum?alert("請完成購物車數量修改"):this.$router.push("/sendInfo")},deleteAllCarts:function(){var t=this;!0===confirm("確定將會刪除所有購物車內容?")?this.$http["delete"]("".concat("https://vue3-course-api.hexschool.io/v2","/api/").concat("chun-chia","/carts")).then((function(e){t.getCart()}))["catch"]((function(t){console.dir(t)})):alert("已取消刪除")},deleteCart:function(t){var e=this;this.$http["delete"]("".concat("https://vue3-course-api.hexschool.io/v2","/api/").concat("chun-chia","/cart/").concat(t)).then((function(t){e.getCart()}))["catch"]((function(t){console.dir(t)}))},changeCartNum:function(t,e,i){var n=this;if(!1===this.isChangeNum)this.isChangeNum=!this.isChangeNum,this.changeNum=t,this.cartId=e;else if(!0===this.isChangeNum){this.isCartLoading=e;var s={data:{product_id:"",qty:1}};s.data.product_id=i,s.data.qty=this.changeNum,this.$http.put("".concat("https://vue3-course-api.hexschool.io/v2","/api/").concat("chun-chia","/cart/").concat(e),s).then((function(t){n.isChangeNum=!1,n.isCartLoading="",n.getCart()}))["catch"]((function(t){console.dir(t.response)}))}},getCart:function(){var t=this;this.$http.get("".concat("https://vue3-course-api.hexschool.io/v2","/api/").concat("chun-chia","/cart")).then((function(e){t.cartData=e.data.data,t.cartLength=e.data.data.carts.length,t.$emit("send-cartnum",t.cartLength)}))["catch"]((function(t){console.dir(t)}))},cartOpen:function(){this.getCart(),this.bsOffcanvas.show()},cartClose:function(){this.bsOffcanvas.hide()}},watch:{changeNum:function(t,e){t<=0&&(alert("輸入數量不可小於1"),this.changeNum=e)}},mounted:function(){this.bsOffcanvas=new Et.a(this.$refs.rightCart)}};const xt=tt()(Nt,[["render",kt]]);var Lt=xt,Pt={data:function(){return{cartNum:0,isGuestPageLoading:"",guestProduct:{}}},components:{GuestProductModal:it,CartCanvass:Lt},methods:{guestGetCartItmeNum:function(t){this.$refs.guestCart.getCart(),this.cartNum=t},getId:function(t){this.isGuestPageLoading=t},guestOpenCart:function(){this.$refs.guestCart.cartOpen()},guestAddCart:function(t){this.$refs.guestModal.addCart(t),this.$refs.guestCart.getCart()},guestProductDetail:function(t){this.$refs.guestModal.guestModalOpen(t)},getGuestProduct:function(){var t=this;this.$http.get("".concat("https://vue3-course-api.hexschool.io/v2","/api/").concat("chun-chia","/products/all")).then((function(e){t.guestProduct=e.data.products}))["catch"]((function(t){console.dir(t)}))}},mounted:function(){this.getGuestProduct(),this.guestGetCartItmeNum()}};const Dt=tt()(Pt,[["render",k]]);e["default"]=Dt}}]);
//# sourceMappingURL=chunk-04268801.4316f151.js.map