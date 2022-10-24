$(document).ready(function() {
    if (window.innerWidth > 1100) {
        $('#transform_table').fadeOut(0);
        $('#transform_table').fadeIn(1000);
    }
});

class process_package {
    constructor(header, explanation) {
        this.header = header;
        this.explanation = explanation;
    }
}

all_colors = ["rgb(249, 249, 249)", "rgb(255, 245, 204)", "rgb(255, 237, 167)", "rgb(255, 227, 116)", "rgb(225, 190, 47)", "rgb(179, 156, 66)"];
all_headers = ["The Kernel Stage", "What's Inside a Kernel?", "The Heating Stage", "Pop!", "Snack Time!"];
all_explanations = ["There are many different strains of popcorn, each with its own unique factors in mind (disease, how easily they grow, etc). Each strain has a particular flavor, which is why a different strain is used for movie popcorn vs caramel corn. Once the ideal corn is selected, it is planted in rows that intersect the soil at 90 degrees. This method allows for machine harvesting.",
                    "Each kernel is made up of a plant embryo, a starchy endosperm that feeds the embryo, and a hard exterior called the bran or hull. And within each kernel is a small droplet of water - the key to its'pop'",
                    "Once heat is applied to the dried kernels, the droplet of water converts to steam; subsequently, the pressure within begins to build. Once that pressure overcomes the strength of the hull, the kernel explodes.",
                    "The starch inside the kernel turns into the white fluffy, crunchy stuff we call popcorn.",
                    "Now, we enjoy!"];
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
        total_add += '<tr><td class="text" style="background-image: linear-gradient(180deg,' + all_colors[i] + ', ' + all_colors[i + 1] + ');"><h3>' + all_packages[i].header + '</h3><p>' + all_packages[i].explanation + '</p><img class="popcorn_transform" src="images/stage' + (i + 1) + '.png"></td><td class="media"><img class="process_pic" src="images/process_pic' + (i + 1) + '.jpg"></td></tr>'
    }

    transform_section.innerHTML = total_add;
}

make_matches();
create_elements();
