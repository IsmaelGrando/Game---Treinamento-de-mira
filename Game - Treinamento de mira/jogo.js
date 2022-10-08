//achando valores de tela e junto com o body senda o valor real dinamico e nao o absoluto

var altura = 0
var largura = 0

var vidas = 1

var tempo = 30 //representnado 10s

//      Logica que vai extrair o nivel encaminhado como parametro

//alert(window.location.href) assim eu recupero a url, e usando ela eu posso criar uma var pra recuperar el ter como valor

var criaMosquitoTempo = 1500

var nivel = window.location.search //o search vai recuperar o ? e tudo que estiver a sua direita, somente, o herf recupera o link todo
// isso foi pra ver o nivel sendo recuperado -> alert(nivel.replace('?', '')) //aqui o replace vai trocar o ? por um espaço vazio
nivel = nivel.replace('?', '')

if (nivel === 'normal') {
    //1500 milis
    var criaMosquitoTempo = 1500
} else if (nivel === 'dificil') {
    //1000 milis
    var criaMosquitoTempo = 1000
} else if (nivel === 'impossivel'){
    //750 milis
    var criaMosquitoTempo = 750
}


function ajustaTamanhoPalcoJogo() {
    altura = window.innerHeight
    largura = window.innerWidth

    console.log(altura, largura)
}
ajustaTamanhoPalcoJogo()

var cronometro = setInterval(function(){
    
    tempo -= 1 //aqui cria um cronometro utilizando um decremento de 1 pro 10 a cada acionamento do codigo
    
    if (tempo < 0) {
        clearInterval(cronometro) //uso o clear pra limpar da memoria da funcao e n ficar uma mensagem insistente, e atribuo o vlor da var cronometro como referencia
        clearInterval(criaMosquito) //assim as moscas n vao continuar aparecendo deppoiis da vitoria e o tempo vai par em 0
        window.location.href = 'vitoria.html' //aqui vai pra pagina de vcitoria
    } else {
    document.getElementById('cronometro').innerHTML = tempo //coloco um texto entre os codigos, tudo que esta entre os codigos, no espacinmho ali é inner    
    }
}
,1000)

//aqui criamos elemntos html por aqui mesmo e pondo na pag, e atribuindo a img valroes randons para ela aparecer aleatoriiaomnente na trela, respeitando os valores definidos

function posicaoRandomica() {
//aqui tem que ficar antres, pq senao o lewitor vai ler a remocao por click e o proximo elemento n existirá, vai dar bug pq vai pular essa logica
//remover o mosquito a nterior (caso exista)
if (document.getElementById('mosquito')) {
    document.getElementById('mosquito').remove() //se tiver um outro elemnto com  nome mosquito ele vai ser eliminado, dando assim uma moisca por vez na tela

    //console.log('elem,ento selecionado foi: v' + vidas)
    //assim coloco o limite para as 3 vidas
    if (vidas > 3) {
        //Interromeper o jogo (game over)
        window.location.href = 'fim_de_jogo.html' //se essa intrucao for lida a pagina automaticamente sera redimensionada
    } else {
    document.getElementById('v' + vidas).src="imagens/coracao_vazio.png" //caso n clique a tempo, o Dom do document agindo sobre o id do v1 vai trocar a imagem por outra, pelo do coracao vazio
    vidas++
    }

//assim com var vidas = 1, primeiro quando o codigo for acionado por remocao autmotica vai contar como um e logo incrementar um valor de mias 1, ai fica a id v2 e ai tira mais um coracao se n clicar e assim por diante
} //aqu8i dentro vamos afetar os pontos de vida




var posicaoX = Math.floor(Math.random() * largura) - 90 //gera valores aleatorios, queremos gerar valores entra os intervalos de pixels ja identificados
var posicaoY = Math.floor(Math.random() * altura) - 90 //criei um numero aleatorio e multiplic pela info do tamnanho, pois o random só da numeros de 0 a 1, e uso o flor pra arredondar para baixo
//o valor sofre um decremento de 90 pra n ter posibilidade de estouro da tela

posicaoX = posicaoX < 0 ? 0 : posicaoX //aqui tiramos a possibilidade de valores negativos serem criados aleatorianmente
posicaoY = posicaoY < 0 ? 0 : posicaoY

console.log(posicaoX, posicaoY)

//criar elemento html de forma dinamica usando o DOM, e inserindo na pagina

var mosquito = document.createElement('img') 

mosquito.src = 'imagens/terrorista.png' //inseri a img por aqui mesmo
mosquito.className = tamanhoAleatorio() + ' ' + ladoAleatorio() //concateno as duas funcoews para atuarem juntois, e concateno um espaço entre elas para o js n ler com ose fosse tudo colado
//atribuo a funcao em que vai atribuir a classe 1, 2 ou a 3 para os tamhhos do mosquito
mosquito.style.left = posicaoX + 'px' //chamei a var mosquito e puxei o style e puxei o left e concatenei o valor em px
mosquito.style.top = posicaoY + 'px'
mosquito.style.position = 'absolute' //pra poder gerar a imagem ramdomicamente dentro do valor certo, o valor precisa ser absoluto
mosquito.id = 'mosquito'
mosquito.onclick = function () { //this. é um operdor que ajusto o contexto de um atribbuto ou metodo, ele faz refer encia ao proprio elemnto html que executa a funcao
    this.remove() //atribui e ai remove o elemento no click, por causa do onclick
}

document.body.appendChild(mosquito) //add um filho pro body, pq o dom é uma arvore genealogica

//console.log(ladoAleatorio()) //assim posso ver se de fato esta funcuionando, usar como the bug

}

// dand0 3 tamnhos diferentes pro mosquito
function tamanhoAleatorio(){
    var classe = Math.floor(Math.random() * 3) //o resultado disso será entre 0 e muito proximo de 3
    //com o floor vai gerar valores 0, 1 ou 2

    switch(classe) {
        case 0:
            return 'mosquito1'
        case 1:
            return 'mosquito2'
        case 2:
            return 'mosquito3'
            
    }

}

//dando a direcao, pra que lado ele vai ficar virado aleatoriamente

function ladoAleatorio(){
    var classe = Math.floor(Math.random() * 2) //o resultado disso será entre 0 e muito proximo de 2
    //com o floor vai gerar valores 0 ou 1, pq tenho que escolher aleatorimente só entre 2 valores

    switch(classe) {
        case 0:
            return 'ladoA'
        case 1:
            return 'ladoB'
    
    }        
}

