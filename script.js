function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById ('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('[Erro] Verifique os dados')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero ='Homem'
            if (idade >=0 && idade <= 10){
                img.setAttribute('src', 'meninonv.png')
            } else if (idade < 21){
                img.setAttribute('src', 'jovemh.png')

            }else if (idade < 50){
                img.setAttribute('src', 'homemnv.png')
            }else {
                img.setAttribute('src', 'idosonv.png')
            }


        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >=0 && idade <= 10){
                img.setAttribute('src', 'meninanv.png')
            } else if (idade < 21){
                img.setAttribute('src', 'jovem2.png')

            }else if (idade < 50){
                img.setAttribute('src', 'mulhernv.png')
            }else {
                img.setAttribute('src', 'idosanv.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
    }
