"use strict";

const session = {
	
	saveLanguage(lang){ this.put("storedLanguage",lang);	},

	saveLoggedUser(loggedUser){ this.put("loggedUser",loggedUser);	},

	// loadLoggedUser(){	loggedUser = this.getAsJSON("loggedUser");	},

	put(key,value){ 
		if(key){
			if (typeof value === 'object')
				sessionStorage.setItem(key,JSON.stringify(value));
			else
				sessionStorage.setItem(key,value)	
		}
	},
	get(key) { 
		if(key)
			return sessionStorage.getItem(key)
		else
			alert("key is not stored in session storage");
	},
	getAsJSON(key){ return JSON.parse(this.get(key));	},
	
	remove(key) { sessionStorage.removeItem(key); },

}

const login = {
	
	login(){
		let url = './Login';

		let dataTxt = `userName=${$('#userName').val()}&pwd=${$('#pwd').val()}`;
		let fetchDataTxt = { 
			method: 'POST', 
			body: dataTxt,
			headers: {
				"Content-Type": "application/x-www-form-urlencoded",
			}
		};		
		fetch(url, fetchDataTxt)
		  .then((response) => response.json())
		  .then((data) => {
							//console.log('Success:', data);	
							//alert("isValid user : "+data.isValid);
							// if(data.nationality == 1)
							// 	session.saveLanguage('arabic');
							// session.saveLoggedUser();
							// //window.location.href = "./home.html";
			})
		  .catch((error) => {
			//this.alertError('Error:', error);
			//console.error('Error:', error);
		  });







		
		

		
		
		
		let authenticated = true;
		// send call to the login servlet and check if the user is authenticated
		if(authenticated){
			//check user nationality to set the default language
			session.saveLanguage('arabic');
			//session.saveLoggedUser();
			window.location.href = "./home.html"; 
		}
	},

	alertError(msg){
		this.setAlertModalCssClass('alert-danger');
		this.setAlertBody(msg);
		this.openAlertModal();
	},
	setAlertModalCssClass(cssClass){
		util.removeCssClass('alertDiv','alert-info alert-success alert-warning alert-danger');
		util.addCssClass('alertDiv',cssClass);
	},
	setAlertBody(html){
		util.setInnerHTML('alertBody',html);
	},
	openAlertModal(){ util.showModal('alertModal'); },
	closeAlertModal(){util.hideModal('alertModal');	},
	

};





