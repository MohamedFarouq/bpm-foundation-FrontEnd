﻿	"use strict";


	const registery = {
		mainPageController : undefined,
		ssFormsGridController : undefined,
	};

	const validator = {		
		
		assertHasValue(comp){
			try{
				if(!comp.getValue()){
					this.handleInvalid(comp,`الرجاء إدخال قيمة للحقل [${comp.label}] `, `Missing value for field [${comp.label}] `);
					return false;
				}
				else{
					this.handleValid(comp);
					return true;
				}
			}
			catch(error){app.alertError(error.message);}
		},

		assertEquals(comp,value){
			try{
				if(!this.assert(comp,'=',value)){
					this.handleInvalid(comp, ` القيمة المدخلة بالحقل [${comp.label}] يجب أن تكون [${value}] `, `Field [${comp.label}] should have the value [${value}] `);
					return false;
				}
				else{
					this.handleValid(comp);
					return true;
				}
			}
			catch(error){ app.alertError(error.message);}
		},

		assertGreaterThan(comp,value){
			try{
				if(!this.assert(comp,'>',value)){
					this.handleInvalid(comp, `القيمة المدخلة بالحقل  [${comp.label}] يجب أن تكون أكبر من [${value}] `, `Field [${comp.label}] should have value greater than [${value}] `);
					return false;
				}
				else{
					this.handleValid(comp);
					return true;
				}
			}
			catch(error){app.alertError(error.message);	}
		},

		assertGreaterThanOrEquals(comp,value){
			try{
				if(!this.assert(comp,'>=',value)){
					this.handleInvalid(comp, `القيمة المدخلة بالحقل  [${comp.label}] يجب أن تكون أكبر من أو تساوي [${value}] `, `Field [${comp.label}] should have value greater than or equal to [${value}] `);
					return false;
				}
				else{
					this.handleValid(comp);
					return true;
				}
			}
			catch(error){app.alertError(error.message);	}
		},

		assertLessThan(comp,value){
			try{
				if(!this.assert(comp,'<',value)){
					this.handleInvalid(comp, `القيمة المدخلة بالحقل  [${comp.label}] يجب أن تكون أقل من [${value}] `, `Field [${comp.label}] should have value less than [${value}] `);
					return false;
				}
				else{
					this.handleValid(comp);
					return true;
				}
			}
			catch(error){app.alertError(error.message);	}
		},

		assertLessThanOrEquals(comp,value){
			try{
				if(!this.assert(comp,'<=',value)){
					this.handleInvalid(comp, `القيمة المدخلة بالحقل  [${comp.label}] يجب أن تكون أقل من أو تساوي [${value}] `, `Field [${comp.label}] should have value less than or equal to [${value}] `);
					return false;
				}
				else{
					this.handleValid(comp);
					return true;
				}
			}
			catch(error){app.alertError(error.message);	}
		},

		assertSigned(nameComp,signerComp){
			try{
				if(! nameComp.getValue()){
					app.alertInvalid((app.isArabicLocale()) ? `اسم المستخدم غير متاح بالتوقيع` : `Missing logged User name in Signature`);
					nameComp.getHTMLElement().parentElement.parentElement.classList.add('border-danger');
					process.controller.forms[nameComp.form].select();
					return false;
				}
				if(! signerComp.getValue()){
					app.alertInvalid((app.isArabicLocale()) ? `الرجاء توقيع النموذج` : `Please Sign the form`);
					signerComp.getHTMLElement().parentElement.parentElement.classList.add('border-danger');
					process.controller.forms[signerComp.form].select();
					return false;
				}
				else{
					signerComp.getHTMLElement().parentElement.parentElement.classList.remove('border-danger');
					return true;
				}
			}
			catch(error){ app.alertError(error.message);}
		},

		assertValidIBAN(comp,bankCode){
			try{
				if(!bankCode){
					this.handleInvalid(comp, `لايوجد رمز للبنك`, `Missing Bank Code`);
					return false;
				}
				if(!this.assertHasValue(comp))
					return false;
				if(!mainFrameService.isValidIBAN(comp.getValue())){
					this.handleInvalid(comp, `رقم الـ IBAN  المدخل غير صحيح`, `Incorrect IBAN Number`);
					return false;
				}
				else{
					this.handleValid(comp);
					return true;
				}
			}
			catch(error){ app.alertError(error.message);}
		},


		handleInvalid(comp,msgAra,msgEng){
			app.alertInvalid( (app.isArabicLocale()) ? msgAra : msgEng);
			util.findThenAddCssClass('id',comp.id,'is-invalid');
			process.controller.forms[comp.form].select();	
		},

		handleValid(comp){
			util.findThenRemoveCssClass('id',comp.id,'is-invalid');
		},

		assert(comp,operation,value){
			if(operation == '='){
				return (comp.getValue() == value);
			}
			else{
				let val1 = (comp instanceof DateComponent) ? comp.getValueAsDate() : comp.getValue(); 
				let val2 = (comp instanceof DateComponent) ? new Date(value) : value; 
				if(operation == '>')
					return (val1 > val2);
				else if(operation == '>=')
					return (val1 >= val2);
				else if(operation == '<')
					return (val1 < val2);
				else if(operation == '<=')
					return (val1 <= val2);	
				else
					return false;
			}
		},
	}

	const loggedUser = {
		empNo : 0,
		trackerEmpID : 0,
		userName : "",
		arabicName:"محمد محمد فاروق",
		engName : "Mohamed Mohamed Farouk",
		signature : "Mohamed Farouk (2020-05-01)",
		isSec : false,
		isMngSec : false,
		isMng : false,
		isSup : false,
		isDDG : false,
		isOutsource : false,
		isSysAdmin : true,
		isSectorMng : false,
		//loggedUserEmpNo,loggedUserEmpLogin,loggedUserTrackerEmpID,loggedUserAraName,loggedUserEngName,loggedUserDeptAraName,loggedUserDeptEngName,loggedUserDeptCode;
		//	var loggedUserJobCode,loggedUserJobTitle,loggedUserGrade,loggedUserGender,loggedUserSectorCode,loggedUserNationality,loggedUserCivilID;
		//	var loggedUserSupersededObj;
		//var isValidUser,isSec,isMngSec,isMng,isSup,isDDG,isOutsource,isSysAdmin,isReciversAvilable,isSectorMng;
		
		
	};

	const loggedUserSuperseded = {
		empNo : 0,
		trackerEmpID : 0,
		userName : "",
		arabicName:"",
		engName : "",
		isSysAdmin : true

		
		
		
	};

	const session = {
		savePageID(pageID){ this.put("storedPageID",pageID);	},

		fetchPageID(){	return this.get("storedPageID");	},

		saveLanguage(lang){ this.put("storedLanguage",lang);	},

		fetchLanguage(){	return this.get("storedLanguage");	},

		saveLoggedUser(){ this.put("loggedUser",loggedUser);	},

		loadLoggedUser(){	loggedUser = this.getAsJSON("loggedUser");	},

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
				app.alertError("key is not stored in session storage");
		},

		getAsJSON(key){ return JSON.parse(this.get(key));	},
		
		remove(key) { sessionStorage.removeItem(key); },

	}

	const menu = {
		mainPage : new Page("mainPage","common","fa-home"),
		//newRequestGrid : new Page("newRequestGrid","common"),
		formsGrid : new Page("formsGrid","sectorSS"),
		inboxes : new Page("inboxes","common"),
		deptPublicInbox : new Page("deptPublicInbox","sectorSS"),
		secretaryInbox : new Page("secretaryInbox","common"),
		g2gInbox : new Page("g2gInbox","common"),
		memos : new Page("memos","common"),
		circulars : new Page("circulars","common"),
		imgDeptInboxes : new Page("imgDeptInboxes","sectorAdmin"),
		teamTSD : new Page("teamTSD","sectorIT"),
		teamL1A_Update : new Page("teamL1A_Update","sectorIT"),
		teamL1A : new Page("teamL1A","sectorIT"),
		teamLAN : new Page("teamLAN","sectorIT"),
		teamOprSupport : new Page("teamOprSupport","sectorIT"),
		familyCerttInbox : new Page("familyCerttInbox","sectorGD"),
		payOrders : new Page("payOrders","sectorFin"),
		outgoingCorrInbox : new Page("outgoingCorrInbox","sectorAdmin"),
		myProfile : new Page("myProfile","common"),

		main(){
			// chekc authorities here
			this.addPage(this.mainPage);
			//this.addPage(this.newRequestGrid);
			this.addPage(this.formsGrid);
			this.addPage(this.inboxes);
			this.addPage(this.deptPublicInbox);
			this.addPage(this.secretaryInbox);
			this.addPage(this.g2gInbox);
			this.addPage(this.memos);
			this.addPage(this.circulars);
			this.addPage(this.imgDeptInboxes);
			this.addPage(this.teamTSD);
			this.addPage(this.teamL1A_Update);
			this.addPage(this.teamL1A);
			this.addPage(this.teamLAN);
			// this.addPage(this.teamOprSupport);
			// this.addPage(this.familyCerttInbox);
			// this.addPage(this.payOrders);
			// this.addPage(this.outgoingCorrInbox);
			
			this.loadStoredPage();
			
		},

		addPage(page){
			let title = properties[session.fetchLanguage()][page.id];
			let html = `<a id="${page.id}" onclick="menu.loadPage(menu.${page.id})" 
						   class="list-group-item list-group-item-action list-group-item-light border-0" 
						   data-toggle="list" href="#"  >
							<i class="fas ${page.icon} text-dark" ></i><span class="display-5 font-weight-bolder">${title}</span>
						</a>`;
			util.append("sideMenu",html);
		},

		loadPage(page){
			util.loadHTML('contentArea',this.getPageURL(page));	
			this.markLastPageAsInActive();
			session.savePageID(page.id);
		},
		
		loadStoredPage(){
			if(! session.fetchPageID())
				session.savePageID(this.mainPage.id);
			let page = this[session.fetchPageID()];
			util.loadHTML('contentArea',this.getPageURL(page));	
			util.findThenAddCssClass('id',session.fetchPageID(),'active');
		},
		
		markLastPageAsInActive(){ 
			util.findThenRemoveCssClass('id',session.fetchPageID(),'active'); 
		},
		getPageURL(page){ 
			return  `./pages/content/${page.location}/${page.id}.html`;  
		}

	}

	const pdfViewer = {
		modalID : 'pdfModal',
		modalBodyID : 'pdfViewerDiv',
		modalTitleID : 'pdfModalTitle',

		renderPDFByLink(link,titleAra,titleEng){
			let body = `<object data="${link}" style="width:100%;min-height:80vh;">`;
			this.setModalTitle((app.isArabicLocale()) ? titleAra : titleEng);
			this.setModalBody(body);
			util.showModal(this.modalID);
		},
		
		setModalTitle(title){
			document.getElementById(this.modalTitleID).innerHTML = title;
		},

		setModalBody(body){
			document.getElementById(this.modalBodyID).innerHTML = body;
		},

		closeModal(){ 
			util.hideModal(this.modalID);
		},
	}

	const app = {
		errMsg : '',
		

		main(){
			menu.main();
		},

		logoff(){
			this.goLogin();
		},

		isArabicLocale(){
			return session.fetchLanguage() == 'arabic';
		},

		changeLanguage(lang){
			if(lang != session.fetchLanguage()){
				session.saveLanguage(lang);
				this.refresh();
			}
		},


		
		//isReciversAvilable,


		refresh(){	location.reload(); },

		goHome(){ window.location.href = "./home.html"; },

		goLogin(){ window.location.href = "./login.html"; },

		getInsufficientPrivilegesLabel(){
			return `<label class="text-danger "> 
						<i class="fas fa-ban text-danger"></i> 
						${this.getMessage('insufficientPrivileges') }
					</label>`;
		},
		

		alertError(msg){
			app.setAlertModalCssClass('alert-danger');
			app.setAlertBody(msg);
			app.openAlertModal();
		},
		alertInvalid(msg){
			app.setAlertModalCssClass('alert-danger');
			app.setAlertBody(msg);
			app.openAlertModal();
		},
		alertWarning(msg){
			app.setAlertModalCssClass('alert-warning');
			app.setAlertBody(msg);
			app.openAlertModal();
		},
		alertInfo(msg){
			app.setAlertModalCssClass('alert-info');
			app.setAlertBody(msg);
			app.openAlertModal();
		},
		alertSuccess(){
			let msg = this.getMessage('doneSuccessfully');//  (this.isArabicLocale()) ? properties.arabic['doneSuccessfully'] : properties.english['doneSuccessfully'];
			app.setAlertModalCssClass('alert-info');
			app.setAlertBody(msg);
			app.openAlertModal();
		},
		setAlertModalCssClass(cssClass){
			util.findThenRemoveCssClass('id','alertDiv',['alert-danger','alert-danger','alert-info','alert-success','alert-warning']);
			util.findThenAddCssClass('id','alertDiv',cssClass);
		},
		setAlertBody(html){
			util.setInnerHTML('alertBody',html);
		},


		openGeneralForm(formPolicyName,values){
			/*
			var formPolicyURL   = workPlaceURL +"/getContent?objectStoreName=BPMOBJ&id=/BPM eForm Project/General Forms/"+formPolicyName+".xml&objectType=document"+values;
			window.open(formPolicyURL,"formwindow","toolbar=no,status=1");	
			*/
		},

		openGeneralForms(formPolicyNames,values){
			/*
			var formPolicyNamesArray = formPolicyNames.split("*");
			for(var i=0; i < formPolicyNamesArray.length; i++){
				var formPolicyName = formPolicyNamesArray[i];
				var formPolicyURL   = "../../getContent?objectStoreName=BPMOBJ&id=/BPM eForm Project/General Forms/"+formPolicyName+".xml&objectType=document"+values;			
				window.open(formPolicyURL,"formwindow"+i,"toolbar=no,status=1");	
			}
			*/
		},

		openAlertModal(){ util.showModal('alertModal'); },
		closeAlertModal(){util.hideModal('alertModal');	},
		
		getMessage(msgKey){
			try{
				return (this.isArabicLocale()) ? properties.arabic[msgKey] : properties.english[msgKey];
			}
			catch(error){
				app.alertError(error.message)
			}
		},

		renderLabels(){
			let elements = document.querySelectorAll('[data-label]');
			elements.forEach((element)=>{ element.innerHTML = this.getPropertyValue(element.getAttribute('data-label')); } ); 
		},
		
		getPropertyValue(propKey){
			return properties[session.fetchLanguage()][propKey];
		}
		

		
	};




	const process = {
		controller : undefined,
		workItem : undefined,	
		processModalID : 'processModal',

		recieversList : {
			id : "recieversList",
		
			loadOriginator(){},
			
			loadSender(){},
		
			loadManager(){
				this.clearList();
				this.add();
				this.add(new participant(3000,12062003,"محمد محمد فاروق","Mohamed Farouk","إدارة الأنظمة والتطبيقات الذكية","maldeeb"));
			},
		
			loadDeptManager(){
				this.clearList();
				this.add();
				this.add(new participant(3000,12062003,"محمد محمد فاروق","Mohamed Farouk","إدارة الأنظمة والتطبيقات الذكية","maldeeb"));
			},
		
		
			loadSupervisors(){},
		
			loadSecertary(){},
		
			loadSecretary(dept){},
		
			loadDDGSecretary(sectorCode){},
		
			loadGroups(){},
		
			loadQueue(queueName){},
		
			loadGenRegQueue(){},
		
			loadGenRegOutgoingQueue(){},
		
			loadStepExecuter(stepName){},
		
			onSelect(selection){
				util.clear('recieverDeptTxt');
				util.append('recieverDeptTxt',selection.getAttribute('data-deptName'));
				process.workItem.reciever = new participant(selection.getAttribute('trackerEmpID'),selection.getAttribute('empNo'),selection.getAttribute('name'),selection.getAttribute('engName'),selection.getAttribute('deptName'),selection.getAttribute('empLoginID'));
			},
		
			add(participant){
				let html = "";
				if(participant){
					let title = (app.isArabicLocale()) ? participant.name : participant.engName;
					html = `<option data-trackerEmpID="${participant.trackerEmpID}" data-empNo="${participant.empNo}" data-empLoginId="${participant.empLoginID}" 
									data-deptName="${participant.deptName}" data-name="${participant.name}" >${title}</option>`;
				}
				else{
					html = `<option data-trackerEmpID="0" data-empNo="0" data-empLoginId=""	data-deptName="" data-name="" ></option>`;
				}
				util.append(this.id,html);
			},
			
			clearList(){ util.clear(this.id);	}
		
		},

		actionsList : {
			id : 'actionsList',
			actionDivID : 'actionDiv',
			status : new Action('','action'),
			approved : new Action('approved','approved'),
			notApproved : new Action('notApproved','notApproved'),
		
			load(actionsArray){
				util.clear(this.id);
				
				if(actionsArray){
					actionsArray.forEach(element => {	this.add(element) });
				}
				else{
					this.add(this.status);
					this.add(this.approved);
					this.add(this.notApproved);
				}
				util.findThenRemoveCssClass('id',this.actionDivID, 'd-none');
			},
		
			add(action){
				let html = `<option data-value="${action.value}" data-name="${action.name}" data-engName="${action.engName}">${action.title}</option>`;
				util.append(this.id,html);
			},
		
			onSelect(selection){
				process.workItem.action = new Action(selection.getAttribute('data-value'), selection.getAttribute('data-name'), selection.getAttribute('data-engName'));
			}	
		
		},

		branchesList : {
			id : 'branchesList',
		
			load(branchIDArray){
				util.clear(this.id);
				
				for(object in branchCatalog){
					let branch = branchCatalog[object];
					if(branchIDArray){
						if(branchIDArray.find( (branchID)=>{return branchID == branch.id;} ))
							this.add(branch);
					}
					else{
						this.add(branch);
					}
				}
				util.enable('branchesList');
			},
		
			add(branch){
				let html = "";
				let title = (app.isArabicLocale()) ? branch.name : branch.engName;
				html = `<option data-branchID="${branch.id}" data-name="${branch.name}" data-engName="${branch.engName}">${title}</option>`;
				util.append(this.id,html);
			},
		
			onSelect(selection){
				process.workItem.branch = new Branch(selection.getAttribute('data-branchID'),selection.getAttribute('data-name'),selection.getAttribute('data-engName'));
			},
		},
		
		



		launch(wi){
			this.workItem = wi;
			let url =  `./pages/process/${wi.workFlowName.toLowerCase()}/process.html`;
			util.loadHTML('processBody',url);
		},

		initialize(){
			//dynamic fetch WI data
			process.workItem.sender = new participant(3515,180603018, "ضياء المطر" ,"Dhyia Al-Mutar", "الانظمة الآلــية","scn505");
			process.workItem.comments = "الرجاء اعتماد الطلب";
			process.workItem.instructions = "Kindly select action then click complete";

			if(process.isNewRequest()){
				process.hideSenderDiv();
				process.hideStepsBtn();
			}
			else{
				process.renderSender();
			}
			
			process.renderNotes();
			process.hideActionsDiv();

		},


		openProcessModal(){ util.showModal(this.processModalID); },
		closeProcessModal(){ util.hideModal(this.processModalID);},

		
		print(){
			pdfViewer.renderPDFByLink("./resources/pdf/forms.pdf",'نمـاذج المعاملـة','Process Forms');
		},
		openSteps(){
			pdfViewer.renderPDFByLink("./resources/pdf/steps.pdf",'خطـوات المعاملـة','Steps History');
		},
		openUserGuide(){
			pdfViewer.renderPDFByLink("./resources/pdf/userGuide.pdf",'دليـل المستخـدم','User Guide');
		},
		openAttachments(){

		},
		close(){ 
			this.controller = undefined; 
			this.workItem = undefined;
			this.closeProcessModal(); 
		},
		setWorkFlowIDLabel(){
			document.getElementById('workflowIDLabel').innerHTML = `مسلسل الاجراء : ${process.workItem.workflowID}`;
		},

		isNewRequest(){
			return process.workItem.workflowID == 0;
		},
		isRedundant(){
			// server.isRedundantProcess(this.workItem) send to the server to check
		},


		hideStepsBtn(){ util.hide('procStepsBtn');},
		hidePrintBtn(){ util.hide('procPrintBtn');},
		hideAttachmentsBtn(){ util.hide('procAttachmentsBtn');},
		hideSenderDiv(){ util.hide('senderDiv')},
		hideRecieverDiv(){ util.hide('recieverDiv')},
		hideActionsDiv(){ util.hide('actionDiv')},
		

		renderSender(){ util.setValue('senderTxt',this.workItem.sender.deptName+' / '+this.workItem.sender.name); },
		renderNotes(){	util.setValue('notesTxt',this.workItem.comments); },


	};


	const formHandler = {
		controller : undefined,
		formItem : undefined,	
		formModalID : 'formModal',


		launch(fi){
			try{
				this.formItem = fi;
				let url =  `./pages/form/${this.formItem.eName.toLowerCase()}/form.html`;
				util.loadHTML('formBody',url);
			}
			catch(eror){
				app.alertError(error.message);
			}
		},

		

		openUserGuide(){
			pdfViewer.renderPDFByLink("./resources/pdf/userGuide.pdf",'دليـل المستخـدم','User Guide');
		},
		close(){ 
			this.controller = undefined; 
			this.formItem = undefined;
			this.closeFormModal(); 
		},
		// setWorkFlowIDLabel(){
		// 	document.getElementById('workflowIDLabel').innerHTML = `مسلسل الاجراء : ${process.formtem.formID}`;
		// },	

		openFormModal(){ util.showModal(this.formModalID); },
		closeFormModal(){ util.hideModal(this.formModalID);},

	};



































	function sendAjax(){
		//const response = await fetch('https://api.com/values/1');
		//const json = await response.json();
		//console.log(json);

	}

	// fetch('content.html').then( (response)=>{  
	// 									if (!response.ok) {
	// 										throw new Error('Network response was not ok');
	// 									  } 
	// 									  return response.text();} )
	// 					.then((html)=>{
	// 						$('#contentArea').load('content.html');
	// 						// contentArea.innerHTML = html;
	// 						// let scripts = new DOMParser().parseFromString(html, 'text/html').querySelectorAll('script');
	// 						// document.body.append(scripts[0]);
	// 						// document.querySelectorAll('script').forEach(element => {
	// 						//  	alert(element.src);
	// 						//  });
							
	// 					})
	// 					.catch((error) => {
	// 						alert('Error:'+ error);
	//   });


	// let dataJSON = {
			// 	empLogin: 'maldeeb',
			// 	empNo : 120628003
			// };
			// let fetchDataJSON = { 
			// 	method: 'POST', 
			// 	headers: {
			// 		'Content-Type': 'application/json',
			// 	},
			// 	body: JSON.stringify(dataJSON),
			// };
			
			// fetch(url, fetchDataJSON)
			// .then((response) => response.json())
			// .then((data) => {
			//   console.log('Success:', data);
			// })
			// .catch((error) => {
			//   console.error('Error:', error);
			// });
					



			// const data = { username: 'example' };
			// fetch(url, {
			//   method: 'POST', // or 'PUT'
			//   headers: {
			// 	'Content-Type': 'application/json',
			//   },
			//   body: JSON.stringify(data),
			// })
			// .then((response) => response.json())
			// .then((data) => {
			//   console.log('Success:', data);
			// })
			// .catch((error) => {
			//   console.error('Error:', error);
			// });
			

			// let request = async () => {
			// 	var response = await fetch('./Login', fetchData);
			// 	var json = await response.json();
			// 	//console.log(json);
			// 	return json;
			// }
			// let result = request();
			// console.log(result);
			//let json = await fetch('/Login', fetchData).then(response => response.json());


