
function load_page() {
    var feedback_err = document.getElementById('feedback-err');
    feedback_err.style.display = "none";
}

function feedback_send() {
    var input = document.getElementById('feedback-txtbx').value;
    var message = "";

    //tag filter
    if (String(input).match(/<.+>/gi) != null) {
        message = "Warn: Форма ввода содержит теги!!!";
    }
    input = input.replace(/<.+>/gi,'');

    //filter forbidden words
    var result = input;
    result = result.replace(/баба/gi, '');
    if (result != input) {
        message += message !== "" ? "<br/>" : "";
        message += "Warn: Форма ввода содержит запрещенные слова!!!";
        input = result;
    }

    //url filter
    result = input.replace(/http:\/\/\S{0,}/gi, '');
    result = result.replace(/https:\/\/\S{0,}/gi, '');
    if (result != input) {
        message += message !== "" ? "<br/>" : "";
        message += "Warn: Форма ввода содержит ссылки!!!";
        input = result;
    }

    //write to feedback-out
    document.getElementById('feedback-out').innerHTML = input;

    //error box
    if (message != "") {
        document.getElementById('feedback-err').style.display = "inherit";
        document.getElementById('feedback-err').innerHTML = message;
    } else {
        document.getElementById('feedback-err').style.display = "none";
    }
}

function img_mouse_over(img_id) {
    var img_name = "./img/" + img_id + "_2.jpg";
    document.getElementById(img_id).src = img_name;
}
function img_mouse_out(img_id) {
    var img_name = "./img/" + img_id + "_1.jpg";
    document.getElementById(img_id).src = img_name;
}
