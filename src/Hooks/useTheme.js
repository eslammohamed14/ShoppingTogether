import {useSelector} from 'react-redux';

//local imports
import {darkTheme, lightTheme} from '../Constants/Theme';

const useTheme = () => {
  const theme = useSelector(state =>
    state.theme.darkMode ? darkTheme : lightTheme,
  );

  return theme;
};

export default useTheme;
