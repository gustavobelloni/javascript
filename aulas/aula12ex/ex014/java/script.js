function carregar() {
    var msg = window.document.querySelector('div#msg')
    var img = window.document.querySelector('img#imagem')
    var data = new Date()
    var hora =  data.getHours()

    
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora < 5) {
        img.src = 'imagens/madrugada.png'
        document.body.style.background = '#010007'
    } else if(hora < 12) {
        img.src = 'imagens/manha.png'
        document.body.style.background = '#C7E9FD'
    } else if (hora < 18) {
        img.src = 'imagens/tarde.png'
        document.body.style.background = '#3D95FF'
    } else {
        img.src = 'imagens/noite.png'
        document.body.style.background = '#072239'
    }
}

     


