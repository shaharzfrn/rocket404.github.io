
import { plansList } from './data.js';


const base_item_classes = "d-block col-2 text-center pt-0";
const features_list =
["name", "yearlySubPrice", "customerCare", "gamesCount", "coins", "specialAvatar", "tShirt", "action"];

const feature_list = {
    "name": null,
    "yearlySubPrice": null,
    'customerCare': "Customer Care" ,
    'gamesCount': "Number of Games" ,
    'coins': "TaubCoins" ,
    'specialAvatar': "Special Avatar" ,
    'tShirt': "Cool T-Shirt Included" ,
    "action": null,
}


const features = {
    'name': gen_plans_row,
    'yearlySubPrice': gen_plan_year_price,
    'customerCare': () => { return gen_plan_feture('customerCare'); } ,
    'gamesCount': () => { return gen_plan_feture('gamesCount'); } ,
    'coins': () => { return gen_plan_feture('coins'); } ,
    'specialAvatar': () => { return gen_plan_feture('specialAvatar'); } ,
    'tShirt': () => { return gen_plan_feture('tShirt'); } ,
    "action": gen_plan_select,
}



function gen_plans_row() {
    let inner_html = "";
    data["name"].forEach(item => {
        inner_html += `<div class="${base_item_classes} border-top pt-2 ps" style="display: none;"><h3 class="">${item}</h3></div>`
    });
    inner_html = `<div class="d-flex width-full width-auto"><div class="col-4"></div>${inner_html}</div>`;
    return inner_html;
}

function gen_plan_year_price() {
    let inner_html = ""
    data["yearlySubPrice"].forEach(item => {
        let price_html = `<big class="bold-price">${item}$</big><small>/mounth</small><br><small>(${item * 12}$/year)</small>`;
        inner_html += `<div class="${base_item_classes} border-sides ps" style="display: none;"><div class="">${price_html}</div></div>`
    });
    inner_html = `<div class="d-flex width-full width-auto"><div class="col-4"></div>${inner_html}</div>`;
    return inner_html;
}

function gen_plan_select() {
    let inner_html = "";
    let btn_ids = [];
    let index = 0;

    data["name"].forEach(item => {
        inner_html += `<div class="${base_item_classes} border-bottom pb-2 ps" style="display: none;"><button class="btn shadow-border" type="submit" id="select-${item}">Select ${item}</button></div>`
        btn_ids.push([`select-${item}`, index, item]);
        index++;
    });
    inner_html = `<div class="d-flex width-full width-auto pb-5"><div class="col-4"></div>${inner_html}</div>`;
    return [inner_html, btn_ids];
}


function gen_plan_feture(feture_name) {
    let inner_html = "";
    data[feture_name].forEach(item => {
        if (typeof(item) == "boolean") {
            inner_html += `<div class="${base_item_classes} border-sides ps ${(item == false ? "not-contain" : "contain")}" style="display: none;"><div class=""></div></div>`
        } else {
            inner_html += `<div class="${base_item_classes} border-sides ps" style="display: none;"><div class="">${item}</div></div>`
        }
    });
    inner_html = `<div class="d-flex width-full width-auto"><div class="col-4 ts-4">${feature_list[feture_name]}</div>${inner_html}</div>`;
    return inner_html;
}

function gen_plan_on_select(name) {

}





let data = {}
for (var plan in plansList) {
    for (var key in plansList[plan]) {
        if (!(key in data)) {
            data[key] = [plansList[plan][key]];
        } else {
            data[key].push(plansList[plan][key]);
        }
    }
}



document.body.onload = function () {

    let panel = document.getElementById("test");

    features_list.forEach(f => {
        if (f == "action") {
            let actions = features['action']();
            document.getElementById("test").innerHTML += actions[0];
            actions[1].forEach(id => {
                document.getElementById(id[0]).addEventListener('click', () => {
                    sessionStorage.setItem("plan", id[2]);
                    sessionStorage.setItem("plan-index", id[1]);
                });
            });
        } else {
            console.log(f);
            panel.innerHTML += features[f]();
        }
    });
//    document.getElementById("test").innerHTML = features["name"]();
//    let inner_html = "";
//
//    document.getElementById("test").innerHTML += features["yearlySubPrice"]();
//    document.getElementById("test").innerHTML += features['customerCare']();
//
//    let actions = features['action']();
//    document.getElementById("test").innerHTML += actions[0];
//    actions[1].forEach(id => {
//        document.getElementById(id[0]).addEventListener('click', () => {
//            sessionStorage.setItem("plan", id[2]);
//            sessionStorage.setItem("plan-index", id[1]);
//        });
//    });
}



document.body.onload2 = function () {


    var rows = {
        'p-list': document.getElementById("p-list"),
        'p-f-list': document.getElementById("p-f-list"),
        'p-select': document.getElementById("p-select"),
    }


    for (let f in feature_list) {
        let row = document.createElement('tr');

        switch(f) {
            case "name": {
                row.appendChild(document.createElement('td'));

                for (name in data["name"]) {
                    let plan = document.createElement('td');
                    plan.textContent = data["name"][name];
                    plan.className = "h3 text-center";

                    row.appendChild(plan);
                }
                rows['p-list'].appendChild(row);
                break;
            }

            case "action": {

                // create fake plan for visual
                row.appendChild(document.createElement('td'));

                for (let name in data["name"]) {
                    let plan = document.createElement('td');
                    let btn = document.createElement('button');

                    plan.className = "text-center";

                    btn.textContent = "Select " + data["name"][name];
                    btn.type="submit";
                    btn.className = "btn";

                    btn.onclick = function () {
                        sessionStorage.setItem("plan", data["name"][name]);
                        sessionStorage.setItem("plan-index", name);
                    }

                    plan.appendChild(btn)
                    row.appendChild(plan);
                }
                rows['p-select'].appendChild(row);
                break;
            }

            case "yearlySubPrice": {

                // create fake plan for visual
                row.appendChild(document.createElement('td'));

                for (name in data["yearlySubPrice"]) {
                    let plane_price = document.createElement('td');
                    let price = document.createElement('big');
                    let per_month = document.createElement('small');
                    let annual = document.createElement('small');

                    plane_price.className = "text-center";

                    price.textContent = data["yearlySubPrice"][name] + "$";
                    price.className = "bold-price";


                    per_month.textContent = "/mounth";
                    annual.textContent = `(${data["yearlySubPrice"][name] * 12}$/year)`;

                    plane_price.appendChild(price);
                    plane_price.appendChild(per_month);
                    plane_price.appendChild(document.createElement('br'));
                    plane_price.appendChild(annual);

                    row.appendChild(plane_price);
                }
                rows['p-list'].appendChild(row);
                break;
            }

            default: {
                let feature_name = document.createElement('td');

                feature_name.textContent = feature_list[f];
                feature_name.className = "h5 feature";

                row.appendChild(feature_name);

                for (name in data[f]) {
                    let plan = document.createElement('td');
                    plan.className = "text-center";

                    if (typeof(data[f][name]) == "boolean") {
                        plan.className = "text-center " + (data[f][name] == false ? "not-contain" : "contain");
                    } else {
                        plan.textContent = data[f][name];
                    }

                    row.appendChild(plan);
                }

                rows['p-f-list'].appendChild(row);
                break;
            }
        }
    }

}


'\
<div class="d-flex width-full width-auto">\
<div class="col-5">\
<label class="">Code management</label>\
</div>\
<div class="d-block col-3" style="display: none;">\
    <div class="">asdasd</div>\
</div>\
<div class="d-block col-4" style="display: block; background-color: red;">\
    <div class="">asdasdasd</div>\
</div>\
<div class="d-block col-4" style="display: none;">\
    <div class="">Hello Wofld</div>\
</div>\
</div>\
'