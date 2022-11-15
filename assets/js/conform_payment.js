import { plansList } from './data.js';

document.body.onload = function () {

    document.getElementById("tx").textContent = "Thank you for your purchase!"; 

    let name = document.getElementById('name');
    name.textContent = sessionStorage.getItem('name');

    let plan = document.getElementById('plan');
    plan.textContent = sessionStorage.getItem("plan");

    let cycle = document.getElementById('cycle');
    if (sessionStorage.getItem('cycle') == 'year') {
        cycle.textContent = 'Yearly';
    } else {
        cycle.textContent = 'Monthly';
    }

    let amount = document.getElementById('amount');
    let plan_data = plansList[sessionStorage.getItem('plan-index')];
    if (sessionStorage.getItem('cycle') == 'year') {
        amount.innerHTML = `<big class="bold-price">${plan_data["yearlySubPrice"]}$</big><small>/mounth</small> <small>(${plan_data["yearlySubPrice"] * 12}$/year)</small>`
    } else {
        amount.innerHTML = `<big class="bold-price">${plan_data["monthlySubPrice"]}$</big><small>/mounth</small>`
    }
}