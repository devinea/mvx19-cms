import React from 'react';

import { Link } from 'gatsby';
import { colors, media } from '../theme';

const Card = props => (
  <div
    css={{
      width: '100%',
      display: 'inline-block',
      verticalAlign: 'top',
      [media.greaterThan('large')]: {
        maxWidth: 331
      },
      [media.greaterThan('xlarge')]: {
        maxWidth: 396
      },
      ...props.cssProps
    }}
  >
    <div
      css={{
        backgroundColor: colors.grey_350,
        backgroundImage: `url( ${props.data.image.src} )`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '50% 50%',
        backgroundAttachment: 'local',
        backgroundSize: 'cover',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        height: 238,
        width: '100%'
      }}
    />
    <div
      css={{
        backgroundColor: colors.blue_500,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        height: 238,
        width: '100%',
        position: 'relative'
      }}
    >
      <div
        css={{
          color: colors.white,
          padding: '20px 31px 15px 31px',
          [media.greaterThan('large')]: {
            fontSize: 24,
            lineHeight: '29px',
          },
          [media.greaterThan('xlarge')]: {
            fontSize: 28,
            lineHeight: '37px',
          },
          minHeight: 109,
          fontWeight: 300,
          width: '100%'
        }}
      >
        {props.data.title}
      </div>
      <div
        css={{
          color: colors.white,
          padding: '0 31px',
          [media.greaterThan('large')]: {
            fontSize: 16,
            lineHeight: '22px',
          },
          [media.greaterThan('xlarge')]: {
            fontSize: 18,
            lineHeight: '24px',
          },
          fontWeight: 300,
          width: '100%',
          '-webkit-line-clamp': '2',
          textOverflow: 'ellipsis',
          overflow: 'hidden',
          display: '-webkit-box',
          '-webkit-box-orient': 'vertical',
          wordWrap: 'break-word'
        }}
      >
        {props.data.description}
      </div>
      <div
        css={{
          padding: '22px 31px',
          width: '100%',
          position: 'absolute',
          bottom: 0,
          color: colors.grey_550
        }}
      >
        <Link
          css={{
            textTransform: 'uppercase',
            lineHeight: '24px',
            fontWeight: 700,
            [media.greaterThan('large')]: {
              fontSize: 12,
            },
            [media.greaterThan('xlarge')]: {
              fontSize: 14,
            },
            ':hover': {
              color: colors.grey_600
            }
          }}
          to={props.data.url}
        >
          {props.data.action}
        </Link>

      </div>
    </div>
  </div>
);

export default Card;