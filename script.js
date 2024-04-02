function verificar() {
    var data = new Date(); // Correção: adicione os parênteses para chamar o construtor de Date
    var ano = data.getFullYear(); // Correção: corrigido para 'data' em vez de 'date'
    var fano = document.getElementById('txtano');
    var res = document.querySelector('div#res');
    
    if (fano.value.length == 0 || isNaN(fano.value) || Number(fano.value) > ano) {
        window.alert("[ERRO] Verifique os dados e tente novamente");
        return; // Retorna para evitar a execução do código abaixo em caso de erro
    } 
    
    var fsex = document.getElementsByName('radsex'); // Corrigido para getElementsByName
    var idade = ano - Number(fano.value);
    var genero = '';
    var img = document.createElement('img'); // Cria um elemento img dinamicamente
    img.setAttribute('id', 'foto'); // Define o atributo ID da imagem como "foto"
    
    if (fsex[0].checked) {
        genero = 'Homem'; 
        if (idade >= 0 && idade <= 10){
            //criança
            img.setAttribute('src', 'BB-M.png')
        } else if (idade >= 10 && idade <= 21){
            //adolescente
            img.setAttribute ('src', 'ADC-M.png')
        } else if (idade >= 21 && idade <= 59){
            //adulto
            img.setAttribute ('src','ADT-M.png')
        } else if (idade >= 60){
            //idoso
            img.setAttribute ('src', 'idoso.png')
        }
    } else if (fsex[1].checked) {
        genero = 'Mulher';
        if (idade >= 0 && idade <= 10){
            //criança
            img.setAttribute('src', 'BB-F.png')
        } else if (idade >= 10 && idade <= 21){
            //adolescente
            img.setAttribute ('src', 'ADC-F.png')
        } else if (idade >= 21 && idade <= 59){
            //adulto
            img.setAttribute ('src','ADT-F.png')
        } else if (idade >= 60){
            //idoso
            img.setAttribute ('src', 'idosa.png')
        }
    }
    
    // Exibindo os resultados
    res.innerHTML = `Detectamos ${genero} com ${idade} anos.`;
    res.appendChild (img)
}
