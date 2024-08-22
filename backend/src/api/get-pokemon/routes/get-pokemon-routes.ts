//Routes: Routes define the API endpoints and 
//their associated controller actions.

export default {
  routes: [
    {
     method: 'GET',
     path: '/pokemon/:pokemonName/abilities',
     handler: 'get-pokemon-controller.getPokemonAbilities',
     config: {
       policies: [],
       middlewares: [],
     },
    },
  ],
};
