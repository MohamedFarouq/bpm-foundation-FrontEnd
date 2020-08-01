"use strict";


    const isLocally = true;
    
    async function fetchGeneric(returnDataType,url,options,resolve,reject){
        /*
            options = {
                method: 'POST', // *GET, POST, PUT, DELETE, etc.
                mode: 'cors', // no-cors, *cors, same-origin
                cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
                credentials: 'same-origin', // include, *same-origin, omit
                headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
                },
                redirect: 'follow', // manual, *follow, error
                referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
                body: JSON.stringify(data) // body data type must match "Content-Type" header
            }
        */
       let errDetails = null;
       let data = {};
        try{
            if(isLocally){
                reject();
                return;
            }
            
            app.openLoadingModal();
            let response = await fetch(`http://localhost:8080${url}`, options);//(url, options);
            if(response.ok){
                if(!returnDataType)
                    data = '';
                else if(returnDataType == 'json')
                    data = await response.json();
                else if(returnDataType == 'text')    
                    data = await response.text();
                else if(returnDataType == 'blob')
                    data = await response.blob();
                else if(returnDataType == 'objectURL'){
                    data = await response.blob();
                    data = URL.createObjectURL(data);
                }
                                
                try {
                    app.closeLoadingModal();
                    resolve(data);
                } catch (error) {
                    errDetails = new ErrorDetails(error.message, ['something went wrong in fetch resolve body'] );
                    app.alertError(errDetails);
                }
            }
            else if(response.status == 400){ //handle bad request
                data = await response.json();
                errDetails = new ErrorDetails(data.msg, data.stack);
                app.closeLoadingModal();
                reject();
                app.alertError(errDetails);
            }
        }
        catch(error){
            errDetails = new ErrorDetails(error.message, ['something went wrong in fetch call','check url','check service is not down'] );
            app.closeLoadingModal();
            app.alertError(errDetails);
            reject();
        }
    }
    function fetchNothing(url,options,resolve,reject){
        fetchGeneric('',url,options,resolve,reject);
    }
    function fetchJSON(url,options,resolve,reject){
        fetchGeneric('json',url,options,resolve,reject);
    }
    function fetchText(url,options,resolve,reject){
        fetchGeneric('text',url,options,resolve,reject);
    }
    function fetchBLOB(url,options,resolve,reject){
        fetchGeneric('blob',url,options,resolve,reject);
    }
    function fetchObjectURL(url,options,resolve,reject){
        fetchGeneric('objectURL',url,options,resolve,reject);
    }




    const appService = {
        fetchAppDataThenDo(resolve,reject){
            const url = `/bpmf/app/data`;
            const options = {method:'GET'};
            // const reject = ()=>{};
            fetchJSON(url, options, resolve, reject);
        },

    };


    const peService = {
        fetchInboxWIs(username){
            let list = [];
            try {
                //list.push(new WorkItem("Template",100, "إجراء توضيحي" ,"12/5/2019") );
                
                list.push(new WorkItem("Periodical_Leave",500, "طلب اجازة دورية - شريفة" ,"12/5/2019") );
                
                list.push(new WorkItem("Pension_Advanced",600, "طلب صرف معاش مقدم - أنس" ,"12/6/2019") );
                list.push(new WorkItem("Pension_Replacement_In_Employment",610, "طلب استبدال أثناء الخدمة - أنس" ,"12/6/2019") );
                list.push(new WorkItem("Pension_Repayment",620, "طلب إعادة صرف معاش - أنس" ,"12/6/2019") );
                list.push(new WorkItem("Process_Transfer",630, "طلب تحويل اجراء - أنس" ,"12/6/2019") );
                
                list.push(new WorkItem("Allow_Item",700, "طلب سماح البند المالي - عائشة" ,"12/7/2019") );
                
                list.push(new WorkItem("Personal_Execuse_Permission",800, "طلب استئذان شخصي - عاليه" ,"12/5/2019") );
                list.push(new WorkItem("Bank_Transfer",810, "طلب تغيير حساب بنكي - عاليه" ,"12/5/2019") );
                list.push(new WorkItem("Salary_Ded_Hiers",820, "طلب استقطاع من المرتب لصالح الورثة - عاليه" ,"12/5/2019") );
                
                list.push(new WorkItem("Program_Installation",900, "Program Installation - شريفة" ,"12/7/2019") );
                list.push(new WorkItem("TS_Service",910,'طلب خدمة تشغيل آلي - شريفة' , '12/5/2019') );
                list.push(new WorkItem("RACF_Security_Form",920,'نموذج طلب صلاحيات الخط الأول ونظام الإيجل - RACF - شريفة' , '12/5/2019') );
                list.push(new WorkItem("Operation_Support_Request_Forms",930,'Operation Support Request Forms- شريفة' , '12/5/2019') );
                list.push(new WorkItem("Document_Retrieval_Suggestions",940,'نظام الاسترجاع الآلي للوثائق- شريفة' , '12/5/2019') );
                list.push(new WorkItem("Modification_Request",950,'طلب تعديل على الاسترجاع الرئيسي للوثائق- شريفة' , '12/5/2019') );
                

            } catch (error) {
                app.alertError(new ErrorDetails(error.message,['check peService.fetchInboxWIs() @app-service.js ']));  
            }
            return list;    
            
        },

    }

    const processService = {
        
        fetchInitialProcess(procTypeID,resolve,reject){
            const url = `/bpmf/process/${procTypeID}/initial`;
            const options = {method:'GET'};
            fetchJSON(url, options, resolve, reject);
        },

      
        
        
        
        loadFormEntity(formEntity){
            formEntity.RequesterName = 'محمد الديب';
            formEntity.FromDate = '2020-05-01';
            formEntity.To = '2020-05-15';
            //formEntity.VactionType = 2;
            formEntity.Notes = 'الملاحظــــــات المخزنة بقاعدة البيانات';
        },

        saveFormEntity(formEntity){
            //send Rest request to store entity in DB
        },
    }

    const ssFormsService = {
        
        fetchDeptsList(){
            try{
                let deptList = [
                    {deptCode:610,deptName: 'قطـاع الخدمـة التأمينية',  packagesCount:0},
                    {deptCode:611,deptName: 'ادارة فروع العاصمة والشمال',  packagesCount:0},
                    {deptCode:612,deptName: 'ادارة الفروع الجنوبية',  packagesCount:0},
                    {deptCode:632,deptName: 'ادارة الاشتراكات ومتابعة السداد',  packagesCount:0},
                    {deptCode:621,deptName: 'ادارة أصحاب المعـاشات وحساب المدد',  packagesCount:0},
                    {deptCode:631,deptName: 'ادارة التسجيل والتفتيش',  packagesCount:0},
                    {deptCode:622,deptName: 'ادارة المستحقين',  packagesCount:0},
                    {deptCode:633,deptName: 'ادارة تأمين الخليجيين',  packagesCount:0},
                    {deptCode:623,deptName: 'امانه سر اللجنة الطبيـة',  packagesCount:0},
                ];
                return deptList;
            }
            catch(error){ app.alertError(error.message);}
        },

        fetchPackasList(deptCode){
            const url = `/ssforms/depts/${deptCode}/packages`;
            const options = {method: 'GET'};
            const resolve = (data) => {
                                        registery.ssFormsGridController.packagesGrid.selectedPackageID = '';
                                        registery.ssFormsGridController.packagesGrid.packageList = data.list;
                                        registery.ssFormsGridController.packagesGrid.render();
                                      };
            const reject = () => {
                                // registery.ssFormsGridController.packagesGrid.selectedPackageID = '';
                                // registery.ssFormsGridController.packagesGrid.packageList = [];
                                // registery.ssFormsGridController.packagesGrid.render();
                                ssFormsService.fetchPackasListLocally(deptCode);
                                };
            
            fetchJSON(url,options,resolve,reject);
        },
    // @Deprecated 
        fetchPackasListLocally(deptCode){
            try{
                let allPackagesList = [];
                let packagesList = [];

                allPackagesList.push( new FormType(-24,'إعادة تسوية المعاش', '',  '621' , '0' ) );
                allPackagesList.push( new FormType(-9,'إقرار صاحب معاش غير كويتي', '',  '610-611-612-621' , '0' ) );
                allPackagesList.push( new FormType(-21,'إقرار وطلب صرف النصيب بشيك', '',  '610-611-612-622' , '0' ) );
                allPackagesList.push( new FormType(-25,'استبدال أثناء الخدمة', '',  '621' , '0' ) );
                allPackagesList.push( new FormType(-22,'التأمين التكميلي باب خامس', '',  '610-611-612-632' , '0' ) );
                allPackagesList.push( new FormType(-5,'الجمع بين المعاش والمرتب', '',  '610-611-612-621' , '0' ) );
                allPackagesList.push( new FormType(-15,'تحديد مستحق منحة الوفاة', '',  '610-611-612-622' , '0' ) );
                allPackagesList.push( new FormType(-17,'تسجيل باب خامس', '',  '610-611-612-631' , '0' ) );
                allPackagesList.push( new FormType(-1,'تسوية المعاش + المكافأة-الخدمة التأمينية', '',  '610-611-612-621' , '0' ) );
                allPackagesList.push( new FormType(-20,'تسوية المعاش + المكافأة-المعاشات', '',  '621' , '0' ) );
                allPackagesList.push( new FormType(-23,'تسوية مكافأة', '',  '621' , '0' ) );
                allPackagesList.push( new FormType(-18,'تعديل شريحة', '',  '610-611-612-632' , '0' ) );
                allPackagesList.push( new FormType(-14,'حالة انتقال الوصاية', '',  '610-611-612-622' , '0' ) );
                allPackagesList.push( new FormType(-3,'رد الاستبــدال', '',  '610-611-612-621' , '0' ) );
                allPackagesList.push( new FormType(-4,'زيادة الأبناء أو الزواج', '',  '610-611-612-621' , '0' ) );
                allPackagesList.push( new FormType(-8,'زيادة الحد الأدنى', '',  '610-611-612-621' , '0' ) );
                allPackagesList.push( new FormType(-2,'صرف رصيد المكافأة', '',  '610-611-612-621' , '0' ) );
                allPackagesList.push( new FormType(-12,'صرف نصيب وإعادة صرف نصيب', '',  '610-611-612-622' , '0' ) );
                allPackagesList.push( new FormType(-7,'طلب التجاوز عن التمسك في طلب صرف المستحقات', '',  '610-611-612-621' , '0' ) );
                allPackagesList.push( new FormType(-16,'عسكري غير كويتي', '',  '610-611-612-622' , '0' ) );
                allPackagesList.push( new FormType(-10,'معاملـة الوفــاة', '',  '610-611-612-622' , '0' ) );
                allPackagesList.push( new FormType(-11,'منحـة زواج', '',  '610-611-612-622' , '0' ) );
                allPackagesList.push( new FormType(-19,'نماذج حساب مدد التأمين', '',  '610-611-612-621' , '0' ) );
                allPackagesList.push( new FormType(-1000,'نماذج عامـة', 'general',  '' , '0' ) );
                
                allPackagesList.filter(item => (item.invDeptCodes.includes(deptCode) || item.id == -1000)  ).forEach(item=>packagesList.push(item));
        

                registery.ssFormsGridController.packagesGrid.selectedPackageID = '';
                registery.ssFormsGridController.packagesGrid.packageList = packagesList;
                registery.ssFormsGridController.packagesGrid.render();
            }
            catch(error){ app.alertError(error.message);}

        },

        fetchFormsList(deptCode,packageID){
            const url = `/ssforms/depts/${deptCode}/packages/${packageID}/forms`;
            const options = {method: 'GET'};
            const resolve = (data) => {
                                        registery.ssFormsGridController.formsGrid.formsList = data.list;
                                        registery.ssFormsGridController.formsGrid.render();
                                      };
            const reject = () => {
                                    // registery.ssFormsGridController.formsGrid.formsList = [];
                                    // registery.ssFormsGridController.formsGrid.render();
                                    ssFormsService.fetchFormsListLocally(deptCode,packageID);
                                };

            fetchJSON(url,options,resolve,reject);
        },
    // @Deprecated
        fetchFormsListLocally(deptCode,packageID){
            try {
                let allFormsList = [];
                let formsList = [];
                
                allFormsList.push( new FormType(70,'Not Assigned', 'not Assigned',  '' , '' ) );
                allFormsList.push( new FormType(90,'إحصائية استقبال مراجعي الشهادات', 'Certificates_Reviewers_Statistics',  '610-611-612' , ',-1000,' ) );
                allFormsList.push( new FormType(34,'إعادة إعادة تسوية المعاش التقاعدي بعد الوفاة', 'PensionResettlement_After_Death',  '622' , ',-1000,' ) );
                allFormsList.push( new FormType(24,'إعادة تسوية المعاش التقاعدي', 'Pension_ReCalculation',  '' , '' ) );
                allFormsList.push( new FormType(42,'إعادة تسوية المعاش التقاعدي بتعديل مدد الاشتراك', 'PenRecalc_Modified_Periods',  '' , '' ) );
                allFormsList.push( new FormType(132,'إعادة تسوية المعاش التقاعدي طبقاً للمادة 41-الباحث القانوني', 'PensionRecalculation_Item41_Researcher',  '621' , ',-24,' ) );
                allFormsList.push( new FormType(133,'إعادة تسوية المعاش التقاعدي طبقاً للمادة 42-الباحث القانوني', 'PensionRecalculation_Item42_Researcher',  '621' , ',-24,' ) );
                allFormsList.push( new FormType(139,'إعادة تسوية المعاش التقاعدي طبقاً للمادة رقم 41 ، 42 لقانون رقم 110 لسنة 2015', 'PensionRecalculation_Items4142_Rule110_Year2015',  '621' , ',-24,' ) );
                allFormsList.push( new FormType(138,'إعادة تسوية المعاش التقاعدي طبقاً للمادة رقم 41 ، 42 لقانون رقم 8 لسنة 2010', 'PensionRecalculation_Items4142_Rule8_Year2010',  '621' , ',-24,' ) );
                allFormsList.push( new FormType(17,'إعادة تسوية المعاش التكميلي بعد خصم المدة السابقة 1995/1/1', 'Recal_Pen_After_Ded_Period_Before95',  '' , '' ) );
                allFormsList.push( new FormType(134,'إعادة تسوية المعاش بتعديل بيانات المرتب', 'PensionRecalculation_Pension_Modification',  '621' , ',-24,' ) );
                allFormsList.push( new FormType(106,'إعادة تسوية المعاش طبقا لأحكام المادة 41-42', 'Pension_Recalculation_Rule_41_42',  '621' , ',-20,' ) );
                allFormsList.push( new FormType(33,'إعادة تسوية المعاش في شأن حقوق الأشخاص ذوي الإعاقة', 'SpecialNeeds_PensionResettlement',  '622' , ',-1000,' ) );
                allFormsList.push( new FormType(26,'إقرار الحالة الاجتماعية لصاحب المعاش', 'Pensioner_Marital_Status',  '610-611-612-621' , ',-1,' ) );
                allFormsList.push( new FormType(52,'إقرار الحالة الاجتماعية لصاحب المعاش', 'Pensioner_Marital_Statement',  '' , '' ) );
                allFormsList.push( new FormType(66,'إقرار المرأة المتزوجة بدون أبناء', 'MarriedLady_NoChildren',  '610-611-612-621' , 'not active' ) );
                allFormsList.push( new FormType(126,'إقرار تسوية المعاش التقاعدي لأسباب صحية', 'Medical_Reason_Pensioner_Statement',  '610-611-612-621' , ',-1,' ) );
                allFormsList.push( new FormType(59,'إقرار صاحب المعاش الغير كويتي', 'NonKuwaiti_Pensioner_Statement',  '610-611-612-621' , ',-9,' ) );
                allFormsList.push( new FormType(38,'إقرار عن الأبناء المعاقين تطبيقاً لأحكام القانون رقم (8) لسنة 2010', 'Disabled_Children_Declaration',  '610-611-612-621' , ',-1,' ) );
                allFormsList.push( new FormType(74,'إقرار لأصحاب تراخيص الشركات أو التراخيص والتصاريح الفردية', 'Permit_Owners_Endorsement_5th',  '610-611-612-631' , ',-17,' ) );
                allFormsList.push( new FormType(76,'إقرار معاق للتسجيل طبقا لأحكام الباب الخامس', 'Disable_Registration_Endorsement_5th',  '610-611-612-631' , ',-17,' ) );
                allFormsList.push( new FormType(101,'إقرار وتحديث بيانات للمستحقين عسكري غير كويتي', 'Update_Beneficiaries_Military_NonKuwaiti',  '610-611-612-622' , ',-16,' ) );
                allFormsList.push( new FormType(108,'إقـرار وطلـب', 'Acknowledgement_Request',  '610-611-612' , ',-1000,' ) );
                allFormsList.push( new FormType(98,'إقرار وطلب صرف النصيب بشيـــــك', 'Share_Payment_By_Check',  '610-611-612-622' , ',-21,' ) );
                allFormsList.push( new FormType(22,'إيقاف المعاش مؤقتا', 'Pension_Temporarily_Suspend',  '' , '' ) );
                allFormsList.push( new FormType(23,'إيقاف بما يعادل المكافاة', 'Bonus_Suspend',  '' , '' ) );
                allFormsList.push( new FormType(109,'إيقاف صرف تعويض التأمين ضد البطالة طبقا للقانون رقم ,101 لسنة 2013', 'Unemployment_Compensation_Stop_101',  '621' , ',-1000,' ) );
                allFormsList.push( new FormType(79,'اختيار الشريحة الخاصة بأصحاب المعاشات التقاعدية المصروفة أو المؤجلة الصرف', 'Pension_Category_Selection_5th',  '610-611-612-631' , ',-17,' ) );
                allFormsList.push( new FormType(60,'استمارة إدخال- إلغاء وكالة', 'Delegation_Activation',  '610-611-612' , ',-1000,' ) );
                allFormsList.push( new FormType(30,'استمارة إقرار وطلب صرف نصيب', 'Share_Demand_Approval',  '610-611-612-622' , ',-12,' ) );
                allFormsList.push( new FormType(27,'استمارة استقطاع', 'Deductions',  '610-611-612-621' , ',-1,' ) );
                allFormsList.push( new FormType(87,'استمارة حساب القيمة الحالية', 'Calculate_CurrentValue',  '610-611-612-621' , ',-19,' ) );
                allFormsList.push( new FormType(58,'استمارة رد استبدال اثناء الخدمة - متقاعد', 'Pension_Replacement_PayBack',  '610-611-612-621' , ',-3,' ) );
                allFormsList.push( new FormType(36,'استمارة طلب الجمع بين المعاش والمرتب', 'Merge_Pension_And_Salary',  '610-611-612-621' , ',-5,' ) );
                allFormsList.push( new FormType(47,'استمارة طلب ايقاف وانهاء نصيب او معاش', 'Beneficiary_Demand_Type',  '610-611-612-622' , ',-10,' ) );
                allFormsList.push( new FormType(56,'استمارة طلب تغيير جهة الصرف', 'Change_Bank_Details',  '610-611-612' , ',-1000,' ) );
                allFormsList.push( new FormType(28,'استمارة طلب صرف استبدال جزء من معاش تقاعدي', 'Pension_Replacement',  '610-611-612-621' , ',-1,' ) );
                allFormsList.push( new FormType(45,'استمارة طلب صرف الحقوق التأمينية (صرف نصيب عند التقاعد)تابع 201', 'Retirement_Share_Request',  '610-611-612-621' , ',-1,' ) );
                allFormsList.push( new FormType(25,'استمارة طلب صرف الحقوق التأمينية رقم 201', 'Benefits_Payment',  '610-611-612-621' , ',-1,' ) );
                allFormsList.push( new FormType(49,'استمارة طلب صرف المرتجعات والمستحقات', 'Beneficiary_Refund_Request',  '610-611-612-621-622' , ',-1000,' ) );
                allFormsList.push( new FormType(21,'اشعار اشتراك-انهاء اشتراك مؤمن عليه ( باب خامس)', 'Subscription_Notify_SSS',  '610-611-612-631' , ',-17,' ) );
                allFormsList.push( new FormType(31,'اقرار بتحديد مستحق منحة الوفاة', 'Death_Grant',  '610-611-612-622' , ',-15,' ) );
                allFormsList.push( new FormType(46,'اقرار بشأن الاعتماد للاب والاخوة والاخوات', 'Family_Approval',  '610-611-612-622' , ',-10,' ) );
                allFormsList.push( new FormType(44,'اقرار وطلب صرف نثيب او استقالة او التقاعد', 'Beneficiary_Ending_Statement',  '' , '' ) );
                allFormsList.push( new FormType(91,'الإحصائية اليومية لإنجاز معاملات المراجعين', 'Process_Achievment_Statistics',  '610-611-612' , ',-1000,' ) );
                allFormsList.push( new FormType(89,'الإحصائية اليومية للاستفسارات الهاتفية', 'Phone_Calls_Statistics',  '610-611-612' , ',-1000,' ) );
                allFormsList.push( new FormType(63,'الفروق المستحقة من تطبيق قرار الحد الأدنى رقم 2 لسنة 2003', 'Differences_Decision2_Year2003',  '621' , ',-20,' ) );
                allFormsList.push( new FormType(57,'المستندات المطلوبة في معاملات الوفاة', 'Death_Document',  '610-611-612-622' , ',-10,' ) );
                allFormsList.push( new FormType(112,'بشأن المبالغ المسترجعة من وزارة العدل لصالح النفقة', 'Recovered_Payments_MOJ',  '621' , ',-1000,' ) );
                allFormsList.push( new FormType(69,'بيان الأنشطة الأخرى ومدد الخدمة السابقة (باب خامس)', 'Service_Activities_Period',  '610-611-612-631' , ',-17,' ) );
                allFormsList.push( new FormType(118,'بيانات الاشتراك للفئة الخاضعة لأحكام الباب الخامس', 'Subscription_Notify_Details_SSS',  '631' , ',-17,' ) );
                allFormsList.push( new FormType(140,'تسوية معاش افتراضي للمؤمن عليه - القانونيين', 'Estimated_Pension_Legal_Calculation',  '621' , ',-25,' ) );
                allFormsList.push( new FormType(141,'تسوية معاش افتراضي للمؤمن عليه - المحاسبين', 'Estimated_Pension_Accountant_Calculation',  '621' , ',-25,' ) );
                allFormsList.push( new FormType(73,'تعديل شريحة بدء الاشتراك', 'Contribution_Share_start',  '610-611-612-632' , ',-18,' ) );
                allFormsList.push( new FormType(55,'جدول نموذج بحث حالة ورثة', 'Beneficiary_Heirs_Schedule',  '' , '' ) );
                allFormsList.push( new FormType(111,'حجز تنفيذى طبقاً للأحكام  المدة 4 من القانون رقم 101 لسنة 2013 بشأن تعويض التأمين ضد البطالة', 'Unemployment_Compensation_Rule4',  '621' , ',-1000,' ) );
                allFormsList.push( new FormType(16,'شهادة لمن يهمه الأمر', 'Certificate_Whome_It_May_Concern',  '' , '' ) );
                allFormsList.push( new FormType(39,'طلب التجاوز عن التمسك بالتقادم في طلب صرف المستحقات التأمينية', 'Ignore_Benefits_Delaying',  '610-611-612-621' , ',-7,' ) );
                allFormsList.push( new FormType(72,'طلب تعديل الشريحة التي تؤدي على أساسها الاشتراكات للمخاطبين باب خامس', 'Income_Contribution_Share',  '610-611-612-632' , ',-18,' ) );
                allFormsList.push( new FormType(119,'طلب تعديل شريحة (1250 د.ك) فأكثر وفقا للمادة 7 من القرار (2) لسنة 2019 (3 تعديلات)', 'Subscription_3Updates_SSS',  '610-611-612-632' , ',-18,' ) );
                allFormsList.push( new FormType(120,'طلب تعديل شريحة بدء الاشتراك بتعديل أحكام القرار رقم (4) لسنة 1993 وفقا لأحكام القرار رقم (3) لسنة 2019 (10 قفزات)', 'Subscription_10Promotion_SSS',  '610-611-612-632' , ',-18,' ) );
                allFormsList.push( new FormType(85,'طلب حساب مدد الخدمة التي لا يتقاضى المؤمن عليه أو المستفيد مرتبه عنها  وفقا للقرار رقم  4 لسنة 1994', 'Calculate_Unpaid_ServicePeriods',  '610-611-612-621' , ',-19,' ) );
                allFormsList.push( new FormType(48,'طلب صرف منحة وفاة', 'Death_Grant_Demand',  '610-611-612-622' , ',-10,' ) );
                allFormsList.push( new FormType(32,'طلب صرف وإقرار بالحالة الوظيفية والاجتماعية عند الولاية والوصاية والقوامة', 'Beneficiary_Gardianship_Statement',  '610-611-612-622' , ',-14,' ) );
                allFormsList.push( new FormType(80,'طلب ضم مدة اشتراك اعتبارية (أثنــاء الخدمــة)', 'Add_Nominal_Period_During_Service',  '610-611-612-621' , ',-19,' ) );
                allFormsList.push( new FormType(78,'طلب ضم مدة اشتراك اعتبارية (بعد انتهــاء الخدمـــة)', 'Add_Nominal_Period_After_Service',  '610-611-612-621' , ',-19,' ) );
                allFormsList.push( new FormType(86,'طلب ضم مدة الخدمة الفعلية السابقة (يصرف-لايصرف) عنها مكافأة تقاعد (عسكري-مدني)', 'Add_RetrirementGrant_ServicePeriod',  '610-611-612-621' , ',-19,' ) );
                allFormsList.push( new FormType(81,'طلب ضم مدة الخدمة الفعلية السابقة على 1-1-1995 في التأمين التكميلي', 'Add_Actual_ServicePeriod_Before1995',  '610-611-612-621' , ',-19,' ) );
                allFormsList.push( new FormType(84,'طلب ضم مدة خدمة سابقة على الجنسية الكويتية لأصحاب المعاشات أو المستحقين', 'Add_ServicePeriod_BeforeKW_Pension_Beneficiary',  '610-611-612-621' , ',-19,' ) );
                allFormsList.push( new FormType(123,'طلب ضم مدد الخدمة السابقة (صرف / لم يصرف) عنها مكافأة تقاعد (الأساسي / التكميلي) (مدنية / عسكرية)', 'Add_RetirementReward_BasicAndComplementary',  '610-611-612-622' , ',-1000,' ) );
                allFormsList.push( new FormType(127,'طلب ضم مدد الخدمة السابقة (صرف / لم يصرف) عنها مكافأة تقاعد (الأساسي / التكميلي) (مدنية / عسكرية)', 'Add_RetirementReward_BasicAndComplementary',  '610-611-612-621' , '-19' ) );
                allFormsList.push( new FormType(75,'طلب ضم مدد الخدمة السابقة على الحصول على الجنسية الكويتية', 'Add_ServicePeriods_Before_KW_Nationality',  '610-611-612-621' , ',-19,' ) );
                allFormsList.push( new FormType(82,'طلب ضم مدد الخدمة السابقة في القطاعين الأهلي والنفطي (التي انتهت قبل 01-10-1977)', 'Add_ServicePeriod_Private_Oil_Before1977',  '610-611-612-621' , ',-19,' ) );
                allFormsList.push( new FormType(41,'طلب وإقرار لصرف منحة الزواج', 'Beneficiary_Marriage_Grant',  '610-611-612-622' , ',-11,' ) );
                allFormsList.push( new FormType(12,'محضر حجز تنفيذي', 'Book_Executive_Record',  '' , '' ) );
                allFormsList.push( new FormType(88,'مذكرة', 'SSSMemo',  '610-611-612' , ',-1000,' ) );
                allFormsList.push( new FormType(103,'مذكرة إدارة حساب مدد التأمين', 'ServicesComputation_Memo',  '621' , ',-1000,' ) );
                allFormsList.push( new FormType(62,'مذكرة إعادة تسوية المعاش التقاعدي طبقاً للمادة 36 من القانون 8 لسنة 2010-الباحث القانوني', 'PensionRecalculation_Item36_Rule8_Year2010_Researcher',  '621' , ',-20,' ) );
                allFormsList.push( new FormType(67,'مذكرة إعادة تسوية المعاش التقاعدي طبقاً للمادة 36 من القانون 8 لسنة 2010-المحاسب', 'PensionRecalculation_Item36_Rule8_Year2010_Accountant',  '621' , ',-20,' ) );
                allFormsList.push( new FormType(135,'مذكرة إعادة تسوية حالات استحقاق المعاشات مادة 6 عسكريين مادة 10 مدنيين', 'PensionRecalculation_Items6Mil_Item10Civ',  '621' , ',-24,' ) );
                allFormsList.push( new FormType(11,'مذكرة اعادة تسوية بعدم ضم المدد', 'Pen_Recal_Without_Periods_Before95',  '' , '' ) );
                allFormsList.push( new FormType(113,'مذكرة البيانات الأساسية لتسوية (معاش-مكافأة) لمن انتهت خدمته بالوفاة', 'Pension_Resettlement_BaiscData_Memo',  '622' , ',-10,' ) );
                allFormsList.push( new FormType(53,'مذكرة البيانات الأساسية لتسوية المعاش', 'Pension_Calculation_BasicData_Memo',  '621' , ',-20,' ) );
                allFormsList.push( new FormType(128,'مذكرة البيانات الأساسية لتسوية المكافأة', 'Reward_Calculation_BasicData_Memo',  '621' , ',-23,' ) );
                allFormsList.push( new FormType(114,'مذكرة بحالة المستحقين في المعاش', 'Beneficiaries_Status_On_Pension',  '622' , ',-15,' ) );
                allFormsList.push( new FormType(19,'مذكرة بحث بشأن زيادة الأولاد بعد التقاعد', 'Children_Increace_After_Retir',  '' , '' ) );
                allFormsList.push( new FormType(115,'مذكرة بشأن حالة المرحوم', 'Heirs_Status_Memo',  '622' , ',-10,' ) );
                allFormsList.push( new FormType(9,'مذكرة ترجمة خارجية', 'Out_Translation_Request',  '' , '' ) );
                allFormsList.push( new FormType(7,'مذكرة حفظ', 'Save_Memo',  '' , '' ) );
                allFormsList.push( new FormType(8,'مذكرة داخلية للسيد المحاسب', 'In_Translation_Request',  '' , '' ) );
                allFormsList.push( new FormType(51,'مذكرة زيادة الأولاد بعد التقاعد-الباحث القانوني', 'Children_Increment_After_Retirement_Researcher',  '621' , ',-20,' ) );
                allFormsList.push( new FormType(65,'مذكرة زيادة الأولاد بعد التقاعد-المحاسب', 'Children_Increment_After_Retirement_Accountant',  '621' , ',-20,' ) );
                allFormsList.push( new FormType(6,'مذكرة عرض تقسيط مديونية', 'Indebtedness_Installment',  '' , '' ) );
                allFormsList.push( new FormType(18,'مذكرة ملاحظات', 'Note_Memo',  '' , '' ) );
                allFormsList.push( new FormType(64,'مذكرة ملاحظات تسوية المعاش - المحاسب', 'Pension_Calculation_NotesMemo_Accountant',  '621' , ',-20,' ) );
                allFormsList.push( new FormType(10,'مذكرة ملاحظات للمدة اللازمة لاستحقاق المعاش التقاعدي', 'Pen_Sal_Req_Per_Note_Mem',  '' , '' ) );
                allFormsList.push( new FormType(130,'مسودة حساب متوسط المرتب أو الشرائح', 'Pension_Slice_Average_Calculation_Draft',  '621' , ',-23,' ) );
                allFormsList.push( new FormType(99,'معاش مقدم إستثنائي للإدارة العامة', 'Exceptional_Advanced_Pension',  '610-611-612' , ',-1000,' ) );
                allFormsList.push( new FormType(3,'نموذج إعادة تسوية حالات إستحقاق المعاش', 'Reset_Pension',  '' , '' ) );
                allFormsList.push( new FormType(105,'نموذج إقرار بصحة جهة الصرف', 'Pension_In_Employment_Bank_Endorsement',  '610-611-612' , ',-1000,' ) );
                allFormsList.push( new FormType(1,'نموذج إيقاف معاش', 'Pension_Stop',  '' , '' ) );
                allFormsList.push( new FormType(116,'نموذج إيقاف نصيب', 'Share_Suspended',  '622' , ',-1000,' ) );
                allFormsList.push( new FormType(83,'نموذج اختيار طريقة سداد ضم الخدمة السابقة', 'Previous_ServicePeriod_Payment_Type',  '610-611-612-621' , ',-19,' ) );
                allFormsList.push( new FormType(35,'نموذج استقطــــاع من حقوق تأمينيـــة', 'InsuranceRights_Deduction_Request',  '622' , ',-1000,' ) );
                allFormsList.push( new FormType(37,'نموذج استيفاء زيادة القرار رقم (1) لسنة 2001 المعدل بالقرار رقم (5) لسنة 2005', 'Increment_Decision_1_2001',  '610-611-612-621' , ',-4,' ) );
                allFormsList.push( new FormType(77,'نموذج الإقرار الخاص بأصحاب المعاشات التقاعدية المصروفة أو المؤجلة الصرف والمستحقين لصرفها', 'Pensioner_Endorsement_5th',  '610-611-612-631' , ',-17,' ) );
                allFormsList.push( new FormType(121,'نموذج التأمين التكميلي باب خامس', 'Optional_Supplement_Insurance',  '610-611-612-632' , ',-22,' ) );
                allFormsList.push( new FormType(68,'نموذج التوقيعات (باب خامس)', 'Signature_Form',  '610-611-612-631' , ',-17,' ) );
                allFormsList.push( new FormType(100,'نموذج المستندات المرفقة بإجراء تسوية المعاش', 'Pension_Calculation_Attachment_Sheet',  '610-611-612-621' , ',-1,' ) );
                allFormsList.push( new FormType(40,'نموذج بحث حالة ورثة', 'Beneficiary_Heirs_Check',  '610-611-612-622' , ',-10,' ) );
                allFormsList.push( new FormType(54,'نموذج بشأن الحد الأدنى للمعاش التقاعدي', 'Pensioner_Marital_Statement_2003',  '610-611-612-621' , ',-8,' ) );
                allFormsList.push( new FormType(29,'نموذج تحديث بيانات المؤمن عليهم', 'Update_Client_Data',  '610-611-612-621' , ',-1000,' ) );
                allFormsList.push( new FormType(125,'نموذج تحديث بيانات المستحقين عند بلوغ سن 85', 'Update_Beneficiary_Data_Reaching_Age85',  '610-611-612-622' , ',-1000,' ) );
                allFormsList.push( new FormType(92,'نموذج تحويل مراجع', 'Client_Forwarding',  '610-611-612' , ',-1000,' ) );
                allFormsList.push( new FormType(94,'نموذج تحويل ملف', 'File_Transfer',  '610-611-612' , ',-1000,' ) );
                allFormsList.push( new FormType(93,'نموذج تحويل ملف أصحاب أعمال', 'Employeer_Forwarding',  '610-611-612' , ',-1000,' ) );
                allFormsList.push( new FormType(102,'نموذج تحويل ملف_حساب المدد', 'ServicesComputation_Fle_Transfer',  '621' , ',-1000,' ) );
                allFormsList.push( new FormType(95,'نموذج تسديد مبالغ', 'Make_Payments',  '610-611-612' , ',-1000,' ) );
                allFormsList.push( new FormType(122,'نموذج تسوية المعـاش أو مكافأة نهاية الخدمة', 'PensionResettlement_OrEndOfServiceReward',  '622' , ',-1000,' ) );
                allFormsList.push( new FormType(129,'نموذج تسوية المكافأة', 'Reward_Calculation_Accountant',  '621' , ',-23,' ) );
                allFormsList.push( new FormType(50,'نموذج تسوية معاش - المحاسب', 'Pension_Calculation_Accountant',  '621' , ',-20,' ) );
                allFormsList.push( new FormType(124,'نموذج تعديل الزيادات بعد الوفاة', 'Increments_Modification_After_Death',  '622' , ',-1000,' ) );
                allFormsList.push( new FormType(43,'نموذج تعديل المعاش التقاعدي (المرتب) - الباحثين', 'Pension_Update',  '' , '' ) );
                allFormsList.push( new FormType(14,'نموذج تعديل حجز', 'Reservation_Update',  '' , '' ) );
                allFormsList.push( new FormType(136,'نموذج تعديل معاش / مكافأة / عسكريين', 'Pension_Reward_Modification_Military',  '621' , ',-24,' ) );
                allFormsList.push( new FormType(137,'نموذج تعديل معاش / مكافأة / مدنيين', 'Pension_Reward_Modification_Civilian',  '621' , ',-24,' ) );
                allFormsList.push( new FormType(61,'نموذج تعديل معاش زيادة زواج بعد التقاعد', 'Pension_Modification_Marriage_Increment_Retirement',  '621' , ',-20,' ) );
                allFormsList.push( new FormType(20,'نموذج تعديل معاش-مكافأة-المدنيين', 'Civilians_Pension_Update',  '' , '' ) );
                allFormsList.push( new FormType(15,'نموذج تغيير نفقة', 'Alimony_Update',  '' , '' ) );
                allFormsList.push( new FormType(131,'نموذج حساب مكافأة - مدني - عسكري - باب خامس', 'Reward_Calculation_Accountant_Draft',  '621' , ',-23,' ) );
                allFormsList.push( new FormType(5,'نموذج حفظ ملف', 'Save_File',  '' , '' ) );
                allFormsList.push( new FormType(13,'نموذج رفع حجز', 'Reservation_Release',  '' , '' ) );
                allFormsList.push( new FormType(110,'نموذج صرف تعويض التأمين ضد البطالة بعد الاطلاع على شهادة وزارة التجارة والصناعة', 'Unemployement_Compensation_Payment_MOCI',  '621' , ',-1000,' ) );
                allFormsList.push( new FormType(97,'نموذج صرف رصيد المكافأة', 'Reward_Balance_Payment',  '610-611-612-621' , ',-2,' ) );
                allFormsList.push( new FormType(104,'نموذج طلب ترجمة شهادة لمن يهمه الأمر', 'ServicesTranslation_Memo',  '610-611-612' , ',-1000,' ) );
                allFormsList.push( new FormType(96,'نموذج طلب ملف', 'File_Request',  '610-611-612' , ',-1000,' ) );
                allFormsList.push( new FormType(117,'نموذج مدد الاشتراك', 'Contribution_Periods',  '631' , ',-1000,' ) );
                allFormsList.push( new FormType(2,'نموذج مذكرة إتصال', 'Call_Memo',  '' , '' ) );
                allFormsList.push( new FormType(4,'نموذج مكافأة مالية للخاضعين لقانون التأمينات 62', 'Finance_Reward_62',  '' , '' ) );
                allFormsList.push( new FormType(107,'نموذج ملاحظات القانوني', 'Accountant_Notes_Form',  '621' , ',-1000,' ) );
                
                allFormsList.filter(item => (item.processIDs.includes(','+packageID+',') && item.invDeptCodes.includes(deptCode) ) ).forEach(item=> formsList.push(item));
                registery.ssFormsGridController.formsGrid.formsList = formsList;
                registery.ssFormsGridController.formsGrid.render();
                

            } 
            catch (error) { app.alertError(error.message) }
        },


        fetchInitialFormItem(){
            const url = `/ssforms/formItem/initial/${formHandler.formType.id}`;
            const options = {method: 'GET'};
            const resolve = (data)=>{
                                formHandler.formItem = data;
                                formHandler.formItem.formEntity.originator = loggedUser.trackerEmpID;
                                util.loadHTML('formBody', `./pages/form/${formHandler.formType.ename.toLowerCase()}/form.html`  );
                            };
            const reject = ()=>{ ssFormsService.fetchInitialFormItemLocally();};

            fetchJSON(url,options, resolve,reject);
        },
    // @Deprecated
        fetchInitialFormItemLocally(){
            formHandler.formItem = new FormItem(formHandler.formType.id, formHandler.formType.aname, formHandler.formType.ename);
            let url =  `./pages/form/${formHandler.formType.ename.toLowerCase()}/form.html`;
            util.loadHTML('formBody',url);
        },

        insertFormItem(){
            const url = `/ssforms/formItem`;
            const options = {method: 'POST', body: JSON.stringify(formHandler.formItem) ,cache: 'no-cache', headers: {'Content-Type': 'application/json'}};
            const resolve = (data)=>{
                                    formHandler.formItem = data;
                                    formHandler.setWorkFlowIDLabel();
                                    ssFormsService.printFormItem();
                                };
            const reject = ()=>{};
            fetchJSON(url, options, resolve, reject);
        },
   
        updateFormItem(){
            const url = `/ssforms/formItem`;
            const options = {method: 'PUT', body: JSON.stringify(formHandler.formItem) ,cache: 'no-cache', headers: {'Content-Type': 'application/json'}};
            const resolve = (data)=>{ ssFormsService.printFormItem(); };
            const reject = ()=>{};
            fetchNothing(url, options, resolve, reject);
        },
   
        deleteFormItem(){
            const url = `/ssforms/formItem`;
            const options = {method: 'DELETE', body: JSON.stringify(formHandler.formItem) ,cache: 'no-cache', headers: {'Content-Type': 'application/json'}};
            const resolve = (data)=>{
                                formHandler.formItem = data;
                                formHandler.formItem.formEntity.originator = loggedUser.trackerEmpID;
                                formHandler.controller.read();
                                formHandler.setWorkFlowIDLabel();
                                app.alertSuccess();
                            };
            const reject = ()=>{};
            fetchJSON(url, options, resolve, reject);
        },
        
        saveFormItem(){
            if(!formHandler.formItem.formEntity.id){
                ssFormsService.insertFormItem();
            }
            else{
                ssFormsService.updateFormItem();
            }   
        },
       
        printFormItem(){
            const url = `/ssforms/formItem/pdf`;
            const options = {method: 'PUT', body: JSON.stringify(formHandler.formItem) ,cache: 'no-cache', headers: {'Content-Type': 'application/json'}};
            const resolve = (data)=>{
                let reader = new FileReader();
                reader.onload = ()=> { pdfViewer.renderPDFByData(reader.result, formHandler.formType.aname,formHandler.formType.ename); };
                reader.readAsDataURL(data);
            };
            const reject = ()=>{};
            fetchBLOB(url, options, resolve, reject);
        },

        printRedundant(){
            const url = `/ssforms/formItem/redundant?formTypeID=${formHandler.formType.id}
                        &civilID=${formHandler.formItem.formEntity.clientCivilID}
                        &ssNo=${formHandler.formItem.formEntity.clientSSNo}`;
            const options = {method: 'GET', cache: 'no-cache'};
            const resolve = (data)=>{
                                    if(!data || !data.size || data.size < 10)
                                        app.alertInfo('لا توجد نماذج سابقة');
                                    else{
                                        let reader = new FileReader();
                                        reader.onload = ()=> { pdfViewer.renderPDFByData(reader.result, formHandler.formType.aname,formHandler.formType.ename); };
                                        reader.readAsDataURL(data);
                                    }    
                                };
            const reject = ()=>{};
            fetchBLOB(url, options, resolve, reject);
        },

        checkIfThereAreRedundantForms(){
            const url = `/ssforms/formItem/redundant/count?formTypeID=${formHandler.formType.id}
                        &civilID=${formHandler.formItem.formEntity.clientCivilID}
                        &ssNo=${formHandler.formItem.formEntity.clientSSNo}`;
            const options = {method: 'GET', cache: 'no-cache'};
            const resolve = (data)=>{
                                    if(data > 0){
                                        if(confirm(`هناك نماذج سابقة للعميل، هل ترغب في الاطلاع على جميع النماذج السابقة ؟ `))
                                            ssFormsService.printRedundant();
                                    }
                                };
            const reject = ()=>{};
            fetchText(url, options, resolve, reject);
        },

       

       


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

        getIBANInitials(bankCode){
            try{
                let bankInitials = '';
                /*
                    query = "SELECT SCCF_BANK_INIT_CODE  FROM "+db2Schema+".LT_BANK_CODES WHERE SCCF_BANK_DISP_FLAG = 'Y' AND BANK_CODE = "+selectedBankCode+" FETCH FIRST 1 ROW ONLY";
			        dbTable = executeQuery(query,"DB2");
                    if(dbTable.length > 0 && dbTable[0][0] != ""  )
                */
                return bankInitials;
            }
            catch(error){ app.alert(`حدث خطأ بالنظام - الخط الأول غير متوفر ${error.message}`)}   
        },

        isValidIBAN(iban,bankCode){
            try{
                let bankInitials = this. getIBANInitials(bankCode);
                //if not bankInitials = iban.substring(0,8) return false
                //call web service
                /*
                    errMsg = "خطأ في النظام,سيتم إغلاق الطلب آليــا - الرجاء إبلاغ إدارة الأنظمـــة"+"\n"+"Error @Method getIBANStatus() ";
                    xmlHttp = new XMLHttpRequest();
                    url = controllerURL+"module=webServices&webServiceName=CheckIBAN&iban="+iban+"&userName="+loggedUserEmpLogin;
                    
                    xmlHttp.open("GET",url,false);
                    xmlHttp.send();					
                    if(xmlHttp.readyState == 4 && xmlHttp.status == 200){
                        response = trim(xmlHttp.responseText);
                        wsResult = response.split("*");
                        if(response.search("Error@Controller") > -1)
                            throw new Error(errMsg+" response : "+response);
                        else		
                            return wsResult;				
                    }
                    else
                        throw new Error("خطأ في النظام,سيتم إغلاق الطلب آليــا - الرجاء إبلاغ إدارة الأنظمـــة"+"\n"+"Error @Method getIBANStatus() xmlHttp.readyState != 4 ");
                */
                return true;
            }
            catch(error){ app.alert(`حدث خطأ بالنظام - الخط الأول غير متوفر ${error.message}`)}
            
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
            return {errMsgKey:'MISSING_CLIENT_DATA'};
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