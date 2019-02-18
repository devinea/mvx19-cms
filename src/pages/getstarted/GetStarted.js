import React from 'react';

import Layout from '../../components/Layout';
import Flex from '../../components/Flex';
import { colors, media } from '../../components/theme';

import DescriptionList from './DescriptionList';
import ResourcesList from './ResourcesList';

class GetStarted extends React.Component {
  render() {
    const { location } = this.props;

    return (
      <Layout location={location}>
        <Flex
          direction='column'
          css={{
            margin: '0 auto',
            [media.greaterThan('large')]: {
              minWidth: media.getSize('large').width,
              maxWidth: media.getSize('large').width
            },
            [media.greaterThan('xlarge')]: {
              minWidth: media.getSize('xlarge').width,
              maxWidth: media.getSize('xlarge').width
            }
          }}
        >
          <h1
            css={{
              textAlign: 'center',
              width: '100%',
              fontSize: 46,
              fontWeight: 700,
              color: colors.gray_600,
              marginTop: 100,
              marginBottom: 105
            }}
          >
            Get started with Fiori.
          </h1>
          <DescriptionList />
        </Flex>
        <ResourcesList />
      </Layout>
    );
  }
}

export default GetStarted;
