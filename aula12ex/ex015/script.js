function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        res.innerHTML = `Idade Calculada: ${idade}`
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'HOMEM'
            if (idade >= 0 && idade < 10) {
                // Crianca
                img.setAttribute('src', 'fotobebemenino.png')
            } else if (idade < 21) {
                // Jovem
                img.setAttribute('src', 'fotohomemjovem.png')
            } else if (idade < 50) {
                // Adulto
                img.setAttribute('src', 'fotohomem.png')
            } else {
                // Idoso
                img.setAttribute('src', 'fotoidoso.jpg')
            }
        } else if (fsex[1].checked) {
            genero = 'MULHER'
            if (idade >= 0 && idade < 10) {
                // Crianca
                img.setAttribute('src', 'fotobebemenina.png')
            } else if (idade < 21) {
                // Jovem
                img.setAttribute('src', 'fotomulherjovem.png')
            } else if (idade < 50) {
                // Adulto
                img.setAttribute('src', 'fotomulher.png')
            } else {
                // Idoso
                img.setAttribute('src', 'fotoidosa.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}