class process_package {
    constructor(header, explanation) {
        this.header = header;
        this.explanation = explanation;
    }
}

all_colors = ["rgb(249, 249, 249)", "rgb(255, 245, 204)", "rgb(255, 237, 167)", "rgb(255, 227, 116)", "rgb(225, 190, 47)", "rgb(179, 156, 66)"]
all_headers = ["Header1", "Header2", "Header3", "Header4", "Header5"]
all_explanations = ["Explanation1", "Explanation2", "Explanation3", "Explanation4", "Explanation5"];
all_packages = [];

function make_matches() {
    for(i = 0; i < all_headers.length; i++) {
        new_package = new process_package(all_headers[i], all_explanations[i]);
        all_packages.push(new_package);
    }
}

function create_elements() {
    transform_section = document.getElementById("transform_table");
    total_add = "";
    
    for(i = 0; i < all_packages.length; i++) {
        total_add += '<tr><td class="text" style="background-image: linear-gradient(180deg,' + all_colors[i] + ', ' + all_colors[i + 1] + ');"><h3>' + all_packages[i].header + '</h3><p>' + all_packages[i].explanation + '</p><img class="popcorn_transform" src="images/stage' + (i + 1) + '.png"></td><td class="media"><img class="process_pic" src="images/intro_pic_' + (i + 1) + '.jpg"></td></tr>'
    }

    transform_section.innerHTML = total_add;
}

make_matches();
create_elements();