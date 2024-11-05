// dom

const texto = document.querySelector('#texto')
const botao = document.querySelector('#botao')
const area = document.querySelector('#qrcode')

// evento
botao.addEventListener('click', gerar)

//function
function gerar(){
    area.innerHTML = ''
    new QRCode(area, {
        text:texto.value,
        width: 350,
        height: 350,
          colorLight: 'transparent',
        colorDark: 'black',
    })
}
