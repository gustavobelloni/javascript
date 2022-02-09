function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.querySelector('input#txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            gênero = 'Homem'
            if (idade < 4) {
                img.setAttribute('src', 'imagens/bebe-m.png')
            } else if (idade < 14) {
                img.setAttribute('src', 'imagens/criança-m.png')
            } else if (idade < 25) {
                img.setAttribute('src', 'imagens/jovem-m.png')
            } else if (idade < 65) {
                img.setAttribute('src', 'imagens/adulto-m.png')     
            } else {
                img.setAttribute('src', 'imagens/idoso-m.png')
            }
        } else if (fsex[1].checked) {
            gênero = 'Mulher'
             if (idade < 4) {
                img.setAttribute('src', 'imagens/bebe-f.png')
            } else if (idade < 14) {
                img.setAttribute('src', 'imagens/criança-f.png')
            } else if (idade < 25) {
                img.setAttribute('src', 'imagens/jovem-f.png')
            } else if (idade < 65) {
                img.setAttribute('src', 'imagens/adulto-f.png')
            } else {
                img.setAttribute('src', 'imagens/idoso-f.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos<br>`
        res.appendChild(img)
    }
}