window.onscroll = function() {
    console.log("test");
    if (window.innerWidth > 1100) {
        show_cart();
    }
};

function hover_source(img_num) {
    img_id = "#img" + img_num;
    new_src = "images/item" + img_num + "_alt.jpg";
    $(img_id).attr("src", new_src);
}

function non_hover_source(img_num) {
    img_id = "#img" + img_num;
    new_src = "images/item" + img_num + ".jpg";
    $(img_id).attr("src", new_src);
}

all_items = [];

class item {
    constructor(name, price, count) {
        this.name = name;
        this.price = price;
        this.count = count;
    }
}

function add_to_cart(name, price) {
    new_item = new item(name, price, 1);
    push = true;

    for (i = 0; i < all_items.length; i++) {
        if (all_items[i].name == name) {
            all_items[i].count++;
            push = false;
        }
    }

    if (push) {
        all_items.push(new_item);
    }
    display_cart();
}

function remove_from_cart(name) {
    for (i = 0; i < all_items.length; i++) {
        if (all_items[i].name == name) {
            all_items[i].count--;
            if (all_items[i].count == 0) {
                all_items.splice(i, 1);
            }
            break;
        }
    }

    display_cart();
}

function display_cart() {
    str = "";
    if (all_items.length > 0) {
        str = all_items[0].name + " x " + all_items[0].count;
        if (all_items.length > 1) {
            for (i = 1; i < all_items.length; i++) {
                str += ",<br>" + all_items[i].name + " x " + all_items[i].count;
            }
        }
    }

    document.getElementById("all_cart_items").innerHTML = str;

    str = "$" + calc_total();
    document.getElementById("total_cost").innerHTML = str;
}

function calc_total() {
    total = 0;

    for (i = 0; i < all_items.length; i++) {
        total += all_items[i].price * all_items[i].count;
    }

    return total.toFixed(2);
}

class popcorn_package {
    constructor(name, price, description) {
        this.name = name;
        this.price = price;
        this.description = description;
    }
}

num_rows = 3;
all_names = ["Salted-popcorn", "Theater (butter) popcorn", "Caramel Popcorn", "Kettle Corn", "Zombie Special", "Peri-Peri Popcorn", "Vegan Popcorn", "Peanut butter Popcorn", "Cheese Popcorn"];
all_prices = [6.75, 7.75, 8.00, 7.75, 8.00, 9.00, 5.00, 8.00, 7.75];
all_descriptions = ["I don’t think we need to tell you what this is. No special ingredients. The basic salted popcorn can be a great snack when accompanied by a nice beverage or something sweet.", 
                    "Perfect for a movie night — you can bring the theater feel right to your living room with the classic butter popcorn. Perfect snack to enjoy with friends and family.", 
                    "For the ones with a sweet tooth, we got you covered. This delicious blend of caramel and popcorn is addictive and tasty. Try to share it if you can!",
                    "Another OG popcorn. For people who want something a little more healthy and a little less sweet than caramel popcorn, this is a perfect choice. ",
                    "BOO! This popcorn is flavored with some of your favorite candies such as TWIX and Kit-Kat. This flavor is only available for a limited time, so get it while you can!",
                    "Finally, something with a little kick to it. Flavored with the infamous Peri-Peri seasoning this popcorn just proves that Peri-Peri goes well with just about anything.",
                    "For those on a diet, we didn’t forget about you! This vegan popcorn is perfect for you. It's about as healthy as popcorn can get, but tastes indistinguishable from normal popcorn.",
                    "Before you question this one, trust us, you need to try it! Arguably one of our top sellers, this popcorn has a great blend of sweetness and peanut butter. It’s truly unique!",
                    "For all the cheese lovers out there. This flavor is another classic and serves as a great alternative to the butter popcorn. Grab some while you can!"];
all_packages = [];

function make_matches() {
    for(i = 0; i < all_names.length; i++) {
        new_package = new popcorn_package(all_names[i], all_prices[i].toFixed(2), all_descriptions[i]);
        all_packages.push(new_package);
    }
}

function create_elements() {
    products_section = document.getElementById("all_products");
    
    total_add = "";
    j = 0;
    
    if (window.innerWidth > 1100) {
        for(i = 0; i < num_rows; i++) {
            total_add += "<tr>";
            for (j = (3 * i); j < (3 * (i + 1)); j++) {
                total_add += '<td><img id="img' + (j + 1) + '" src="images/item' + (j + 1) + '.jpg" onmouseover="hover_source(' + (j + 1) + ')" onmouseleave="non_hover_source(' + (j + 1) + ')"><h2>' + all_packages[j].name + '</h2><p><strong>$' + all_packages[j].price + '</strong></p><p>' + all_packages[j].description + '</p><div class="add_cart" onclick="add_to_cart(\'' + all_packages[j].name + '\', ' + all_packages[j].price + ')">Add to Cart</div><i class="fa-solid fa-minus" onclick="remove_from_cart(\'' + all_packages[j].name + '\')"></i></td>';
            }
            total_add += "</tr>";
        }
    } else {
        for(i = 0; i < all_names.length; i++) {
            total_add += '<td><img id="img' + (j + 1) + '" src="images/item' + (j + 1) + '.jpg" onmouseover="hover_source(' + (j + 1) + ')" onmouseleave="non_hover_source(' + (j + 1) + ')"><h2>' + all_packages[j].name + '</h2><p><strong>$' + all_packages[j].price + '</strong></p><p>' + all_packages[j].description + '</p><div class="add_cart" onclick="add_to_cart(\'' + all_packages[j].name + '\', ' + all_packages[j].price + ')">Add to Cart</div><i class="fa-solid fa-minus" onclick="remove_from_cart(\'' + all_packages[j].name + '\')"></i></td>';
        }
    }
    products_section.innerHTML = total_add;
}

function show_cart() {
    var cart = document.getElementById("cart");
    if (document.documentElement.scrollTop > 100) {
        cart.style.display = "none";
    }
}




make_matches();
create_elements();