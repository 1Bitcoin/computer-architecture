document.getElementById("submit").addEventListener("click", function (e) {
    e.preventDefault();

    // получаем данные формы
    let checkForm = document.forms["checkForm"];
    let userEmail = checkForm.elements["userEmail"].value;

    // сериализуем данные в json
    let user = JSON.stringify({email: userEmail});
    
    let request = new XMLHttpRequest();
    // посылаем запрос на адрес "/check/information/"
     request.open("GET", '/check/information?email=' + userEmail, true);   
     request.setRequestHeader("Content-Type", "text/plain");
     request.send(user);

     request.addEventListener("load", function () {
        // получаем и парсим ответ сервера
         let receivedStatus = JSON.parse(request.response);
         alert(receivedStatus);   // смотрим ответ сервера
     });
 });