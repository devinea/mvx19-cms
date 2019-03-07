import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { Link } from 'gatsby';

import SVG from 'react-inlinesvg';

import Container from './../Container';
import Flex from '../Flex';
import ExternalFooterLink from './ExternalFooterLink';
import FooterLink from './FooterLink';

import { media, colors } from '../theme';

const Footer = props => (
  <footer
    css={{
      margin: '0 auto',
      [media.greaterThan('small')]: {
        minWidth: media.getSize('small').width,
        maxWidth: media.getSize('small').width
      },
      [media.greaterThan('medium')]: {
        minWidth: media.getSize('medium').width,
        maxWidth: media.getSize('medium').width
      },
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
    <Container
      cssProps={{
        padding: 0
      }}
    >
      <Flex direction='row'>
        <Flex
          direction='row'
          wrap='wrap'
          halign='space-between'
          css={{
            width: '100%',
            marginBottom: 16
          }}
        >
          <div
            css={{
              color: colors.gray_700,
              fontSize: 12,
              [media.size('small')]: {
                flexDirection: 'column',
                maxWidth: 144
              }
            }}
          >
            Have questions or ideas?{' '}
            <a
              css={{
                lineHeight: '20px',
                color: colors.gray_700,
                fontWeight: 700,
                fontSize: 12,
                ':hover': {
                  color: colors.blue_600
                }
              }}
              href={`mailto:${props.data.site.siteMetadata.contact.email}`}
            >
              Email
            </a>{' '}
            us or <FooterLink to={`/contribute`}>Contribute</FooterLink> to make
            Fiori better.
          </div>
          <div>
            <span css={{ color: colors.gray_700, fontSize: 12 }}>
              © Copyright SAP {new Date().getFullYear()}
            </span>
          </div>
        </Flex>
      </Flex>
    </Container>
    <Container
      cssProps={{
        padding: 0
      }}
    >
      <Flex
        direction='row'
        wrap='wrap'
        css={{
          borderTopColor: colors.gray_200,
          borderTopWidth: 1,
          borderTopStyle: 'solid'
        }}
      >
        <Flex
          direction='row'
          wrap='wrap'
          halign='space-between'
          css={{
            width: '100%',
            height: '100%',
            padding: '20px 0px'
          }}
        >
          <Link
            css={{
              display: 'flex',
              marginRight: 10,
              marginBottom: 10,
              height: '100%',
              alignItems: 'center'
            }}
            to='/'
          >
            <span
              css={{
                color: colors.gray_500,
                fontWeight: 400,
                paddingRight: 10,
                fontSize: 14,
                lineHeight: '20px'
              }}
            >
              THE BEST RUN
            </span>
            <SVG
              src='/img/svg/logo-sap.svg'
              css={{
                [media.lessThan('large')]: {
                  width: 40,
                  height: 20,
                  svg: {
                    width: 40,
                    height: 20
                  }
                },
                [media.greaterThan('large')]: {
                  width: 48,
                  height: 24,
                  svg: {
                    width: 48,
                    height: 24
                  }
                },
                display: 'block'
              }}
            />



          </Link>
          <nav
            css={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'stretch',
              overflowX: 'auto',
              overflowY: 'hidden',
              height: '100%',
              [media.size('small') && media.size('medium')]: {
                width: '100%',
                justifyContent: 'space-between'
              },
              [media.size('small')]: {
                flexDirection: 'column',
                maxWidth: 144
              }
            }}
          >
            {props.data.site.siteMetadata.footer.links.map(link => {
              return (
                <ExternalFooterLink href={link.url} key={link.id} css={{}}>
                  {link.title}
                </ExternalFooterLink>
              );
            })}
          </nav>
        </Flex>
      </Flex>
    </Container>
  </footer>
);

export default () => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            contact {
              email
            }
            footer {
              links {
                id
                title
                url
              }
            }
          }
        }
      }
    `}
    render={data => <Footer data={data} />}
  />
);
