"use strict";(self.webpackChunktask_22=self.webpackChunktask_22||[]).push([[601],{2601:(m,a,o)=>{o.r(a),o.d(a,{ProductsModule:()=>Z});var u=o(6814),c=o(594),t=o(9468),d=o(4333);let p=(()=>{class r{constructor(n){this.router=n,this.urlMain="/",this.urlProducts="/products"}redirect(n){this.router.navigate([n])}static#t=this.\u0275fac=function(i){return new(i||r)(t.LFG(c.F0))};static#r=this.\u0275prov=t.Yz7({token:r,factory:r.\u0275fac,providedIn:"root"})}return r})(),s=(()=>{class r{transform(n){return n.length>75?n.substring(0,75)+"...":n}static#t=this.\u0275fac=function(i){return new(i||r)};static#r=this.\u0275pipe=t.Yjl({name:"textCut",type:r,pure:!0})}return r})();const f=function(){return["/order"]},h=function(r){return{product:r}},l=function(r){return["/products",r]};function x(r,C){if(1&r&&(t.TgZ(0,"div",4),t._UZ(1,"img",5),t.TgZ(2,"h5",6),t._uU(3),t.qZA(),t.TgZ(4,"div",7),t._uU(5),t.ALo(6,"textCut"),t.qZA(),t.TgZ(7,"div",8)(8,"div",9),t._uU(9),t.ALo(10,"currency"),t.qZA(),t.TgZ(11,"a",10),t._uU(12,"\u0417\u0430\u043a\u0430\u0437\u0430\u0442\u044c"),t.qZA()(),t.TgZ(13,"a",11),t._uU(14,"\u041f\u043e\u0434\u0440\u043e\u0431\u043d\u0435\u0435"),t.qZA()()),2&r){const n=C.$implicit;t.xp6(1),t.s9C("src",n.image,t.LSH),t.MGl("alt","image + ",n.id,""),t.xp6(2),t.Oqu(n.title),t.xp6(2),t.hij("",t.lcZ(6,8,n.description)," "),t.xp6(4),t.hij(" ",t.Dn7(10,10,n.price,"RUB","\u0440\u0443\u0431.")," "),t.xp6(2),t.Q6J("routerLink",t.DdM(14,f))("queryParams",t.VKq(15,h,n.title)),t.xp6(2),t.Q6J("routerLink",t.VKq(17,l,n.id))}}const _=function(){return["/order"]},P=function(r){return{product:r}},y=[{path:"",component:(()=>{class r{constructor(n,i,e){this.productService=n,this.router=i,this.nav=e,this.products=[],this.productsSubscription=null}ngOnInit(){this.productsSubscription=this.productService.getProducts().subscribe({next:n=>{console.log(n),this.products=n},error:n=>{console.log(n),this.nav.redirect(this.nav.urlMain)}})}ngOnDestroy(){this.productsSubscription?.unsubscribe()}static#t=this.\u0275fac=function(i){return new(i||r)(t.Y36(d.s),t.Y36(c.F0),t.Y36(p))};static#r=this.\u0275cmp=t.Xpm({type:r,selectors:[["products-component"]],decls:5,vars:1,consts:[[1,"container"],[1,"h2-title"],[1,"cards"],["class","card",4,"ngFor","ngForOf"],[1,"card"],[1,"card-img",3,"src","alt"],[1,"card-title"],[1,"card-text"],[1,"d-flex","justify-content-between"],[1,"d-flex","align-items-center","fw-semibold"],[1,"btn","btn-primary","w-50",3,"routerLink","queryParams"],[1,"btn","btn-outline-primary","mt-2",3,"routerLink"]],template:function(i,e){1&i&&(t.TgZ(0,"div",0)(1,"h2",1),t._uU(2,"\u041d\u0430\u0448\u0438 \u0447\u0430\u0439\u043d\u044b\u0435 \u043a\u043e\u043b\u043b\u0435\u043a\u0446\u0438\u0438"),t.qZA(),t.TgZ(3,"div",2),t.YNc(4,x,15,19,"div",3),t.qZA()()),2&i&&(t.xp6(4),t.Q6J("ngForOf",e.products))},dependencies:[u.sg,c.rH,u.H9,s],styles:[".cards[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;align-items:center;justify-content:center;row-gap:27px;column-gap:24px}.card[_ngcontent-%COMP%]{padding:0 24px 15px;max-width:416px;border-radius:4px;border:1px solid #E3E3E3;background:#FFF;box-sizing:border-box;color:#000}.card-img[_ngcontent-%COMP%]{height:200px;width:200px;margin:0 auto}.card-text[_ngcontent-%COMP%]{font-size:16px;font-weight:400;line-height:24px;margin-bottom:25px}"]})}return r})()},{path:":id",component:(()=>{class r{constructor(n,i,e,A){this.productService=n,this.router=i,this.activatedRoute=e,this.nav=A,this.product={id:0,image:"",title:"",price:0,description:""},this.productSubscription=null,this.id=null}ngOnInit(){this.id=this.activatedRoute.snapshot.params.id,this.id?this.productSubscription=this.productService.getProduct(this.id).subscribe({next:n=>{console.log(n),this.product=n},error:n=>{console.log(n),this.nav.redirect(this.nav.urlProducts)}}):this.nav.redirect(this.nav.urlProducts)}ngOnDestroy(){this.productSubscription?.unsubscribe()}static#t=this.\u0275fac=function(i){return new(i||r)(t.Y36(d.s),t.Y36(c.F0),t.Y36(c.gz),t.Y36(p))};static#r=this.\u0275cmp=t.Xpm({type:r,selectors:[["product-component"]],decls:16,vars:14,consts:[[1,"container"],[1,"card"],[1,"card-title"],[1,"d-flex","justify-content-between"],[1,"card-img",3,"src","alt"],[1,"d-flex","flex-column","justify-content-between"],[1,"card-text"],[1,"d-flex","align-items-center","fw-semibold"],[1,"btn","btn-primary","w-50",3,"routerLink","queryParams"]],template:function(i,e){1&i&&(t.TgZ(0,"div",0)(1,"div",1)(2,"h5",2),t._uU(3),t.qZA(),t.TgZ(4,"div",3),t._UZ(5,"img",4),t.TgZ(6,"div",5),t._UZ(7,"div"),t.TgZ(8,"div",6),t._uU(9),t.qZA(),t.TgZ(10,"div",3)(11,"div",7),t._uU(12),t.ALo(13,"currency"),t.qZA(),t.TgZ(14,"a",8),t._uU(15,"\u041a\u0443\u043f\u0438\u0442\u044c"),t.qZA()()()()()()),2&i&&(t.xp6(3),t.Oqu(e.product.title),t.xp6(2),t.s9C("src",e.product.image,t.LSH),t.MGl("alt","image + ",e.product.id,""),t.xp6(4),t.hij("",e.product.description," "),t.xp6(3),t.hij(" ",t.Dn7(13,7,e.product.price,"RUB","\u0440\u0443\u0431.")," "),t.xp6(2),t.Q6J("routerLink",t.DdM(11,_))("queryParams",t.VKq(12,P,e.product.title)))},dependencies:[c.rH,u.H9],styles:[".card[_ngcontent-%COMP%]{padding:0 24px 15px;border-radius:4px;border:1px solid #E3E3E3;background:#FFF;box-sizing:border-box;color:#000}.card-img[_ngcontent-%COMP%]{height:500px;width:500px}.card-text[_ngcontent-%COMP%]{text-align:justify}"]})}return r})()}];let g=(()=>{class r{static#t=this.\u0275fac=function(i){return new(i||r)};static#r=this.\u0275mod=t.oAB({type:r});static#n=this.\u0275inj=t.cJS({imports:[c.Bz.forChild(y),c.Bz]})}return r})();var b=o(6208);let Z=(()=>{class r{static#t=this.\u0275fac=function(i){return new(i||r)};static#r=this.\u0275mod=t.oAB({type:r});static#n=this.\u0275inj=t.cJS({imports:[u.ez,b.m,g,g]})}return r})()},6208:(m,a,o)=>{o.d(a,{m:()=>p});var u=o(6814),c=o(9862),t=o(594),d=o(9468);let p=(()=>{class s{static#t=this.\u0275fac=function(l){return new(l||s)};static#r=this.\u0275mod=d.oAB({type:s});static#n=this.\u0275inj=d.cJS({imports:[u.ez,c.JF,t.Bz]})}return s})()}}]);