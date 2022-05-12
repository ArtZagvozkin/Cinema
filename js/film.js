function poster_mouse_over(img_id) {
    var poster = document.getElementById("poster-img");
    var cur_src = poster.src;

    var file_name = String(cur_src).match(/film_\d_\d/);
    var file_num = String(file_name).match(/\d$/);

    file_num = Number(file_num) + 1;
    if (file_num > 4) {
        file_num = 1;
    }

    file_name = "./img/" + String(cur_src).match(/film_\d_/) + file_num + ".jpg";
    poster.src = file_name;
}

function img_mouse_over(img_id) {
    var img_name = "./img/" + img_id + "_2.jpg";
    document.getElementById(img_id).src = img_name;
}
function img_mouse_out(img_id) {
    var img_name = "./img/" + img_id + "_1.jpg";
    document.getElementById(img_id).src = img_name;
}
