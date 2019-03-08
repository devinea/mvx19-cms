const colors = {
  white: '#FFFFFF',
  black: '#000000',

  blue_300: '#0A6ED1',
  blue_500: '#67B2F0',
  blue_600: '#427CAC',

  blue_800: '#354A5F',
  blue_900: '#2B3845',

  gray_100: '#EEEEEF',
  gray_200: '#E1E4E9',
  gray_300: '#B7BAC2',
  gray_400: '#A7ABB4',
  gray_500: '#6F7275',
  gray_600: '#515559',
  gray_700: '#32363A',

  yellow_500: '#ffe564'
};

const header = {
  desktop: {
    height: 64,
    paddingLeft: 40,
    paddingRight: 40,
    search: {
      height: 40
    }
  },
  mobile: {
    height: 50,
    paddingLeft: 20,
    paddingRight: 20,
    search: {
      height: 34
    }
  }
};

const SIZES = {
  small: { min: 0, max: 599, width: 304, column: 64, gutter: 16 },
  medium: { min: 600, max: 1023, width: 528, column: 52, gutter: 16 },
  large: { min: 1024, max: 1279, width: 828, column: 47, gutter: 24 },
  xlarge: { min: 1280, max: Infinity, width: 984, column: 60, gutter: 24 }
};

const media = {
  between(smallKey, largeKey, excludeLarge = false) {
    if (excludeLarge) {
      return `@media (min-width: ${
        SIZES[smallKey].min
      }px) and (max-width: ${SIZES[largeKey].min - 1}px)`;
    } else {
      if (SIZES[largeKey].max === Infinity) {
        return `@media (min-width: ${SIZES[smallKey].min}px)`;
      } else {
        return `@media (min-width: ${SIZES[smallKey].min}px) and (max-width: ${
          SIZES[largeKey].max
        }px)`;
      }
    }
  },

  getSize(key) {
    return SIZES[key];
  },

  greaterThan(key) {
    return `@media (min-width: ${SIZES[key].min}px)`;
  },

  lessThan(key) {
    return `@media (max-width: ${SIZES[key].min - 1}px)`;
  },

  size(key) {
    const size = SIZES[key];

    if (size.min == null) {
      return media.lessThan(key);
    } else if (size.max == null) {
      return media.greaterThan(key);
    } else {
      return media.between(key, key);
    }
  }
};

const linkStyle = {
  backgroundColor: colors.white,
  borderBottom: `1px solid ${colors.black}`,
  color: colors.gray_600,

  ':hover': {
    backgroundColor: colors.white,
    borderBottomColor: colors.gray_600
  }
};

const sharedStyles = {
  markdown: {
    lineHeight: '25px',

    '& .gatsby-highlight': {
      marginTop: 25,
      marginLeft: -30,
      marginRight: -30,
      marginBottom: 25,
      paddingLeft: 15,
      paddingRight: 15
    },

    '& a:not(.anchor):not(.gatsby-resp-image-link)': linkStyle,

    '& > p:first-of-type': {
      fontSize: 18,
      fontWeight: 300,
      color: colors.gray_500,

      '& a, & strong': {
        fontWeight: 400
      }
    },

    '& p': {
      marginTop: 30,
      fontSize: 17,
      lineHeight: 1.7,
      color: colors.gray_500,

      '&:first-of-type': {
        marginTop: 15
      },

      '&:first-of-type': {
        marginTop: 0
      }
    },

    '& h3 + p, & h3 + p:first-of-type': {
      marginTop: 20
    },

    '& p > code, & li > code': {
      background: colors.yellow_500,
      color: colors.gray_600
    },

    '& p > code, & li > code, & p > a > code, & li > a > code': {
      padding: '0 3px',
      fontSize: '0.94em',
      wordBreak: 'break-word'
    },

    '& hr': {
      height: 1,
      marginBottom: -1,
      border: 'none',
      borderBottom: `1px solid ${colors.gray_200}`,
      marginTop: 40,

      ':first-of-type': {
        marginTop: 0
      }
    },

    '& h1': {
      lineHeight: 1.2,
      fontSize: 30
    },

    '& h2': {
      borderTop: `1px solid ${colors.gray_200}`,
      marginTop: 44,
      paddingTop: 40,
      lineHeight: 1.2,

      ':first-of-type': {
        borderTop: 0,
        marginTop: 0,
        paddingTop: 0
      }
    },

    '& hr + h2': {
      borderTop: 0,
      marginTop: 0
    },

    '& h3': {
      paddingTop: 45
    },

    '& h2 + h3, & h2 + h3:first-of-type': {
      paddingTop: 30
    },

    '& h4': {
      fontSize: 20,
      color: colors.gray_500,
      lineHeight: 1.3,
      marginTop: 50,
      fontWeight: 400
    },

    '& h4 + p': {
      marginTop: 20
    },

    '& table': {
      color: colors.gray_500
    },

    '& ol, & ul': {
      marginTop: 20,
      fontSize: 16,
      color: colors.gray_600,
      paddingLeft: 20,
      color: colors.gray_500,

      '& p, & p:first-of-type': {
        fontSize: 16,
        marginTop: 0,
        lineHeight: 1.2
      },

      '& li': {
        marginTop: 10
      },

      '& li.button-newapp': {
        marginTop: 0
      },

      '& ol, & ul': {
        marginLeft: 20,
        marginTop: 10
      }
    },

    '& img': {
      maxWidth: '100%'
    },

    '& ol': {
      listStyle: 'decimal'
    },

    '& ul': {
      listStyle: 'disc'
    },

    '& blockquote': {
      backgroundColor: colors.yellow_500,
      borderLeftColor: colors.yellow_500,
      borderLeftWidth: 9,
      borderLeftStyle: 'solid',
      padding: '20px 45px 20px 26px',
      marginBottom: 30,
      marginTop: 20,
      marginLeft: -30,
      marginRight: -30,

      '& p': {
        marginTop: 15,

        '&:first-of-type': {
          fontWeight: 700,
          marginTop: 0
        },

        '&:nth-of-type(2)': {
          marginTop: 0
        }
      }
    },

    '& .gatsby-highlight + blockquote': {
      marginTop: 40
    }
  }
};

export { colors, header, media, sharedStyles };
