function slide_all_up() {
    $(".answer_row").slideUp();
}

slide_all_up();

$("#q1").click(function(){
    slider(1);
});

$("#q2").click(function(){
    slider(2);
});

$("#q3").click(function(){
    slider(3);
});

$("#q4").click(function(){
    slider(4);
});

$("#q5").click(function(){
    slider(5);
});

function slider(curr_num) {
    currP = '#a' + curr_num;
    currI = 'i' + curr_num;
    $(currP).slideToggle();
    if (document.getElementById(currI).style.transform == 'rotate(45deg)') {
        document.getElementById(currI).style.transform = 'rotate(0deg)';
    }
    else { 
        document.getElementById(currI).style.transform = 'rotate(45deg)';
    }
}