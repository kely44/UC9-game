$('.slider-principal').slick({
    dots: false,
    Infinite: true,
    Speed: 300,
    slidestoshow: 3,
    adaptiveheight: false,
    autoplay: true,
    autoplayspeed: 2000
});
function Enviar() {

    var nome = document.getElementById("nomeid");

    if (nome.value != "") {
        alert('Obrigado sr(a) ' + nome.value + ' os seus dados foram encaminhados com sucesso');
    }

}