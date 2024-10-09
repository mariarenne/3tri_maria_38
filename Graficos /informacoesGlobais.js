const url = 'https://raw.githubusercontent.com/guilhermeonrails/api/main/dados-globais.json'


/*IMPORTANTE: NO INDEX LOGO ABAIXO DO FOOTER digite:
script type="module" src="graficos/informacoesGlobais.js></script>
*/


/*Esse comando requisitará os dados da url acima*/
async function vizualizarInformacoesGlobais() {
    /*O comando abaixo aguarda a requisição feita acima*/
    const res = await fetch(url)    
    /*O próximo comando pegará somente a parte da resposta do conteúdo da url*/    
    const dados = await res.json()
    /*console.log(dados);*/
    /*Teremos duas estruturas, uma relacionada só a gráfico e outra relacionada a textos*/
    const paragrafo = document.createElement('p')
    /*IMPORTANTE ESTILIZAR A CLASSE ABAIXO NO CSS*/
    paragrafo.classList.add('graficos-conteiner__texto')
    /*Criar o texto, o símbolo $ serve para colocar entre os textos uma informação. É um tipo de comando dentro do texto*/    
    paragrafo.innerHTML = `Você sabia que o mundo tem <span>${dados.total_pessoas_mundo}</span> de pessoas e que aproximadamente <span>${dados.total_pessoas_conectadas}</span> estão conectadas em alguma rede social e passam em média <span>${dados.tempo_medio}</span> horas conectadas.`
    console.log(paragrafo)


    const container = document.getElementById('graficos-container')
    container.appendChild(paragrafo)    
}
vizualizarInformacoesGlobais()




/*IMPORTANTE: cole todo o texto abaixo no style.css, logo depois do bloco nava:hover */
/*
.graficos-container {
    //Distancia o texto do topo e da basa//
    margin: 5rem;
}


.graficos-container__texto {    
    font-size: 1.3rem;
    //Alinha o texto ao centro//
    text-align: center;
    padding: 2rem;
    //Borda no texto//
    border: var(--secondary-color) solid 2px;
}


//Da enfase em algumas partes do texto. Colocar a tag span onde se quer destacar//
span {
    font-weight: bold;
    color: var(--secondary-color);
}
*/
/*Crie uma pasta chamada: graficos
Crie um arquivo dentro desta pasta chamada: informacoesGlobais.js*/




/*O endereço abaixo você encontra neste endereço, no link "dados
globais" https://github.com/guilhermeonrails/api?tab=readme-ov-file*/




/*const url='https://raw.githubusercontent.com/guilhermeonrails/api/main/dados-globais.json'




console.log(url);*/




const url = 'https://raw.githubusercontent.com/guilhermeonrails/api/main/dados-globais.json'




/*IMPORTANTE: NO INDEX LOGO ABAIXO DO FOOTER digite:
<script type="module" src="graficos/informacoesGlobais.js></script>
*/




/*Esse comando requisitará os dados da url acima*/
async function vizualizarInformacoesGlobais() {
    /*O comando abaixo aguarda a requisição feita acima*/
    const res = await fetch(url)    
    /*O próximo comando pegará somente a parte da resposta do conteúdo da url*/    
    const dados = await res.json()    
    /*Teremos duas estruturas, uma relacionada só a gráfico e outra relacionada a textos*/
    const pessoasConectadas = (dados.
    total_pessoas_conectadas / 1e9)
    const pessoasNoMundo = (dados.total_pessoas_mundo / 1e9)
    const horas = parseInt(dados.tempo_medio)
    const minutos = Math.round((dados.tempo_medio - horas)*100)
    const porcentagemConectada = ((pessoasConectadas/pessoasNoMundo)*100).toFixed(2)
    const paragrafo = document.createElement('p')
    /*IMPORTANTE ESTILIZAR A CLASSE ABAIXO NO CSS*/
    paragrafo.classList.add('graficos-conteiner__texto')
    /*Criar o texto, o símbolo $ serve para colocar entre os textos uma informação. É um tipo de comando dentro do texto*/    
    paragrafo.innerHTML = `Você sabia que o mundo tem <span>${pessoasNoMundo}bilhões</span> de pessoas e que aproximadamente <span>${pessoasConectadas} bilhões</span> estão conectadas em alguma rede social e passam em média <span>${horas} horas</span> e <span>${minutos} minutos </span> conectadas.<br>Isso significa que aproximadamente <span>${porcentagemConectada}%</span> de pessoas estão conectadas em alguma rede social.`
   
    const container = document.getElementById ('graficos-container')
    container.appendChild(paragrafo)
}
vizualizarInformacoesGlobais()


