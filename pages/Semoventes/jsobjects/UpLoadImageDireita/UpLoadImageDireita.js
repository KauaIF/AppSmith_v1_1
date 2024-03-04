export default {
	/*
@author Mateus Lannes 
@altered Felipe Frechiani
Faz o envio de imagem para o servidor. Atualiza o identificador da imagem no objeot image e atualiza a url para ser exbida no componente visual da interface. 

*/
	data: {},
	url: "",
	id: 0,
	sendImage (ad) {
		
		Desabilitar_botoes.disabilitaBotoes();
		upload_file_direita.run().then((response) =>  {

			this.data = upload_file_direita.data;

			if(ad == 1){
				//atualiza o identificador na imagem no pop-up "Adicionar Semovente" da página "Semoventes"
				atualizaIdFrenteAdiciona.AtualizaDireita(response[0].id);
			}else{
				//Atualizar o identificador da imagem para poder enviar na hora da atualização o id novo gerado no backend
				atualizaId.direita(response[0].id);
				//atualizar a imagem no componente visual 
				ImagemLocal.atualizaDireita(response[0].formats.thumbnail.url);
				
			}
			showAlert("Imagem enviada com sucesso");
			Desabilitar_botoes.habilitaBotoes();

		}).catch(error => {
			
			showAlert("Imagem não enviada, tenta novamente");
			Desabilitar_botoes.habilitaBotoes();

			// mostra o erro do porque a imagem nao foi enviada
			showAlert(JSON.stringify(upload_file_direita.data.error.details.errors), 'error');
		});

		return this.data;	
	},

}