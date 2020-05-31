const util = {
	

	arrangeTextForDB(text){
		let cleanText = "";
		cleanText = text.replace(/'/gi,"''");
		cleanText = this.removeExtraSpaces(cleanText);
		return cleanText;
	},

	removeExtraSpaces(text){
		return text.replace(/\s+/g,' ').trim();
	},

	stuffCharToText(text,character,finalTxtLength,isPrefix){
		for(var i=text.length;i<finalTxtLength;i++){
			text = (isPrefix) ? text+character :  character+text;
		}
		return text;
	},
	
	isNumber(n) {
		return !isNaN(n) && isFinite(n);
	},
	
	getRoundedFloat(number){
		let roundedFloat,afterDPoint;
		
		afterDPoint  = ((number - Math.floor(number)) + "").substr(0,5);
		roundedFloat = Math.floor(number) + parseFloat(afterDPoint);
		return roundedFloat;
	},
	
	roundNumber(num,dec){
		return result = Math.round(num*Math.pow(10,dec))/Math.pow(10,dec);
	},






	//EX: getDay(new Date())  OR getDay("2013/12/20")
	getDayName(date){
		var daysArray = [ 'الأحـد', 
						  'الاثنين',
						  'الثـلاثاء',
						  'الأربعـاء',
						  'الخميـس',
						  'الجمعـة',
						  'السبـت'
		];
		date = this.convertToDateObject(date);
		return daysArray[date.getDay()];
	},	
	//This function takes 2 dates like ('2018/06/01','2018/06/03') and return array of days like ['2018/06/01','2018/06/02','2018/06/03']
	convertPeriodIntoDatesArray(start,end){
		var daysArray,startDate,endDate;
		
		daysArray = [];
		startDate = this.convertToDateObject(start);
		endDate =  this.convertToDateObject(end);
			
		while(startDate.getTime() <= endDate.getTime()){
			daysArray.push(this.formatDate(startDate) );
			this.addDays(startDate,1);
		}
		return daysArray;
	},
	
	addDays(date,days){
		let newDate = this.convertToDateObject(date);
		newDate.setDate(newDate.getDate()+days);
		return this.formatDate(newDate);
	},

	addYears(date,years){
		let newDate = this.convertToDateObject(date);
		newDate.setFullYear(newDate.getFullYear()+years);
		return this.formatDate(newDate);
	},

	convertToDateObject(date){
		if(typeof date == 'string')
			return new Date(date);
		else 
			return date;
	},

	appendLeadingZeroes(n){
		if(n <= 9)
		  return "0" + n;
		return n
	},
	// takes Date object and returns txt like '2020/05/09'
	formatDate(date){
		return date.getFullYear()+"/"+this.appendLeadingZeroes(date.getMonth()+1)+"/"+ this.appendLeadingZeroes(date.getDate()) ; 
	},
	//compares 2 dates whether dates objects or as string and return -1, 0 , 1
	compareDates(date1,date2){
		let first = this.convertToDateObject(date1);
		let second = this.convertToDateObject(date2);
		
		if(first.getTime() == second.getTime())
			return 0;
		if(first.getTime() > second.getTime())
			return 1;
		if(first.getTime() < second.getTime())
			return -1;
		
	},

	getDaysBetweenDates(date1,date2){
		//get difference from server using java LocalDate
		app.alertError('method app-util.util.getDaysBetweenDates is not yet implementd');    
	},

	getMonthsBetweenDates(date1,date2){
		//get difference from server using java LocalDate
		app.alertError('method app-util.util.getMonthsBetweenDates is not yet implementd');    
	},

	getYearsBetweenDates(date1,date2){
		//get difference from server using java LocalDate
		app.alertError('method app-util.util.getYearsBetweenDates is not yet implementd');    
	},

	isDate(id){
		return	$(`#${id}`).attr('type') == 'date';	
	},

	convertToArray(item){
		if(Array.isArray(item))
			return item;
		else
			return [item];	
	},




	// enableCells(idsArray){ 
	// 	idsArray.forEach(elementID => {	util.enable(elementID);	});	
	// },
	// disableCells(idsArray){	
	// 	idsArray.forEach(elementID => {	util.disable(elementID);});	
	// },
	// clearCells(idsArray){ 
	// 	idsArray.forEach(elementID => {	util.clear(elementID);	});	
	// },





	

	getValue(id){
		if(this.elementExists(id)){
			if(this.isDate(id))
				return util.formatDate( new Date($(`#${id}`).val()) ) ;
			return $(`#${id}`).val();
		}
		else 
			return undefined;	
	},

	setValue(id,value){
		if(this.elementExists(id))
			$(`#${id}`).val(value);
	},

	clear(id){
		if(this.elementExists(id)){
			$(`#${id}`).empty();
			$(`#${id}`).val('');
		}	
	},

	show(id) { 
		this.removeCssClass(id,'d-none'); 
	},

	hide(id) { 
		this.findThenAddCssClass('id',id,'d-none'); 
	},

	showModal(id){ 
		$(`#${id}`).modal('show'); 
	},
	
	hideModal(id){ 
		$(`#${id}`).modal('hide'); 
	},
	
	enable(id){
		if(this.elementExists(id))
			$(`#${id}`).prop( "disabled", false );
	},

	disable(id){
		if(this.elementExists(id))
			$(`#${id}`).prop( "disabled", true );
	},

	append(id,html){
		if(this.elementExists(id))
			$(`#${id}`).append(html);
	},

	setInnerHTML(id,html){
		if(this.elementExists(id))
			$(`#${id}`).html(html);
	},

	setComponentInnerHTML(component,html){
		if(component)
			component.innerHTML = html;
	},

	findThenSetInnerHTML(compAttr,compAttrValue,html){
		let component = this.querySelector(compAttr,compAttrValue);
		if(component)
			component.innerHTML = html;
		else
			this.handlElementNotFound(` element attribute : ${compAttr} and value ${compAttrValue} `);	
	},
	
	findThenAddCssClass(compAttr,compAttrValue,cssClass){
		let component = this.querySelector(compAttr,compAttrValue);
		if(component)
			component.classList.add(cssClass);
		else
			handlElementNotFound(details);	
	},

	findThenRemoveCssClass(compAttr,compAttrValue,cssClass){
		let component = this.querySelector(compAttr,compAttrValue);
		if(component)
			component.classList.remove(cssClass);
		else
			handlElementNotFound(details);
		
	},
	
	querySelector(compAttr,compAttrValue){
		let component = document.querySelector(`[${compAttr}="${compAttrValue}"]`);
		return component;
	},

	loadHTML(divID,htmlURL,dataObject){
		let data = (dataObject) ? dataObject : '';
		$(`#${divID}`).empty();
		$(`#${divID}`).load(htmlURL,data,(response,status,xhr)=>{
											if ( status == "error" )
												app.alertError(`Sorry there was an error: ${xhr.status} - ${xhr.statusText}`);
											});	
										
	},

	




	elementExists(id){
		if (id && $(`#${id}`).length > 0)
			return true;
		this.handlElementNotFound(` element ID : ${id}`);	
		return false;
	},
	
	handlElementNotFound(details){
		app.alertError(`Element with details : '${details}' is not found on the html page`); 
	},

	viewObjectContent(object){
		for(let property in object)
			alert(`${property} : ${object[property]} ` );
	}

}

