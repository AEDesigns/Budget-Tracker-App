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

let incomeInput = '';
let stateResidence = '';
let monthlyRent = '';
let monthlyUtilities = '';
let monthlyCarNote = '';
let monthlySubs = '';
let monthlyIns = '';
let funStuff = '';
let emergencyFund = '';
let monthlySavings = '';
let monthlyOther = '';

MONTHLY_INCOME.addEventListener('keyup', (e) => incomeInput = e.target.value, false)
STATE_OF_RES.addEventListener('keyup', (e) => stateResidence = e.target.value, false)
RENT.addEventListener('keyup', (e) => monthlyRent = e.target.value, false)
UTILITIES.addEventListener('keyup', (e) => monthlyUtilities = e.target.value, false)
CAR_NOTE.addEventListener('keyup', (e) => monthlyCarNote = e.target.value, false)
SUBSCRIPTIONS.addEventListener('keyup', (e) => monthlySubs = e.target.value, false)
INSURANCE.addEventListener('keyup', (e) => monthlyIns = e.target.value, false)
FUN_STUFF.addEventListener('keyup', (e) => funStuff = e.target.value, false)
EMERGENCY.addEventListener('keyup', (e) => emergencyFund = e.target.value, false)
SAVINGS.addEventListener('keyup', (e) => monthlySavings = e.target.value, false)
OTHER.addEventListener('keyup', (e) => monthlyOther = e.target.value, false)

