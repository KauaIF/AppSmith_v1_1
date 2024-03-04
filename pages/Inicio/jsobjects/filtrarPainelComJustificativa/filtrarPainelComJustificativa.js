export default {
  filtraPainel() {
    const animalsPainel = get_all_animals_someventes.data.data || [];
    const justificativas = get_justificativa.data.data || [];   
   

    // Criar um objeto para mapear os animais pelo ID
    const animaisPorId = animalsPainel.reduce((acc, animal) => {
      acc[animal.id] = animal;
      return acc;
    }, {});

    // Iterar sobre as justificativas e adicionar informações ao animal correspondente
    justificativas.forEach(justificativa => {
      const animalId = justificativa.animal.id;
      const animal = animaisPorId[animalId];

      if (animal) {
        // Adicionar informações da justificativa ao animal
        animal.justificativa = justificativa.justificativa;
      }
    });
    const animaisFiltrados = animalsPainel.filter(animal => animal.Status_geral === "Desativado");

    return animaisFiltrados;
	}
}