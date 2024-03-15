// Email%20%3A%20%0Asss%0ANama%20%3A%20%0Asss%0ANumber%20%3A%20%0Assss
//
function sendMessage() {
    let email = document.getElementById('email');
    let name = document.getElementById('name');
    let number = document.getElementById('number');

    let concate = 'Email%20%3A%20%0A' + email.value + '%0ANama%20%3A%20%0A' + name.value + '%0ANumber%20%3A%20%0A' + number.value;

    let tocken = '7103660994:AAHjpBwU_ChdQbfQxr9znzVHXut5EHm3UjQ';
    let group = '-4190579036';

    $.ajax({
        url: `https://api.telegram.org/bot${tocken}/sendMessage?chat_id=${group}&text=${concate}&parse_mode=html`,
        method: `POST`,
    });
}
