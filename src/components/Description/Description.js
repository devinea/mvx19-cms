import React from 'react';

import Flex from './../Flex';
import { colors, media } from '../theme';


const Description = props => (
  <Flex
    css={{
      width: '100%',
      paddingBottom: 30,
      paddingTop: 35
    }}
  >
    <div
      css={{
        textAlign: 'right',
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
        paddingLeft: 50
      }}
    >
      <div
        css={{
          fontSize: 24,
          fontWeight: 700,
          lineHeight: '27px',
          paddingBottom: 12,
          color: colors.grey_650
        }}
      >
        {props.title}
      </div>
      <div
        css={{
          fontSize: 18,
          fontWeight: 300,
          lineHeight: '22px',
          paddingBottom: 20,
          color: colors.grey_350
        }}
      >
        {props.description}
      </div>
      <div
        css={{
          fontSize: 14,
          fontWeight: 300,
          lineHeight: '16px',
          color: colors.grey_350
        }}
      >
        {props.read}
      </div>
    </Flex>
  </Flex>
);

export default Description;
