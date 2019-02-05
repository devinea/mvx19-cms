const colors = {
  lighter: '#373940',
  white: '#ffffff',
  black: '#000000',
  gray: '#f5f5f5',
  text: '#1a1a1a',
  subtle: '#6d6d6d',
  subtleOnDark: '#999',
  divider: '#ececec',
  note: '#ffe564'
};

const SIZES = {
  xsmall: { min: 0, max: 599 },
  small: { min: 600, max: 779 },
  medium: { min: 780, max: 979 },
  large: { min: 980, max: 1279 },
  xlarge: { min: 1280, max: 1339 },
  xxlarge: { min: 1340, max: Infinity },
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
  },
};

const linkStyle = {
  backgroundColor: colors.white,
  borderBottom: `1px solid ${colors.black}`,
  color: colors.text,

  ':hover': {
    backgroundColor: colors.white,
    borderBottomColor: colors.text
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

    '& > p:first-child': {
      fontSize: 18,
      fontWeight: 300,
      color: colors.subtle,

      '& a, & strong': {
        fontWeight: 400
      }
    },

    '& p': {
      marginTop: 30,
      fontSize: 17,
      lineHeight: 1.7,
      color: colors.subtle,

      '&:first-of-type': {
        marginTop: 15
      },

      '&:first-child': {
        marginTop: 0
      }
    },

    '& h3 + p, & h3 + p:first-of-type': {
      marginTop: 20
    },

    '& p > code, & li > code': {
      background: colors.note,
      color: colors.text
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
      borderBottom: `1px solid ${colors.divider}`,
      marginTop: 40,

      ':first-child': {
        marginTop: 0
      }
    },

    '& h1': {
      lineHeight: 1.2,
      fontSize: 30
    },

    '& h2': {
      borderTop: `1px solid ${colors.divider}`,
      marginTop: 44,
      paddingTop: 40,
      lineHeight: 1.2,

      ':first-child': {
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
      color: colors.subtle,
      lineHeight: 1.3,
      marginTop: 50,
      fontWeight: 400
    },

    '& h4 + p': {
      marginTop: 20
    },

    '& table' : {
      color: colors.subtle,
    },

    '& ol, & ul': {
      marginTop: 20,
      fontSize: 16,
      color: colors.text,
      paddingLeft: 20,
      color: colors.subtle,

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
      backgroundColor: '#ffe564',
      borderLeftColor: colors.note,
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

export { colors, media, sharedStyles };
