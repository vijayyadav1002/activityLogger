var mySelectors = {
	activeMinutes: 60,
	hydration: 1,
	sleep: 1,
	relax: 1,
	weight: 1,
	steps: 15000,
	floors: 100,
	elevation: 25000,
	distance: 5,
	calories: 1000,
	heartRate: 72
};
var dateTemplate = '2017-08-#';
var endDate = 31;
var selectorTemplate = {
	inputValueSelector: '#fctrkvalue_$',
	inputDateSelector: '#fctrkdate_$',
	addSelector: '#fctrk_form_$ .seven.columns  a'
};

function getSelectors(index) {
	return Object.keys(selectorTemplate).reduce(function(reformedSelector, value){
		reformedSelector[value] = document.querySelector(selectorTemplate[value].replace('$', index));
		return reformedSelector;
	}, {})
}

function logMyTime(logObject) {
	console.log('logging activity for: ', logObject.name, ' start at:', logObject.startDate);
	logObject.inputValueSelector.value = logObject.value;
	logObject.inputDateSelector.value = dateTemplate.replace('#', logObject.startDate++);
	logObject.addSelector.click();
	if (logObject.startDate <= endDate) {
		setTimeout(function() {
			logMyTime(logObject)
		}, 200);
	}
}


function startAddLogs(startDate) {
	Object.keys(mySelectors).forEach(function(item, index){
		var formedSelector = Object.assign({value: mySelectors[item], name: item, startDate: startDate}, getSelectors(index));
		logMyTime(formedSelector);
	})	
}

startAddLogs(19);

/*

var sleepPoints = document.querySelector("#fctrkvalue_2");
var sleepDate = document.querySelector('#fctrkdate_2');
var sleepAdd = document.querySelector("#fctrk_form_2 .seven.columns  a");

var dateTemplate = '2017-09-#';

var end = 2;

function healthSleep(start) {
    console.log('start:', start);
    sleepPoints.value = 1;
    sleepDate.value = dateTemplate.replace('#', start++);
    sleepAdd.click();
    if (start <= end) {
        setTimeout(function() {
            healthSleep(start)
        }, 200);
    }    
}

healthSleep(1)