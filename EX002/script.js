function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('txt')
     if (fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
     }
     else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id','foto')
        if (fsex[0].checked) {
        genero = "Homem" 
        if (idade >= 0 && idade < 14) {
            // Criança
            img.setAttribute('src','menino.png')
            }
        else if (idade < 21) {
            // jovem
            img.setAttribute('src','jovemm.png')
            }
        else if (idade < 50) {
            // Adulto
            img.setAttribute('src','homem.png')
            }
         else {
            img.setAttribute('src','senhor.png')
            // Idoso
         } 
         }
        else if (fsex[1].checked) {
        genero = "Mulher"
        if (idade >= 0 && idade < 14) {
         img.setAttribute('src','menina.png')
         // Criança
         }
     else if (idade < 21) {
         img.setAttribute('src','jovem.png')
      // jovem
         }
     else if (idade < 50) {
         img.setAttribute('src','mulher.png')
         // Adulto
         }
      else {
         img.setAttribute('src','senhora.png')
         // Idoso
      } 

        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos que você é um(a) <b>${genero}</b> com <b>${idade}</b> anos`
        res.appendChild(img)
     }
     
}