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

// Income and State for tax api
let incomeInput;
let stateResidence = '';

// Monthly Bills //
let monthlyRent;
let monthlyUtilities;
let monthlyCarNote;
let monthlySubs;
let monthlyIns;
let funStuff;
let emergencyFund;
let monthlySavings;
let monthlyOther;

MONTHLY_INCOME.addEventListener('change', (e) => incomeInput = e.target.value, false)
STATE_OF_RES.addEventListener('change', (e) => stateResidence = e.target.value, false)
RENT.addEventListener('change', (e) => monthlyRent = e.target.value, false)
UTILITIES.addEventListener('change', (e) => monthlyUtilities = e.target.value, false)
CAR_NOTE.addEventListener('change', (e) => monthlyCarNote = e.target.value, false)
SUBSCRIPTIONS.addEventListener('change', (e) => monthlySubs = e.target.value, false)
INSURANCE.addEventListener('change', (e) => monthlyIns = e.target.value, false)
FUN_STUFF.addEventListener('change', (e) => funStuff = e.target.value, false)
EMERGENCY.addEventListener('change', (e) => emergencyFund = e.target.value, false)
SAVINGS.addEventListener('change', (e) => monthlySavings = e.target.value, false)
OTHER.addEventListener('change', (e) => monthlyOther = e.target.value, false)

let totalMonthCosts;

function displayCosts(){
    totalMonthCosts = monthlyRent + monthlyUtilities + monthlyCarNote + monthlySubs + monthlyIns + funStuff + emergencyFund + monthlySavings + monthlyOther;
    document.getElementById("monthlyBills").innerHTML = totalMonthCosts;
}