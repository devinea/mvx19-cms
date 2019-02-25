import React from 'react';

import Flex from './../Flex';
import { colors, media } from '../theme';


const Description = props => (
  <Flex
    css={{
      width: '100%',
      paddingBottom: 30,
      paddingTop: 20,
      borderTopColor: colors.gray_200,
      borderTopStyle: 'solid',
      borderTopWidth: 1
    }}
  >
    <div
      css={{
        textAlign: 'right',
        [media.greaterThan('medium')]: {
          minWidth: 120
        },
        [media.greaterThan('large')]: {
          minWidth: 118
        },
        [media.greaterThan('xlarge')]: {
          minWidth: 144
        }
      }}
    >
      <img src={props.image.src} width={props.image.width} height={props.image.height} />
    </div>
    <Flex
      direction='column'
      css={{
        [media.greaterThan('medium')]: {
          paddingLeft: 16
        },
        [media.greaterThan('large')]: {
          paddingLeft: 24
        },
        [media.greaterThan('xlarge')]: {
          paddingLeft: 24
        }
      }}
    >
      <div
        css={{
          fontSize: 28,
          fontWeight: 300,
          lineHeight: '31px',
          paddingBottom: 12,
          color: colors.gray_700
        }}
      >
        {props.title}
      </div>
      <div
        css={{
          fontSize: 16,
          fontWeight: 'normal',
          lineHeight: '24px',
          paddingBottom: 20,
          color: colors.gray_500
        }}
      >
        {props.description}
      </div>
      <div
        css={{
          fontSize: 14,
          fontWeight: 300,
          lineHeight: '16px',
          color: colors.gray_500
        }}
      >
        {props.read}
      </div>
    </Flex>
  </Flex>
);

export default Description;
