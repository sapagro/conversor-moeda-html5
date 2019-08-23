function chamarAPI(){
	console.log("Chamando API");
	const endpoint = "https://api.exchangeratesapi.io/latest";
	var oParametros = {
		base: $("#moeda_origem").val()
	};
	$.get(endpoint, oParametros, callback );
	// var dataCotacao = $("#data_cotacao").val();
	// var sMoedaOrigem = $("#moeda_origem").val();
	// if(dataCotacao == ''){
	//   var endpoint1 = "https://api.exchangeratesapi.io/latest?base=";
	//   endpoint1 = endpoint1+sMoedaOrigem;
	//   $.get(endpoint1, callback);
	// } else {
 //     //const endpoint2 = "https://api.exchangeratesapi.io/2010-01-12";
 //     //https://api.exchangeratesapi.io/2010-01-12?base=USD
	//   var endpoint2 = 'https://api.exchangeratesapi.io/'+dataCotacao+'?base='+sMoedaOrigem;
 //     $.get(endpoint2, callback);
	// }
}

function callback(resultado){
	//console.log(resultado);
	var sMoedaDestino = $("#moeda_destino").val();
	var fValor = resultado.rates[sMoedaDestino];
	
	$("#valor_destino").text(fValor);
	$("#moeda_destino_celula").text(sMoedaDestino);
}

function pegarDataAtual(){
    var dataTela = $("#data_cotacao").val();
    if(dataTela == ''){
		var today = new Date();
		var month = today.getMonth()+1;
		if(month >= 1 && month <= 9){
			month = '0'+month;
		}
		var newDate = today.getFullYear()+'-'+month+'-'+today.getDate();
		var dateControl = document.querySelector('input[type="date"]');
		dateControl.value = newDate;
		$("#data_cotacao").val(newDate);
    } else {
    	//do nothing
    }
    
	// $("#data_cotacao").text(date);
	// document.querySelector("#data_cotacao").innerText = date;
   //data = new Date();
   //var date = new DateUtil("yyyy-MM-dd");
   //document.getElementById('data_cotacao').value = data.getFullYear()+'-'+data.getMonth()+'-'+data.getDay();
}

var abc = callback;
var abc = callback();