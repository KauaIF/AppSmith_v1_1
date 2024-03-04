export default {
	myVar1: [],
	myVar2: {},
	adicionarInformacoesTratamento( resultadoComNomeDoenca = InfoPainel.adicionarNomeDoenca(get_animal_tratamento_medico,get_e_causado), get_possui = get_possuis) {

  // Mapear o array de dados do resultadoComNomeDoenca
  const resultadoFinal = resultadoComNomeDoenca.data.map((item) => {
    // Encontrar correspondências no array de dados do getPossuis pelo id do tratamento médico
  const correspondenciasPossuis = get_possui.data.data.filter(
      (itemPossuis) => itemPossuis.tratamento_medico.id === item.tratamento_medicos[0].id
    );

    // Adicionar informações ao objeto
    item.tratamento_medicos[0].informacoes_medicamento = correspondenciasPossuis.map((itemPossuis) => {
      return {
        dosagem: itemPossuis.dosagem,
        data_inicio: itemPossuis.data_inicio,
        data_fim: itemPossuis.data_fim,
        prescricao: itemPossuis.prescricao,
        nome_medicamento: itemPossuis.medicamento.nome,
      };
    });

    return item;
  });

  // Retornar o resultado final com as informações adicionadas
  return {
    data: resultadoFinal,
    meta: resultadoComNomeDoenca.meta
  };



	}
}