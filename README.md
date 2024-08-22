# Projeto Full-Stack ZRP

![image](https://github.com/user-attachments/assets/302e7b65-19a9-45f4-aca8-098b4a024415)

Este projeto é uma aplicação full-stack construída com as seguintes tecnologias:

- **Backend**: Strapi, TypeScript, Jest, Docker
- **Frontend**: Vite, TypeScript, Tan Stack Query, Tailwind CSS, Vitest, Testing Library, Docker

## Pré-requisitos

- **Docker**: Certifique-se de ter o Docker instalado na sua máquina. 

## Variáveis de Ambiente Frontend

- VITE_ZRP_BASE_API_URL=http://localhost:1337/api/
- Rodar o backend (Strapi) na porta 1337 ou rodar a imagem docker e mudar a URL no .env do Frontend

## Acesso público

Por default, CUSTOM API endpoints não são acessiveis publicamente. Para controlocar o acesso, você pode setar a permissão da API no Dashboard Strapi

- Navigate to “Settings” > “Roles” > “Authenticated.”
- For public access, visit “Settings” > “Roles” > “Public.”
- In the “Get-Pokemons” route permissions, select the necessary access permissions.
