
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    gen_item(document.getElementById("test1"), 7);
    gen_item(document.getElementById("test1"), 8);
    gen_item(document.getElementById("test1"), 9);
    document.getElementById("test1").innerHTML = document.getElementById("test1").innerHTML;

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 72,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});


function gen_item(grid, id) {
    // grid.innerHTML = "";

    grid.innerHTML += "<div class=\"col-md-6 col-lg-4\">\
                        <div class=\"portfolio-item mx-auto\" data-bs-toggle=\"modal\" data-bs-target=\"#portfolioModal"+id+"\">\
                            <div class=\"portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100\">\
                                <div class=\"portfolio-item-caption-content text-center text-white\"><i class=\"fas fa-plus fa-3x\"></i></div>\
                            </div>\
                            <img class=\"img-fluid\" src=\"assets/img/portfolio/test1.png\" alt=\"...\" />\
                        </div>\
                    </div>"



    item = {}
    /*
    div1 = document.createElement("div");
    div1.classList.add("col-md-6", "col-lg-4", "mb-5");

    div2 = document.createElement("div");
    div2.classList.add("portfolio-item", "mx-auto");
    div2.setAttribute("data-bs-toggle", "modal");
    div2.setAttribute("data-bs-target", "#portfolioModal7");

    div3 = document.createElement("div");
    div3.classList.add("portfolio-item-caption", "d-flex", "align-items-center", "justify-content-center", "h-100", "w-100");
    
    div4 = document.createElement("div");
    div4.classList.add("portfolio-item-caption-content", "text-center", "text-white");

    i = document.createElement("i");
    i.classList.add("fas", "fa-plus", "fa-3x");

    img = document.createElement("img");
    img.classList.add("img-fluid");
    img.setAttribute("src", "assets/img/portfolio/circus.png")
    img.setAttribute("alt", "...");

    div4.appendChild(i);

    div3.appendChild(img);
    div3.appendChild(div4);
    div2.appendChild(div3);
    div1.appendChild(div2);

    grid.appendChild(div1);

    return div1;
    */
}



