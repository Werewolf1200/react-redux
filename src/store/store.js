import { configureStore } from '@reduxjs/toolkit';
import { counterSlice } from './counter/counterSlice';
import { pokemonSlice } from './slices/pokemon/pokemonSlice';
import { todosApi } from './apis/todosApis';


export const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    pokemons: pokemonSlice.reducer,

    [todosApi.reducerPath]: todosApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(todosApi.middleware)
})