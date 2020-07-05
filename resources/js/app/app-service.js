
    const peService = {
        fetchInboxWIs(username){
            let list = [];
            list.push(new WorkItem("Periodical_Leave",500, "طلب اجازة دورية" ,"12/5/2019") );
            
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
            

            return list;
        },

        fetchQueueWIs(){},
    }

    const wf_TrackerService = {
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
            try{
                let allPackagesList = [
                    {id:'-22', aName:'التأمين التكميلي باب خامس', formsCount:0,invDeptCode: [610,611,612,632]},
                    {id:'-5', aName:'الجمع بين المعاش والمرتب', formsCount:0,invDeptCode: [610,611,612,621]},
                    {id:'-21', aName:'إقرار وطلب صرف النصيب بشيك', formsCount:0,invDeptCode: [610,611,612,622]},
                    {id:'-9', aName:'إقرار صاحب معاش غير كويتي', formsCount:0,invDeptCode: [610,611,612,621]},
                    {id:'-20', aName:'تسوية المعاش + المكافأة-المعاشات', formsCount:0,invDeptCode: [621]},
                    {id:'-1', aName:'تسوية المعاش + المكافأة-الخدمة التأمينية', formsCount:0,invDeptCode: [610,611,612,621]},
                    {id:'-23', aName:'تسوية مكافأة', formsCount:0,invDeptCode: [621]},
                    {id:'-17', aName:'تسجيل باب خامس', formsCount:0,invDeptCode: [610,611,612,631]},
                    {id:'-18', aName:'تعديل شريحة', formsCount:0,invDeptCode: [610,611,612,632]},
                    {id:'-15', aName:'تحديد مستحق منحة الوفاة', formsCount:0,invDeptCode: [610,611,612,622]},
                    {id:'-14', aName:'حالة انتقال الوصاية', formsCount:0,invDeptCode: [610,611,612,622]},
                    {id:'-3', aName:'رد الاستبــدال', formsCount:0,invDeptCode: [610,611,612,621,632]},
                    {id:'-8', aName:'زيادة الحد الأدنى', formsCount:0,invDeptCode: [610,611,612,621]},
                    {id:'-4', aName:'زيادة الأبناء أو الزواج', formsCount:0,invDeptCode: [610,611,612,621]},
                    {id:'-12', aName:'صرف نصيب وإعادة صرف نصيب', formsCount:0,invDeptCode: [610,611,612,622]},
                    {id:'-2', aName:'صرف رصيد المكافأة', formsCount:0,invDeptCode: [610,611,612,621]},
                    {id:'-7', aName:'طلب التجاوز عن التمسك في طلب صرف المستحقات', formsCount:0,invDeptCode: [610,611,612,621]},
                    {id:'-16', aName:'عسكري غير كويتي', formsCount:0,invDeptCode: [610,611,612,622]},
                    {id:'-11', aName:'منحـة زواج', formsCount:0,invDeptCode: [610,611,612,622]},
                    {id:'-10', aName:'معاملـة الوفــاة', formsCount:0,invDeptCode: [610,611,612,622]},
                    {id:'-19', aName:'نماذج حساب مدد التأمين', formsCount:0,invDeptCode: [610,611,612,621]},
                    {id:'general', aName:'نماذج عامة', formsCount:0,invDeptCode: [610,611,612,621,622,631,632]},
                ];
                let packagesList = [];
                allPackagesList.filter(item => item.invDeptCode.includes(deptCode)).forEach(item=>packagesList.push(item));
                return packagesList;
            }
            catch(error){ app.alertError(error.message);}
        },

        fetchFormsList(packageID){
            try {
                let allFormsList = [
                    {id:1, eName:'Pension_Stop', aName:'نموذج إيقاف معاش',processIDs:'general'},
                    {id:42, eName:'PenRecalc_Modified_Periods', aName:'إعادة تسوية المعاش التقاعدي بتعديل مدد الاشتراك',processIDs:'general'},
                    {id:43, eName:'Pension_Update', aName:'نموذج تعديل المعاش التقاعدي (المرتب) - الباحثين',processIDs:'general'},
                    {id:44, eName:'Beneficiary_Ending_Statement', aName:'اقرار وطلب صرف نثيب او استقالة او التقاعد',processIDs:'general'},
                    {id:52, eName:'Pensioner_Marital_Statement', aName:'إقرار الحالة الاجتماعية لصاحب المعاش',processIDs:'general'},
                    {id:55, eName:'Beneficiary_Heirs_Schedule', aName:'جدول نموذج بحث حالة ورثة',processIDs:'general'},
                    {id:70, eName:'not Assigned', aName:'Not Assigned',processIDs:'general'},
                    {id:2, eName:'Call_Memo', aName:'نموذج مذكرة إتصال',processIDs:'general'},
                    {id:3, eName:'Reset_Pension', aName:'نموذج إعادة تسوية حالات إستحقاق المعاش',processIDs:'general'},
                    {id:4, eName:'Finance_Reward_62', aName:'نموذج مكافأة مالية للخاضعين لقانون التأمينات 62',processIDs:'general'},
                    {id:5, eName:'Save_File', aName:'نموذج حفظ ملف',processIDs:'general'},
                    {id:6, eName:'Indebtedness_Installment', aName:'مذكرة عرض تقسيط مديونية',processIDs:'general'},
                    {id:7, eName:'Save_Memo', aName:'مذكرة حفظ',processIDs:'general'},
                    {id:8, eName:'In_Translation_Request', aName:'مذكرة داخلية للسيد المحاسب',processIDs:'general'},
                    {id:9, eName:'Out_Translation_Request', aName:'مذكرة ترجمة خارجية',processIDs:'general'},
                    {id:10, eName:'Pen_Sal_Req_Per_Note_Mem', aName:'مذكرة ملاحظات للمدة اللازمة لاستحقاق المعاش التقاعدي',processIDs:'general'},
                    {id:11, eName:'Pen_Recal_Without_Periods_Before95', aName:'مذكرة اعادة تسوية بعدم ضم المدد',processIDs:'general'},
                    {id:12, eName:'Book_Executive_Record', aName:'محضر حجز تنفيذي',processIDs:'general'},
                    {id:13, eName:'Reservation_Release', aName:'نموذج رفع حجز',processIDs:'general'},
                    {id:14, eName:'Reservation_Update', aName:'نموذج تعديل حجز',processIDs:'general'},
                    {id:15, eName:'Alimony_Update', aName:'نموذج تغيير نفقة',processIDs:'general'},
                    {id:16, eName:'Certificate_Whome_It_May_Concern', aName:'شهادة لمن يهمه الأمر',processIDs:'general'},
                    {id:17, eName:'Recal_Pen_After_Ded_Period_Before95', aName:'إعادة تسوية المعاش التكميلي بعد خصم المدة السابقة 1995/1/1',processIDs:'general'},
                    {id:18, eName:'Note_Memo', aName:'مذكرة ملاحظات',processIDs:'general'},
                    {id:19, eName:'Children_Increace_After_Retir', aName:'مذكرة بحث بشأن زيادة الأولاد بعد التقاعد',processIDs:'general'},
                    {id:20, eName:'Civilians_Pension_Update', aName:'نموذج تعديل معاش-مكافأة-المدنيين',processIDs:'general'},
                    {id:22, eName:'Pension_Temporarily_Suspend', aName:'إيقاف المعاش مؤقتا',processIDs:'general'},
                    {id:23, eName:'Bonus_Suspend', aName:'إيقاف بما يعادل المكافاة',processIDs:'general'},
                    {id:24, eName:'Pension_ReCalculation', aName:'إعادة تسوية المعاش التقاعدي',processIDs:'general'},
                    {id:100, eName:'Pension_Calculation_Attachment_Sheet', aName:'نموذج المستندات المرفقة بإجراء تسوية المعاش',processIDs:',-1,'},
                    {id:126, eName:'Medical_Reason_Pensioner_Statement', aName:'إقرار تسوية المعاش التقاعدي لأسباب صحية',processIDs:',-1,'},
                    {id:25, eName:'Benefits_Payment', aName:'استمارة طلب صرف الحقوق التأمينية رقم 201',processIDs:',-1,'},
                    {id:26, eName:'Pensioner_Marital_Status', aName:'إقرار الحالة الاجتماعية لصاحب المعاش',processIDs:',-1,'},
                    {id:27, eName:'Deductions', aName:'استمارة استقطاع',processIDs:',-1,'},
                    {id:28, eName:'Pension_Replacement', aName:'استمارة طلب صرف استبدال جزء من معاش تقاعدي',processIDs:',-1,'},
                    {id:45, eName:'Retirement_Share_Request', aName:'استمارة طلب صرف الحقوق التأمينية (صرف نصيب عند التقاعد)تابع 201',processIDs:',-1,'},
                    {id:38, eName:'Disabled_Children_Declaration', aName:'إقرار عن الأبناء المعاقين تطبيقاً لأحكام القانون رقم (8) لسنة 2010',processIDs:',-1,'},
                    {id:57, eName:'Death_Document', aName:'المستندات المطلوبة في معاملات الوفاة',processIDs:',-10,'},
                    {id:115, eName:'Heirs_Status_Memo', aName:'مذكرة بشأن حالة المرحوم',processIDs:',-10,'},
                    {id:113, eName:'Pension_Resettlement_BaiscData_Memo', aName:'مذكرة البيانات الأساسية لتسوية (معاش-مكافأة) لمن انتهت خدمته بالوفاة',processIDs:',-10,'},
                    {id:48, eName:'Death_Grant_Demand', aName:'طلب صرف منحة وفاة',processIDs:',-10,'},
                    {id:40, eName:'Beneficiary_Heirs_Check', aName:'نموذج بحث حالة ورثة',processIDs:',-10,'},
                    {id:46, eName:'Family_Approval', aName:'اقرار بشأن الاعتماد للاب والاخوة والاخوات',processIDs:',-10,'},
                    {id:47, eName:'Beneficiary_Demand_Type', aName:'استمارة طلب ايقاف وانهاء نصيب او معاش',processIDs:',-10,'},
                    {id:41, eName:'Beneficiary_Marriage_Grant', aName:'طلب وإقرار لصرف منحة الزواج',processIDs:',-11,'},
                    {id:30, eName:'Share_Demand_Approval', aName:'استمارة إقرار وطلب صرف نصيب',processIDs:',-12,'},
                    {id:32, eName:'Beneficiary_Gardianship_Statement', aName:'طلب صرف وإقرار بالحالة الوظيفية والاجتماعية عند الولاية والوصاية والقوامة',processIDs:',-14,'},
                    {id:31, eName:'Death_Grant', aName:'اقرار بتحديد مستحق منحة الوفاة',processIDs:',-15,'},
                    {id:114, eName:'Beneficiaries_Status_On_Pension', aName:'مذكرة بحالة المستحقين في المعاش',processIDs:',-15,'},
                    {id:101, eName:'Update_Beneficiaries_Military_NonKuwaiti', aName:'إقرار وتحديث بيانات للمستحقين عسكري غير كويتي',processIDs:',-16,'},
                    {id:79, eName:'Pension_Category_Selection_5th', aName:'اختيار الشريحة الخاصة بأصحاب المعاشات التقاعدية المصروفة أو المؤجلة الصرف',processIDs:',-17,'},
                    {id:76, eName:'Disable_Registration_Endorsement_5th', aName:'إقرار معاق للتسجيل طبقا لأحكام الباب الخامس',processIDs:',-17,'},
                    {id:77, eName:'Pensioner_Endorsement_5th', aName:'نموذج الإقرار الخاص بأصحاب المعاشات التقاعدية المصروفة أو المؤجلة الصرف والمستحقين لصرفها',processIDs:',-17,'},
                    {id:118, eName:'Subscription_Notify_Details_SSS', aName:'بيانات الاشتراك للفئة الخاضعة لأحكام الباب الخامس',processIDs:',-17,'},
                    {id:21, eName:'Subscription_Notify_SSS', aName:'اشعار اشتراك-انهاء اشتراك مؤمن عليه ( باب خامس)',processIDs:',-17,'},
                    {id:74, eName:'Permit_Owners_Endorsement_5th', aName:'إقرار لأصحاب تراخيص الشركات أو التراخيص والتصاريح الفردية',processIDs:',-17,'},
                    {id:68, eName:'Signature_Form', aName:'نموذج التوقيعات (باب خامس)',processIDs:',-17,'},
                    {id:69, eName:'Service_Activities_Period', aName:'بيان الأنشطة الأخرى ومدد الخدمة السابقة (باب خامس)',processIDs:',-17,'},
                    {id:72, eName:'Income_Contribution_Share', aName:'طلب تعديل الشريحة التي تؤدي على أساسها الاشتراكات للمخاطبين باب خامس',processIDs:',-18,'},
                    {id:73, eName:'Contribution_Share_start', aName:'تعديل شريحة بدء الاشتراك',processIDs:',-18,'},
                    {id:119, eName:'Subscription_3Updates_SSS', aName:'طلب تعديل شريحة (1250 د.ك) فأكثر وفقا للمادة 7 من القرار (2) لسنة 2019 (3 تعديلات)',processIDs:',-18,'},
                    {id:120, eName:'Subscription_10Promotion_SSS', aName:'طلب تعديل شريحة بدء الاشتراك بتعديل أحكام القرار رقم (4) لسنة 1993 وفقا لأحكام القرار رقم (3) لسنة 2019 (10 قفزات)',processIDs:',-18,'},
                    {id:87, eName:'Calculate_CurrentValue', aName:'استمارة حساب القيمة الحالية',processIDs:',-19,'},
                    {id:83, eName:'Previous_ServicePeriod_Payment_Type', aName:'نموذج اختيار طريقة سداد ضم الخدمة السابقة',processIDs:',-19,'},
                    {id:75, eName:'Add_ServicePeriods_Before_KW_Nationality', aName:'طلب ضم مدد الخدمة السابقة على الحصول على الجنسية الكويتية',processIDs:',-19,'},
                    {id:84, eName:'Add_ServicePeriod_BeforeKW_Pension_Beneficiary', aName:'طلب ضم مدة خدمة سابقة على الجنسية الكويتية لأصحاب المعاشات أو المستحقين',processIDs:',-19,'},
                    {id:78, eName:'Add_Nominal_Period_After_Service', aName:'طلب ضم مدة اشتراك اعتبارية (بعد انتهــاء الخدمـــة)',processIDs:',-19,'},
                    {id:80, eName:'Add_Nominal_Period_During_Service', aName:'طلب ضم مدة اشتراك اعتبارية (أثنــاء الخدمــة)',processIDs:',-19,'},
                    {id:81, eName:'Add_Actual_ServicePeriod_Before1995', aName:'طلب ضم مدة الخدمة الفعلية السابقة على 1-1-1995 في التأمين التكميلي',processIDs:',-19,'},
                    {id:82, eName:'Add_ServicePeriod_Private_Oil_Before1977', aName:'طلب ضم مدد الخدمة السابقة في القطاعين الأهلي والنفطي (التي انتهت قبل 01-10-1977)',processIDs:',-19,'},
                    {id:85, eName:'Calculate_Unpaid_ServicePeriods', aName:'طلب حساب مدد الخدمة التي لا يتقاضى المؤمن عليه أو المستفيد مرتبه عنها  وفقا للقرار رقم  4 لسنة 1994',processIDs:',-19,'},
                    {id:86, eName:'Add_RetrirementGrant_ServicePeriod', aName:'طلب ضم مدة الخدمة الفعلية السابقة (يصرف-لايصرف) عنها مكافأة تقاعد (عسكري-مدني)',processIDs:',-19,'},
                    {id:97, eName:'Reward_Balance_Payment', aName:'نموذج صرف رصيد المكافأة',processIDs:',-2,'},
                    {id:106, eName:'Pension_Recalculation_Rule_41_42', aName:'إعادة تسوية المعاش طبقا لأحكام المادة 41-42',processIDs:',-20,'},
                    {id:67, eName:'PensionRecalculation_Item36_Rule8_Year2010_Accountant', aName:'مذكرة إعادة تسوية المعاش التقاعدي طبقاً للمادة 36 من القانون 8 لسنة 2010-المحاسب',processIDs:',-20,'},
                    {id:65, eName:'Children_Increment_After_Retirement_Accountant', aName:'مذكرة زيادة الأولاد بعد التقاعد-المحاسب',processIDs:',-20,'},
                    {id:61, eName:'Pension_Modification_Marriage_Increment_Retirement', aName:'نموذج تعديل معاش زيادة زواج بعد التقاعد',processIDs:',-20,'},
                    {id:62, eName:'PensionRecalculation_Item36_Rule8_Year2010_Researcher', aName:'مذكرة إعادة تسوية المعاش التقاعدي طبقاً للمادة 36 من القانون 8 لسنة 2010-الباحث القانوني',processIDs:',-20,'},
                    {id:63, eName:'Differences_Decision2_Year2003', aName:'الفروق المستحقة من تطبيق قرار الحد الأدنى رقم 2 لسنة 2003',processIDs:',-20,'},
                    {id:50, eName:'Pension_Calculation_Accountant', aName:'نموذج تسوية معاش - المحاسب',processIDs:',-20,'},
                    {id:51, eName:'Children_Increment_After_Retirement_Researcher', aName:'مذكرة زيادة الأولاد بعد التقاعد-الباحث القانوني',processIDs:',-20,'},
                    {id:53, eName:'Pension_Calculation_BasicData_Memo', aName:'مذكرة البيانات الأساسية لتسوية المعاش',processIDs:',-20,'},
                    {id:64, eName:'Pension_Calculation_NotesMemo_Accountant', aName:'مذكرة ملاحظات تسوية المعاش - المحاسب',processIDs:',-20,'},
                    {id:98, eName:'Share_Payment_By_Check', aName:'إقرار وطلب صرف النصيب بشيـــــك',processIDs:',-21,'},
                    {id:121, eName:'Optional_Supplement_Insurance', aName:'نموذج التأمين التكميلي باب خامس',processIDs:',-22,'},
                    {id:128, eName:'Reward_Calculation_BasicData_Memo', aName:'مذكرة البيانات الأساسية لتسوية المكافأة',processIDs:',-23,'},
                    {id:129, eName:'Reward_Calculation_Accountant', aName:'نموذج تسوية المكافأة',processIDs:',-23,'},
                    {id:130, eName:'Pension_Slice_Average_Calculation_Draft', aName:'مسودة حساب متوسط المرتب أو الشرائح',processIDs:',-23,'},
                    {id:131, eName:'Reward_Calculation_Accountant_Draft', aName:'نموذج حساب مكافأة - مدني - عسكري - باب خامس',processIDs:',-23,'},
                    {id:132, eName:'PensionRecalculation_Item41_Researcher', aName:'إعادة تسوية المعاش التقاعدي طبقاً للمادة 41-الباحث القانوني',processIDs:',-24,'},
                    {id:133, eName:'PensionRecalculation_Item42_Researcher', aName:'إعادة تسوية المعاش التقاعدي طبقاً للمادة 42-الباحث القانوني',processIDs:',-24,'},
                    {id:134, eName:'PensionRecalculation_Pension_Modification', aName:'إعادة تسوية المعاش بتعديل بيانات المرتب',processIDs:',-24,'},
                    {id:135, eName:'PensionRecalculation_Items6Mil_Item10Civ', aName:'مذكرة إعادة تسوية حالات استحقاق المعاشات مادة 6 عسكريين مادة 10 مدنيين',processIDs:',-24,'},
                    {id:136, eName:'Pension_Reward_Modification_Military', aName:'نموذج تعديل معاش / مكافأة / عسكريين',processIDs:',-24,'},
                    {id:137, eName:'Pension_Reward_Modification_Civilian', aName:'نموذج تعديل معاش / مكافأة / مدنيين',processIDs:',-24,'},
                    {id:138, eName:'PensionRecalculation_Items4142_Rule8_Year2010', aName:'إعادة تسوية المعاش التقاعدي طبقاً للمادة رقم 41 ، 42 لقانون رقم 8 لسنة 2010',processIDs:',-24,'},
                    {id:139, eName:'PensionRecalculation_Items4142_Rule110_Year2015', aName:'إعادة تسوية المعاش التقاعدي طبقاً للمادة رقم 41 ، 42 لقانون رقم 110 لسنة 2015',processIDs:',-24,'},
                    {id:140, eName:'Estimated_Pension_Legal_Calculation', aName:'تسوية معاش افتراضي للمؤمن عليه - القانونيين',processIDs:',-25,'},
                    {id:141, eName:'Estimated_Pension_Accountant_Calculation', aName:'تسوية معاش افتراضي للمؤمن عليه - المحاسبين',processIDs:',-25,'},
                    {id:58, eName:'Pension_Replacement_PayBack', aName:'استمارة رد استبدال اثناء الخدمة - متقاعد',processIDs:',-3,'},
                    {id:37, eName:'Increment_Decision_1_2001', aName:'نموذج استيفاء زيادة القرار رقم (1) لسنة 2001 المعدل بالقرار رقم (5) لسنة 2005',processIDs:',-4,'},
                    {id:36, eName:'Merge_Pension_And_Salary', aName:'استمارة طلب الجمع بين المعاش والمرتب',processIDs:',-5,'},
                    {id:39, eName:'Ignore_Benefits_Delaying', aName:'طلب التجاوز عن التمسك بالتقادم في طلب صرف المستحقات التأمينية',processIDs:',-7,'},
                    {id:54, eName:'Pensioner_Marital_Statement_2003', aName:'نموذج بشأن الحد الأدنى للمعاش التقاعدي',processIDs:',-8,'},
                    {id:59, eName:'NonKuwaiti_Pensioner_Statement', aName:'إقرار صاحب المعاش الغير كويتي',processIDs:',-9,'},
                    {id:127, eName:'Add_RetirementReward_BasicAndComplementary', aName:'طلب ضم مدد الخدمة السابقة (صرف / لم يصرف) عنها مكافأة تقاعد (الأساسي / التكميلي) (مدنية / عسكرية)',processIDs:',-19,'},
                    {id:116, eName:'Share_Suspended', aName:'نموذج إيقاف نصيب',processIDs:'general'},
                    {id:117, eName:'Contribution_Periods', aName:'نموذج مدد الاشتراك',processIDs:'general'},
                    {id:122, eName:'PensionResettlement_OrEndOfServiceReward', aName:'نموذج تسوية المعـاش أو مكافأة نهاية الخدمة',processIDs:'general'},
                    {id:123, eName:'Add_RetirementReward_BasicAndComplementary', aName:'طلب ضم مدد الخدمة السابقة (صرف / لم يصرف) عنها مكافأة تقاعد (الأساسي / التكميلي) (مدنية / عسكرية)',processIDs:'general'},
                    {id:124, eName:'Increments_Modification_After_Death', aName:'نموذج تعديل الزيادات بعد الوفاة',processIDs:'general'},
                    {id:125, eName:'Update_Beneficiary_Data_Reaching_Age85', aName:'نموذج تحديث بيانات المستحقين عند بلوغ سن 85',processIDs:'general'},
                    {id:107, eName:'Accountant_Notes_Form', aName:'نموذج ملاحظات القانوني',processIDs:'general'},
                    {id:108, eName:'Acknowledgement_Request', aName:'إقـرار وطلـب',processIDs:'general'},
                    {id:109, eName:'Unemployment_Compensation_Stop_101', aName:'إيقاف صرف تعويض التأمين ضد البطالة طبقا للقانون رقم ,101 لسنة 2013',processIDs:'general'},
                    {id:110, eName:'Unemployement_Compensation_Payment_MOCI', aName:'نموذج صرف تعويض التأمين ضد البطالة بعد الاطلاع على شهادة وزارة التجارة والصناعة',processIDs:'general'},
                    {id:111, eName:'Unemployment_Compensation_Rule4', aName:'حجز تنفيذى طبقاً للأحكام  المدة 4 من القانون رقم 101 لسنة 2013 بشأن تعويض التأمين ضد البطالة',processIDs:'general'},
                    {id:112, eName:'Recovered_Payments_MOJ', aName:'بشأن المبالغ المسترجعة من وزارة العدل لصالح النفقة',processIDs:'general'},
                    {id:102, eName:'ServicesComputation_Fle_Transfer', aName:'نموذج تحويل ملف_حساب المدد',processIDs:'general'},
                    {id:103, eName:'ServicesComputation_Memo', aName:'مذكرة إدارة حساب مدد التأمين',processIDs:'general'},
                    {id:104, eName:'ServicesTranslation_Memo', aName:'نموذج طلب ترجمة شهادة لمن يهمه الأمر',processIDs:'general'},
                    {id:105, eName:'Pension_In_Employment_Bank_Endorsement', aName:'نموذج إقرار بصحة جهة الصرف',processIDs:'general'},
                    {id:96, eName:'File_Request', aName:'نموذج طلب ملف',processIDs:'general'},
                    {id:49, eName:'Beneficiary_Refund_Request', aName:'استمارة طلب صرف المرتجعات والمستحقات',processIDs:'general'},
                    {id:33, eName:'SpecialNeeds_PensionResettlement', aName:'إعادة تسوية المعاش في شأن حقوق الأشخاص ذوي الإعاقة',processIDs:'general'},
                    {id:34, eName:'PensionResettlement_After_Death', aName:'إعادة إعادة تسوية المعاش التقاعدي بعد الوفاة',processIDs:'general'},
                    {id:35, eName:'InsuranceRights_Deduction_Request', aName:'نموذج استقطــــاع من حقوق تأمينيـــة',processIDs:'general'},
                    {id:94, eName:'File_Transfer', aName:'نموذج تحويل ملف',processIDs:'general'},
                    {id:93, eName:'Employeer_Forwarding', aName:'نموذج تحويل ملف أصحاب أعمال',processIDs:'general'},
                    {id:95, eName:'Make_Payments', aName:'نموذج تسديد مبالغ',processIDs:'general'},
                    {id:56, eName:'Change_Bank_Details', aName:'استمارة طلب تغيير جهة الصرف',processIDs:'general'},
                    {id:60, eName:'Delegation_Activation', aName:'استمارة إدخال- إلغاء وكالة',processIDs:'general'},
                    {id:88, eName:'SSSMemo', aName:'مذكرة',processIDs:'general'},
                    {id:91, eName:'Process_Achievment_Statistics', aName:'الإحصائية اليومية لإنجاز معاملات المراجعين',processIDs:'general'},
                    {id:90, eName:'Certificates_Reviewers_Statistics', aName:'إحصائية استقبال مراجعي الشهادات',processIDs:'general'},
                    {id:89, eName:'Phone_Calls_Statistics', aName:'الإحصائية اليومية للاستفسارات الهاتفية',processIDs:'general'},
                    {id:92, eName:'Client_Forwarding', aName:'نموذج تحويل مراجع',processIDs:'general'},
                    {id:99, eName:'Exceptional_Advanced_Pension', aName:'معاش مقدم إستثنائي للإدارة العامة',processIDs:'general'},
                    {id:29, eName:'Update_Client_Data', aName:'نموذج تحديث بيانات المؤمن عليهم',processIDs:'general'},   

                ];

                let formsList = [];
                allFormsList.filter(item => item.processIDs.includes(','+packageID+',') || ( (item.processIDs == packageID) && (packageID == 'general') ) ).forEach(item=> formsList.push(item));
                return formsList;

            } 
            catch (error) { app.alertError(error.message) }
        }


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