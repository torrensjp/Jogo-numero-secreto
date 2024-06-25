        let listaDeNumerosSorteados = [];
        let numeroLimite = 10;
        let numeroSecreto = gerarNumeroAleatorio();
        let tentativas = 1;

        function exibirTextoNaTela(tag,texto) {
            let campo = document.querySelector(tag)
            campo.innerHTML = texto;
            responsiveVoice.speak(texto,'Brazilian Portuguese Female', {rate:1.2});

        }

        function exibirMensagemInicial(){
        exibirTextoNaTela('h1', 'Jogo do número secreto');
        exibirTextoNaTela('p', 'Escolha um numero entre 1 e 10');
        }

        exibirMensagemInicial();

        function verificarChute() {
            let chute =document.querySelector('input').value;
            console.log(numeroSecreto);
            if (chute == numeroSecreto){
                exibirTextoNaTela('h1', 'acertou!');
                let palavraTentativa = tentativas > 1? 'tetativas' : 'tentativa';
                let mensagemTentativas = ` Você descobriu o número secreto com ${tentativas} ${palavraTentativa}! `;
                exibirTextoNaTela('p',mensagemTentativas);
                document.getElementById('reiniciar').removeAttribute('disabled');
                }else{
                    if(chute > numeroSecreto) {
                        exibirTextoNaTela('p', 'O número secreto é menor!');
                    }else {
                        exibirTextoNaTela('P', 'O número secreto é maior!');
                    }
                    tentativas++;
                    limparCampo();
                    document.getElementById('reiniciar').setAttribute('disabled',
                        true)
                }
        }   

        function gerarNumeroAleatorio() {
           let NumeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
           let quantidadeDeElementosNalista = listaDeNumerosSorteados.length;
           if (quantidadeDeElementosNalista == numeroLimite ){
            listaDeNumerosSorteados = [];
           }
           if (listaDeNumerosSorteados.includes(NumeroEscolhido)) {
            return gerarNumeroAleatorio();
           } else {
            listaDeNumerosSorteados.push(NumeroEscolhido);
            console.log(listaDeNumerosSorteados);
            return NumeroEscolhido;
           }
            }
        function limparCampo() {
            chute = document.querySelector('input');
            chute.value = '';
        }
        function reiniciarJogo(){
            numeroSecreto=
        numeroSecreto = gerarNumeroAleatorio();
        limparCampo() 
        tentativas=1;
        exibirMensagemInicial();
       }
       

