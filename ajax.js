
//quando formulario é enviado

$('#formulario').on('submit', function () {

	//armazenando objetos
	var formulario = $(this);
    var botao = $('#salvar');
    var mensagem = $('#mensagem')
	
	//indicador de carregamento
	 botao.button('loading');
	
	//enviando o forms 
	 $(this).ajaxSubmit({
	
	//tipo de retorno do servidor
	dataType: 'json',
	
	//se a requisição for um sucesso
	success: function (retorno) {
	
		//se cadastrado com sucesso
		if (retorno.sucesso) {
		 mensagem.attr('class', 'alert alert-success');
		
		//limpando o forms
		formulario.resetForm();
		
		}
		else {
		//mensagem de erro
		 mensagem.attr('class', 'alert alert-danger');
		}
		
		 mensagem.html(retorno.mensagem);
		
		
		//esconder indicador de carregamento
		botao.button('reset');
		
		},
		
		 error: function () {
		
		//mensagem erro
		 mensagem.attr('class', 'alert alert-danger');
		
		 mensagem.html(retorno.mensagem);
		
		botao.button('reset');
        }
		
		});
		
		return false;
});
		
		