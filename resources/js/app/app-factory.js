"use strict";

	class ErrorDetails{
		constructor(msg,stack){
			this.msg = msg;
			this.stack = (stack) ? stack : [];
		}
	}

	class Page {
		constructor(id, location, title,icon) {
			this.id = id;
			this.location = location;
			this.title = title;
			this.icon = (icon) ? icon : "fas fa-square"; 
		}

		setPadge(value){
			let css = (value > 20) ? 'badge-danger' : (value > 10) ? 'badge-warning' : 'badge-success';
			this.getBadgeHTML().classList.add(css);
			this.getBadgeHTML().innerHTML = value;
		};

		getBadgeHTML(){
			return document.getElementById(`${this.id}_badge`);
		}
	}
	
//@Deprecated
	class WorkItem{
		constructor(workFlowName,workflowID,subject,recieveDate){
			this.workFlowName = workFlowName;
			this.workflowID = (workflowID) ? workflowID : 0;
			this.subject = (subject) ? subject : '';
			this.recieveDate = (recieveDate) ? recieveDate : '';

			this.stepNo = 0;
			this.workFlowVersion = 1;
			this.workFlowType = data.processCatalog[workFlowName].id;
			this.stepName = "";
			this.nextStepName = "";
			this.comments = "";
			this.action = "";
			this.sender = new participant(3000,12062003,"محمد محمد فاروق","Mohamed Farouk","إدارة الأنظمة والتطبيقات الذكية","Smart System Department","maldeeb")//{}; //Participant
			this.reciever = new participant(3000,12062003,"محمد محمد فاروق","Mohamed Farouk","إدارة الأنظمة والتطبيقات الذكية","Smart System Department","maldeeb")//{}; //Participant
			this.branch = data.branchCatalog.Main;
			this.isLastStep = false;
			this.formsEntities = [];
			this.attachments = [];
			this.workObjectID = "";		
		}
	}

//@Deprecated - to be removed once connected to server 
	class FormItem{
		constructor(formType){
			this.formEntity =  {
								id: 0,
								creationDate: '',
								formSubject: '',
								originator : loggedUser.trackerEmpID,
								type: formType.id,
								clientCivilID : '',
								clientSSNo : ''
							   },
			this.entities = [{}];
		}
	}

//@Deprecated - to be removed once connected to server 
	class FormType{
		constructor(id,aName,eName,invDeptCodes,processIDs){
			this.id = id;
			this.aname = aName;
			this.ename = eName;
			this.invDeptCodes =  invDeptCodes;
            this.policyVSID_Dev = '';
            this.policyVSID_Prod = '';
            this.processIDs = processIDs;
            this.rank = 0;
		}
	}

	class participant{
		constructor(trackerEmpID,empNo,name,engName,deptNameAra,deptNameEng,empLoginID){
			this.trackerEmpID = trackerEmpID;
			this.empNo = empNo;
			this.name = name;
			this.engName = engName;
			this.deptNameAra = deptNameAra;
			this.deptNameEng = deptNameEng;
			this.empLoginID = empLoginID;
		}
	}

	class Option{
		constructor(labelAra,labelEng,value){
			this.label = app.chooseBasedOnLocale(labelAra,labelEng);
			this.value = value;
		}
	}

	class Action{
		constructor(value,titleKey){
			this.value = value;
			this.title = app.getPropertyValue(titleKey);
		}
	}

	class Branch{
		constructor(id,name,engName){
			this.id = id;
			this.name = name;
			this.engName = engName;
		}
	}



