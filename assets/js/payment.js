import { plansList } from './data.js';

document.body.onload = function () {

    let plan = plansList[sessionStorage.getItem("plan-index")];

    let plan_id = document.getElementById("plan-id");
    plan_id.textContent = "You choose " + plan["name"] + " plan";

    document.getElementById('cvv').addEventListener('focusout', () => {console.log("asdasd")});
    console.log(document.getElementById('cvv'));

    let years = document.getElementById('years');
    let curr_year = new Date().getFullYear();
    for (let i = 0; i < 30; i++) {
        years.innerHTML += `<option value=${curr_year+i}> ${curr_year+i}</option>`
    }

    let card_number = document.getElementById("cardNumber");
    card_number.addEventListener('focusout', () => {
        let number = card_number.value;

        let length = number.length - 16;
        let is_num = /^\d+$/.test(number);
        if (length != 0 || !is_num) {
            card_number.style.color = "red";
        } else {
            card_number.style.color = "";
        }
    });

    let confirm = document.getElementById("con");
    confirm.addEventListener('submit', (event) => {

        let confirm = true;

        let owner = document.getElementById("owner");
        let cvv = document.getElementById('cvv');
        let card_number = document.getElementById("cardNumber");

        let month = document.getElementById('month')
        month = parseInt(month.options[month.selectedIndex].value,10);

        let year = document.getElementById('years');
        year = parseInt(year.options[year.selectedIndex].value,10);

        var english = /^[A-Za-z\s]*$/;
        var number = /^[0-9]*$/;

        if (owner.value.length == 0 || !english.test(owner.value)) {
            owner.style.color = "red";
            owner.style.bold = "true";
            event.preventDefault();
            confirm = false;
        } else {
            owner.style.color = "";
            owner.style.bold = "false";
        }

        if (cvv.value.length != 3 || ! number.test(cvv.value)) {
            cvv.style.color = "red";
            cvv.style.bold = "true";
            event.preventDefault();
            confirm = false;
        } else {
            cvv.style.color = "";
            cvv.style.bold = "false";
        }

        if (card_number.value.length != 16 || ! number.test(card_number.value)) {
            card_number.style.color = "red";
            card_number.style.bold = "true";
            event.preventDefault();
            confirm = false;
        } else {
            card_number.style.color = "";
            card_number.style.bold = "false";
        }

        let curr_year = new Date().getFullYear();
        let curr_month = new Date().getMonth();

        if (curr_year == year && month < curr_month) {
            document.getElementById("month").style.color = "red";
            event.preventDefault();
            confirm = false;
        } else {
            document.getElementById("month").style.color = "";
        }

        if (!confirm) {
            event.preventDefault();
            alert("Invalid Input\nPlease check your information and try again");
        } else {
            sessionStorage.setItem("name", owner.value);
        }
        
        return comfirm;
    });

}