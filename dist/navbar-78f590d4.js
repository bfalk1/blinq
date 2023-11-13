import{html as e,LitElement as t}from"lit";import{html as r}from"lit-element";import{Router as o}from"@vaadin/router";import{initRouter as s}from"./router.js";customElements.define("search-bar",class extends t{render(){return e`
    <style>
    .inputText {
        flex: 1;
        border-radius: 5px;
        width: ${(t=this).width}px;
        background-color: #faf7f7;
        height: 30px;
        border-style: solid;
        border-color: lightgray;
        text-indent: 30px;
       
    }
    .searchbar:hover {
        background-color: #d3d3d3;
    }
    .container{
        width: ${t.width}px;
        margin-right:20px;
        text-indent: 30px;
        position: relative;
        top: 28px
    }
    .searchbar{
        width: ${t.width}px;
        height: 25px;
        text-indent: 12px;
        background-color: #faf7f7;
        color: black;
        border-style: solid;
        border-top: none;
        border-color: lightgray;
        cursor: pointer;
    }
    </style>
    <div class="container">
    <svg fill="gray" height="20px" width="20px" style="position: relative;
    left: -22px;
    top: 32px;"
  version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 488.4 488.4" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <path d="M0,203.25c0,112.1,91.2,203.2,203.2,203.2c51.6,0,98.8-19.4,134.7-51.2l129.5,129.5c2.4,2.4,5.5,3.6,8.7,3.6 s6.3-1.2,8.7-3.6c4.8-4.8,4.8-12.5,0-17.3l-129.6-129.5c31.8-35.9,51.2-83,51.2-134.7c0-112.1-91.2-203.2-203.2-203.2 S0,91.15,0,203.25z M381.9,203.25c0,98.5-80.2,178.7-178.7,178.7s-178.7-80.2-178.7-178.7s80.2-178.7,178.7-178.7 S381.9,104.65,381.9,203.25z"></path> </g> </g> </g></svg>
    <input 
    type="text" 
    value=${t.value}
    class="inputText" 
    placeholder="Search Users" 
    @click=${e=>t.fetchUsers(e)}
    @input=${e=>t.searchUsers(e)}
    >
    </div>
    <div class="searchContainer" style="height:79px;position: relative;
    top: 28px;left: 3px;">
    ${t.usersInSearch?e` 
    ${t.usersInSearch[0]?e`<div class="searchbar" @click=${e=>t.routeToSearchedUser(e,t.usersInSearch[0].email)}>${t.usersInSearch[0].Name}</div>`:e``}
    ${t.usersInSearch[1]?e`<div class="searchbar" @click=${e=>t.routeToSearchedUser(e,t.usersInSearch[1].email)}>${t.usersInSearch[1].Name}</div>`:e``}
    ${t.usersInSearch[2]?e`<div class="searchbar" @click=${e=>t.routeToSearchedUser(e,t.usersInSearch[2].email)}>${t.usersInSearch[2].Name}</div>`:e``}
    ${t.usersInSearch&&0===t.usersInSearch.length?e`<div class="searchbar">No Users Found</div>`:e``}`:e``}
    </div>
     `;var t}static get properties(){return{value:{type:String},width:{type:String},placeholder:{type:String},type:{type:String},users:{type:Object},usersInSearch:{type:Object}}}constructor(){super(),this.value="",this.width="",this.placeholder="",this.type="",this.users="",this.usersInSearch=null,this.usersFetchedSuccesfully=!1}fetchUsers(e){this.usersFetchedSuccesfully||fetch("http://localhost:5001/api/searchBar").then((e=>e.json())).then((e=>{this.users=e,this.usersFetchedSuccesfully=!0})).catch((e=>{this.error="User Not Found"}))}searchUsers(e){if("deleteContentBackward"===e.inputType)return this.usersInSearch=null,void(this.shadowRoot.querySelector(".inputText").value="");this.usersInSearch||(this.usersInSearch=this.users);var t=[];for(let r=0;r<=this.usersInSearch.length-1;r++)void 0!==this.usersInSearch[r].Name&&this.usersInSearch[r].Name.trim().toLowerCase().includes(e.target.value.trim().toLowerCase())&&t.push(this.usersInSearch[r]);this.usersInSearch=t}routeToSearchedUser(e,t){this.shadowRoot.querySelector(".inputText").value="";const r=t.trim();sessionStorage.setItem("searchedUser",r),this.usersInSearch=null,o.go("/profile")}});customElements.define("nav-bar",class extends t{render(){return r`
    <style>
    .navbar {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      color: white;
      background-color: rgb(6, 28, 113);
      display: flex;
      justify-content: center;
      align-items: center;
      height: 78px; /* Adjust the height as needed */
    }

    .navbar-title {
      font-size: 24px;
      margin: 0;
      margin-left: 10px;
    }

    .profile-button {
      background-color: #555;
      color: #fff;
      border: none;
      padding: 8px 16px;
      cursor: pointer;
    }
    .button {
      background-color: #fff;
      color: rgb(6, 28, 113);
      padding: 10px 20px;
      border: none;
      cursor: pointer;
      border-radius: 10px;
      box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
      margin-left: 5px;
  }

    .dropdown {
      display: ${(e=this).isDropdownOpen?"block":"none"};
      position: absolute;
      background-color: #555;
      min-width: 160px;
      z-index: 1;
    }

    .dropdown-button {
      background-color: #555;
      color: #fff;
      border: none;
      width: 100%;
      text-align: left;
      padding: 12px 16px;
      text-decoration: none;
      display: block;
      cursor: pointer;
    }
    .logo {
       height:150px;
      }
    </style> 
      <div class="navbar">
      <img src="/Assets/TLogo.png" class="logo" alt="Logo">
      ${e.inMainApplication?r` 
      <button class="button" @click=${t=>e.routeToFirst(t)}>Landing Page</button>
      <button class="button" @click=${t=>e.routeToHome(t)}>Home</button>
      ${e.entrepriseMode?r`
      <button class="button" @click=${t=>e.routeToJobPosting(t)}>Create Posting</button>
      `:r` <button class="button" @click=${t=>e.routeToMyEvents(t)}>My Events</button>`}
      <button class="button" @click=${t=>e.routeToProfile(t)}>Profile</button>
      <div style="flex-grow: 1;"></div>
      <search-bar width=250></search-bar>`:r``}
      </div>
    `;var e}static get properties(){return{isDropdownOpen:{type:Boolean},inMainApplication:{type:Boolean},entrepriseMode:{type:Boolean},triggerRerender:{type:Number}}}constructor(){super(),this.isDropdownOpen=!1,this.triggerRerender=0,this.addEventListener("custom-string-event",this.handleChangedValue),this.inMainApplication=!1,this.entrepriseMode=!1,this.currentUser="",this.role=""}connectedCallback(){super.connectedCallback(),"enterprise"===this.role?this.entrepriseMode=!0:this.entrepriseMode=!1;var e=window.location.href;this.inMainApplication="http://localhost:8000/"!==e,window.addEventListener("popstate",(()=>{this.triggerReload()})),window.addEventListener("beforeunload",(()=>{this.triggerReload()}))}triggerReload(){this.triggerRerender+=1,"http://localhost:8000/"===window.location.href?this.inMainApplication=!1:(this.inMainApplication=!0,this.currentUser=sessionStorage.getItem("email"),this.role=sessionStorage.getItem("role"),console.log(this.currentUser))}handleChangedValue(e){console.log("here")}toggleDropdown(e){this.isDropdownOpen=!this.isDropdownOpen}routeToFirst(){s(),o.go("/")}routeToHome(){o.go("/home")}routeToProfile(){sessionStorage.setItem("searchedUser",this.currentUser),o.go("/profile")}routeToMyEvents(e){o.go("/myEvents")}routeToJobPosting(e){o.go("/createjobposting")}});
