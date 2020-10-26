document.getElementById("submitNewcar").addEventListener("click", function (e) {
    e.preventDefault();

    // получаем данные формы
    let newCarform = document.forms["newCarform"];
    let carName = newCarform.elements["carName"].value;
    let carPrice = newCarform.elements["carPrice"].value;

    let request = new XMLHttpRequest();
    // посылаем запрос на адрес "/redirect/insert/record"
    request.open("GET", '/redirectA/insert/record?carName=' + carName + '&' + 'carPrice=' + carPrice, true);   
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
    request.open("GET", '/redirectA/select/record?carName=' + carName, true);   
    request.setRequestHeader("Content-Type", "text/plain");
    request.send();

    request.addEventListener("load", function () {
        // получаем и парсим ответ сервера
         let receivedStatus = JSON.parse(request.response);
         alert(receivedStatus);   // смотрим ответ сервера
     });
 });

 document.getElementById("submitNewstorage").addEventListener("click", function (e) {
    e.preventDefault();

    // получаем данные формы
    let newCarstorageForm = document.forms["newCarstorageForm"];
    let storageName = newCarstorageForm.elements["storageName"].value;
    let carsName = newCarstorageForm.elements["carsName"].value;

    let request = new XMLHttpRequest();
    request.open("GET", '/redirectB/insert/record?storageName=' + storageName + '&' + 'carsName=' + carsName, true);   
    request.setRequestHeader("Content-Type", "text/plain");
    request.send();

    request.addEventListener("load", function () {
        // получаем и парсим ответ сервера
         let receivedStatus = JSON.parse(request.response);
         alert(receivedStatus);   // смотрим ответ сервера
     });
 });

 document.getElementById("submitSelectstorage").addEventListener("click", function (e) {
    e.preventDefault();

    // получаем данные формы
    let selectCarstorageForm = document.forms["selectCarstorageForm"];
    let storageName = selectCarstorageForm.elements["storageName"].value;

    let request = new XMLHttpRequest();
    request.open("GET", '/redirectB/select/record?storageName=' + storageName, true);   
    request.setRequestHeader("Content-Type", "text/plain");
    request.send();

    request.addEventListener("load", function () {
        // получаем и парсим ответ сервера
         let receivedStatus = JSON.parse(request.response);
         alert(receivedStatus);   // смотрим ответ сервера
     });
 });
