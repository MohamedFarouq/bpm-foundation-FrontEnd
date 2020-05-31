
const peService = {
    fetchInboxWIs(username){
        let list = [];
        list.push(new WorkItem("Periodical_Leave",550, "طلب اجازة دورية" ,"12/5/2019") );
        list.push(new WorkItem("Bank_Transfer",100, "طلب تغيير حساب بنك" ,"12/5/2019") );
        list.push(new WorkItem("Bank_Transfer",110, "طلب تغيير حساب بنك" ,"12/6/2019") );
        list.push(new WorkItem("Loan_Request",1050, "طلب تحويل اجراء" ,"12/7/2019") );
        list.push(new WorkItem("Pension_Advanced",10575, "طلب معاش مقدم" ,"12/7/2019") );
        return list;
    },

    fetchQueueWIs(){},


}

const mainFrameService = {
    charDB2HexValueArray : [],

    defineCharDB2HEXValuesArray(){
        this.charDB2HexValueArray[0] = ['4','5','6','7','8','9','A','B','C','D','E','F'];
        this.charDB2HexValueArray[1] = ['0',' ','&','-','ح','ش','ظ','غ','ك',';','؟','x','0'];
        this.charDB2HexValueArray[2] = ['1','','ـأ','/','خ','a','j','÷','ل','A','J','','1'];
        this.charDB2HexValueArray[3] = ['2','ّ','ؤ','ة','خـ','b','k','s','لآ','B','K','S','2'];
        this.charDB2HexValueArray[4] = ['3','ّ','','ت','د','c','l','t','لآ','C','L','T','3'];
        this.charDB2HexValueArray[5] = ['4','ـ','','تـ','ذ','d','m','u','لأ','D','M','U','4'];
        this.charDB2HexValueArray[6] = ['5',' ','ئـ','ث','ر','e','n','v','لأ','E','N','V','5'];
        this.charDB2HexValueArray[7] = ['6','ء','ا','ثـ','ز','f','o','w','','F','O','W','6'];
        this.charDB2HexValueArray[8] = ['7','آ','ـا','ج','س','g','p','x','','G','P','X','7'];
        this.charDB2HexValueArray[9] = ['8','ـآ','ب','جـ','سـ','h','q','y','لا','H','Q','Y','8'];
        this.charDB2HexValueArray[10] = ['9','أ','بـ','ح',',','i','r','z','لا','I','R','Z','9'];
        this.charDB2HexValueArray[11] = ['A','₵','!','|',':','ش','ع','غ','ل','-','ى','1','€'];
        this.charDB2HexValueArray[12] = ['B','.','$',',','#','ص','ع','ف','م','ه','ى','2','6'];
        this.charDB2HexValueArray[13] = ['C','<','*','%','@','ص','ع','ف','م','','ي','','7'];
        this.charDB2HexValueArray[14] = ['D','(',')','_','\'','ض','ع','ق','ن','ه','ي','3','8'];
        this.charDB2HexValueArray[15] = ['E','+',';','>','=','ض','غ','ق','ن','','ي','4','9'];
        this.charDB2HexValueArray[16] = ['F','|','','?','\"','ط','غ','ك','ه','و','0','5',''];
    },
    
    reverseText(text){
        let textChars,reversedText,englishAlphabet;
        englishAlphabet = "a,b,c,d,e,f,g,h,i,g,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z";
        reversedText = "";
        text = text.trim();
        text = text.replace("(","");
        text = text.replace(")","");
        textChars = text.split("");
        
        for(var i=(textChars.length-1);i>=0;i--){
            if(englishAlphabet.search(textChars[i].toLowerCase()) > -1 ){
                reversedText = text.replace('عرف','فرع');
                break;
            }
            reversedText = reversedText + textChars[i];	
        }	
        reversedText = reversedText.replace("تحويالت","تحويلات");
        reversedText = reversedText.replace("تحويال ت","تحويلات");
        reversedText = reversedText.replace("الهال ل","الهلال");
        reversedText = reversedText.replace("مواصال ت","مواصلات");
        reversedText = reversedText.replace("0002","2000");
        reversedText = reversedText.replace("063","360");
        reversedText = reversedText.replace("األ","الأ");
        reversedText = reversedText.replace("اال","الأ");
        reversedText = reversedText.replace("أأل","الأ");
        
        return reversedText;
    },

    getCharFromDB2HEX(hexText){
        let rightHexValue,leftHexValue,x,y,hexValue,englishChars,engWord,foundChar,text;
        englishChars = "0,1,2,3,4,5,6,7,8,9,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z";
        text = "";
        engWord = "";
        
        if(! this.charDB2HexValueArray)
            this.defineCharDB2HEXValuesArray();
        for(var h=(hexText.length-2);h>=0;h-=2){
            x = -1;
            y = -1;
            hexValue = hexText.charAt(h) + hexText.charAt(h+1);
            leftHexValue = hexValue.charAt(0);
            rightHexValue = hexValue.charAt(1);
            for(var i =0;i<12;i++)
                if(leftHexValue == charDB2HexValueArray[0][i])
                    y = (i+1); 
            for(var i =1;i<17;i++)
                if(rightHexValue == charDB2HexValueArray[i][0])
                    x = i; 
            if(x > -1 && y > -1){
                foundChar = charDB2HexValueArray[x][y];
                if(englishChars.indexOf(foundChar.toLowerCase()) != -1 )
                    engWord = foundChar + engWord;
                else{
                    text = text + engWord + foundChar;	
                    engWord = "";
                }	
            }	
        }
        if(engWord != "")
            text = text + engWord;
        return text;
    },

    // ex : arrangeDateForDB2('2019/10/25')
    arrangeDateForDB2(dateAsTxt){
        return dateAsTxt.replace(/\//g,"-");
    },



}

const clientService = {
        
    getClientInfo(ssNo,fileNo,civilID){
        if(this.isValidateClientData(ssNo,fileNo,civilID))
            app.alertError('method app-service.clientService.getClientInfo is not yet implementd');    
            //return "ajax call to getClient(ssNo,fileNo,civilID)";// call service to retrieve JSON object which has errMsgKey field and in the calling method if errMsgKey is not empty call app.alertwarning(msgKey)   
        else
            return this.getEmptyClientWithMissingDataMsg();
    },

    getTempClientInfo(ssNo,civilID){
        if(this.isValidateClientData(ssNo,civilID))
            app.alertError('method app-service.clientService.getTempClientInfo is not yet implementd');
        //return "ajax call to getTempClient(ssNo,civilID)";// call service to retrieve JSON object which has errMsgKey field and in the calling method if errMsgKey is not empty call app.alertwarning(msgKey)
        else
            return this.getEmptyClientWithMissingDataMsg();
    },

    getGCCClientInfo(ssNo,fileNo,civilID){
        if(this.isValidateClientData(ssNo,fileNo,civilID))
            app.alertError('method app-service.clientService.getGCCClientInfo is not yet implementd');    
        //return "ajax call to getClient(ssNo,fileNo,civilID)";// call service to retrieve JSON object which has errMsgKey field and in the calling method if errMsgKey is not empty call app.alertwarning(msgKey)
        else
            return this.getEmptyClientWithMissingDataMsg();


        /**
         * var clientName,firstName,familyName,maritalStatus,genderCode,regNo,employerName,employerAddress,phoneNo,nateCode,natName,address,fileType;
			var errMessage,clientInfo,last2Digits;
			errMessage = "";
			clientName = "";
			firstName = "";
			familyName = "";			
			maritalStatus = "";
			genderCode = "";
			regNo = "";
			employerName = "";
			employerAddress = "";
			birthDate = "";
			deathDate = "";
			natCode = "";
			natName = "";

			address	= "";
			clientInfo = new Array();
			
			if(civilID != ""){
				query = "SELECT NationalId, CivilID, REPLACE(SUBSTRING(ConservationFileNo,0,3),'0','') AS FileType "+
						"FROM GCCSSecurity.dbo.BasicData "+
						"WHERE CivilID = "+ civilID;
				dbTable = executeQuery(query,"SQL");
				errMessage = (dbTable.length > 0) ? "" : ("الرقم المدني غير صحيح");
			}
			
			if(errMessage == ""){
				ssNo =  dbTable[0][0];
				civilID = dbTable[0][1];
				if(dbTable[0][2]+"" == "G")
					fileType = "0";
				else if(dbTable[0][2]+"" == "GM")
					fileType = "1";
				
				if(fileType == "0")
					query = "SELECT REPLACE(ConservationFileNo,'G','') AS FileNo ";
				else if(fileType == "1")
					query = "SELECT REPLACE(ConservationFileNo,'GM','') AS FileNo ";
				
				query += "FROM GCCSSecurity.dbo.BasicData "+
						 "WHERE CivilID = "+ civilID;
						 
				dbTable = executeQuery(query,"SQL");
				fileNo =  parseInt(dbTable[0][0],10)+"";
			
				query = "SELECT TOP(1) LTRIM(RTRIM(bd.FirstName))+' '+LTRIM(RTRIM(bd.SecondName))+' '+LTRIM(RTRIM(bd.ThirdName))+' '+LTRIM(RTRIM(bd.LastName)) AS ClientName, "+
						"		LTRIM(RTRIM(bd.FirstName)) AS FirstName ,LTRIM(RTRIM(bd.LastName)) AS FamilyName, "+
						"		bd.MaritalStatus, bd.Gender, bd.RegNo, "+
						//"erbd.Name AS EmployerName, LTRIM(RTRIM(erbd.AddressFromMainFile)) AS EmployerAddress, "+
						"		bd.BirthDate, bd.DeathDate, bd.Nationality AS NationalityCode, cntry.CountryName AS Nationality "+
						"FROM GCCSSecurity.dbo.BasicData bd INNER JOIN "+
						//"	  GCCSSecurity.dbo.EmployerBasicData erbd ON bd.RegNo = erbd.RegNo INNER JOIN "+
						"	  GCCSSecurity.dbo.countries cntry ON bd.Nationality = cntry.CountryCode "+
						"WHERE bd.CivilID = "+civilID;
			
				dbTable = executeQuery(query,"SQL");
				
				clientName = dbTable[0][0];
				firstName = dbTable[0][1];
				familyName = dbTable[0][2];			
				maritalStatus = dbTable[0][3];
				genderCode = dbTable[0][4];
				regNo = dbTable[0][5];
				// employerName = dbTable[0][6];					
				// employerAddress = dbTable[0][7];	
				birthDate = dbTable[0][6];
				deathDate = dbTable[0][7];
				natCode = dbTable[0][8];
				natName = dbTable[0][9];
			

				query = "SELECT M_BAS_ER_REG_NUM RegNo,HEX(LTRIM(RTRIM(M_BAS_ER_NAME))) EmployerName, "+
						"	HEX(LTRIM(RTRIM(M_BAS_ER_CORR_NAME1))) EmployerCorrName, "+
						"	HEX( LTRIM(RTRIM(M_BAS_ER_ADDRESS_1)) CONCAT ' ' CONCAT LTRIM(RTRIM(M_BAS_ER_ADDRESS_2)) CONCAT ' ' CONCAT LTRIM(RTRIM(M_BAS_ER_ADDRESS_3)) CONCAT ' ' CONCAT LTRIM(RTRIM(M_BAS_ER_ADDRESS_4)) CONCAT ' ' CONCAT LTRIM(RTRIM(M_BAS_ER_ADDRESS_5)) CONCAT ' ' CONCAT LTRIM(RTRIM(M_BAS_ER_ADDRESS_6)) ) EmployerAddress , "+
						"	HEX(LTRIM(RTRIM(M_BAS_ER_MAIL_ADDR_1))) , HEX(LTRIM(RTRIM(M_BAS_ER_MAIL_ADDR_2)))  "+
						"FROM "+db2Schema+".ST_MST_EMPLOYER_BASIC " +
						"WHERE M_BAS_ER_REG_NUM = "+regNo;

						
				dbTable = executeQuery(query,"DB2");
				if(dbTable.length > 0){
					regNo = dbTable[0][0];
					destination = getCharFromDB2HEX(dbTable[0][1]+"");
					employerCorrName = getCharFromDB2HEX(dbTable[0][2]+"");
					employerAddress = getCharFromDB2HEX(dbTable[0][3]+"");
					employerMailAddress1 = getCharFromDB2HEX(dbTable[0][4]+"");
					employerMailAddress2 = getCharFromDB2HEX(dbTable[0][5]+"");
				}

			
				clientInfo[0] = ssNo;
				clientInfo[1] = fileNo;
				clientInfo[2] = civilID;
				clientInfo[3] = clientName;
				clientInfo[4] = "";//bankCode;
				clientInfo[5] = "";//bankBranchCode;
				clientInfo[6] = "";//accNo;
				clientInfo[7] = "";//bankName;
				clientInfo[8] = "";//branchName;
				clientInfo[9] = regNo;
				clientInfo[10] = "";//regAccNo;
				clientInfo[11] = employerName;//destination;
				clientInfo[12] = employerCorrName;
				clientInfo[13] = employerAddress;
				clientInfo[14] = employerMailAddress1+"**"+employerMailAddress2;
				clientInfo[15] = maritalStatus;
				clientInfo[16] = genderCode;
				clientInfo[17] = "";//phoneNo;
				clientInfo[18] = birthDate;
				clientInfo[19] = deathDate;
				clientInfo[20] = natCode;
				clientInfo[21] = natName;
				clientInfo[22] = "";//natDate;
				clientInfo[23] = "";//natCertNo;
				clientInfo[24] = "";//employerMailAddress1;
				clientInfo[25] = "";//employerMailAddress2;
				clientInfo[26] = "";//address;
				clientInfo[27] = firstName;
				clientInfo[28] = familyName;
				clientInfo[29] = "";//noOfChildren;
				clientInfo[30] = fileType;//GCC File Type 0 for Civilian 1 for Military 
				
			}
			else
				clientInfo[0] = errMessage;
					
			return clientInfo;
         *  */    
    },

    getGCCEmployerInfo(regNo){
        if(this.isValidateClientData(regNo))
            app.alertError('method app-service.clientService.getGCCEmployerInfo is not yet implementd');        
        //return "ajax call to getClient(ssNo,fileNo,civilID)";// call service to retrieve JSON object which has errMsgKey field and in the calling method if errMsgKey is not empty call app.alertwarning(msgKey)
        else
            return this.getEmptyClientWithMissingDataMsg();
        /**
         * var name,legalEntity,address;
			var errMessage,employerInfo,last2Digits;
			errMessage = "";
			name = "";
			legalEntity = "";
			address = "";			

			employerInfo = new Array();
			
			if(regNo != ""){
				query = "SELECT RegNo, Name, LegalEntity, LTRIM(RTRIM(AddressFromMainFile)) AS Address "+
						"FROM GCCSSecurity.dbo.EmployerBasicData "+
						"WHERE RegNo = "+ regNo;
				dbTable = executeQuery(query,"SQL");
				errMessage = (dbTable.length > 0) ? "" : ("رقم التسجيل غير صحيح");
			}
			
			if(errMessage == ""){			
				regNo = dbTable[0][0];
				name = dbTable[0][1];
				legalEntity = dbTable[0][2];			
				address = dbTable[0][3];
									
				employerInfo[0] = regNo;
				employerInfo[1] = name;
				employerInfo[2] = legalEntity;
				employerInfo[3] = address;
			}
			else
				employerInfo[0] = errMessage;
					
			return employerInfo;			
         *  */    
    },

    isValidateClientData(ssNo,fileNo,civilID){
        return (ssNo || fileNo || civilID);
    },

    getEmptyClientWithMissingDataMsg(){
        return {errMsgKey:'missingClientData'};
    },

    fixFileNo(fileNo){
        let newFileNo = fileNo;
        let last2Digits = fileNo.slice(-2);
        if(last2Digits == "00" )
            newFileNo = fileNo.substring(0,fileNo.length -2); 
        return newFileNo;	
    },

    fixIBAN(shortAccNo){
        while(shortAccNo.length < 22)
            shortAccNo = "0" + shortAccNo;
        return 	shortAccNo;
    }


}

const employeeService = {
    fetchSupersededEmp(empLoginID){
        app.alertError('method app-service.employeeService.fetchSupersededEmp is not yet implementd');
    },

          

}

const hrService = {
    // Ex: isWorkingDay('2013/10/25') and will return true or false
    isWorkingDay(day){
        app.alertError('method app-service.hrservice.isWorkingDay is not yet implementd');
    },

    // Ex: isRamadanDay('2013/10/25') and will return true or false
    isRamadanDay(day){
        app.alertError('method app-service.hrservice.isRamadanDay is not yet implementd');
    },

    //return the number of working days in that period EX: getWorkingDaysCount('2018/06/01' , '2018/06/05') = 5 days
	getWorkingDaysCount(startDate,endDate){
        app.alertError('method app-service.hrservice.getWorkingDaysCount is not yet implementd');
    },

    getAbsenceDays(startDate,endDate,includeStartDate,includeEndDate){
        app.alertError('method app-service.hrservice.getAbsenceDays is not yet implementd');
    },
    
	getUserLeaveRecords(empNo,startDate,endDate){
        /**
         * if(day != "" && empNo != ""){
				day = (day).replace(/\//gi,"-");
				query = "SELECT LEV_START_DT,LEV_END_DT,LEV_TYPE "+
						"FROM "+db2Schema+".PT_LEAVE "+
						"WHERE  LEV_TYPE NOT IN ('35' , '99' ) AND  LEV_START_DT <= '"+day+"' AND LEV_END_DT >= '"+day+"' AND LEV_EE_NO = "+empNo+" ; ";
			
				dbTable = executeQuery(query,"DB2");
				if(dbTable.length > 0){
					return ("هناك سجــل اجـــازة فـي الفتــرة مــن "+dbTable[0][0]+" إلى "+dbTable[0][1]);
				}
				else
					return "";	
			}
			return "";
         */
        app.alertError('method app-service.hrservice.doesUserHaveLeaveOnDay is not yet implementd');
    },
    
    getEmpHiringDetails(empNo){
        /**
         * var empObj = {hiringDate:"", grade:0, salary:0,isValidUser:false};
				query = "SELECT MIN(e.NRL_START_DT) AS HireDate,MAX(bs.SLB_GRADE) AS Grade,MAX(s.SLH_GROSS_SALARY) AS Salary  "+
						"FROM PIFSST.PT_BASIC_SALARY bs INNER JOIN  PIFSST.PT_ENROLLMENT e ON bs.SLB_EE_NO =  e.NRL_EE_NO INNER JOIN PIFSST.PT_SALARY_HIST s  ON e.NRL_EE_NO = s.SLH_EE_NO "+
						"WHERE  e.NRL_EE_NO = "+empNo;
				dbTable = executeQuery(query,"DB2");
				if(dbTable.length > 0){
					empObj.hiringDate = dbTable[0][0];
					empObj.grade = dbTable[0][1];
					empObj.salary = parseInt(dbTable[0][2],10)+"";
					empObj.isValidUser = true;
				}
				
				return empObj;
         */
        app.alertError('method app-service.hrservice.doesUserHaveLeaveOnDay is not yet implementd');
    },
    
    //check if the user is exempt from finger print 
	isExemptFromFingerPrint(empNo){
        app.alertError('method app-service.hrservice.isExemptFromFingerPrint is not yet implementd');
    },

    getEmpFingerPrints(empNo,startDate,endDate){
        app.alertError('method app-service.hrservice.getEmpFingerPrints is not yet implementd');
    },
    


}

const outgoingService = {
    fetchFileNetDocDescList(){
        return []; // [{docCode:1, docDesc:''} , {docCode:2, docDesc:''} , ... ]
        /**
         * query = "SELECT LTRIM(RTRIM(DocCode)),DocDesc FROM AptTrans.dbo.RegDocDesc  WHERE DocCode = 500 OR (DocCode > 899  AND DocCode < 1000)    ORDER BY DocDesc ";
		    dbTable = executeQuery(query,"SQL");
		    for(var i=0;i<dbTable.length;i++){
			    addItemToChoiceList("docDescPensioner",dbTable[i][0],dbTable[i][1],"");
			    addItemToChoiceList("docDescEmployer",dbTable[i][0],dbTable[i][1],"");
		    } 
         */
    },

    fetchFileNetGeneralLedgerDocDescList(){
        return []; // [{docCode:1, docDesc:''} , {docCode:2, docDesc:''} , ... ]
        /**
        query = "SELECT LTRIM(RTRIM(code)),[DESC] FROM Incmoutcm.dbo.IncOutCode1 Union SELECT LTRIM(RTRIM(code)),[DESC] FROM Incmoutcm.dbo.IncOutCode2 ";
		dbTable = executeQuery(query,"SQL");
		for(var i=0;i<dbTable.length;i++)
			addItemToChoiceList("docDescGL",dbTable[i][0],dbTable[i][1],"");
         * 
         */
    },


}