📚 Pokédex CLI com Node.js

Este projeto é uma aplicação simples de linha de comando (CLI) feita em Node.js que permite consultar informações de um Pokémon utilizando a API pública PokéAPI.

🚀 Funcionalidades
🔎 Buscar Pokémon pelo nome ou ID
📊 Exibir informações básicas:
Nome
ID
Altura
Peso
🧬 Mostrar:
Tipos
Habilidades
🔄 Exibir a cadeia de evoluções
🛠️ Tecnologias utilizadas
Node.js
JavaScript
PokéAPI
prompt-sync (entrada de dados no terminal)

▶️ Como usar

Execute o arquivo com:

node app.js

Depois disso, digite o nome ou ID de um Pokémon:

Digite o nome ou ID do Pokémon: pikachu
📌 Exemplo de saída
=== DADOS DO POKÉMON ===
Nome: pikachu
ID: 25
Altura: 4
Peso: 60
Tipos: electric
Habilidades: static, lightning-rod
Evoluções: pichu -> pikachu -> raichu

🧠 Estrutura do código

🔹 Função consultarPokemon()
Responsável por:
Receber input do usuário
Buscar dados do Pokémon na API
Exibir as informações principais

🔹 Função pegarEvolucoes(dados)
Busca a cadeia evolutiva do Pokémon
Percorre as evoluções usando um while
Exibe no formato:
pokemon1 -> pokemon2 -> pokemon3