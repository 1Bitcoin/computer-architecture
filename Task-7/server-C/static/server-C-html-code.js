document.getElementById("submitNewcar").addEventListener("click", function (e) {
    e.preventDefault();

    // получаем данные формы
    let newCarform = document.forms["newCarform"];
    let carName = newCarform.elements["carName"].value;
    let carPrice = newCarform.elements["carPrice"].value;

    let request = new XMLHttpRequest();
    // посылаем запрос на адрес "/redirect/insert/record"
    request.open("GET", '/redirect/insert/record?carName=' + carName + '&' + 'carPrice=' + carPrice, true);   
    request.setRequestHeader("Content-Type", "text/plain");
    request.send();

    request.addEventListener("load", function () {
        // получаем и парсим ответ сервера
         let receivedStatus = JSON.parse(request.response);
         alert(receivedStatus);   // смотрим ответ сервера
     });
 });

 document.getElementById("submitSelectcar").addEventListener("click", function (e) {
    e.preventDefault();

    // получаем данные формы
    let selectCarform = document.forms["selectCarform"];
    let carName = selectCarform.elements["carName"].value;

    let request = new XMLHttpRequest();
    // посылаем запрос на адрес "/select/record"
    request.open("GET", '/redirect/select/record?carName=' + carName, true);   
    request.setRequestHeader("Content-Type", "text/plain");
    request.send();

    request.addEventListener("load", function () {
        // получаем и парсим ответ сервера
         let receivedStatus = JSON.parse(request.response);
         alert(receivedStatus);   // смотрим ответ сервера
     });
 });
