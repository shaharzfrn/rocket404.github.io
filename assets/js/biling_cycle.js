import { plansList } from './data.js';

document.body.onload = function () {

    let plan = plansList[sessionStorage.getItem("plan-index")];

    let plan_id = document.getElementById("plan-id");
    plan_id.textContent = "You choose " + plan["name"] + " plan";

    let month = document.getElementById("month");
    month.textContent = "Monthly Price: " + plan["monthlySubPrice"] + "$";
    month.addEventListener('click', () => {
        sessionStorage.setItem("cycle", "month");
    });

    let year = document.getElementById("year");
    year.innerHTML += `<big class="bold-price">${plan["yearlySubPrice"]}$</big><small>/mounth</small><br><small>(${plan["yearlySubPrice"] * 12}$/year)</small>`
    year.addEventListener('click', () => {
        sessionStorage.setItem("cycle", "year");
    });
}