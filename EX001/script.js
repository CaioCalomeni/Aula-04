function carregar() {
var msg = document.getElementById('msg')
var img = document.getElementById('imagem')
var data = new Date()
var hora = data.getHours()
var hora = 22

var primeira = document.getElementById('primeira')

if (hora >= 0 && hora < 12) {
 // Bom dia
 document.body.style.backgroundColor = '#937a6c'
 document.body.style.background.
 primeira.innerHTML = '<b>Bom dia!</b>'
msg.innerHTML = `Agora são <b>${hora}</b> horas da manhã`
img.src = 'manha.png'

}
else if (hora >= 12 && hora < 18) {
// boa tarde
document.body.style.backgroundColor = '#ff6900'
primeira.innerHTML = '<b>Boa tarde!</b>'
msg.innerHTML = `Agora são <b>${hora}</b> horas da tarde`
img.src = 'tarde.png'
}
else { 
document.body.style.backgroundColor = '#001f49'
primeira.innerHTML = '<b>Boa noite!</b>'
msg.innerHTML = `Agora são <b>${hora}</b> horas da noite`
img.src = 'noite.png'
// boa noite
}
}
