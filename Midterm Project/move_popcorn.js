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


num_list = [];

function make_num_list() {
    for (i = 1; i < 10; i++) {
        num_list.push(i);
    }
}

function shuffle() {
    currentIndex = num_list.length;

    while (currentIndex != 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      [num_list[currentIndex], num_list[randomIndex]] = [num_list[randomIndex], num_list[currentIndex]];
    }
}

function create_fixed_elements() {
    kernel_section = document.getElementById("popcorn_container");
    total_add = "<tr>";
    
    for(i = 0; i < num_list.length; i++) {
        total_add += '<td><img src="images/single_popcorn.jpg" class="kernel" id="popcorn_' + num_list[i] + '"></td>';
    }
    total_add += "</tr>";

    kernel_section.innerHTML = total_add;
}

make_num_list();
shuffle();
create_fixed_elements();