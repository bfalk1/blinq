import { LitElement, html } from 'lit';
import { NavbarTemplate } from './navbarTemplate';
import { Router } from "@vaadin/router";
import { initRouter } from "../../router";
//import { initRouter } from "../../../router";

export class Navbar extends LitElement {
    render() {
      return NavbarTemplate(this);
    }

    static get properties() {
        return {
            isDropdownOpen : {type: Boolean},
            inMainApplication : {type: Boolean},
            entrepriseMode: {type: Boolean},
            triggerRerender : {type: Number}
        };
        }
        
        constructor() {
            super();
            this.isDropdownOpen = false;
            this.triggerRerender = 0;
            this.addEventListener('custom-string-event', this.handleChangedValue);
            this.inMainApplication = false;
            this.entrepriseMode = false;
            this.currentUser = "";
            this.role = "";
        }

        connectedCallback() {
            super.connectedCallback();
            if (this.role === "enterprise") {
                this.entrepriseMode = true;
            } else {
                this.entrepriseMode = false;
            }

            // This is very bad code, need to refactor later on
            var currentURL = window.location.href;
            if (currentURL === "http://localhost:8000/") {
                this.inMainApplication = false;
            } else {
                this.inMainApplication = true;
            }
            window.addEventListener("popstate", () => {
                this.triggerReload();
            });
            window.addEventListener("beforeunload", () => {
                this.triggerReload();
              });
        }

        triggerReload() {
              this.triggerRerender+=1;
                var currentURL = window.location.href;
                if (currentURL === ("http://localhost:8000/" ||"http://localhost:8000/enterpriseLogin") ) {
                    this.inMainApplication = false;
                } else {
                    this.inMainApplication = true;
                    this.currentUser = sessionStorage.getItem('email');
                    this.role = sessionStorage.getItem('role');
                    console.log(this.currentUser);
                }
          
        }

        handleChangedValue(e) {
            console.log("here");
        }
        
        toggleDropdown(e){
            this.isDropdownOpen = !this.isDropdownOpen;
        }
        routeToFirst(){
            initRouter();
            Router.go("/");
        }
        routeToHome() {
            var currentURL = window.location.href;
            Router.go("/home");
        }
        routeToProfile(){
            sessionStorage.setItem('searchedUser',this.currentUser);
            Router.go(`/profile`);
        }

        routeToMyEvents(e) {
            Router.go("/myEvents");
        }

        routeToJobPosting(e) {
            Router.go("/createjobposting");
        }
}


customElements.define('nav-bar', Navbar);