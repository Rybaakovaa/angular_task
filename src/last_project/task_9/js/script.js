new WOW({
    animateClass: 'animate__animated',
}).init();


$( function() {
    $( "#accordion" ).accordion({
        heightStyle: "content",

        // Все секции будут скрыты при загрузке
        collapsible: true,
        active: false
    });
} );

$(document).ready(function(){
    $('.single-item').slick();
});


window.addEventListener('click', function(event){
    if (!event.target.closest('#myDIV')) {
        document.getElementById("popup").style.display = "none";
    }
});


window.onload = function () {
    $(document).ready(function () {
        $("form").submit(function (event) {
            event.preventDefault();

            let name = $("#inputName").val();
            let surname = $("#inputSurname").val();
            let phone = $("#inputPhone").val();
            let country = $("#inputCountry").val();
            let index = $("#inputIndex").val();
            let address = $("#inputAddress").val();

            if (name === "" || surname === "" || phone === "" || country === "" || index === "" || address === "") {
                alert("Пожалуйста, заполните все поля.");
                return;
            }

            if (!/^\d+$/.test(index) || index.length !== 6) {
                alert("Пожалуйста, введите корректный индекс из 6 цифр.");
                return;
            }

            $("form").hide();
            $("#thankYouMessage").show();

            let blockPopUp = document.getElementById('popup');
            let btnPopUp = document.getElementById('btn-popup');

            blockPopUp.style.display = 'flex';

            btnPopUp.addEventListener('click', () => {
                blockPopUp.style.display = 'none';
                CleanInputs();
                newWindowLogIn();
            });
        });
    });

}