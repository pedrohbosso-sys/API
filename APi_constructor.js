// Importa o prompt-sync para ler a entrada do usuário
const prompt = require('prompt-sync')();

// Se estiver usando Node < 18, descomente:
// const fetch = require('node-fetch');

//  Função separada para evoluções (mais simples e organizado)
async function pegarEvolucoes(dados) {
    try {
        const res1 = await fetch(dados.species.url);
        const dadosSpecies = await res1.json();

        const res2 = await fetch(dadosSpecies.evolution_chain.url);
        const dadosCadeia = await res2.json();

        const evolucoes = [];
        let atual = dadosCadeia.chain;

        while (atual) {
            evolucoes.push(atual.species.name);
            atual = atual.evolves_to[0];
        }

        console.log(`Evoluções: ${evolucoes.join(' -> ')}`);

    } catch (erro) {
        console.log('Erro ao obter evoluções:', erro.message);
    }
}


// Função principal
function consultarPokemon() {
    let pokemon = prompt('Digite o nome ou ID do Pokémon: ');
    pokemon = pokemon.trim().toLowerCase();

    const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;

    fetch(url)
        .then((response) => {
            if (!response.ok) {
                throw new Error('Pokémon não encontrado');
            }
            return response.json();
        })
        .then((dados) => {
            console.log('\n=== DADOS DO POKÉMON ===');
            console.log(`Nome: ${dados.name}`);
            console.log(`ID: ${dados.id}`);
            console.log(`Altura: ${dados.height}`);
            console.log(`Peso: ${dados.weight}`);

            const tipos = dados.types.map(t => t.type.name);
            console.log(`Tipos: ${tipos.join(', ')}`);

            const habilidades = dados.abilities.map(a => a.ability.name);
            console.log(`Habilidades: ${habilidades.join(', ')}`);




            // Aqui chama a função de evoluções
            pegarEvolucoes(dados);
        })
        .catch((erro) => {
            console.log('Erro:', erro.message);
        });
}

// Chama a função
consultarPokemon();