import { Theme, createMuiTheme } from '@material-ui/core/styles';

import { fontFamilies } from './variables';

export const theme: Theme = createMuiTheme({
  overrides: {
    MuiCssBaseline: {
      '@global': {
        body: {
          height: '100%',
        },
        html: {
          height: '100%',
        },
      },
    },
  },
  typography: {
    fontFamily: fontFamilies.base,
  },
});
