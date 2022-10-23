form = document.getElementById('contact_form');
form.addEventListener('submit', validate);

error_div = document.getElementById('error_div');
error_list = [];
name_error = 'Name field is required.';
message_error = 'Message field is required.';
reason_for_contact_error = 'Please select at least one reason for contact.';
month_error = 'Please select month of purchase.'

submitted_div = document.getElementById('submitted_div');
name = '';
message = '';
reasons = [];

function validate(event) {
    error_div.innerHTML = '';
    submitted_div.innerHTML = '';
    reasons = [];

    if ($('#name').val() == '') {
        error_list.push(name_error);
    }
    else {
        name = $('#name').val();
    }
    if ($('#message').val() == '') {
        error_list.push(message_error);
    }
    else {
        message = $('#message').val();
    }
    checkboxes = $('input[type=checkbox]');
    for (i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked) {
            reasons.push(checkboxes[i].value);
        }
    }
    if (reasons.length <= 0) {
        error_list.push(reason_for_contact_error);
    }
    if (br_list[0].style.display != 'none' && $('#how_long').val() == 'Select Month') {
        error_list.push(month_error);
    }

    event.preventDefault();
    if (error_list.length > 0) {
        print_errors();
    }
    else {
        submitted();
    }
}

function print_errors() {
    for (i = 0; i < error_list.length; i++) {
        error_div.innerHTML += '** ' + error_list[i] + '<br>';
    }
    error_list = [];
    window.scrollTo(0, 0);
}

function submitted() {
    submit_txt = name + ', we appreciate your message regarding:<br>';
    for (i = 0; i < reasons.length; i++) {
        submit_txt += '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + (i + 1) + ' - ' + reasons[i] + '<br>';
    }
    submit_txt += 'We will get back to you shortly!'
    submitted_div.innerHTML = submit_txt;

    document.getElementById('submit').scrollIntoView();
}

$('#past_order').click(check_if_past);
br_list = $('.if_past');

function check_if_past(event) {
    if (event.target.checked) {
        $('#how_long').show();
        $('label[for="how_long"]').show();
        for (let i = 0; i < br_list.length; i++) {
            $(br_list[i]).show();
        }
    }
    else {
        $('#how_long').hide();
        $('label[for="how_long"]').hide();
        for (let i = 0; i < br_list.length; i++) {
            $(br_list[i]).hide();
        }
    }
}