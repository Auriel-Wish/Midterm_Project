id = "popcorn_";
num_popped = 0;

async function move_popcorn() {
    const timer = ms => new Promise(res => setTimeout(res, ms));

    document.getElementById("start_popping").style.display = "none";
    document.getElementById("stop_popping").style.display = "block";

    while(document.getElementById("start_popping").style.display == "none") {
        for(let i = 1; i < 10; i++) {
            if (document.getElementById("start_popping").style.display != "none") {
                break;
            }
            curr_id = id + i;
            prev_num = i - 1;
            if (prev_num == 0) {
                prev_num = 9;
            }
            prev_id = id + prev_num;
            num_popped++;

            document.getElementById("num_popped").innerHTML = "Kernels Popped: " + num_popped;
            document.getElementById(curr_id).style.marginTop = "-40px";
            document.getElementById(curr_id).style.rotate = "360deg";
            document.getElementById(prev_id).style.marginTop = "0px";
            document.getElementById(prev_id).style.rotate = "0deg";
            await timer(500);
        }
    }
}

function stop_popcorn() {
    document.getElementById("start_popping").style.display = "block";
    document.getElementById("stop_popping").style.display = "none";
    
    for(let i = 1; i < 10; i++) {
        curr_id = id + i;
        document.getElementById(curr_id).style.marginTop = "0px";
    }
}