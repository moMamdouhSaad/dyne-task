import{a as ce,b as de,c as pe}from"./chunk-J72LKGC5.js";import{a as Z,c as J,d as O}from"./chunk-BEVV6RCL.js";import{L as W,M as X,N as ee,P as te,Q as ne,R as ie,S as ae,T as re,U as oe,V as me,W as se,a as K,g as U,l as Y}from"./chunk-R42BILZK.js";import{Ac as H,Bb as _,Bc as G,Cb as h,Cc as j,Fb as D,Kb as F,Lb as d,Mb as f,Nb as B,Ob as Q,Pb as b,Qb as y,Ta as r,Tb as x,Ua as u,Ub as S,Vb as z,Wb as T,X as q,Z as g,ca as I,ha as C,k as N,ka as R,lb as l,nb as s,qa as E,ra as k,ub as m,vb as o,wb as v,xb as A,xc as V,ya as P,yb as L,yc as w,zb as $}from"./chunk-37GA6J4Z.js";var le=(()=>{let e=class e{transform(n,i=20,a=!1,p="..."){return a&&(i=n.substr(0,i).lastIndexOf(" ")),n.length>i?n.substr(0,i)+p:n}};e.\u0275fac=function(i){return new(i||e)},e.\u0275pipe=R({name:"truncate",type:e,pure:!0,standalone:!0});let t=e;return t})();function ye(t,e){t&1&&(m(0,"p",12),d(1,"Unavailable"),o())}var ue=(()=>{let e=class e{constructor(n){this.cartManager=n,this.defaultImg="assets/unavailable-img.jpg",this.quantity=0,this.add=new P,this.remove=new P}ngOnInit(){this.quantity=this.cartManager.getQuantity(this.menuItem.id)}increaseQuantity(){this.quantity++,this.add.emit(this.menuItem)}decreaseQuantity(){this.quantity>0&&(this.quantity--,this.remove.emit(this.menuItem))}};e.\u0275fac=function(i){return new(i||e)(u(O))},e.\u0275cmp=C({type:e,selectors:[["app-menu-item-card"]],inputs:{menuItem:"menuItem",quantity:"quantity"},outputs:{add:"add",remove:"remove"},standalone:!0,features:[Q([{provide:re,useClass:se}]),b],decls:21,vars:16,consts:[["appearance","outlined",1,"custom-card"],[1,"mb-2"],[1,"menu-item-title"],["mat-card-image","",1,"menu-item-img","mb-1",3,"defaultImage","lazyLoad","alt"],[1,"d-flex","flex-column"],[1,"dark-gold","description","my-2"],["class","unavailable",4,"ngIf"],[1,"d-flex","flex-column","justify-content-end","actions-container"],[1,"gold","h7","semi-bold"],[1,"d-flex","justify-content-between","align-items-center","w-100","mt-2"],["mat-stroked-button","",3,"click","disabled"],[1,"dark-gold"],[1,"unavailable"]],template:function(i,a){i&1&&(m(0,"mat-card",0)(1,"mat-card-header",1)(2,"mat-card-title",2),d(3),o()(),v(4,"img",3),m(5,"mat-card-content",4)(6,"span",5),d(7),x(8,"truncate"),o(),l(9,ye,2,0,"p",6),o(),m(10,"mat-card-actions",7)(11,"span",8),d(12),x(13,"currency"),o(),m(14,"div",9)(15,"button",10),_("click",function(){return a.decreaseQuantity()}),d(16,"-"),o(),m(17,"span",11),d(18),o(),m(19,"button",10),_("click",function(){return a.increaseQuantity()}),d(20,"+"),o()()()()),i&2&&(r(3),f(a.menuItem.name),r(),D("alt","Photo of ",a.menuItem.name,""),s("defaultImage",a.defaultImg)("lazyLoad",a.menuItem.thumbnail),r(3),f(z(8,11,a.menuItem.description,40)),r(2),s("ngIf",!a.menuItem.availability),r(3),B("Price: ",S(13,14,a.menuItem.price),""),r(3),s("disabled",!a.menuItem.availability||a.quantity===0),r(3),f(a.quantity),r(),s("disabled",!a.menuItem.availability))},dependencies:[j,w,G,ae,W,te,ee,ne,ie,X,J,Z,Y,le,me,oe],styles:[".custom-card[_ngcontent-%COMP%]{width:220px;height:100%!important}[_nghost-%COMP%]{height:100%!important}.menu-item-img[_ngcontent-%COMP%]{height:100px;width:100%;object-fit:cover;transition:opacity .3s ease}.menu-item-img[_ngcontent-%COMP%]:hover{opacity:.8}.menu-item-title[_ngcontent-%COMP%]{color:var(--gold);display:flex!important;justify-content:center!important;transition:opacity .3s ease;font-family:Saira!important}.tag-title[_ngcontent-%COMP%]{font-family:Saira!important}.unavailable[_ngcontent-%COMP%]{color:var(--warn)!important;font-weight:semi-bold}.description[_ngcontent-%COMP%]{text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:3;-webkit-box-orient:vertical;max-height:50px;min-height:50px!important;display:flex;align-items:center}.mat-card-content[_ngcontent-%COMP%]{flex-grow:1;display:flex;flex-direction:column;justify-content:space-between}.actions-container[_ngcontent-%COMP%]{display:inline-block;height:100%;vertical-align:bottom}"],changeDetection:0});let t=e;return t})();var fe=(()=>{let e=class e{constructor(n){this.http=n,this.apiBase="https://api.mocki.io/v2/aqprm7yv"}getMenuItems(n){return this.http.get(`${this.apiBase}/menus/${n}`)}};e.\u0275fac=function(i){return new(i||e)(I(K))},e.\u0275prov=g({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})();var ge=(()=>{let e=class e{constructor(){this.menuItemsSubject=new N([])}getMenuItems$(){return this.menuItemsSubject.asObservable()}setMenuItems(n){this.menuItemsSubject.next(n)}};e.\u0275fac=function(i){return new(i||e)},e.\u0275prov=g({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})();var he=(()=>{let e=class e{constructor(n,i){this.menuService=n,this.menuItemsState=i}loadMenuItems(n){this.menuItemsState.setMenuItems([]),this.menuService.getMenuItems(n).pipe(q(i=>this.menuItemsState.setMenuItems(i))).subscribe()}getMenuItems$(){return this.menuItemsState.getMenuItems$()}};e.\u0275fac=function(i){return new(i||e)(I(fe),I(ge))},e.\u0275prov=g({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})();var be=()=>[],Se=()=>({width:"150px","border-radius":"10px",height:"250px","margin-bottom":"10px"}),we=()=>({width:"200px","border-radius":"10px",height:"25px"}),je=()=>({width:"200px","border-radius":"10px",height:"15px"});function Oe(t,e){if(t&1&&(A(0),m(1,"div",5)(2,"span",6),d(3),o(),m(4,"span",7),d(5),o()(),L()),t&2){let c=h();r(3),f(c.restaurantName),r(2),f(c.menuName)}}function Ee(t,e){if(t&1){let c=$();m(0,"div")(1,"app-menu-item-card",13),_("add",function(i){E(c);let a=h(3);return k(a.handleAdd(i))})("remove",function(i){E(c);let a=h(3);return k(a.handleRemove(i))}),o()()}if(t&2){let c=e.$implicit;r(),s("menuItem",c)("quantity",2)}}function ke(t,e){if(t&1&&(m(0,"div",10)(1,"div",11),l(2,Ee,2,2,"div",12),o()()),t&2){let c=h().ngIf;r(2),s("ngForOf",c)}}function Pe(t,e){if(t&1&&(m(0,"div",8),l(1,ke,3,1,"div",9),o()),t&2){let c=e.ngIf;h();let n=F(5);r(),s("ngIf",c.length>0)("ngIfElse",n)}}function Fe(t,e){t&1&&(m(0,"div"),v(1,"ngx-skeleton-loader",14),o()),t&2&&(r(),s("theme",y(1,Se)))}function Te(t,e){t&1&&(m(0,"div",8)(1,"div",10)(2,"div",11),l(3,Fe,2,2,"div",12),o()()()),t&2&&(r(3),s("ngForOf",y(1,be).constructor(4)))}function Ne(t,e){t&1&&(m(0,"div",5),v(1,"ngx-skeleton-loader",14)(2,"ngx-skeleton-loader",14),o()),t&2&&(r(),s("theme",y(2,we)),r(),s("theme",y(3,je)))}var ot=(()=>{let e=class e{constructor(n,i,a,p){this.menuItemsManager=n,this.route=i,this.restaurantManager=a,this.cartManager=p,this.menuItemId=this.route.snapshot.paramMap.get("menuId"),this.menuItemsManager.loadMenuItems(this.menuItemId)}ngOnInit(){this.menuItems$=this.menuItemsManager.getMenuItems$(),this.restaurantManager.loadRestaurants(),this.restaurantManager.getRestaurants$().subscribe(n=>{let i=this.fetchRestaurantAndMenu(this.menuItemId,n);i?(this.restaurantName=i.restaurantName,this.menuName=i.menu.name):console.log("Menu item not found")})}handleAdd(n){this.cartManager.increaseItemQuantity(n)}handleRemove(n){this.cartManager.decreaseItemQuantity(n.id)}fetchRestaurantAndMenu(n,i){for(let a of i){let p=a.menus.find(Ie=>Ie.id===parseInt(n));if(p)return{restaurantName:a.name,menu:p}}return null}};e.\u0275fac=function(i){return new(i||e)(u(he),u(U),u(pe),u(O))},e.\u0275cmp=C({type:e,selectors:[["app-menu-items"]],standalone:!0,features:[b],decls:8,vars:5,consts:[["loading",""],["restaurantNameSkeleton",""],[1,"home"],[4,"ngIf","ngIfElse"],["class","container",4,"ngIf"],[1,"text-center","mb-4","d-flex","flex-column","mt-5"],[1,"h3","saira-normal-font"],[1,"h6","saira-normal-font"],[1,"container"],["class","row justify-content-center",4,"ngIf","ngIfElse"],[1,"row","justify-content-center"],[1,"grid-container"],[4,"ngFor","ngForOf"],[3,"add","remove","menuItem","quantity"],[3,"theme"]],template:function(i,a){if(i&1&&(m(0,"div",2),l(1,Oe,6,2,"ng-container",3)(2,Pe,2,2,"div",4),x(3,"async"),o(),l(4,Te,4,2,"ng-template",null,0,T)(6,Ne,3,4,"ng-template",null,1,T)),i&2){let p=F(7);r(),s("ngIf",a.restaurantName)("ngIfElse",p),r(),s("ngIf",S(3,3,a.menuItems$))}},dependencies:[j,V,w,H,ue,de,ce],styles:[".container[_ngcontent-%COMP%]{display:flex;justify-content:center;width:100%;padding:0 15px;box-sizing:border-box}.grid-container[_ngcontent-%COMP%]{display:grid;width:100%;max-width:1200px;grid-template-columns:repeat(4,1fr);gap:30px;justify-items:center}@media (max-width: 1200px){.grid-container[_ngcontent-%COMP%]{grid-template-columns:repeat(3,1fr)}}@media (max-width: 992px){.grid-container[_ngcontent-%COMP%]{grid-template-columns:repeat(2,1fr)}}@media (max-width: 768px){.grid-container[_ngcontent-%COMP%]{grid-template-columns:1fr}}.card-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:space-between;height:100%}"]});let t=e;return t})();export{ot as MenuItemsComponent};