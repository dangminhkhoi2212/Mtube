import{b as m}from"./browser-87061074.js";import{_ as b,x,A as S,L as V,B as p,f as u,g as f,m as g,s as o,l as s,k as v,C as h,z as k,D as L,E as I}from"./index-36a60a37.js";import{s as R,u as U}from"./ChatEngine-4af0407b.js";const C={setup(){const e=x(),t=S();return{accountStore:e,extraStore:t}},data(){return{account:{name:"",username:"",password:"",email:"",image:""},isLoading:!1,fullPage:!0,urlImage:null}},components:{Loading:V},methods:{onFileSelected(e){this.account.image=e.target.files[0],e.target.files[0]&&(this.urlImage=URL.createObjectURL(e.target.files[0]))},async checkNewAccount(e,t){var l=!0;try{const n=JSON.parse(JSON.stringify(await p.getAll()));for(let a=0;a<n.data.length;a++){if(n.data[a].username===e){l=!1,this.extraStore.myAlert("error","Username exist 😭!");break}if(n.data[a].email===t){l=!1,this.extraStore.myAlert("error","Email exist 😭!");break}}}catch(n){console.log(n)}return l},async register(){try{this.isLoading=!0;const e=new m;e.append("name",this.account.name),e.append("username",this.account.username),e.append("password",this.account.password),e.append("email",this.account.email),this.urlImage&&e.append("avatar",this.account.image);const t=await p.create(e);if(await R("@"+this.account.username,t._id,this.account.email,this.account.name),this.urlImage){const l=new m;l.append("avatar",this.account.image),await U("@"+this.account.username,t._id,l)}this.isLoading=!1,this.extraStore.myAlert("success","Create success! 🥳"),URL.revokeObjectURL(this.urlImage),this.$router.push({name:"login"})}catch(e){console.log("🚀 ~ file: Register.vue:187 ~ register ~ error:",e),this.isLoading=!1,this.extraStore.myAlert("error",e.response.data.message||e.message)}}},mounted(){}},_=e=>(L("data-v-157acf89"),e=e(),I(),e),A={class:"page row vh-100 fixed-top"},N={id:"main",class:"pt-lg-0 col-sm-12 d-flex justify-content-center align-items-center vh-100"},j={class:"rounded-4 p-4 col-12 col-sm-10 col-md-8 col-lg-6 col-xxl-4 overflow-auto",style:{"backdrop-filter":"blur(50px)",height:"90%"}},E=_(()=>o("div",{class:"mx-auto",style:{width:"30%"}},[o("h1",null,"Resigter")],-1)),q={class:"row"},B={class:"d-flex justify-content-center"},F=["src"],O=_(()=>o("button",{class:"submit col-md-6 offset-md-3 rounded-2 py-1 my-2",type:"submit"}," Create ",-1)),P={class:"d-flex justify-content-center"},Y={class:"vl-parent"};function z(e,t,l,n,a,d){const i=u("FormKit"),y=u("router-link"),w=u("loading");return f(),g("div",A,[o("div",N,[o("div",j,[E,o("div",q,[s(i,{type:"form",onSubmit:t[4]||(t[4]=c=>d.register()),actions:!1},{default:v(({value:c})=>[s(i,{label:"Name",type:"text",validation:"required|length:5","validation-visibility":"live",placeholder:"Your full name",modelValue:a.account.name,"onUpdate:modelValue":t[0]||(t[0]=r=>a.account.name=r),enctype:"multipart/form-data"},null,8,["modelValue"]),s(i,{label:"Username",type:"text",validation:"required|matches:/^[a-z0-9]+$/|length:5","validation-visibility":"live",placeholder:"Your username",modelValue:a.account.username,"onUpdate:modelValue":t[1]||(t[1]=r=>a.account.username=r)},null,8,["modelValue"]),s(i,{type:"email",label:"Email address",validation:"required|email","validation-visibility":"live",placeholder:"Your email",modelValue:a.account.email,"onUpdate:modelValue":t[2]||(t[2]=r=>a.account.email=r)},null,8,["modelValue"]),s(i,{type:"password",name:"password",value:"super-secret",label:"Enter a new password",validation:"required","validation-visibility":"live",modelValue:a.account.password,"onUpdate:modelValue":t[3]||(t[3]=r=>a.account.password=r)},null,8,["modelValue"]),s(i,{type:"password",name:"password_confirm",label:"Confirm password",validation:"required|confirm","validation-visibility":"live","validation-label":"Password confirmation"}),s(i,{type:"file",label:"Select a avatar as you would like",accept:".jpg,.png",name:"file",multiple:"false",onChange:d.onFileSelected},null,8,["onChange"]),o("div",B,[a.urlImage?(f(),g("img",{key:0,src:a.urlImage,id:"avatar",class:"m-3 rounded-4",style:{width:"15rem",height:"15rem","object-fit":"cover"}},null,8,F)):k("",!0)]),O]),_:1}),o("div",P,[o("p",null,[h(" If you have an accout, "),s(y,{to:{name:"login"},class:"fs-4 px-2 rounded-2",style:{color:"var(--text)","background-color":"var(--btn)"}},{default:v(()=>[h(" Login ")]),_:1})])])])]),o("div",Y,[s(w,{active:a.isLoading,"onUpdate:active":t[5]||(t[5]=c=>a.isLoading=c),"can-cancel":!1,loader:"bars",backgroundColor:"#170f23 !important","is-full-page":a.fullPage},null,8,["active","is-full-page"])])])])}const T=b(C,[["render",z],["__scopeId","data-v-157acf89"]]);export{T as default};
