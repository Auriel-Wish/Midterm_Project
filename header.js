window.onscroll = function() {
    if (window.innerWidth > 1100) {
        change_navbar();
    }
};

var a_tags = document.querySelectorAll('.link');

function change_navbar() {
    popcorn_color = "rgb(228, 199, 83)";
    var nav = document.getElementById("navbar").style;
    var logo = document.getElementById("logo_link_img").style;

    if (document.documentElement.scrollTop > 80) {
        nav.padding = "15px 0";
        nav.backgroundColor = popcorn_color;
        nav.boxShadow = "0px 2px 4px 0px rgba(0,0,0,0.2)";
        logo.width = "15px";
        logo.height = "15px";
        a_tags.forEach(link => {
            link.style.color = 'white';
        });
    }
    else {
        nav.padding = "30px 0";
        nav.backgroundColor = "white";
        nav.boxShadow = "none";
        logo.width = "20px";
        logo.height = "20px";
        a_tags.forEach(link => {
            link.style.color = popcorn_color;
        });
    }
}

var li_tags = document.querySelectorAll('.li_link');
open_id = document.getElementById("mobile_open");
close_id = document.getElementById("mobile_close");
body = document.getElementsByTagName("body")[0];
navbar = document.getElementById("navbar");

function switch_mobile_nav(opening) {
    if (opening) {
        li_tags.forEach(link => {
            link.style.display = "block";
        });

        open_id.style.display = "none";
        close_id.style.display = "block";
    }
    else {
        li_tags.forEach(link => {
            link.style.display = "none";
        });

        open_id.style.display = "block";
        close_id.style.display = "none";
    }
}

curr_width = window.innerWidth;

function has_switched(old_width) {
    return (old_width > 1100 && curr_width < 1100) || (old_width < 1100 && curr_width > 1100);
}

window.onresize = function resize() {
    old_width = curr_width;
    curr_width = window.innerWidth;
    if (has_switched(old_width)) {
        location.reload();
    }
}