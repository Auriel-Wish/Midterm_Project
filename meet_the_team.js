all_names = ["Auriel Wish", "Josh Lamothe", "Ranvir Malik", "Ilan Hammond"];
all_descriptions = ["He is cool because", "He is cool because", "He is cool because", "He is cool because"];
num_rows = 2;

function create_elements() {
    team_section = document.getElementById("team_table");

    total_add = "";
    for (i = 0; i < 2; i++) {
        total_add += '<tr>';
        for (j = (2 * i); j < (2 * (i + 1)); j++) {
            total_add += '<td><div><img src="images/member' + (j + 1) + '.jpg"><a href="#p' + (j + 1) + '"><i id="p' + (j + 1) + '" class="fa-solid fa-circle-chevron-down"></i></a><h2>' + all_names[j] + '</h2><p>' + all_descriptions[j] + '</p></div></td>';
        }
        total_add += '</tr>';
    }
    team_section.innerHTML = total_add;
}

create_elements();