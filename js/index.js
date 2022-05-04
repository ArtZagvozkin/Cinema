
function load_page() {
    var feedback_err = document.getElementById('feedback-err');
    feedback_err.style.display = "none";
}


function feedback_send() {
    var input = document.getElementById('feedback-txtbx').value;
    var regexp = /<\/?[a-zA-Zа-яА-Я .:/\\"'!?=”)]+>/gi;

    if (String(input).match(regexp) == null) {
        document.getElementById('feedback-err').style.display = "none";
    } else {
        document.getElementById('feedback-err').style.display = "inherit";
    }

    var result = input.replace(regexp,'');
    var feedback_out = document.getElementById('feedback-out');
    feedback_out.innerHTML = result;
}
