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