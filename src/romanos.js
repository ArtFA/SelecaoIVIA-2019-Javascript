export class Nromanos{
  retorne(numero) {

    //obs: como os numeros desses arrays são a base de toda a estrurura dos numeros romanos, eles serão chamados de 'numeros-chave'
    var nArabicos = [1,5,10,50,100,500,1000,5000] //array dos principais numeros(numeros-chave) em arabico
    var nRomanos = ["I","V","X","L","C","D","M"] //array dos principais numeros(numeros-chave) em romano
    var casa, casaIndex; //casa em que o numero se encontra e o indice dessa casa no array
    var resposta = ""; //resposta que vai ser retornada
    //---------------------------------------------------------------------------------------

    //se o numero estiver fora do intervalo dos numeros romanos (entre 1 e 3999)
    if((numero < 1) || (numero >3999)){
      resposta = "Fora do intervalo";
      return resposta;
    }

    //loop que percorre 'nArabicos[]' para encontrar o intervalo em que o numero entá inserido
    for(var i = 0; i<nArabicos.length;i++){
    
      //ifs para encontrar em qual casa o numero está (milhares, centenas, dezenas ou unidades)   
      if(numero > 1000)
        casa = 1000, casaIndex = 6;
      else if (numero >100)
        casa = 100, casaIndex = 4;
      else if (numero >10)
        casa = 10, casaIndex = 2;
      else if (numero >1)
        casa = 1, casaIndex = 0;
      else if (numero == 0) //se o numero se tornou 0, a conversão acabou e a resposta é retornada
        return resposta;

      //se o numero for igual a algum dos numeros em 'nArabicos[]', é retornado a posição daquele numero em 'nRomanos[]'
      if(numero == nArabicos[i]){
        resposta = nRomanos[i];
        return resposta;
      }

      //quando o intervalo daquele numero é achado
      if(numero < nArabicos[i]){ //o numero está entre 'nArabicos[i-1]' e 'nArabicos[i]'

        console.log("");
        console.log("resto:",numero);

        //representa o valor relativo do primeiro algarismo do numero
        var valorRelativo = casa*Math.trunc(numero/casa); //Exemplo: se numero = 949, valorRelativo = 900

        //se a diferença entre o numero-chave que fecha o intervalo e o 'valorRelativo' for igual à casa, significa que será usada a regra da subtração dos numeros(como no numero 'IV')
        if(nArabicos[i] - valorRelativo == casa){ //Exemplo: 10-9 == 1
          resposta = resposta.concat(nRomanos[casaIndex]); //é integrado à resposta o caractere romano da casa que o numero se encontra
          resposta = resposta.concat(nRomanos[i]); //é integrado à resposta o caractere romano do numero-chave que fecha o intervalo
          console.log("parte retirada:",valorRelativo);
          numero -= valorRelativo; //é retirado o valor relativo do primeiro algarismo do numero para se trabalhar na conversão do resto
        }
        else{ //se não, será usada a regra da soma dos numeros (como no numero 'VII')
          resposta = resposta.concat(nRomanos[i-1]); //é integrado à resposta o caractere romano do numero-chave que abre o intervalo
          console.log("parte retirada:", nArabicos[i-1]);
          numero -= nArabicos[i-1]; //é retirado o valor do numero-chave que abre o intervalo para se trabalhar na conversão do resto
        }
        console.log("conversao:",resposta);
        i = 0; //o loop é reiniciado para se trabalhar no resto
      }
    }
  }
}