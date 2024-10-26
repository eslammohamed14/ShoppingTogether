import {createSlice} from '@reduxjs/toolkit';

const ThemeSlice = createSlice({
  name: 'theme',
  initialState: {darkMode: false},
  reducers: {
    toggleTheme: state => {
      state.darkMode = !state.darkMode;
    },
    setDarkMode: (state, action) => {
      state.darkMode = action.payload;
    },
  },
});

export const {toggleTheme, setDarkMode} = ThemeSlice.actions;
export default ThemeSlice.reducer;
