var cartaPaulo = {
    nome: "King Aragorn",
    imagem: "https://i.pinimg.com/originals/a8/0f/88/a80f882cb198d40b588e2d487caec418.jpg",
    atributos: {
        ataque: 80,
        defesa: 60,
        magia: 90
    }
}

var cartaRafa = {
    nome: "Gandalf",           
    imagem:"https://i.pinimg.com/originals/63/1d/01/631d01ff34e74f0589def839e8c92e44.jpg",
    atributos: {
        ataque: 70,
        defesa: 65,
        magia: 85
    }
}

var cartaGui = {
    nome: "Melkor",
    imagem: "https://i.pinimg.com/originals/e8/4b/81/e84b81b7ae7871b2306bbf52113965f8.jpg",
    atributos: {
        ataque: 88,
        defesa: 62,
        magia: 90
    }
}

var cartaPaulo = {
    nome: "Rohirrim",
    imagem: "https://i.pinimg.com/564x/25/10/cb/2510cbef1c8d84ff863a188b1c8d66b5.jpg",
    atributos: {
        ataque: 80,
        defesa: 60,
        magia: 90
    }
}
var cartaPaulo = {
    nome: "Saruman, the White",
    imagem: "https://i.pinimg.com/564x/17/51/28/175128f61f4ef6d875a61fb679e4228c.jpg",
    atributos: {
        ataque: 30,
        defesa: 40,
        magia: 90
    }
}
var cartaPaulo = {
    nome: "Legolas GreenLeaf",
    imagem: "https://i.pinimg.com/564x/b7/8c/68/b78c687d376c965a0b1baf8436acb0ef.jpg",
    atributos: {
        ataque: 60,
        defesa: 45,
        agil: 95,
        dex: 95,
        magia: 90
    }
}
var cartaPaulo = {
    nome: "Elrond",
    imagem: "https://i.pinimg.com/564x/3d/d6/56/3dd65673152e487dacf76758fc438ae1.jpg",
    atributos: {
        ataque: 70,
        defesa: 60,
        agil: 75,
        dex: 75,
        magia: 60
    }
}
var cartaPaulo = {
    nome: "Hobbits",
    imagem: "https://i.pinimg.com/564x/2a/4e/8f/2a4e8ff7a0754eb81c9644ee712b36dd.jpg",
    atributos: {
        ataque: 35,
        defesa: 30,
        agil: 70,
        dex: 50,
        magia: 10
    }
}

var cartaPaulo = {
    nome: "Gollum",
    imagem: "https://i.pinimg.com/564x/5f/30/06/5f30061840fda1ab34b8f74e4b3d856b.jpg",
    atributos: {
        ataque: 55,
        defesa: 30,
        agil: 80,
        dex: 50,
        magia: 10
    }
}

var cartaPaulo = {
    nome: "Boromir",
    imagem: "https://i.pinimg.com/564x/38/93/36/3893369daba66bfac7b81185c261527b.jpg",
    atributos: {
        ataque: 90 ,
        defesa: 85,
        agil: 80,
        dex: 70,
        magia: 10
    }
}


var cartaMaquina
var cartaJogador
var cartas = [cartaPaulo, cartaRafa, cartaGui]
// 0          1           2

function sortearCarta() {
    var numeroCartaMaquina = parseInt(Math.random() * 3)
    cartaMaquina = cartas[numeroCartaMaquina]

    var numeroCartaJogador = parseInt(Math.random() * 3)
    while (numeroCartaJogador == numeroCartaMaquina) {
        numeroCartaJogador = parseInt(Math.random() * 3)
    }
    cartaJogador = cartas[numeroCartaJogador]


    document.getElementById('btnSortear').disabled = true
    document.getElementById('btnJogar').disabled = false
  
    exibeCartaJogador()

}

function exibeCartaJogador(){
  var divCartaJogador = document.getElementById("carta-jogador")
  var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
  divCartaJogador.style.backgroundImage=`url(${cartaJogador.imagem})`
  var nome = `<p class="carta-subtitle">${cartaJogador.nome}</p>`
  var opcoesTexto = ""
  
  for (var atributo in cartaJogador.atributos) {
        opcoesTexto += "<input type='radio' name='atributo' value='" + atributo + "'>" + atributo + " " + cartaJogador.atributos[atributo] + "<br>"
    }
  var html = "<div id='opcoes' class='carta-status'>"
  divCartaJogador.innerHTML = moldura+nome+html+opcoesTexto+'</div>'
}
function obtemAtributoSelecionado() {
    var radioAtributo = document.getElementsByName('atributo')
    for (var i = 0; i < radioAtributo.length; i++) {
        if (radioAtributo[i].checked) {
            return radioAtributo[i].value
        }
    }
}

function jogar() {
    var divResultado = document.getElementById("resultado")
    var atributoSelecionado = obtemAtributoSelecionado()

    if (cartaJogador.atributos[atributoSelecionado] > cartaMaquina.atributos[atributoSelecionado]) {
      htmlResultado = '<p class="resultado-final">Venceu</p>'  
      

    } else if (cartaJogador.atributos[atributoSelecionado] < cartaMaquina.atributos[atributoSelecionado]) {
     htmlResultado = '<p class="resultado-final">Perdeu</p>'  
    } else {
     htmlResultado = '<p class="resultado-final">Empatou</p>'  
    }
  divResultado.innerHTML = htmlResultado
  exibeCartaMaquina()
}

function exibeCartaMaquina(){
    var divCartaMaquina = document.getElementById("carta-maquina")
    var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
  divCartaMaquina.style.backgroundImage=`url(${cartaMaquina.imagem})`
  var nome = `<p class="carta-subtitle">${cartaMaquina.nome}</p>`
  var opcoesTexto = ""
  
  for (var atributo in cartaMaquina.atributos) {
        opcoesTexto += "<p type='text' name='atributo' value='" + atributo + "'>" + atributo + " " + cartaMaquina.atributos[atributo] + "</p>"
    }


  var html = "<div id='opcoes' class='carta-status'>"
  divCartaMaquina.innerHTML = moldura+nome+html+opcoesTexto+'</div>'
}