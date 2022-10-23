function slide_all_up() {
    $(".answer_row").slideUp();
}

function slider(curr_num) {
    
    console.log(curr_num);
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

class q_and_a {
    constructor(question, answer) {
        this.question = question;
        this.answer = answer;
    }
}

all_questions = ["What is the history of our company?", "Do you have nationwide and worldwide shipping?", "Can you gift wrap my order?", "What’s the fee if I lose a cart?", "Do the carts need to be cleaned?", "What is your return policy?", "How do I use the popcorn maker?"];
all_answers = ["Popcorn Guys was founded in 1960 by native Bostonians. Since then, Popcorn Guys has sourced, made, and sold the finest popcorn in the Greater Boston area!", "Everyone loves popcorn. No matter where you’re from, we can ship to you! Just make sure to select your preferred shipping method at checkout.", "Our specialty popcorn makes for amazing gifts. At checkout, you can select to have your order gift wrapped! Get ready for the smiles!", "Our portable popcorn machines are the finest in the industry. As a result, they don't come cheap. Each machine has a fee of $9,000 if lost. Be sure to keep an eye on them!", "Just like anything that's used to make food, popcorn machines need to be cleaned after they've been used. We always recommend giving it a good wipe down with a well wrung out, soft damp cloth while the machine is still warm after every use.", "You can always return sealed containers! Open popcorn containers, however, cannot be returned. If there was an issue with the order, please contact us via our website.", "<ul><li>Heat the kettle for 7-9 minutes</li><li>Pour oil into the kettle</li><li>Test a few kernels</li><li>When ready, put the rest of the kernels in and shut the lid</li><li>When the popping ends, dump the kettle and enjoy!</li></ul>"];
all_q_and_a = [];

function make_matches() {
    for (i = 0; i < all_questions.length; i++) {
        new_q_and_a = new q_and_a(all_questions[i], all_answers[i]);
        all_q_and_a.push(new_q_and_a);
    }
}

function create_elements() {
    faq_section = document.getElementById("faq_section");
    total_add = "";

    for (i = 0; i < all_questions.length; i++) {
        total_add += '<div class="question_section"><div id="' + i + '" class="question_row" onclick="slider(' + i + ')"><h2>' + all_q_and_a[i].question + '</h2><i id="i' + i + '" class="fa-solid fa-plus"></i></div><div id="a' + i + '" class="answer_row"><p>' + all_q_and_a[i].answer + '</p></div></div>'
    }

    faq_section.innerHTML = total_add;
}

make_matches();
create_elements();
slide_all_up();