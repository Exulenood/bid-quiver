import { extendTheme } from 'native-base';

interface Colors {
  surfaces: {
    [key: string]: string;
  };
  lines: {
    [key: string]: string;
  };
  texts: {
    [key: string]: string;
  };
}

interface Textprops {
  fontFamily: {
    [key: string]: string;
  };
  fontSize: {
    [key: string]: number;
  };
}

export const Colors: Colors = {
  surfaces: {
    primary: '#8c2a96ff',
    secondary: 'F6DEF9',
    whiteBack: 'FFFFFF',
    greyBack: '#DCDCDC',
  },
  lines: {
    primary: '#000000',
  },
  texts: {
    primary: '#000000',
  },
};

export const TextStyle: Textprops = {
  fontFamily: {
    primary: 'Barlow_Regular',
  },
  fontSize: {
    normal: 20,
    large: 30,
  },
};

export const appStandards = extendTheme({
  colors: Colors,
  components: {
    Input: {
      variants: {
        neutral: {
          w: '100%',
          h: '60px',
          borderRadius: '5',
          color: 'texts.primary',
          bg: 'surfaces.greyBack',
        },
      },
      defaultProps: {
        fontSize: TextStyle.fontSize.normal,
        fontFamily: TextStyle.fontFamily.primary,
      },
    },
  },
});
