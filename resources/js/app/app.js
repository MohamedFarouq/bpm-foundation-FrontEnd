"use strict";


	let data = {
		properties : {
			english : {
				SYSTEM_MSGS : 'System Messages',
				SOMETHING_WENT_WRONG : 'Something went wrong - Please contact 4040',
				LOG_OFF : "Log Off",
				DONE_SUCCESSFULLY : "Done Successfully",
				INSUFFICIENT_PRIVILEGES : 'User does not have enough privileges to execute the operation',
				MAIN_PAGE: "Main Page",
				NEW_REQUEST_GRID : "New Request",
				NOTIFICATIONS : "Notifications",
				FORMS_GRID : "Forms",
				INBOXES : "Inboxes",
				DEPT_PUBLIC_INBOX : "Dept. Public Inbox",
				SECRETARY_INBOX : "Secretary Inbox",
				G2G_INBOX : "G2G Inbox",
				MEMO_INBOX : "Memos Inbox",
				CIRCULARS : "Circulars",
				IMG_DEPT_INBOXES : "Image Processing Inbox",
				TEAM_TSD : "TSD-Team",
				TEAM_L1A_UPDATE : "L1A Group Update",
				TEAM_L1A : "L1A Group",
				TEAM_LAN : "LAN Team",
				TEAM_OPR_SUPPORT : "Operations Support Team",
				FAMILY_CERT_INBOX : "Family Certificates Inbox",
				PAY_ORDERS : "Payment Orders",
				OUTGOING_CORR_INBOX : "Outgoing Correspondenc",
				MY_PROFILE : "My Profile",
				TRACKER : "Tracker",
				FOLLOW_UP_BENEFICIARY : "Beneficiary Follow-up",
				FOLLOW_UP_SSS : "Social Security Follow-up",
				FOLLOW_UP_G2G : "G2G Follow-up",
				CLIENT_DATA_CENTER : "Client Data Center",
				BALANCE_SHEETS : "Balance Sheets",
				BILLS : "Bills",
				REPORTS : "Reports",
				APP_ADMIN : "Application Administration",
				HR_REQUESTS : "Human Resources Processes",
				COMMON_REQUESTS : "General Processes",
				SS_REQUESTS : "Social Security Processes",
				IT_REQUESTS : "Information Technology Processes",
				FINANCE_REQUESTS : "Finance Sector Processes",
				ADMINISTRATION_REQUESTS : "Administration Sector Processes",
				GENERAL_SECTOR_REQUESTS : "General Department Sector Processes",
				My_INBOX : "My Personal Inbox",
				COMPLETE_STEP : "Complete",
				ATTACHMENTS : "Attachments",
				PRINT : "Print",
				STEPS : "Steps",
				RE_ASSIGN:'Reassign',
				SENDER : "Sender",
				RECEIVER : "Reciever",
				INSTRUCTIONS : "Instructions",
				NOTES : "Notes",
				ACTION : "Action",
				STATUS : "Status",
				APPROVED : "Approved",
				NOT_APPROVED : "Not Approved",
				BRANCH : "Branch",
				MISSING_CLIENT_DATA : "Kindly enter correct SSNo or CivilID or FileNo",
				INVALID_SSNO : "Wrong SSNo",
				USER_GUIDE : "User Guide",
				SUPERCEDED_FORMS : 'Superseded Forms',
				CANCEL_FORM : 'Cancel Form',
				
			}
			,
			arabic : {
				SYSTEM_MSGS : 'رسائـل النظـام',
				SOMETHING_WENT_WRONG : 'حدث خطأ بالنظـام، الرجـاء الاتصـال على 4040',
				LOG_OFF : "Log Off",
				DONE_SUCCESSFULLY : "تم تنفيذ العملية بنجاح",
				INSUFFICIENT_PRIVILEGES : 'المستخدم الحالي ليس لديه الصلاحيات الكافية لتنفيذ العملية',
				MAIN_PAGE: "الصفحة الرئيسية",
				NEW_REQUEST_GRID : "طلب جديد",
				NOTIFICATIONS : "التنبيهـات",
				FORMS_GRID : "النمـــاذج",
				INBOXES : "الصادر والوارد",
				DEPT_PUBLIC_INBOX : "صندوق الوارد العام",
				SECRETARY_INBOX : "صندوق وارد السكرتارية",
				G2G_INBOX : "صندوق وارد G2G",
				MEMO_INBOX : "صندوق المذكرات الداخلية",
				CIRCULARS : "التعاميـم الداخليـة",
				IMG_DEPT_INBOXES : "صندوق وارد معالجة الوثائق",
				TEAM_TSD : "TSD-Team",
				TEAM_L1A_UPDATE : "L1A Group Update",
				TEAM_L1A : "L1A Group",
				TEAM_LAN : "LAN Team",
				TEAM_OPR_SUPPORT : "Operations Support Team",
				FAMILY_CERT_INBOX : "شهـادات لمن يهمه الأمر",
				PAY_ORDERS : "أوامـر الدفـع",
				OUTGOING_CORR_INBOX : "الكتــاب الصــادر",
				MY_PROFILE : "سجـل المستخـدم",
				TRACKER : "مديـر العمليـات",
				FOLLOW_UP_BENEFICIARY : "شاشة المتابعة - المستحقين",
				FOLLOW_UP_SSS : "شاشة المتابعة - الخدمة التأمينية",
				FOLLOW_UP_G2G : "متابعة مراسلات - G2G",
				CLIENT_DATA_CENTER : "الاستعـلام التأمينـي",
				BALANCE_SHEETS : "كشوف الحساب الختامي",
				BILLS : "الفواتيــر",
				REPORTS : "التقاريــر",
				APP_ADMIN : "Application Administration",
				HR_REQUESTS : "طلبـات قطـاع عمليـات المـوارد البشريـة",
				COMMON_REQUESTS : "طلبــات عامـــة",
				SS_REQUESTS : "طلبــات القطــاع التأمينــي",
				IT_REQUESTS : "طلبـات قطـاع تكنولوجيـا المعلومـات",
				FINANCE_REQUESTS : "طلبـات القطـاع المالـي",
				ADMINISTRATION_REQUESTS : "طلبـات قطـاع الشئـون الإدارية ومعالجة الوثائق",
				GENERAL_SECTOR_REQUESTS : "طلبـات قطـاع الإدارة العامـة",
				My_INBOX : "صنـدوق الـوارد الشخصـي",
				COMPLETE_STEP : "إكمال الخطوة",
				ATTACHMENTS : "المرفقـات",
				PRINT : "طباعـة",
				STEPS : "الخطـوات",
				RE_ASSIGN:'إعادة توجيه',
				SENDER : "المرسـل",
				RECEIVER : "المرسـل إليه",
				INSTRUCTIONS : "التعليمـات",
				NOTES : "الملاحظــات",
				STATUS : "الحالـة",
				ACTION : "الحالـة",
				APPROVED : "معتمـد",
				NOT_APPROVED : "غيـر معتمـد",
				BRANCH : "الفـرع",
				MISSING_CLIENT_DATA : "رقم الاسترجاع المدخل غير صحيح",
				INVALID_SSNO : "رقم الهوية المدخل غير صحيح",
				USER_GUIDE : "دليل المستخدم",
				SUPERCEDED_FORMS : 'نماذج سابقة',
				CANCEL_FORM : 'إلغاء النموذج',
	
			}
		},
		
		processCatalog : {
			Template : {id:150,	arabicName : "إجراء توضيحي",engName:"Template",engLabel : "Template Process"},
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
	
		},

		branchCatalog : {
			Main : new Branch(1,"الرئيسي","Main"),
			Mishref : new Branch(2,"مشـرف","Mishref"),
			Ghornata : new Branch(3,"غرناطـة","Ghornata"),
			Fahd_Al_Ahmad : new Branch(4,"فهـد الأحمـد","Fahd Al-Ahmad"),
			Janoub_Al_Surra : new Branch(5,"جنوب السـرة","Janoub Al-Surra"),
			Ardiya : new Branch(6,"العارضيـة","Ardiya")
		},

	};
	


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
					app.alertInvalid( app.chooseBasedOnLocale(`اسم المستخدم غير متاح بالتوقيع`,`Missing logged User name in Signature`) );
					nameComp.getHTMLElement().parentElement.parentElement.classList.add('border-danger');
					processHandler.controller.forms[nameComp.form].select();
					return false;
				}
				if(! signerComp.getValue()){
					app.alertInvalid( app.chooseBasedOnLocale(`الرجاء توقيع النموذج`,`Please Sign the form`) );
					signerComp.getHTMLElement().parentElement.parentElement.classList.add('border-danger');
					processHandler.controller.forms[signerComp.form].select();
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
			app.alertInvalid( app.chooseBasedOnLocale( msgAra,msgEng) );
			util.findThenAddCssClass('id',comp.id,'is-invalid');
			processHandler.controller.forms[comp.form].select();	
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
		empNo : 120628003,
		trackerEmpID : 5653,
		empLoginID : 'ebs002',
		arabicName:"محمد محمد فاروق",
		engName : "Mohamed Mohamed Farouk",
		signature : "Mohamed Farouk (2020-05-01)",
		deptCode : 811,
		sectorCode : 330,
		deptAname : 'الانظمة الذكية',
		deptEname : 'Smart Systems Dept',
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
		mainPage : new Page('mainPage','common','MAIN_PAGE','fas fa-home'),
		formsGrid : new Page('formsGrid','sectorSS','FORMS_GRID','far fa-copy'),
		inboxes : new Page('inboxes','common','INBOXES'),
		deptPublicInbox : new Page('deptPublicInbox','sectorSS','DEPT_PUBLIC_INBOX','far fa-envelope'),
		secretaryInbox : new Page("secretaryInbox","common",'SECRETARY_INBOX','far fa-envelope'),
		g2gInbox : new Page('g2gInbox','common','G2G_INBOX','far fa-envelope'),
		memos : new Page('memos','common','MEMO_INBOX','far fa-envelope'),
		circulars : new Page('circulars','common','CIRCULARS','far fa-comments'),
		imgDeptInboxes : new Page('imgDeptInboxes','sectorAdmin','IMG_DEPT_INBOXES','far fa-envelope'),
		teamTSD : new Page('teamTSD','sectorIT','TEAM_TSD','far fa-envelope'),
		teamL1A_Update : new Page('teamL1A_Update','sectorIT','TEAM_L1A_UPDATE','far fa-envelope'),
		teamL1A : new Page('teamL1A','sectorIT','TEAM_L1A','far fa-envelope'),
		teamLAN : new Page('teamLAN','sectorIT','TEAM_LAN','far fa-envelope'),
		teamOprSupport : new Page('teamOprSupport','sectorIT','TEAM_OPR_SUPPORT','far fa-envelope'),
		familyCertInbox : new Page('familyCertInbox','sectorGD','FAMILY_CERT_INBOX'),
		payOrders : new Page('payOrders','sectorFin','PAY_ORDERS'),
		outgoingCorrInbox : new Page('outgoingCorrInbox','sectorAdmin','OUTGOING_CORR_INBOX'),
		myProfile : new Page('myProfile','common','MY_PROFILE'),
		
		main(){
			// chekc authorities here
			this.addPage(this.mainPage);
			this.addPage(this.deptPublicInbox);
			this.addPage(this.secretaryInbox);
			this.addPage(this.memos);
			this.addPage(this.g2gInbox);
			this.addPage(this.imgDeptInboxes);
			this.addPage(this.teamTSD);
			this.addPage(this.teamL1A_Update);
			this.addPage(this.teamL1A);
			this.addPage(this.teamLAN);
			this.addPage(this.inboxes);
			this.addPage(this.formsGrid);
			this.addPage(this.circulars);
			// this.addPage(this.teamOprSupport);
			// this.addPage(this.payOrders);
			// this.addPage(this.outgoingCorrInbox);
			
			this.loadStoredPage();
			
		},

		addPage(page){
			let title = app.getPropertyValue(page.title);// properties[session.fetchLanguage()][page.id];
			let html = `<a id="${page.id}" onclick="menu.loadPage(menu.${page.id})" class="list-group-item list-group-item-action list-group-item-light  d-flex justify-content-between  border-0 " data-toggle="list" href="#"  >
						   <span class="font-weight-bold" >	
						   		<i class=" ${page.icon} text-dark fontSize125"></i>
								${title}
							</span>
							<span id="${page.id}_badge" class="badge badge-pill my-auto fontSize85" style="min-width:3em !important;"></span>	
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
			let page = menu[session.fetchPageID()];
			util.loadHTML('contentArea',this.getPageURL(page));	
			util.findThenAddCssClass('id',page.id,'active');
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
		objectURL : undefined,

		renderPDFByLink(link,titleAra,titleEng){
			this.viewePDF(link,titleAra,titleEng);
		},
		
		renderPDFByData(data,titleAra,titleEng){
			this.viewePDF(data,titleAra,titleEng);
		},

		renderByObjectURL(objectURL,titleAra,titleEng){
			this.objectURL = objectURL;
			this.viewePDF(objectURL,titleAra,titleEng);
		},

		viewePDF(data,titleAra,titleEng){
			let viewerTag = `<object data="${data}"  style="width:100%;min-height:80vh;" type="application/pdf" >`;
			this.setModalTitle( app.chooseBasedOnLocale(titleAra,titleEng));
			this.setModalBody(viewerTag);
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
			this.setModalBody('');
			if(this.objectURL)
				URL.revokeObjectURL(this.objectURL);
		},
	}

	const app = {
		errMsg : '',
		

		main(){
			let resolve = (returnedData)=>{
				data = returnedData;
				menu.main();
				app.refreshInboxesPadges();
			};
			let reject = ()=>{
				menu.main();
				app.refreshInboxesPadges();
			};
			appService.fetchAppDataThenDo(resolve,reject);
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

		refreshInboxesPadges(){
			menu.g2gInbox.setPadge(250);
			menu.secretaryInbox.setPadge(5);
		},
		
		//isReciversAvilable,


		refresh(){	location.reload(); },

		goHome(){ window.location.href = "./home.html"; },

		goLogin(){ window.location.href = "./login.html"; },

		getInsufficientPrivilegesLabel(){
			return `<label class="text-danger "> 
						<i class="fas fa-ban text-danger"></i> 
						${this.getPropertyValue('INSUFFICIENT_PRIVILEGES') }
					</label>`;
		},
		



		alertError(err){
			try {
				let align = app.chooseBasedOnLocale('text-left','text-right');
				let body = `<label class="d-block ${align} fontSize110 font-weight-bold" >${app.getPropertyValue('SOMETHING_WENT_WRONG')}</label>`;
				if(err instanceof ErrorDetails){
					body += `<div class="container-fluid text-right overflow-auto " style="direction:ltr;"> 
								<label class="d-block " >${err.msg}</label>`;
					err.stack.forEach(se=> body += `<label class="d-block fontSize75 " >${se}</label>`);
					body += '</div>';
				}
				else
					body += `<label class="d-block text-right" >${err}</label>`;	
				
				app.setAlertModalCssClass('alert-danger');
				app.setAlertBody(body);
				app.openAlertModal();
			} catch (error) { 
				alert(error.message);
			}
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
			try {
				let msg = this.getPropertyValue('DONE_SUCCESSFULLY');
				app.setAlertModalCssClass('alert-success');
				app.setAlertBody(msg);
				app.openAlertModal();
				
			} catch (error) {
				alert(error.message);
			}
		},
		setAlertModalCssClass(cssClass){
			util.findThenRemoveCssClass('id','alertDiv',['alert-danger','alert-info','alert-success','alert-warning']);
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
		
		openLoadingModal(){ util.showModal('loadingModal'); },
		closeLoadingModal(){util.hideModal('loadingModal'); },
		
		
		renderLabels(){
			let elements = document.querySelectorAll('[data-label]');
			elements.forEach((element)=>{ element.innerHTML = this.getPropertyValue(element.getAttribute('data-label')); } ); 
		},
		
		getPropertyValue(propKey){
			try{
				return app.chooseBasedOnLocale(data.properties.arabic[propKey], data.properties.english[propKey]);
			}
			catch(error){ app.alertError(error.message)}
		},
		
		chooseBasedOnLocale(araValue,engValue){
			return app.isArabicLocale() ? araValue : (!engValue) ? araValue : engValue ;
		},

		

		
	};




	const processHandler = {
		processModalID : 'processModal',
		processContainer : 'processBody',
		controller : undefined,
		process : undefined,	
		workItem : {stepName:''},

		recieversList : {
			id : "recieversList",
		
			loadOriginator(){},
			
			loadSender(){},
		
			loadManager(){
				this.clearList();
				this.add();
				this.add(new participant(3000,12062003,"محمد محمد فاروق","Mohamed Farouk","إدارة الأنظمة والتطبيقات الذكية","Smart System Department","maldeeb"));
			},
		
			loadDeptManager(){
				this.clearList();
				this.add();
				this.add(new participant(3000,12062003,"محمد محمد فاروق","Mohamed Farouk","إدارة الأنظمة والتطبيقات الذكية",'Smart System Depaartment',"maldeeb"));
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
				processHandler.workItem.reciever = new participant(selection.getAttribute('trackerEmpID'),selection.getAttribute('empNo'),selection.getAttribute('name'),selection.getAttribute('engName'),selection.getAttribute('deptName'),'',selection.getAttribute('empLoginID'));
			},
		
			add(participant){
				let html = "";
				if(participant){
					let title = app.chooseBasedOnLocale(participant.name,participant.engName);
					html = `<option data-trackerEmpID="${participant.trackerEmpID}" data-empNo="${participant.empNo}" data-empLoginId="${participant.empLoginID}" 
									data-deptName="${participant.deptNameAra}" data-name="${participant.name}" >${title}</option>`;
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
			status : new Action('','ACTION'),
			approved : new Action('approved','APPROVED'),
			notApproved : new Action('notApproved','NOT_APPROVED'),
		
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
				processHandler.workItem.action = new Action(selection.getAttribute('data-value'), selection.getAttribute('data-name'), selection.getAttribute('data-engName'));
			}	
		
		},

		branchesList : {
			id : 'branchesList',
		
			load(branchIDArray){
				util.clear(this.id);
				
				for(object in data.branchCatalog){
					let branch = data.branchCatalog[object];
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
				let title = app.chooseBasedOnLocale(branch.name,branch.engName);
				html = `<option data-branchID="${branch.id}" data-name="${branch.name}" data-engName="${branch.engName}">${title}</option>`;
				util.append(this.id,html);
			},
		
			onSelect(selection){
				processHandler.workItem.branch = new Branch(selection.getAttribute('data-branchID'),selection.getAttribute('data-name'),selection.getAttribute('data-engName'));
			},
		},
		
		
		launchNew(procEngName){
			let procCatalog = data.processCatalog[procEngName];
			let resolve = (proc)=>{
									processHandler.process = proc;
									processHandler.setProcCurrentUser();
									util.loadHTML(processHandler.processContainer, `./pages/process/${procEngName.toLowerCase()}/process.html` );
								};
			let reject = ()=>{
									util.loadHTML(processHandler.processContainer, `./pages/process/${procEngName.toLowerCase()}/process.html` );
								};			
			processService.fetchInitialProcess(procCatalog.id,resolve,reject);
		},




		launch(wi){
			this.workItem = wi;
			let url =  `./pages/process/${wi.workFlowName.toLowerCase()}/process.html`;
			util.loadHTML('processBody',url);
		},

		initialize(){
			//dynamic fetch WI data
			/*
			processHandler.workItem.sender = new participant(3515,180603018, "ضياء المطر" ,"Dhyia Al-Mutar", "الانظمة الآلــية",'Smart Systems Department',"scn505");
			processHandler.workItem.comments = "الرجاء اعتماد الطلب";
			processHandler.workItem.instructions = "Kindly select action then click complete";

			if(processHandler.isNewRequest()){
				processHandler.hideSenderDiv();
				processHandler.hideStepsBtn();
			}
			else{
				processHandler.renderSender();
			}
			
			processHandler.renderNotes();
			processHandler.hideActionsDiv();
			*/
		},

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
			this.process = undefined; 
			//this.workItem = undefined;
			this.closeProcessModal(); 
		},
		
		
		setProcCurrentUser(){
			let cu = processHandler.process.currentUser;
			cu.trackerEmpID = loggedUser.trackerEmpID;
			cu.empNo = loggedUser.empNo;
			cu.aname = loggedUser.arabicName;
			cu.ename = loggedUser.engName;
			cu.deptAname = loggedUser.deptAname;
			cu.deptEname = loggedUser.deptEname;
			cu.empLoginID = loggedUser.empLoginID;
		},
		setWorkFlowIDLabel(){
			document.getElementById('workflowIDLabel').innerHTML = `مسلسل الاجراء : ${processHandler.workItem.workflowID}`;
		},

		isNewRequest(){
			return processHandler.workItem.workflowID == 0;
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

		openProcessModal(){ util.showModal(this.processModalID); },
		closeProcessModal(){ util.hideModal(this.processModalID);},

	};







	const formHandler = {
		formModalID : 'formModal',
		formType : undefined,
		formItem : undefined,
		controller : undefined,

		launch(formTypeEncodedJson){
			try{
				this.formType = util.mapEncodedJsonToObject(formTypeEncodedJson);
				ssFormsService.fetchInitialFormItem();
			}
			catch(eror){
				app.alertError(new ErrorDetails(`error @formHandler.launch`,[error.message]));
			}
		},

		print(){
			try {
				this.controller.beforePrint();
				if(isLocally)
					pdfViewer.renderPDFByLink('./resources/pdf/forms.pdf', formHandler.formType.aname,formHandler.formType.ename);
				else
					ssFormsService.saveFormItem();
				
			} catch (error) {
				app.alertError(new ErrorDetails('error @formHandler.print',[error.message]))
			}
		},

		checkIfThereAreRedundantForms(){
			if(!formHandler.formItem.formEntity.clientCivilID && !formHandler.formItem.formEntity.clientSSNo)
				app.alertInvalid('الرجاء تعبئة الرقم المدني ورقم الهوية أولا');
			else{
				ssFormsService.checkIfThereAreRedundantForms();
			}	
		},

		printRedundant(){
			if(!formHandler.formItem.formEntity.clientCivilID && !formHandler.formItem.formEntity.clientSSNo)
				app.alertInvalid('الرجاء تعبئة الرقم المدني ورقم الهوية أولا');
			else{
				ssFormsService.printRedundant();
			}	
		},

		deleteForm(){
			let ok = confirm('هل أنت متأكد من تنفيذ الالغاء ؟');
			if (ok) {
				if(formHandler.formItem.formEntity.id)
					ssFormsService.deleteFormItem();
				else
					formHandler.controller.read();	
			}
		},

		close(){ 
			this.controller = undefined; 
			this.formType = undefined;
			this.formItem = undefined;
			this.closeFormModal(); 
		},

		setWorkFlowIDLabel(){
			document.getElementById('formIDLabel').innerHTML = `مسلسل النموذج : ${formHandler.formItem.formEntity.id}`;
		},	

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


