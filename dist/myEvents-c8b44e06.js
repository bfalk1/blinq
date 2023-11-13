import{html as t,LitElement as e}from"lit";import"./eventCard-b4f8447d.js";import"./navbar-78f590d4.js";import{a as o}from"./config-6bf8a6de.js";import"lit-element";import"@vaadin/router";import"./router.js";class i extends e{render(){return(e=>{const o=(t,o)=>{e.setPopupData(o),e.togglePopup(t)};return t`
    <style>
    .container {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-top:10%;
    }
   .event-section {
        background-color: white; /* Set the background color to white */
        border-radius: 15px;
        padding: 20px;
        max-width: 95%; /* Set maximum width for the section */
        
    }
    .event-section h3,h1 {
      margin: 0;
      padding: 0;
      
    }

    .event-grid {
        display: flex; /* Use flexbox to create a flex container */
        overflow-x: auto; /* Enable horizontal scrolling */
        width: 95%; /* Set the width of the container */
        padding: 1%;
    }
    .container-popup {
      width: 50%;
      background-color: #ffffff;
      padding: 20px;
      border-radius: 10px;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    }

    a {
      color: #007BFF;
      text-decoration: none;
    }

    p {
      font-family: arial,sans-serif;
      color: #292929;
      font-size: large;
    }
  
    a:hover {
        text-decoration: underline;
    }

    body {
      font-family: Arial, sans-serif;
      background-color: #f5f5f5;
      padding: 20px;
    }
    
      .popup {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.3);
        justify-content: center;
        align-items: center;
        z-index: 1000;
        display: flex;
        cursor: pointer;
      }

      .popup-content {
        background-color: white;
        padding: 20px;
        border-radius: 5px;
        text-align: left;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 1010;
        width: 70%;
        height: 80%;
      }
      .card-button {
        color: black;
        background-color: white;
        width: 100%;
        display: inline-block;
        cursor: pointer;
        border: none;
        padding: none;
        margin: none;
        transition: 0.3s; /* Add transition for smooth hover effect */
      }
      .card-button:hover {
        
        transform: scale(1.03); /* Scale up the button slightly */
      }
      .close-button{
        background-color: red;
        position: absolute;
        top: 0%;
        right: 0%;
      }
        .submit-button{
          background-color: rgb(6, 28, 113);
          color: #fff;
          padding: 10px 20px;
          border: none;
          cursor: pointer;
          border-radius: 10px;
          box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
          position: absolute;
          left: 10%;
      }

      .file-input-button {
        background-color: rgb(6, 28, 113);
        color: #fff;
        padding: 10px 20px;
        border: none;
        cursor: pointer;
        border-radius: 10px;
        box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
      }
    </style>
    <div class="container">
  ${e.eventData.length>0?t`
  <div style=" background-color: white;
        width: 90%;
        border-radius: 5px;
        box-shadow: 1px 1px 1px 0 rgba(0, 0, 0, 0.3);
        padding: 1%;
        margin-top: 80px;
        border-radius:10px;
        position: relative;">
        <h1 style="border-bottom: lightgray; color:rgb(6, 28, 113);
        border-bottom-style: solid; padding-top:10px;">Live Events</h1>
      <div class="event-grid">
        ${e.eventData.map((e=>t`
          <button class="card-button" @click=${t=>o(t,e)}>
            <event-card
              title=${e.title}
              description=${e.shortdescription}
              img=${e.img}
              placeholder=""
            ></event-card>
          </button>
        `))}
      </div>
      </div>`:t`<section class="event-section"><h3 style=" text-align: center;
  border-bottom-style: none; 
  margin-bottom:2px;
  color: rgb(6, 28, 113); ">No live events, Check the home page to enroll in an event!</h3></section>`}
   ${e.submittedEvents.length>0?t`
   </div>
        <div style=" background-color: white;
        width: 90%;
        border-radius: 5px;
        box-shadow: 1px 1px 1px 0 rgba(0, 0, 0, 0.3);
        padding: 1%;
        margin-top: 40px;
        border-radius:10px;
        position: relative;">
        <h1 style="border-bottom: lightgray; color:rgb(6, 28, 113);
        border-bottom-style: solid; padding-top:10px;">Submitted</h1>
      <div class="event-grid">
        ${e.submittedEvents.map((e=>t`
          <button class="card-button" @click=${t=>o(t,e)}>
            <event-card
              title=${e.title}
              description=${e.shortdescription}
              img=${e.img}
              placeholder=""
            ></event-card>
          </button>
        `))}
      </div>
      </div>`:t`<section class="event-section"><h3 style=" text-align: center;
  
  color: rgb(6, 28, 113);">No live events, Check home page to enroll in an event!</h3></section>`}

    


    ${e.popupOpen?t`
    <div class="popup" @focusout=${t=>{t.target.classList.contains("popup")&&e.closePopup()}}>
    <body>
    <div class="container-popup">
    <button class="close-button" @click=${t=>e.closePopup(t,e.popupData.id)} >X</button>
        <h2 style="border-bottom: lightgray; color:rgb(6, 28, 113);
        border-bottom-style: solid; margin-bottom:2px;margin-top: 10px">${e.popupData.eventTitle}</h2>
        <p>${e.popupData.eventDescription}</p>
        <p>${e.popupData.eventStartDate} - ${e.popupData.eventEndDate}</p>
        <h2 style="border-bottom: lightgray; color:rgb(6, 28, 113);
        border-bottom-style: solid; margin-bottom:2px;margin-top: 30px">${e.popupData.companyName} Company Information</h2>
        <p>${e.popupData.longdescription}</p>
      </body>
      <h3 style="
      text-align: center;
      border-bottom-style: none; 
      margin-bottom:2px;
      color: rgb(6, 28, 113);
      margin-top: 0px">Attachments and Dowloads</h3>
          <button class="submit-button" @click=${t=>e.fileSubmissionButton(t)}>Add Submission</button>
          ${e.filePopup?t`
          <form 
          style="position: relative;
          top: 54px;" action="/upload" method="POST" enctype="multipart/form-data">
          <input  type="file" name="fileToUpload" id="fileToUpload">
          <input  type="submit" value="Upload File" @click=${t=>e.fileSubmission(t,e.popupData.id)}>
        </form>`:t``}
        ${null!==e.succesfullyUploaded?t`<h2 style="
          height:18.5px;
          margin-left: 5px;
          position: relative;
          top: 300px;
          color:rgb(6, 28, 113);">${e.succesfullyUploaded}</h2>`:t``}
        ${e.submittedEvents.some((t=>t.id===e.popupData.id))?t`
        <div style="position: relative;
        top: 230px;">
          <h1 id="fileLinksContainer" style="
            border-bottom: lightgray;
            text-align: center;
            border-bottom-style: solid; 
            margin-bottom: 2px;
            color: rgb(6, 28, 113);
            margin-top: 0px;
           ">Submissions
          </h1>
          <div>${e.filesToDisplay.find((t=>t.id===e.popupData.id)).link}</div>
        </div>
        
        `:t``}
        </div>
      </div>
      </div>
      
      `:t``}
  `})(this)}static get properties(){return{popupOpen:{type:Boolean},eventData:{type:Object},user:{type:Object},filePopup:{type:Boolean},succesfullyUploaded:{type:String},submittedEvents:{type:Object},filesToDisplay:{type:Array}}}constructor(){super(),this.popupData={},this.popupOpen=!1,this.previouslyLoaded=!1,this.eventData=[],this.submittedEvents=[],this.currentUser={email:sessionStorage.getItem("email")},this.user="",this.filePopup=!1,this.succesfullyUploaded=null,this.filesToDisplay=[]}connectedCallback(){super.connectedCallback(),0===this.eventData.length&&this.fetchUserData()}fetchUserData(){0===this.eventData.length&&fetch(`${o}/api/home/?username=${this.currentUser.email}`).then((t=>t.json())).then((t=>{this.currentUser.events=t.events,this.eventData=this.currentUser.events.filter((t=>0===t.submissions.length||(this.submittedEvents.push(t),!1)));for(const t in this.submittedEvents)this.displayFile(this.submittedEvents[t].submissions[0],this.submittedEvents[t].id)})).catch((t=>{this.error="User Not Found"}))}togglePopup(t){this.popupOpen=!this.popupOpen}closePopup(t,e){"Submission Sucessful"===this.succesfullyUploaded&&(this.eventData=this.eventData.filter((t=>t.id!==e||(this.submittedEvents.push(t),!1)))),this.succesfullyUploaded=null,this.filePopup=!1,this.popupOpen=!1}setPopupData(t){this.popupData=t}fileSubmissionButton(t){this.filePopup=!0}async fileSubmission(t,e){t.preventDefault();const i=this.shadowRoot.querySelector("#fileToUpload").files[0];console.log(i);const n=window.URL.createObjectURL(i),r=document.createElement("a");if(r.href=n,r.target="_blank",r.textContent=String(i.name),r.setAttribute("download",i.name),console.log(i),this.filesToDisplay.push({link:r,id:e}),i){const t=new FormData;t.append("userId",String(this.currentUser.email)),t.append("eventId",String(e)),t.append("fileToUpload",i),fetch(`${o}/user/addSubmission/${this.currentUser.email}`,{method:"POST",body:t}).then((t=>t.json())).then((t=>{this.succesfullyUploaded="Submission Sucessful"})).catch((t=>{this.succesfullyUploaded="Application Error",console.error("Error:",t)}))}}displayFile(t,e){console.log(t.filename);const i=String(this.currentUser.email+e);fetch(`${o}/api/files/${i}/${t.filename}`).then((t=>{if(!t.ok)throw new Error("Network response was not ok");return t.blob()})).then((o=>{const i=window.URL.createObjectURL(o),n=document.createElement("a");n.href=i,n.target="_blank",n.textContent=String(t.filename),n.setAttribute("download",t.filename),this.filesToDisplay.push({link:n,id:e})})).catch((t=>{console.error("Error fetching data:",t)}))}}customElements.define("my-events",i);export{i as MyEventsPage};
