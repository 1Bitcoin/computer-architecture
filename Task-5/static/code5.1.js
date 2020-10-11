document.getElementById("submit").addEventListener("click", function (e) {
    e.preventDefault();

    // получаем данные формы
    let registerForm = document.forms["registerForm"];
    let userEmail = registerForm.elements["userEmail"].value;
    let userSubname = registerForm.elements["userSubname"].value;
    let userPhone = registerForm.elements["userPhone"].value;

    // сериализуем данные в json
    let user = JSON.stringify({email: userEmail, subname: userSubname, phone: userPhone});
    
    let request = new XMLHttpRequest();
    // посылаем запрос на адрес "/save/information/"
     request.open("POST", "/save/information", true);   
     request.setRequestHeader("Content-Type", "application/json");
     request.send(user);

     request.addEventListener("load", function () {
        // получаем и парсим ответ сервера
         let receivedStatus = JSON.parse(request.response);
         alert(receivedStatus);   // смотрим ответ сервера
     });
 });