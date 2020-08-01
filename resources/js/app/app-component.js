	"use strict";


	

	class Form{
		constructor(dbTableName,labelAra,labelEng){
			try{
				this.isPrintable = true;
				this.dbTableName = dbTableName;
				this.label = app.chooseBasedOnLocale(labelAra,labelEng);
				this.components = {};
				this.entity = {};
				this.addTab();
				this.renderFormHeader();
			}
			catch(error){ app.alertError(error.message);}
		}

		addComponent(component){ 
			component.setForm(this.dbTableName);
			this.components[component.dbColName] = component;
		};

		addSignature(signature){ 
			signature.nameComp.setForm(this.dbTableName);
			signature.sigComp.setForm(this.dbTableName);
			this.components[signature.nameComp.dbColName] = signature.nameComp;
			this.components[signature.sigComp.dbColName] = signature.sigComp;
		};

		//@Deprecated
		updateComponentsFromEntity(){
			processService.loadFormEntity(this.entity);
			for(let property in this.entity){
				if(this.components[property])
					this.components[property].setValue(this.entity[property]);
			}
				
		};

		//@Deprecated
		updateEntityFromComponents(){
			for(let property in this.components){
				let component = this.components[property];
				if(this.entity[property])
					this.entity[property] = component.getValue();
			}
		};

		select(){ 
			this.getTab().click();
		};
		
		enable(){ 
			this.getTab().classList.remove('disabled');	
		};
		
		disable(){ 
			this.getTab().classList.add('disabled'); 
		};
		
		show(){ 
			this.getTab().classList.remove('d-none');	
		};
		
		hide(){ 
			this.getTab().classList.add('d-none');	
		};

		hideTab(){ 
			this.hide();
		};
		
		changeFormTitle(labelAra,labelEng){
			this.label = app.chooseBasedOnLocale(labelAra,labelEng);
			this.changeTabLabel();
			this.renderFormHeader();
		};

		setPrintable(isPrintable){ 
			this.isPrintable = isPrintable
		};

		renderFormHeader() { 
			try{	
				let container = util.querySelector('data-container-for',`${this.dbTableName}_title`);
				let html = `<div class="form-row">
								<div class="col-1 p-0"><img src="./resources/images/banner/pifssLogo.jpg"  width="65" height="50" alt=""></div>
								<div class="col-11 p-0 text-center my-auto">
									<h3 style="margin-left:70px;">${this.label}</h3>
								</div>
							</div>
							`;
				container.innerHTML = html;
			
			}
			catch(error){ 
				app.alertError(error.message);
				throw error; 
			}	
		};

		getTab(){	
			try{ return document.getElementById(`${this.dbTableName}-tab`);}
			catch(error){ throw error;	}
		};

		changeTabLabel(){
			document.getElementById(`${this.dbTableName}-tab`).innerHTML = this.label;
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
		constructor(dbColName,labelAra,labelEng,labelSize){
			this.dbColName = dbColName;
			this.label = app.chooseBasedOnLocale(labelAra,labelEng);
			this.labelSize = (this.label) ? (labelSize) ? labelSize : 4 : 0;
			this.labelCss = 'bg-primary text-white ';
			this.form = '';
			this.id = '';
		}
		
		setForm(formDBTableName){
			this.form = formDBTableName;
			this.id = `${this.form}_${this.dbColName}`;
			this.render();
		};

		getValue(){	
			try{
				return this.getHTMLElement().value.trim();	
			}
			catch(error){ app.alertError(error.message)}
		};

		setValue(value){ 
			this.getHTMLElement().value = value;	
		};

		enable(){ 
			this.getHTMLElement().disabled = false;	
		};
		
		disable(){ 	
			this.getHTMLElement().disabled = true;	
		};

		addEvent(event,handler){   
			this.getHTMLElement().addEventListener(event,handler, false);	
		};

		removeEvent(event,handler){    
			this.getHTMLElement().removeEventListener(event,handler, false);	
		};

		getContainer(){ 
			try{ 
				let parent = document.getElementById(`nav-${this.form}`);
				return parent.querySelector(`[data-container-for="${this.dbColName}"]`);
			}
			catch(error){ throw error;	}
		};

		getHTMLElement(){ 
			return document.getElementById(this.id);  
		};

	}

	class TxtComponent extends Component{
		constructor(dbColName,labelAra,labelEng,maxLength,labelSize){
			super(dbColName,labelAra,labelEng,labelSize);
			this.maxLength = maxLength;
		}
		
		render(){
			try {
				let labelHtml = (this.label) ? `<label for="${this.id}" class="col-${this.labelSize} col-form-label border-bottom text-center text-nowrap ${this.labelCss}">${this.label}</label>` : ``;
				let html = `<div class="form-row">
								${labelHtml}
								<div class="col-${12-this.labelSize} p-0">
									<input type="text" id="${this.id}" maxlength="${this.maxLength}" class="form-control" >
								</div>
							</div>
							`;
				this.getContainer().innerHTML = html;
			} catch (error) {throw error;	}
		};
	}

	class TxtBetweenPlainLabelsComponent extends Component{
		constructor(dbColName,labelAraRight,labelEngRight,maxLength,labelAraLeft,labelEngLeft){
			super(dbColName,labelAraRight,labelEngRight);
			this.labelLeft =  app.chooseBasedOnLocale(labelAraLeft, labelEngLeft);
			this.maxLength = maxLength;
		}
		
		render(){
			try {
				let html = `<div class="form-row">
								<label class="col-auto my-auto pr-2 text-center text-nowrap text-dark">${this.label}</label>	
								<div class="col p-0">
									<input type="text" id="${this.id}" maxlength="${this.maxLength}" class="form-control" >
								</div>
								<label class="col-auto my-auto pl-2 text-center text-nowrap text-dark">${this.labelLeft}</label>	
							</div>`;
				this.getContainer().innerHTML = html;
			} 
			catch (error) {throw error;	}
		};
	}

	class DateBetweenPlainLabelsComponent extends Component{
		constructor(dbColName,labelAraRight,labelEngRight,minDate,maxDate,labelAraLeft,labelEngLeft){
			super(dbColName,labelAraRight,labelEngRight);
			this.labelLeft =   app.chooseBasedOnLocale(labelAraLeft,labelEngLeft); 
			this.minDate = minDate;
			this.maxDate = maxDate;
		}
		
		render(){
			try {
				let html = `<div class="form-row">
								<label class="col-auto my-auto pr-2 text-center text-nowrap text-dark">${this.label}</label>	
								<div class="col p-0">
									<input type="date" id="${this.id}"  min="${this.minDate}" max="${this.maxDate}" class="form-control" >
								</div>
								<label class="col-auto my-auto pl-2 text-center text-nowrap text-dark">${this.labelLeft}</label>	
							</div>`;
				this.getContainer().innerHTML = html;
			} 
			catch (error) {throw error;	}
		};
		
		getValueAsDate(){
			return new Date(this.getValue());
		};

	}

	class DropDownListBetweenPlainLabelsComponent extends Component{
		constructor(dbColName,labelAraRight,labelEngRight,initialOptionsList,labelAraLeft,labelEngLeft){
			super(dbColName,labelAraRight,labelEngRight);
			this.labelLeft =  app.chooseBasedOnLocale(labelAraLeft,labelEngLeft);
			this.initialOptionsList = initialOptionsList;
		}
		
		render(){
			try {
				let optionsHTML = ``;
				this.initialOptionsList.forEach(opt=>optionsHTML += `<option value="${opt.value}">${opt.label}</option>`);
				let html = `<div class="form-row">
								<label class="col-auto my-auto pr-2 text-center text-nowrap text-dark">${this.label}</label>	
								<div class="col p-0">
									<select id="${this.id}" class="form-control">${optionsHTML}	</select> 
								</div>
								<label class="col-auto my-auto pl-2 text-center text-nowrap text-dark">${this.labelLeft}</label>	
							</div>`;
				this.getContainer().innerHTML = html;
			} 
			catch (error) {throw error;	}
		};
		
		getValueAsDate(){
			return new Date(this.getValue());
		};

	}

	class NumberComponent extends Component{
		constructor(dbColName,labelAra,labelEng,labelSize){
			super(dbColName,labelAra,labelEng,labelSize);
		}
		
		render(){
			try{
				let labelHtml = (this.label) ? `<label for="${this.id}" class="col-${this.labelSize} col-form-label border-bottom text-center text-nowrap ${this.labelCss}">${this.label}</label>` : ``;
				let html = ` <div class=" form-row">
							${labelHtml}
							<div class="col-${12-this.labelSize} p-0">
								<input type="number" id="${this.id}" class="form-control">
							</div>
						</div>
						`;
				this.getContainer().innerHTML = html;
			}
			catch(error){ throw error;}
		};

	}

	class MoneyComponent extends Component{
		constructor(dbColName,labelAra,labelEng,labelSize){
			super(dbColName,labelAra,labelEng,labelSize);
		}
		
		render(){
			try{
				let labelHtml = (this.label) ? `<label for="${this.id}" class="col-${this.labelSize} col-form-label border-bottom text-center text-nowrap ${this.labelCss}">${this.label}</label>` : ``;
				let html = ` <div class="form-row">
							${labelHtml}
							<div class="col-${12-this.labelSize} p-0">
								<input type="number" id="${this.id}" step="0.001" class="form-control" >
							</div>
						</div>
						`;
				this.getContainer().innerHTML = html;
			}catch(error){ throw error;}
		};

	}

	class CheckBoxComponent extends Component{
		constructor(dbColName,labelAra,labelEng){
			super(dbColName,labelAra,labelEng);
		}
		
		render(){
			try {
				let html = `<div class="form-row form-check">
								<input id="${this.id}" type="checkbox" class="form-check-input" >
								<label class="form-check-label text-dark" for="${this.id}">${this.label}</label>
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
		constructor(dbColName,labelAra,labelEng,minDate,maxDate,labelSize){
			super(dbColName,labelAra,labelEng,labelSize);
			this.minDate = minDate;
			this.maxDate = maxDate;
		}
		
		render(){
			try{
				let labelHtml = (this.label) ? `<label for="${this.id}" class="col-${this.labelSize} col-form-label border-bottom text-center text-nowrap ${this.labelCss}">${this.label}</label>` : ``;
				let html = ` <div class="form-row">
							${labelHtml}
							<div class="col-${12-this.labelSize} p-0">
								<input id="${this.id}"  min="${this.minDate}" max="${this.maxDate}" class="form-control" type="date" >
							</div>
						</div>
						`;
				this.getContainer().innerHTML = html;
			}catch(error){ throw error;}
		};

		getValueAsDate(){
			return new Date(this.getValue());
		};

		setMinDate(minDate){ this.getHTMLElement().min = minDate; };

		setMaxDate(maxDate){this.getHTMLElement().max = maxDate;};

	}

	class DropDownListComponent extends Component{
		constructor(dbColName,labelAra,labelEng,initialOptionsList,labelSize){
			super(dbColName,labelAra,labelEng,labelSize);
			this.initialOptionsList = initialOptionsList;
		}
		
		render(){
			try{
				let labelHtml = (this.label) ? `<label for="${this.id}" class="col-${this.labelSize} col-form-label border-bottom text-center text-nowrap ${this.labelCss}">${this.label}</label>` : ``;
				let optionsHTML = ``;
				this.initialOptionsList.forEach(opt=>optionsHTML += `<option value="${opt.value}">${opt.label}</option>`);
				let html = `<div class="form-row">
								${labelHtml}
								<div class="col-${12-this.labelSize} p-0">
									<select id="${this.id}" class="form-control">${optionsHTML}	</select> 
								</div> 
							</div>`;
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

		setOptions(optList){
			this.initialOptionsList = optList;
			this.render();
		};
	}

	class NotesComponent extends Component{
		constructor(dbColName,labelAra,labelEng,rows,maxLength){
			super(dbColName,labelAra,labelEng);
			this.rows = (rows) ? rows : 3;
			this.maxLength = (maxLength) ? maxLength : 150;
		} 
		
		render(){
			try{
				let labelHtml = (this.label) ? `<label for="${this.id}" class="col col-form-label border-bottom text-center text-nowrap ${this.labelCss}">${this.label}</label>` : ``;
				let html = `<div class="form-row p-0">
							${labelHtml}
							</div>
							<div class="form-row p-0">
								<textarea type="text" id="${this.id}" maxlength="${this.maxLength}" rows="${this.rows}" class="form-control" style="resize: none;" ></textarea>
							</div>`;
				this.getContainer().innerHTML = html;
			}catch(error){ throw error; }
		};
	}

	class ParagraphComponent extends Component{
		constructor(dbColName,paraAra,paraEng,cssClasses){
			super(dbColName,paraAra,paraEng);
			this.labelCss = cssClasses;
		} 
		
		render(){
			try{
				this.labelCss +=  app.chooseBasedOnLocale(' text-left ',' text-right ');
				let html = `<label id="${this.id}" class=" d-block ${this.labelCss}" >${this.label}</label>`;
				this.getContainer().innerHTML = html;
			}
			catch(error){ 
				throw error; 
			}
		};

		getValue(){
			return this.getHTMLElement().innerHTML.trim();
		}
		
		setValue(value){ 
			this.getHTMLElement().innerHTML = value;	
		};
	}

	class SignerComponent extends Component{
		constructor(dbColName){
			super(dbColName,'','');
		}
		
		render(){
			try {
				let html = `<label id="${this.id}" class="text-muted text-center text-nowrap p-0 fontSize75"></label>
							<a id="${this.id}_btn" onclick="processHandler.controller.forms.${this.form}.components.${this.dbColName}.setValue(loggedUser.signature);" href="#" class="text-muted text-center d-none fontSize75">Click here to sign</a>
							`;
				this.getContainer().innerHTML = html;
			} 
			catch (error) {
				throw error;	
			}
		};

		enable(){ 
			util.hide(this.id);			
			util.show(`${this.id}_btn`);
		};

		getValue(){
			return this.getHTMLElement().innerHTML.trim();
		}
		
		setValue(value){ 
			this.getHTMLElement().innerHTML = value;	
			util.show(this.id);			
			util.hide(`${this.id}_btn`);
		};
	}

	class Signature{
		constructor(container,nameDBColName,sigDbColName,labelAra,labelEng){
			this.nameComp = new ParagraphComponent(nameDBColName,'','','text-center');
			this.sigComp = new SignerComponent(sigDbColName);
			this.label = app.chooseBasedOnLocale(labelAra, labelEng);
			this.container = container;
			this.render();
		} 
		
		render(){
			try{
				let html = `<div class="border rounded p-0 text-center" style="min-height:7em !important;" >
								<h5 class="p-2 text-center text-nowrap bg-light"><i class="fas fa-file-signature text-muted fontSize85"></i>  ${this.label}</h5>
								<div data-container-for="${this.nameComp.dbColName}" class="p-0"></div>
								<div data-container-for="${this.sigComp.dbColName}" class="p-0" ></div>
							</div>`;
				util.querySelector('data-container-for',this.container).innerHTML = html;
			}
			catch(error){ 
				throw error;}
		};
	}

	class TableComponent extends Component{
		constructor(dbColName,colmList,minRowsCount,colWidths){
			super(dbColName,'','');
			this.colmList = colmList;
			this.rowsCount = minRowsCount;
			this.colWidths = colWidths;
			this.setRowsCount(minRowsCount);
		}

		render(){
			try {
				let html = `<div class="container-fluid p-0"> 
								<div class="form-row" >`;
				for(let i=0;i<this.colmList.length;i++){
					let col = this.colmList[i];
					let colWidth = 	this.getColWidth(i);					
					col.colmID = `${this.id}_${i}`;
					col.keepItemsNotLessThan(this.rowsCount);
					html += `<div class="col${colWidth}" > ${col.getHTML()}</div>`;				
				}
				this.getContainer().innerHTML = html;
			} catch (error) {throw error;	}
		};

		getValue(){
			let value = '';
			this.colmList.forEach(col=>{
				let valueAssArray = col.getValueAsArray();
				valueAssArray.forEach(v=> value+= `${v}*`);
			});
			return value;
		};

		setRowsCount(minRowsCount){
			let maxColItems = this.getMaxColItemsCount();
			this.rowsCount = (minRowsCount) ? (  (minRowsCount > maxColItems) ? minRowsCount : maxColItems  ) : maxColItems;
		};

		getMaxColItemsCount(){
			let count = 0;
			for(let i=0;i<this.colmList.length;i++){
				if(this.colmList[i].items.length > count)
					count = this.colmList[i].items.length;
			}
			return count;
		};

		getColWidth(index){
			if(this.colWidths && this.colWidths.length > 0)
				return `-${this.colWidths[index]}`;
			return "";	
		}
	}
	
	class TableColumn{
		constructor(labelAra,labelEng,items,type){
			this.name = name;
			this.label = app.chooseBasedOnLocale(labelAra,labelEng);
			this.items = (items) ? items : [''];
			this.type = type;
			this.colmID = '';
		}

		getHTML(){};

		getValueAsArray(){
			try{ 
				let value = [];
				let inputList = document.querySelectorAll(`#${this.colmID} input[type=${this.type}]`);
				inputList.forEach(element=> { value.push(element.value); });
				return value;
			}
			catch(error){ 
				app.alertError(error.message);
				throw error;	
			}
		}

		keepItemsNotLessThan(itemsCount){
			try{
				for(let i=this.items.length;i<itemsCount;i++){
					this.items.push('');
				}
			}
			catch(error){ 
				app.alertError(error.message);
				throw error;	
			}
		};
	}

	class TableColTxt extends TableColumn{
		constructor(labelAra,labelEng,items,txtMaxLength){
			super(labelAra,labelEng,items,'text');
			this.txtMaxLength = txtMaxLength;
		}

		getHTML(){
			try {
				let labelHtml = (this.label) ? `<label class="col col-form-label text-center text-nowrap bg-primary text-white border" title="${this.label}" >${this.label}</label>` : ``;
				
				let html = `<div class="container-fluid p-0" id="${this.colmID}" >	
								<div class="form-row p-0">
									${labelHtml}
								</div>
							`;
				this.items.forEach( rowItem => {
								html += `<div class="form-row p-0" >
											<div class="col text-center my-auto p-0">
												<input value="${rowItem}" maxlength="${this.txtMaxLength}" class="form-control" type="text">
											</div>
							 			</div>`;
				});				
				html += `</div>`;
				return html;
			} catch (error) {
				app.alertError(error.message);
				throw error;	
			}
		};

	}

	class TableColDate extends TableColumn{
		constructor(labelAra,labelEng,items,minDate,maxDate){
			super(labelAra,labelEng,items,'date');
			this.minDate = minDate;
			this.maxDate = maxDate;
		}

		getHTML(){
			try {
				let html = `<div class="container-fluid p-0" id="${this.colmID}" >	
								<div class="form-row p-0">
									<label class="col col-form-label text-center text-nowrap bg-primary text-white border" title="${this.label}">${this.label}</label>
								</div>
							`;
				this.items.forEach( rowItem => {
								html += `<div class="form-row p-0" >
											<div class="col text-center my-auto p-0">
												<input value="${rowItem}" min="${this.minDate}" max="${this.maxDate}" class="form-control" type="date" >	
											</div>
							 			</div>`;
				});				
				html += `</div>`;
				return html;
			} catch (error) {
				app.alertError(error.message);
				throw error;	
			}
		};

	}

	class TableColDropDownList extends TableColumn{
		constructor(labelAra,labelEng,initialOptionsList,items){
			super(labelAra,labelEng,items,'select');
			this.initialOptionsList = initialOptionsList;
		}

		getHTML(){
			try {
				let optionsHTML = ``;
				this.initialOptionsList.forEach(opt=>optionsHTML += `<option value="${opt.value}">${opt.label}</option>`);				
				let html = `<div class="container-fluid p-0" id="${this.colmID}" >	
								<div class="form-row p-0">
									<label class="col col-form-label text-center text-nowrap bg-primary text-white border" title="${this.label}">${this.label}</label>
								</div>`;
				this.items.forEach( rowItem => {
								html += `<div class="form-row p-0" >
											<div class="col text-center my-auto p-0">
												<select class="form-control">${optionsHTML}</select>
											</div>
							 			</div>`;
				});				
				html += `</div>`;
				return html;
			} catch (error) {
				app.alertError(error.message);
				throw error;	
			}
		};

		getValueAsArray(){
			try{ 
				let value = [];
				let inputList = document.querySelectorAll(`#${this.colmID} select`);
				inputList.forEach(element=> { value.push(element.value); });
				return value;
			}
			catch(error){ 
				app.alertError(error.message);
				throw error;	
			}
		}

	}

	class AttachmentsTableComponent extends Component{
		constructor(dbColName,attachmentsList){
			super(dbColName,'','');
			this.attachmentsList = attachmentsList;
		} 
		
		render(){
			try {
				let html = `<div class="container-fluid p-0">`;
				for(const att of this.attachmentsList){
					html += `<div class="form-row  border" >
								<div class="col-1 text-center border-right my-auto">
									<input value="${att}" onclick="processHandler.controller.forms.${this.form}.components.${this.dbColName}.calculateCheckedAttachments()" data-form-element-for="${this.dbColName}_checkBox" type="checkbox"  >
								</div>
								<div class="col-11 my-auto">
									<label class="text-left text-nowrap text-muted">${att}</label>			
								</div>
							</div>`;
				}
				html += `<div class="form-row">
							<div class="col text-right ">
								<label id="${this.dbColName}_count" class="text-danger text-nowrap ">عـدد المرفقـات : 0</label>				
							</div>
						</div>	
						</div>`;
				

				this.getContainer().innerHTML = html;
			} 
			catch (error) {
				app.alertError(error.message);
				throw error;	
			}
		};
		
		getValue(){
			let value = '';
			let cbList = this.getCheckBoxesList();
			cbList.forEach(cb=> {if(cb.checked) value+= `${cb.value}*`;});
			return value;
		};

		setValue(value){
			if(value){
				this.getCheckBoxesList().forEach(cb=>{
													if(value.includes(`${cb.value}*`) )
														cb.checked = true;
													});
			}
			this.calculateCheckedAttachments();
		}

		enable(){
			this.getCheckBoxesList().forEach(cb=>cb.disabled = false);
		}

		disable(){
			this.getCheckBoxesList().forEach(cb=>cb.disabled = true);
		}

		calculateCheckedAttachments(){
			let count = this.getValue().split('*').length-1;
			this.getAttachmentsCountLabel().innerHTML = `عـدد المرفقـات : ${count}`;
		};

		getCheckBoxesList(){
			try{ 
				return util.querySelectorAll('data-form-element-for',`${this.dbColName}_checkBox`);	
			}
			catch(error){ 
				app.alertError(error)
			}
		};

		getAttachmentsCountLabel(){
			try{ 
				return document.getElementById(`${this.dbColName}_count`);	
			}
			catch(error){ 
				app.alertError(error)
			}
		}

	}



