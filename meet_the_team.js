all_names = ["Auriel Wish", "Josh Lamothe", "Ranvir Malik", "Ilan Hamond"];
all_descriptions = ["Hey everyone! I'm the CEO of this great popcorn company. I got into selling popcorn because of the joy and community it brings to people. There's no better feeling than sharing a bag of popcorn with your friends while sitting down to watch a movie. My favorite popcorn flavor has to be cheese popcorn.", "Hi I’m Josh, a part of the popcorn team! My favorite type of popcorn is kettle corn because I love the sweet and salty combo. Mixing chocolate with the kettle corn also makes for a fire combo. I really love eating popcorn while I watch a good movie with my friends, or while I am watching a big football game. Popcorn helps bring people together and is a classic snack for spending quality time with friends.", "Hi I’m Ranvir, a proud member of the popcorn team! My favorite type of popcorn is the traditional butter popcorn. I think popcorn is a great snack, especially when watching shows or movies. Popcorn is essential for any movie night with friends or family, so order some of the best from this site!", "Hi, I’m Ilan, a proud founder member of Popcorn Guys. Since the first movie I saw in the theaters, I’ve been in love with popcorn. Whether simply the buttery saltiness of the classic, or the sweet caramel-y of a dessert flavor, popcorn cannot be beat. This irresistible snack is the perfect mood-setting, atmosphere creating, and happiness building food out there; and we have the best."];
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
