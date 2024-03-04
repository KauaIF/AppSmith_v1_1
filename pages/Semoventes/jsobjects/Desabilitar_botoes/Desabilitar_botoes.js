export default {
	disabilitaBotoes() {
	  //desabilita os botoes (eles não podem ser clicados) para nao deixar o usuario cadastrar um cão antes de enviar essa mensagem 
		CriarCopy.setDisabled(true);
		Criar.setDisabled(true);
		//habilita a visibilidade desses textos para mostrar que a imagem esta sendo carregada
		LoadingItem.setVisibility(true);
		TextLoading.setVisibility(true);
		LoadingItemCopy.setVisibility(true);
		TextLoadingCopy.setVisibility(true);
	},
	habilitaBotoes() {
			CriarCopy.setDisabled(false);
			Criar.setDisabled(false);
		
			//desabilita a visibilidade de textos que avisam que a imagem esta sendo carregada, porque a imgaem já foi enviada
			LoadingItem.setVisibility(false);
			TextLoading.setVisibility(false);
			LoadingItemCopy.setVisibility(false);
			TextLoadingCopy.setVisibility(false);
	}
}