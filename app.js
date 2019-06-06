var rent = document.getElementById('rent');
var utilities = document.getElementById('utilities');
var carNote = document.getElementById('carNote');
var subscriptions = document.getElementById('subscriptions');
var insurance = document.getElementById('insurance');
var funStuff = document.getElementById('funStuff');
var emergency = document.getElementById('emergency');
var savings = document.getElementById('savings');
var other = document.getElementById('other');
let monthlyIncome = document.getElementById('monthly');
let stateOfRes = document.getElementById('State');

let incomeInput = '';
let stateResidence = '';

monthlyIncome.addEventListener('keyup', function(e){
    incomeInput = e.target.value;
}, false)

stateOfRes.addEventListener('keyup', function(e){
    stateResidence = e.target.value;
}, false)