var auto_change_poster;

function load_page() {
    window.setInterval(update_date_time, 1000);

    document.getElementById("delay").value = 1;
    document.getElementById("delay-label").innerHTML = 1;
    auto_change_poster = setInterval(change_poster, 1000);
}

function update_date_time() {
    const date = new Date();
    const [year, month, day] = [date.getFullYear(), date.getMonth(), date.getDay()];
    const cur_date = day + get_month_name(month) + year;

    let [hour, min, sec] = [date.getHours(), date.getMinutes(), date.getSeconds()];
    min = String(min).replace(/^\d{1}$/g, "0" + min);
    sec = String(sec).replace(/^\d{1}$/g, "0" + sec);
    const cur_time = hour + ":" + min + ":" + sec;

    let dt_block = document.getElementById("date-time-block");
    dt_block.innerHTML = "Сейчас: " + cur_time;
    dt_block.innerHTML += "<br>";
    dt_block.innerHTML += "Сегодня: " + cur_date;
}

function get_month_name(month_num) {
    switch (month_num) {
        case 0 : return " января ";
        case 1 : return " февраля ";
        case 2 : return " марта ";
        case 3 : return " апреля ";
        case 4 : return " мая ";
        case 5 : return " июня ";
        case 6 : return " июля ";
        case 7 : return " августа ";
        case 8 : return " сентября ";
        case 9 : return " октября ";
        case 10 : return " ноября ";
        case 11 : return " декабря ";
    }

    return month_num;
}

function change_delay(value) {
    clearInterval(auto_change_poster);

    if (value <= 5) {
        document.getElementById("delay-label").innerHTML = value;
        auto_change_poster = setInterval(change_poster, value*1000);
    } else {
        document.getElementById("delay-label").innerHTML = "∞";
    }
}

function change_poster() {
    let poster = document.getElementById("poster-img");
    const cur_src = poster.src;

    let file_name = String(cur_src).match(/film_\d_\d/);
    let file_num = String(file_name).match(/\d$/);

    file_num = Number(file_num) + 1;
    if (file_num > 4) {
        file_num = 1;
    }

    file_name = "./img/" + String(cur_src).match(/film_\d_/) + file_num + ".jpg";
    poster.src = file_name;
}

function img_mouse_over(img_id) {
    const img_name = "./img/" + img_id + "_2.jpg";
    document.getElementById(img_id).src = img_name;
}
function img_mouse_out(img_id) {
    const img_name = "./img/" + img_id + "_1.jpg";
    document.getElementById(img_id).src = img_name;
}
