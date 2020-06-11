"use strict";


class Page {
	constructor(id, location, icon) {
		this.id = id;
		this.location = location;
		this.icon = (icon) ? icon : "fa-square"; 
	}
}

class participant{
	constructor(trackerEmpID,empNo,name,engName,deptName,empLoginID){
		this.trackerEmpID = trackerEmpID;
		this.empNo = empNo;
		this.name = name;
		this.engName = engName;
		this.deptName = deptName;
		this.empLoginID = empLoginID;
	}
}

class Branch{
	constructor(id,name,engName){
		this.id = id;
		this.name = name;
		this.engName = engName;
	}
}

class WorkItem{
	constructor(workFlowName,workflowID,subject,recieveDate){
		this.workFlowName = workFlowName;
		this.workflowID = (workflowID) ? workflowID : 0;
		this.subject = (subject) ?subject : "";
		this.recieveDate = (recieveDate) ? recieveDate : "'";

		this.stepNo = 0;
		this.workFlowVersion = 1;
		this.workFlowType = processCatalog[workFlowName].id;
		this.stepName = "";
		this.nextStepName = "";
		this.comments = "";
		this.action = "";
		this.sender = {};
		this.reciever = {};
		this.branch = branchCatalog.Main;
		this.isLastStep = false;
		this.forms = [];
		this.attachments = [];
		this.workObjectID = "";		
	}
}

class Option{
	constructor(labelAra,labelEng,value){
		this.label = (app.isArabicLocale()) ? labelAra : labelEng;
		this.value = value;
	}
}

class Action{
	constructor(value,titleKey){
		this.value = value;
		this.title = app.getPropertyValue(titleKey);
	}
}



class Form{
	constructor(dbTableName,labelAra,labelEng){
		try{
			this.isPrintable = true;
			this.dbTableName = dbTableName;
			this.label = (app.isArabicLocale()) ? labelAra : labelEng;
			this.components = {};
			this.entity = {id:0, WorkFlowID : process.workItem.workflowID};
			this.addTab();
			this.renderFormHeader();
		}
		catch(error){ app.alertError(error.message);}
	}

	updateComponentsFromEntity(){
		wf_TrackerService.loadFormEntity(this.entity);
		for(let property in this.entity){
			if(this.components[property])
				this.components[property].setValue(this.entity[property]);
		}
			
	};

	updateEntityFromComponents(){
		for(let property in this.components){
			let component = this.components[property];
			if(this.entity[property])
				this.entity[property] = component.getValue();
		}
	};

	select(){ this.getTabe().click();};
	
	enable(){ this.getTabe().classList.remove('disabled');	};
	
	disable(){ this.getTabe().classList.add('disabled'); };
	
	show(){ this.getTabe().classList.remove('d-none');	};
	
	hide(){ this.getTabe().classList.add('d-none');	};
	
	addComponent(component){   
		this.components[component.name] = component;
		this.components[component.name].form = this.dbTableName;
	};
	
	setPrintable(isPrintable){ this.isPrintable = isPrintable};

	renderFormHeader() { 
		try{	
			let container = util.querySelector('data-container-for',`${this.dbTableName}_title`);
			let html = `<div class="form-row">
							<div class="col-sm-1 p-0"><img src="./resources/images/banner/pifssLogo.jpg"  width="65" height="50" alt=""></div>
							<div class="col-sm-11 p-0 text-center my-auto">
								<h3>${this.label}</h3>
							</div>
						</div>
						`;
			container.innerHTML = html;
		
		}
		catch(error){ throw error; }	
	};

	getTabe(){	
		try{ return document.getElementById(`${this.dbTableName}-tab`);}
		catch(error){ throw error;	}
	};

	addTab(){
		try{
			let html = `<a id="${this.dbTableName}-tab" href="#nav-${this.dbTableName}" data-tab-form-name="${this.dbTableName}"  aria-controls="nav-${this.dbTableName}" aria-selected="false" role="tab" class="nav-item nav-link" data-toggle="tab">${this.label}</a>`;
			document.getElementById('nav-tab').innerHTML += html;
		}
		catch(error){ throw error;}
	};
}

class Component{
	constructor(name,labelAra,labelEng){
		this.name = name;
		this.label = (app.isArabicLocale()) ? labelAra : labelEng;
		this.labelSize = 4;
		this.componentCSS = 'bg-primary text-white ';
		this.form = '';
	}
	
	getValue(){	return this.getHTMLElement().value;	};

	setValue(value){ this.getHTMLElement().value = value;	};

	enable(){ this.getHTMLElement().disabled = false;	};
	
	disable(){ 	this.getHTMLElement().disabled = true;	};

	addEvent(event,handler){   this.getHTMLElement().addEventListener(event,handler, false);}

	removeEvent(event,handler){    this.getHTMLElement().removeEventListener(event,handler, false);}

	getContainer(){ 
		try{ return util.querySelector('data-container-for',this.name);	}
		catch(error){ throw error;	}
	};

	getHTMLElement(){ return document.getElementById(this.name);  };

}

class TxtComponent extends Component{
	constructor(name,labelAra,labelEng,maxLength){
		super(name,labelAra,labelEng);
		this.maxLength = maxLength;
		this.render();
	}
	
	render(){
		try {
			let html = `<div class="form-group form-row">
							<label for="${this.name}" class="col-sm-${this.labelSize} col-form-label text-center text-nowrap ${this.componentCSS}">${this.label}</label>
							<div class="col-sm-${12-this.labelSize} p-0">
								<input type="text" id="${this.name}" maxlength="${this.maxLength}" class="form-control" >
							</div>
						</div>
						`;
			this.getContainer().innerHTML = html;
		} catch (error) {throw error;	}
	};
}

class NumberComponent extends Component{
	constructor(name,labelAra,labelEng){
		super(name,labelAra,labelEng);
		this.render();
	}
	
	render(){
		try{
			let html = ` <div class="form-group form-row">
						<label for="${this.name}" class="col-sm-${this.labelSize} col-form-label text-center text-nowrap ${this.componentCSS}">${this.label}</label>
						<div class="col-sm-${12-this.labelSize} p-0">
							<input type="number" id="${this.name}" class="form-control" >
						</div>
					</div>
					`;
			this.getContainer().innerHTML = html;
		}
		catch(error){ throw error;}
	};

}

class MoneyComponent extends Component{
	constructor(name,labelAra,labelEng){
		super(name,labelAra,labelEng);
		this.render();
	}
	
	render(){
		try{
			let html = ` <div class="form-group form-row">
						<label for="${this.name}" class="col-sm-${this.labelSize} col-form-label text-center text-nowrap ${this.componentCSS}">${this.label}</label>
						<div class="col-sm-${12-this.labelSize} p-0">
							<input type="number" id="${this.name}" step="0.001" class="form-control" >
						</div>
					</div>
					`;
			this.getContainer().innerHTML = html;
		}catch(error){ throw error;}
	};

}

class CheckBoxComponent extends Component{
	constructor(name,labelAra,labelEng){
		super(name,labelAra,labelEng);
		this.render();
	}
	
	render(){
		try {
			let html = `<div class="form-group form-row form-check">
  							<input id="${this.name}" type="checkbox" class="form-check-input" >
  							<label class="form-check-label text-muted" for="${this.name}">${this.label}</label>
						</div>
						`;
			this.getContainer().innerHTML = html;
		} catch (error) {throw error;	}
	};

	check(){
		this.getHTMLElement().checked = true;
	};
	
	uncheck(){
		this.getHTMLElement().checked = false;
	}


}

class DateComponent extends Component{
	constructor(name,labelAra,labelEng,minDate,maxDate){
		super(name,labelAra,labelEng);
		this.minDate = minDate;
		this.maxDate = maxDate;
		this.render();
	}
	
	render(){
		try{
			let html = ` <div class="form-group form-row">
						<label for="${this.name}" class="col-sm-${this.labelSize} col-form-label text-center text-nowrap ${this.componentCSS}">${this.label}</label>
						<div class="col-sm-${12-this.labelSize} p-0">
							<input id="${this.name}"  min="${this.minDate}" max="${this.maxDate}" class="form-control" type="date" >
						</div>
					</div>
					`;
			this.getContainer().innerHTML = html;
		}catch(error){ throw error;}
	};

	setMinDate(minDate){
		this.getHTMLElement().min = minDate;
	};

	setMaxDate(maxDate){
		this.getHTMLElement().max = maxDate;
	};

}

class DropDownListComponent extends Component{
	constructor(name,labelAra,labelEng,optionsList){
		super(name,labelAra,labelEng);
		//this.options = optionsList;
		this.render(optionsList);
	}
	
	render(optionsList){
		try{
			let html = `<div class="form-group form-row">
						<label for="${this.name}" class="col-sm-${this.labelSize} col-form-label text-center text-nowrap ${this.componentCSS}">${this.label}</label>
						<div class="col-sm-${12-this.labelSize} p-0">
						<select id="${this.name}" class="form-control">`;
						
					for(let opt of optionsList){
						html += `<option value="${opt.value}">${opt.label}</option>`;
					}	
			html += `</select> </div> </div>`;
			this.getContainer().innerHTML = html;
		}catch(error){ throw error;}
	};

	addOption(option){
		let opt = document.createElement("option");
		opt.text = option.label;
		opt.value = option.value;
		this.getHTMLElement().add(opt);
	};

	removeOptionByValue(value){
		let sel = this.getHTMLElement();
		let options = sel.options;
		for(let i=0;i<options.length;i++){
			if(options[i].value == value)
				sel.remove(i);
		}
	};

	removeOptionByIndex(index){
		this.getHTMLElement().remove(index);
	};

	getText(){
		return this.getHTMLElement().options[this.getHTMLElement().selectedIndex].text;
	};

	setOptions(optionsList){
		this.render(optionsList);
	};
}

class NotesComponent extends Component{
	constructor(name,labelAra,labelEng,rows,maxLength){
		super(name,labelAra,labelEng);
		this.rows = (rows) ? rows : 3;
		this.maxLength = (maxLength) ? maxLength : 150;
		this.render();
	} 
	
	render(){
		try{
			let html = `<div class="form-row p-0">
						<label for="${this.name}" class="col-sm col-form-label text-center text-nowrap ${this.componentCSS}">${this.label}</label>
						</div>
						<div class="form-row p-0">
							<textarea type="text" id="${this.name}" maxlength="${this.maxLength}" rows="${this.rows}" class="form-control" style="resize: none;" ></textarea>
						</div>
					`;
			this.getContainer().innerHTML = html;
		}catch(error){ throw error; }
	};
}

class ParagraphComponent extends Component{
	constructor(name,paraAra,paraEng,cssClasses){
		super(name,paraAra,paraEng);
		this.render(cssClasses);
	} 
	
	render(cssClasses){
		try{
			cssClasses += (app.isArabicLocale()) ? ' text-left ': ' text-right ';
			let html = `<div class="form-group form-row p-3"> 
							<label id="${this.name}" class=" d-block ${cssClasses}"  > ${this.label}</label>
						</div>`;
			this.getContainer().innerHTML = html;
		}catch(error){ throw error; }
	};
}

class SignatureComponent{
	constructor(nameField,sigField,labelAra,labelEng){
		this.label = (app.isArabicLocale()) ? labelAra : labelEng;
		this.nameField = nameField;
		this.sigField = sigField;
		this.render();
	} 
	
	render(){
		try{
			let html = `<div class="border rounded p-0 text-center">
							<h5 class="p-2 text-center text-nowrap bg-light"><i class="fas fa-file-signature text-muted" style="font-size: 18px;"></i>  ${this.label}</h5>
							<label id="${this.nameField}" class="text-center text-nowrap d-block">&nbsp;</label>
							<label id="${this.sigField}" class="text-muted text-center text-nowrap d-block" style="font-size:0.8em;">&nbsp;</label>
							<a id="${this.sigField}_btn" onclick="util.hide('${this.sigField}_btn'); util.show('${this.sigField}'); document.getElementById('${this.sigField}').innerHTML='${loggedUser.signature}';" href="#" style="padding-left:15px;" class="text-muted d-none">
								click here to sign 
        					</a>
						</div>`;
			this.getContainer().innerHTML = html;
		}catch(error){ throw error;}
	};
	
	setSigner(name,sig){
		document.getElementById(this.nameField).innerHTML = name;
		document.getElementById(this.sigField).innerHTML = sig;
	}

	getSigner(){
		let signer = {};
		signer[this.nameField] = document.getElementById(`${this.nameField}`).innerHTML;
		signer[this.sigField] =  document.getElementById(`${this.sigField}`).innerHTML;
		return signer;
	};

	enable(){
		this.setSigner(loggedUser.arabicName, '');
		util.hide(this.sigField);
		util.show(`${this.sigField}_btn`);
	};

	getContainer(){	
		try{ return util.querySelector('data-container-for',this.nameField);}
		catch(error){ throw error; }
	};
}

class AttachmentsTableComponent extends Component{
	constructor(name,attachmentsList){
		super(name,'','');
		if(!attachmentsList || !attachmentsList.length)
			app.alertError(`no list for table : ${this.name}`);
		this.render(attachmentsList);
	} 
	
	render(attachmentsList){
		try {
			let html = `<div class="container p-2">`;
			for(const att of attachmentsList){
				html += `<div class="row  border">
							<div class="col-1 text-center border-right">
								<input class="" value="${att}" data-form-element-for="${this.name}" type="checkbox"  >
							</div>
							<div class="col">
								<label class="text-left text-nowrap ">${att}</label>			
							</div>
						</div>`;
			}
			// html += `<div class="row  border">
			// 			<div class="col text-center border-right">
			// 				<buton type="button" onclick="process.controller.forms.${this.form}.components.${this.name}.getCheckedCount();">count of checked</button>
			// 			</div>
			// 		</div	
			// 		</div>`;
			

			this.getContainer().innerHTML = html;
		} catch (error) {throw error;	}
	};

	getCheckedCount(){
		alert(this.getValue());
	};

	getValue(){
		let value = '';
		let cbList = util.querySelector('data-form-element-for',this.name);
		for (const cb in  cbList) {
			if(cb.checked)
				value += cb.value+',';
		}
		return value;
	};
}



































const properties = {
    english : {
		logOff : "Log Off",
		doneSuccessfully : "Done Successfully",
		mainPage: "Main",
		newRequestGrid : "New Request",
		formsGrid : "Forms",
		inboxes : "Inboxes",
		deptPublicInbox : "Dept. Public Inbox",
		secretaryInbox : "Secretary Inbox",
		g2gInbox : "G2G Inbox",
		memos : "Memos",
		circulars : "Circulars",
		imgDeptInboxes : "Image Processing Inbox",
		teamTSD : "TSD-Team",
		teamL1AUpdate : "L1A Group Update",
		teamL1A : "L1A Group",
		teamLAN : "LAN Team",
		teamOprSupport : "Operations Support Team",
		familyCerttInbox : "Family Certificates Inbox",
		payOrders : "Payment Orders",
		outgoingCorrInbox : "Outgoing Correspondenc",
		myProfile : "My Profile",
		tracker : "Tracker",
		followupBeneficiary : "Beneficiary Follow-up",
		followupSSS : "Social Security Follow-up",
		followupG2G : "G2G Follow-up",
		clientDataCenter : "Client Data Center",
		bpmScrum : "BPM Scrum",
		balanceSheets : "Balance Sheets",
		bills : "Bills",
		reports : "Reports",
		appAdmin : "Application Administration",
		humanResourcesRequests : "Human Resources Processes",
		commonRequests : "General Processes",
		socialSecurityRequests : "Social Security Processes",
		informationTechRequests : "Information Technology Processes",
		financeRequests : "Finance Sector Processes",
		administrationRequests : "Administration Sector Processes",
		generalSectorRequests : "General Department Sector Processes",
		personalInbox : "My Personal Inbox",
		completeStep : "Complete",
		attachments : "Attachments",
		print : "Print",
		steps : "Steps",
		sender : "Sender",
		reciever : "Reciever",
		instructions : "Instructions",
		notes : "Notes",
		action : "Action",
		status : "Status",
		approved : "Approved",
		notApproved : "Not Approved",
		branch : "Branch",
		missingClientData : "Kindly enter correct SSNo or CivilID or FileNo",
		wrongSSNo : "Wrong SSNo",
		userGuide : "User Guide",


    }
    ,
    arabic : {
		logOff : "Log Off",
		doneSuccessfully : "تم تنفيذ العملية بنجاح",
		mainPage: "الصفحة الرئيسية",
		newRequestGrid : "طلب جديد",
		formsGrid : "النمـــاذج",
		inboxes : "الصادر والوارد",
		deptPublicInbox : "صندوق الوارد العام",
		secretaryInbox : "وارد السكرتارية",
		g2gInbox : "صندوق وارد G2G",
		memos : "المذكـرات الداخليـة",
		circulars : "التعاميـم الداخليـة",
		imgDeptInboxes : "وحدة معالجـة الوثائـق",
		teamTSD : "TSD-Team",
		teamL1AUpdate : "L1A Group Update",
		teamL1A : "L1A Group",
		teamLAN : "LAN Team",
		teamOprSupport : "Operations Support Team",
		familyCerttInbox : "شهـادات لمن يهمه الأمر",
		payOrders : "أوامـر الدفـع",
		outgoingCorrInbox : "الكتــاب الصــادر",
		myProfile : "سجـل المستخـدم",
		tracker : "مديـر العمليـات",
		followupBeneficiary : "شاشة المتابعة - المستحقين",
		followupSSS : "شاشة المتابعة - الخدمة التأمينية",
		followupG2G : "متابعة مراسلات - G2G",
		clientDataCenter : "الاستعـلام التأمينـي",
		bpmScrum : "BPM Scrum",
		balanceSheets : "كشوف الحساب الختامي",
		bills : "الفواتيــر",
		reports : "التقاريــر",
		appAdmin : "Application Administration",
		humanResourcesRequests : "طلبـات قطـاع عمليـات المـوارد البشريـة",
		commonRequests : "طلبــات عامـــة",
		socialSecurityRequests : "طلبــات القطــاع التأمينــي",
		informationTechRequests : "طلبـات قطـاع تكنولوجيـا المعلومـات",
		financeRequests : "طلبـات القطـاع المالـي",
		administrationRequests : "طلبـات قطـاع الشئـون الإدارية ومعالجة الوثائق",
		generalSectorRequests : "طلبـات قطـاع الإدارة العامـة",
		personalInbox : "صنـدوق الـوارد الشخصـي",
		completeStep : "إكمال الخطوة",
		attachments : "المرفقـات",
		print : "طباعـة",
		steps : "الخطـوات",
		sender : "المرسـل",
		reciever : "المرسـل إليه",
		instructions : "التعليمـات",
		notes : "الملاحظــات",
		status : "الحالـة",
		action : "الحالـة",
		approved : "معتمـد",
		notApproved : "غيـر معتمـد",
		branch : "الفـرع",
		missingClientData : "رقم الاسترجاع المدخل غير صحيح",
		wrongSSNo : "رقم الهوية المدخل غير صحيح",
		userGuide : "دليل المستخدم",
		
    }
};

//dynamically
const processCatalog = {
	TS_Service : {id:1,	arabicName : "طلب خدمة تشغيل ألي",engName:"TS_Service",engLabel : "TS Service"},
	Issue_Certificate : {id:2,	arabicName : "طلب استخراج شهادة ثبوتية",engName:"Issue_Certificate", engLabel : "Issue Certificate"},
	Salary_Ded_Hiers : {id:3,	arabicName : "طلب استقطاع من المرتب لصالح الورثة", engName:"Salary_Ded_Hiers", engLabel : "Salary Deduction for Heirs"},
	Bank_Transfer : {id:4,	arabicName : "طلب تغيير حساب بنك",engName:"Bank_Transfer",engLabel : "Change Bank Account"},
	Personal_Execuse_Permission : {id:5,	arabicName : "طلب إستئذان شخصي",engName:"Personal_Execuse_Permission",engLabel : "Personal Excuse Permission"},
	
	Employee_Release : {id:6,	arabicName : " طلب إخلاء طرف موظف",engName:"Employee_Release",engLabel : "Employee Resignation"},
	Absence_Form : {id:7,	arabicName : "نموذج غياب",engName:"Absence_Form",engLabel : "Absence Form Request"},
	Family_Certificate : {id:8,	arabicName : "طلب شهادة لمن يهمه الأمر",engName:"Family_Certificate",engLabel : "Issue Family Certificate"},
	Periodical_Leave : {id:9,	arabicName : "طلب أجازة دورية",engName:"Periodical_Leave",engLabel : "Leave Request"},
	Return_Endorsement : {id:10,	arabicName : "طلب إقرار عودة",engName:"Return_Endorsement",engLabel : "Return from leave Request"},
	
	Loan_Request : {id:11,	arabicName : "طلب قرض المؤسسـة",engName:"Loan_Request",engLabel : "Loan Request"},
	Memo : {id:12,	arabicName : "مذكـرة داخليـة",engName:"Memo",engLabel : "Memo"},
	Purchase_Cancellation : {id:13,	arabicName : "طلب إلغاء سماح البند المالي",engName:"Purchase_Cancellation",engLabel : "Purchase Cancellation Request"},
	Service_Request : {id:14,	arabicName : "طلـب خدمـة - صيانة",engName:"Service_Request",engLabel : "Maintenance Service Request"},
	Purchase : {id:15,	arabicName : "طلـب احتيـاج",engName:"Purchase",engLabel : "Purchase Request"},
	
	Amounts_Paid_In_Excess : {id:16,	arabicName : "طلب صرف مبالغ مسددة بالزيادة",engName:"Amounts_Paid_In_Excess",engLabel : "Release Amounts paid in excess"},
	Outgoing_Correspondences : {id:17,	arabicName : "إنشاء كتاب صادر",engName:"Outgoing_Correspondences",engLabel : "Outgoing Correspondence"},
	File_Change : {id:18,	arabicName : "نموذج تحويل ملف", engName:"File_Change",engLabel : "File Transfer Form"},
	CCF_Operations : {id:19,	arabicName : "طلب معالجة ملف رقابي",engName:"CCF_Operations",engLabel : "CCF Operation"},
	Pension_Advanced : {id:20,	arabicName : "معاش مقدم",engName:"Pension_Advanced",engLabel : "Pension in advance"},
	
	Pension_Replacement : {id:21,	arabicName : "استبدال جزء من معاش تقاعدي",engName:"Pension_Replacement",engLabel : "Pension partial replacement"},
	Unemployment_Compensation_Calculation : {id:22,	arabicName : "حساب التأمين ضد البطالة",engName:"Unemployment_Compensation_Calculation",engLabel : "Unemployment compensation calculation"},
	Pension_Repayment : {id:23,	arabicName : "إعادة صرف معاش",engName:"Pension_Repayment",engLabel : "Pension repayment"},
	Share_Advanced : {id:24,	arabicName : "نصيب مقدم",engName:"Share_Advanced",engLabel : "Share in advance"},
	Query_Management_Facility : {id:25,	arabicName : "Query Management Facility",engName:"Query_Management_Facility",engLabel : "Query Management Facility"},
	
	Recover_Undeserved_Amounts : {id:26,	arabicName : "استرداد مبالغ مصروفة غير مستحقة",engName:"Recover_Undeserved_Amounts",engLabel : "Recover undeserved paid amounts"},
	UCC_Payment : {id:27,	arabicName : "تسليم مبالغ تأمين ضد البطالة",engName:"UCC_Payment",engLabel : "Unemployment Compensation"},
	Payment_Order : {id:28,	arabicName : "طلب أمر دفع فوري",engName:"Payment_Order",engLabel : "Payment Order"},
	Allow_Item : {id:29,	arabicName : "سماح البند المالي",engName:"Allow_Item",engLabel : "Voucher request"},
	Program_Installation : {id:30,	arabicName : "Program Installation",engName:"Program_Installation",engLabel : "Program Installation"},
	
	Medical_Committee_Memo : {id:31,	arabicName : "مذكرة أمانة سر اللجنة الطبية",engName:"Medical_Committee_Memo",engLabel : "Medical Committee memo"},
	Pension_Replacement_In_Employment : {id:32,	arabicName : "استبدال أثناء الخدمة",engName:"Pension_Replacement_In_Employment",engLabel : "Pension replacement in employment"},
	File_Complaint : {id:33,	arabicName : "نموذج تقديم شكوى",engName:"File_Complaint",engLabel : "File a complaint"},
	Process_Cancellation : {id:34,	arabicName : "مذكرة إلغاء",engName:"Process_Cancellation",engLabel : "Process cancellation request"},
	Refund_Memo : {id:35,	arabicName : " مذكرة مبالغ مرتجعة مستحقة",engName:"Refund_Memo",engLabel : "Refund memo"},
	
	Modification_Request : {id:36,	arabicName : "طلب تعديل على الاسترجاع الرئيسي للوثائق",engName:"Modification_Request",engLabel : "Document Retrieval system modification request"},
	Document_Retrieval_Suggestions : {id:37,	arabicName : " نظام الاسترجاع الآلي للوثائق",engName:"Document_Retrieval_Suggestions",engLabel : "Document retrieval system suggestions"},
	System_Modification_Request : {id:38,	arabicName : "طلب تعديل أنظمة SMR - SSR",engName:"System_Modification_Request",engLabel : "SMR-SSR request"},
	User_Signon : {id:39,	arabicName : "نموذج صلاحيات المستخدم",engName:"User_Signon",engLabel : "User authorities form"},

	Journal_Entry : {id:40,	arabicName : "نموذج اعداد سندات القيد",engName:"Journal_Entry",engLabel : "Voucher request"},
	//System_Service_Request : {id:41,	arabicName : "",engName:"",engLabel : ""},
	Incomplete_Document : {id:42,	arabicName : "نموذج استكمال النواقص",engName:"Incomplete_Document",engLabel : "Submit missing documents"},
	Exit_Permit : {id:43,	arabicName : "إذن خروجيـة",engName:"Exit_Permit",engLabel : "Travel Permit"},
	Process_Transfer : {id:44,	arabicName : "طلب تحويل إجراء",engName:"Process_Transfer",engLabel : "Process Transfer"},
	Task_Aassignment_Request : {id:45,	arabicName : "نموذج متابعة المهام ",engName:"Task_Aassignment_Request",engLabel : "Task assignment"},
	Reply_About_RUA : {id:46,	arabicName : "الرد على مذكرة استرداد مبالغ مصروفه غير مستحقة",engName:"Reply_About_RUA",engLabel : "Reply about recovering undeserved amounts"},
	Pension_Calculation : {id:47,	arabicName : "تسوية المعاش التقاعدي",engName:"Pension_Calculation",engLabel : "Pension settlement"},
	Operation_Support_Request_Forms : {id:48,	arabicName : "Operation Support Request Forms",engName:"Operation_Support_Request_Forms",engLabel : "Operation Support Request Forms"},
	Sick_Leave : {id:49,	arabicName : "طلب اجازة مرضية",engName:"Sick_Leave",engLabel : "Sick leave"},
	Extract_And_Receive_Files : {id:50,	arabicName : "طلب استخراج واستلام ملفات",engName:"Extract_And_Receive_Files",engLabel : "Extract files permit"},
	RACF_Security_Form : {id:51,	arabicName : "نموذج طلب صلاحيات الخط الأول ونظام الإيجل - RACF",engName:"RACF_Security_Form",engLabel : "RACF request"},

}

//dynamically
const branchCatalog = {
	Main : new Branch(1,"الرئيسي","Main"),
	Mishref : new Branch(2,"مشـرف","Mishref"),
	Ghornata : new Branch(3,"غرناطـة","Ghornata"),
	Fahd_Al_Ahmad : new Branch(4,"فهـد الأحمـد","Fahd Al-Ahmad"),
	Janoub_Al_Surra : new Branch(5,"جنوب السـرة","Janoub Al-Surra"),
	Ardiya : new Branch(6,"العارضيـة","Ardiya")
}

