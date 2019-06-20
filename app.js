const RENT = document.getElementById('rent');
const UTILITIES = document.getElementById('utilities');
const CAR_NOTE = document.getElementById('carNote');
const SUBSCRIPTIONS = document.getElementById('subscriptions');
const INSURANCE= document.getElementById('insurance');
const FUN_STUFF = document.getElementById('funStuff');
const EMERGENCY = document.getElementById('emergency');
const SAVINGS = document.getElementById('savings');
const OTHER = document.getElementById('other');
const MONTHLY_INCOME = document.getElementById('monthly');
const STATE_OF_RES = document.getElementById('State');
const form = document.getElementById('form');

form.addEventListener('submit', function(e){
    e.preventDefault();
    displayCosts();
}, false);

// Income and State for tax api
let incomeInput = 0;
let stateResidence = '';
let filingStatus = '';

// Monthly Bills //
let monthlyRent = 0;
let monthlyUtilities = 0;
let monthlyCarNote = 0;
let monthlySubs = 0;
let monthlyIns = 0
let funStuff = 0;
let emergencyFund = 0;
let monthlySavings = 0;
let monthlyOther = 0;

MONTHLY_INCOME.addEventListener('change', (e) => incomeInput = parseInt(e.target.value), false)
STATE_OF_RES.addEventListener('change', (e) => stateResidence = e.target.value, false)
RENT.addEventListener('change', (e) => monthlyRent = parseInt(e.target.value), false)
UTILITIES.addEventListener('change', (e) => monthlyUtilities = parseInt(e.target.value), false)
CAR_NOTE.addEventListener('change', (e) => monthlyCarNote = parseInt(e.target.value), false)
SUBSCRIPTIONS.addEventListener('change', (e) => monthlySubs = parseInt(e.target.value), false)
INSURANCE.addEventListener('change', (e) => monthlyIns = parseInt(e.target.value), false)
FUN_STUFF.addEventListener('change', (e) => funStuff = parseInt(e.target.value), false)
EMERGENCY.addEventListener('change', (e) => emergencyFund = parseInt(e.target.value), false)
SAVINGS.addEventListener('change', (e) => monthlySavings = parseInt(e.target.value), false)
OTHER.addEventListener('change', (e) => monthlyOther = parseInt(e.target.value), false)

let totalMonthCosts = 0;

function displayCosts(){
    totalMonthCosts = monthlyRent + monthlyUtilities + monthlyCarNote + monthlySubs + monthlyIns + funStuff + emergencyFund + monthlySavings + monthlyOther;
    document.getElementById("monthlyBills").innerHTML = totalMonthCosts;
    return parseInt(totalMonthCosts);
}

let taxeeObj = {
    pay_rate: incomeInput,
    filing_status: filingStatus,
    state: stateResidence
}

const TAXEE_API = "https://taxee.io/api/v2/calculate/2019";
const TAXEE_API_KEY = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJBUElfS0VZX01BTkFHRVIiLCJodHRwOi8vdGF4ZWUuaW8vdXNlcl9pZCI6IjVjZjgzMjJlODM2OGI5MWExNTE2ZDRjOSIsImh0dHA6Ly90YXhlZS5pby9zY29wZXMiOlsiYXBpIl0sImlhdCI6MTU1OTc2OTY0Nn0.OtLpR4UWL9aWNgr8Yus9sm2GsSNTPSdbq1atLqATFBI';



