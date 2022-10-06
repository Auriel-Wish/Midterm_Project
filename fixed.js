window.onscroll = function() {change_navbar()};

function change_navbar() {
    popcorn_color = "rgb(228, 199, 83)";
    var nav = document.getElementById("navbar").style;
    var logo = document.getElementById("logo_link_img").style;
    var a_tags = document.querySelectorAll('.link');

    if (document.documentElement.scrollTop > 80) {
        nav.padding = "15px 0";
        nav.backgroundColor = popcorn_color;
        nav.boxShadow = "0px 2px 4px 0px rgba(0,0,0,0.2)";
        logo.width = "15px";
        logo.height = "15px";
        a_tags.forEach(a_tag => {
            a_tag.style.color = 'white';
        });
    }
    else {
        nav.padding = "30px 0";
        nav.backgroundColor = "white";
        nav.boxShadow = "none";
        logo.width = "20px";
        logo.height = "20px";
        a_tags.forEach(a_tag => {
            a_tag.style.color = popcorn_color;
        });
    }
}