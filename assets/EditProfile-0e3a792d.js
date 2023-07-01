import{b as u}from"./browser-87061074.js";import{_ as f,x as y,A as _,N as b,L as x,B as S,f as m,g as i,m as p,s,l as n,k as V,F as A,G as h,I as g,z as v,j as P,D as U,E as k}from"./index-36a60a37.js";import{u as L}from"./ChatEngine-4af0407b.js";const C={setup(){const a=y(),e=_();return{accountStore:a,extraStore:e}},data(){return{message:"",account:this.accountStore.account,newimage:"",newpassword:"",oldpassword:"",changeAvtar:!1,changePassword:!1,urlImage:this.accountStore.account.avatar.url,isLoading:!1,fullPage:!0,onCancel:!1}},components:{Navigation:b,Loading:x},methods:{onFileSelected(a){a&&(this.newimage=a.target.files[0],this.urlImage=URL.createObjectURL(a.target.files[0]))},newAccount(){const a=new u;return a.append("name",this.account.name),a.append("username",this.account.username),a.append("email",this.account.email),this.changePassword&&this.newpassword&&(a.append("currentPassword",this.oldpassword),a.append("password",this.newpassword)),this.changeAvtar&&this.newimage&&(a.append("image",this.newimage),a.append("selectImage","avatar")),a},async updateAccount(){try{this.isLoading=!0,this.fullPage=!0;const e=new u;e.append("username","@"+this.account.username),e.append("first_name",this.account.name),this.newimage&&e.append("avatar",this.newimage),await L("@"+this.accountStore.account.username,this.accountStore.account._id,e);var a=this.newAccount();await S.update(this.account._id,a),await this.accountStore.getAccount(),URL.revokeObjectURL(this.urlImage),this.changePassword=!1,this.oldpassword=null,this.newpassword=null,this.changeAvtar=!1,this.isLoading=!1,this.extraStore.myAlert("success"," Updated successfully")}catch(e){this.isLoading=!1,console.log(e),this.extraStore.myAlert("error","Refresh page and retry")}}},async mounted(){}},r=a=>(U("data-v-3bd21324"),a=a(),k(),a),I={id:"main",class:"row d-flex justify-content-center align-items-center my-3",style:{height:"90vh"}},E={class:"rounded-4 p-4 col-12 col-sm-10 col-md-8 col-lg-6 col-xxl-4 overflow-auto",style:{"backdrop-filter":"blur(25px)",height:"80vh"}},j={class:""},R={class:"mx-auto",style:{width:"100px",height:"100px"}},F=["src"],N={class:"m-2 w-50 d-flex align-items-center"},B=r(()=>s("label",{for:"changePassword",class:"m-2"},"Change Password",-1)),Y={key:0},z={class:"col-12"},D={class:"m-2 w-50 d-flex align-items-center"},K=r(()=>s("label",{for:"changeAvatar",class:"m-2"},"Change Avatar",-1)),O=r(()=>s("div",{class:"d-flex justify-content-center"},[s("button",{class:"submit col-md-6 rounded-2 px-4 my-2",type:"submit"}," Save ")],-1)),q={class:"vl-parent"};function G(a,e,M,H,t,c){const l=m("FormKit"),w=m("loading");return i(),p(A,null,[s("main",I,[s("div",E,[s("div",j,[s("div",R,[s("img",{src:t.urlImage,style:{"object-fit":"cover","border-radius":"50%"}},null,8,F)]),n(l,{type:"form",onSubmit:c.updateAccount,actions:!1},{default:V(({value:d})=>[n(l,{label:"Name",type:"text",validation:"length:5","validation-visibility":"live",placeholder:"Your full name",modelValue:t.account.name,"onUpdate:modelValue":e[0]||(e[0]=o=>t.account.name=o)},null,8,["modelValue"]),n(l,{label:"Username",type:"text",validation:"matches:/^[a-z0-9]+$/|length:5","validation-visibility":"live",placeholder:"Your username",modelValue:t.account.username,"onUpdate:modelValue":e[1]||(e[1]=o=>t.account.username=o)},null,8,["modelValue"]),n(l,{type:"email",label:"Email address",validation:"email","validation-visibility":"live",placeholder:"Your email",modelValue:t.account.email,"onUpdate:modelValue":e[2]||(e[2]=o=>t.account.email=o)},null,8,["modelValue"]),s("div",N,[h(s("input",{type:"checkbox",id:"changePassword",style:{width:"1.5rem",height:"1.5rem"},"onUpdate:modelValue":e[3]||(e[3]=o=>t.changePassword=o)},null,512),[[g,t.changePassword]]),B]),t.changePassword?(i(),p("div",Y,[n(l,{type:"password",name:"current_password",label:"Enter your password","validation-visibility":"live",modelValue:t.oldpassword,"onUpdate:modelValue":e[4]||(e[4]=o=>t.oldpassword=o)},null,8,["modelValue"]),n(l,{type:"password",name:"password",value:"super-secret",label:"Enter a new password","validation-visibility":"live",modelValue:t.newpassword,"onUpdate:modelValue":e[5]||(e[5]=o=>t.newpassword=o)},null,8,["modelValue"]),n(l,{type:"password",name:"password_confirm",label:"Confirm your new password",validation:"confirm","validation-visibility":"live","validation-label":"Password confirmation"})])):v("",!0),s("div",z,[s("div",D,[h(s("input",{type:"checkbox",id:"changeAvatar",style:{width:"1.5rem",height:"1.5rem"},"onUpdate:modelValue":e[6]||(e[6]=o=>t.changeAvtar=o)},null,512),[[g,t.changeAvtar]]),K]),t.changeAvtar?(i(),P(l,{key:0,name:"image",type:"file",label:"Select a video as you would like",accept:".jpg,.png",multiple:"false","validation-visibility":"live",validation:"required",onChange:c.onFileSelected},null,8,["onChange"])):v("",!0)]),O]),_:1},8,["onSubmit"])])])]),s("div",q,[n(w,{active:t.isLoading,"onUpdate:active":e[7]||(e[7]=d=>t.isLoading=d),"can-cancel":!1,backgroundColor:"#170f23 !important",color:"#c6bcd3",opacity:.6,loader:"bars","is-full-page":t.fullPage},null,8,["active","is-full-page"])])],64)}const W=f(C,[["render",G],["__scopeId","data-v-3bd21324"]]);export{W as default};
