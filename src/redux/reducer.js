import { ADD_FAV, REMOVE_FAV, FILTER, ORDER } from "./action-types"


const initialState = {
  myFavorites: [],
  allCharacters: [],
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_FAV:
      return {
        ...state,
        myFavorites: [...state.allCharacters, payload],
        allCharacters: [...state.allCharacters, payload]
      };
    case REMOVE_FAV:
      return {
        ...state,
        myFavorites: state.myFavorites.filter((fav) => fav.id !== payload),
      };
      case FILTER:
        const allCharactersFiltered = state.allCharacters.filter(character => character.gender === payload)
        return {
          ...state,
          myFavorites:
          payload === 'allCharacters'
          ? [...state.allCharacters]
          : allCharactersFiltered
        };
        case ORDER:
        const allCharacteresCopy = [...state.allCharacters]
        return {
          ...state,
          myFavorites: 
          payload === 'A' 
          ? allCharacteresCopy.sort((a, b) => a.id - b.id)
          : allCharacteresCopy.sort((a, b) => b.id - a.id)
        };
    default:
      return { ...state };
  }
};

export default reducer;
