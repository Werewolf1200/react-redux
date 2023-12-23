import { configureStore } from '@reduxjs/toolkit';
import { counterSlice } from './counter/counterSlice';
import { pokemonSlice } from './slices/pokemon/pokemonSlice';

export const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    pokemons: pokemonSlice.reducer
  },
})