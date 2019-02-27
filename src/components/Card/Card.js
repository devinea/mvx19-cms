/** @jsx jsx */
import { jsx } from '@emotion/core'

import React from 'react';

import { Link } from 'gatsby';
import { colors, media } from '../theme';

const Card = props => (
  <div
    css={{
      width: '100%',
      display: 'inline-block',
      verticalAlign: 'top',
      [media.greaterThan('small')]: {
        maxWidth: 304
      },
      [media.greaterThan('medium')]: {
        maxWidth: 324
      },
      [media.greaterThan('large')]: {
        maxWidth: 331
      },
      [media.greaterThan('xlarge')]: {
        maxWidth: 396
      },
      borderRadius: 8,
      ':hover': {
        boxShadow: '0 0 22px 0 rgba(0, 0, 0, 0.70)'
      },
      ...props.cssProps
    }}
  >
    <div
      css={{
        backgroundColor: colors.gray_300,
        backgroundImage: `url( ${props.data.image.src} )`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'left',
        backgroundAttachment: 'local',
        backgroundSize: 'cover',
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
        height: 238,
        width: '100%'
      }}
    />
    <div
      css={{
        backgroundColor: colors.blue_900,
        borderBottomLeftRadius: 8,
        borderBottomRightRadius: 8,
        height: 238,
        width: '100%',
        position: 'relative'
      }}
    >
      <div
        css={{
          color: colors.white,
          padding: '20px 31px 15px 31px',
          [media.greaterThan('small')]: {
            fontSize: 21,
            fontWeight: 300,
            lineHeight: '23px'
          },
          [media.greaterThan('medium')]: {
            fontSize: 24,
            lineHeight: '30px',
          },
          [media.greaterThan('large')]: {
            fontSize: 24,
            lineHeight: '30px',
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
          [media.greaterThan('medium')]: {
            fontSize: 16,
            lineHeight: '25px',
          },
          [media.greaterThan('large')]: {
            fontSize: 16,
            lineHeight: '22px',
          },
          [media.greaterThan('xlarge')]: {
            fontSize: 18,
            lineHeight: '24px',
          },
          fontWeight: 'normal',
          width: '100%',
          '-webkit-line-clamp': '2',
          '-webkit-box-orient': 'vertical',
          textOverflow: 'ellipsis',
          overflow: 'hidden',
          display: '-webkit-box',
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
          color: colors.gray_400
        }}
      >
        <Link
          css={{
            textTransform: 'uppercase',
            lineHeight: '24px',
            fontWeight: 700,
            color: colors.blue_500,
            [media.greaterThan('large')]: {
              fontSize: 12,
            },
            [media.greaterThan('xlarge')]: {
              fontSize: 14,
            },
            ':hover': {
              color: colors.blue_500
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
