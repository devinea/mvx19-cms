import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { Link } from 'gatsby';

import Container from './../Container';
import Flex from '../Flex';
import ExternalFooterLink from './ExternalFooterLink';
import FooterLink from './FooterLink';

import logoSvg from './../../img/logo1.svg';
import { media, colors } from '../theme';

const Footer = props => (
  <footer
    css={{
      margin: '0 auto',
      [media.greaterThan('large')]: {
        minWidth: media.getSize('large').width
      },
      [media.greaterThan('xlarge')]: {
        minWidth: media.getSize('xlarge').width
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
          <div css={{ color: colors.grey_900, fontSize: 12 }}>
            Have questions or ideas? <a css={{
              lineHeight: '20px',
              color: colors.grey_900,
              fontWeight: 700,
              fontSize: 12,
              ':hover': {
                color: colors.grey_600
              }
            }} href={`mailto:${props.data.site.siteMetadata.contact.email}`}>Email</a> us
            or <FooterLink to={`/contribute`}>Contribute</FooterLink> to make Fiori better.
          </div>
          <div>
            <span css={{ color: colors.grey_900, fontSize: 12 }}>
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
          borderTopColor: colors.grey_250,
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
              height: '100%',
              alignItems: 'center'
            }}
            to='/'
          >
            <span
              css={{
                color: colors.grey_600,
                fontWeight: 400,
                paddingRight: 10,
                fontSize: 14,
                lineHeight: '20px'
              }}
            >
              THE BEST RUN
            </span>
            <img src={logoSvg} alt='' width='32' height='16' />
          </Link>
          <nav
            css={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'stretch',
              overflowX: 'auto',
              overflowY: 'hidden',
              height: '100%',
              paddingTop: 6,
              [media.size('small')]: {
                flexDirection: 'column'
              }
            }}
          >
            {props.data.site.siteMetadata.footer.links.map(link => {
              return (
                <ExternalFooterLink
                  href={link.url}
                  key={link.id}
                >
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
