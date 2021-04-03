function convertDollar(){
    var valDolar = document.getElementById('dollarquote').value;
    var myDolar  = document.getElementById('dollaramount').value;
    
    valDolar = parseFloat(valDolar);
    myDolar = parseFloat(myDolar);
    
    var result = valDolar * myDolar;
    
    document.getElementById('result').innerHTML =  "Valor em reais R$: "+ result.toFixed(2);
}