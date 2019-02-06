import React from 'react';
import { Link } from 'gatsby';

import Container from './../Container';
import Flex from '../Flex';
import ExternalFooterLink from './ExternalFooterLink';
import FooterLink from './FooterLink';
import FooterNav from './FooterNav';
import FooterTitle from './FooterTitle';

import logoSvg from './../../img/logo1.svg';
import { media, colors } from '../theme';
import {
  sectionListCommunity,
  sectionListContact,
  sectionListContribute,
  sectionListFioriService,
  sectionListTerms
} from '../../../utils/sectionList';


const Footer = () => (
  <footer
    css={{
      backgroundColor: colors.grey_200,
      color: colors.white
    }}
  >
    <Container
      cssProps={{
        padding: '0 50px'
      }}
    >
      <Flex direction='row'>
        <Flex
          direction='row'
          halign='space-between'
          wrap='wrap'
          css={{
            width: '100%'
          }}
        >
          <FooterNav>
            <FooterTitle>Contribute</FooterTitle>
            {sectionListContribute.map(section => {
              const defaultItem = section.items[0];
              return (
                <FooterLink
                  to={`/docs/${defaultItem.id}.html`}
                  key={section.title}
                >
                  {section.title}
                </FooterLink>
              );
            })}
          </FooterNav>
          <FooterNav>
            <FooterTitle>Contact</FooterTitle>
            {sectionListContact.map(section => {
              const defaultItem = section.items[0];
              return (
                <FooterLink
                  to={`/docs/${defaultItem.id}.html`}
                  key={section.title}
                >
                  {section.title}
                </FooterLink>
              );
            })}
          </FooterNav>
          <FooterNav>
            <FooterTitle>Fiori Service</FooterTitle>
            {sectionListFioriService.map(section => {
              const defaultItem = section.items[0];
              return (
                <FooterLink
                  to={`/docs/${defaultItem.id}.html`}
                  key={section.title}
                >
                  {section.title}
                </FooterLink>
              );
            })}
          </FooterNav>
          <FooterNav>
            <FooterTitle>Community</FooterTitle>
            {sectionListCommunity.map(section => {
              const defaultItem = section.items[0];
              return (
                <FooterLink
                  to={`/docs/${defaultItem.id}.html`}
                  key={section.title}
                >
                  {section.title}
                </FooterLink>
              );
            })}
          </FooterNav>
        </Flex>
      </Flex>
    </Container>
    <Container
      cssProps={{
        padding: '0 50px'
      }}
    >
      <Flex
        direction='row'
        wrap='wrap'
        css={{
          borderTopColor: colors.grey_300,
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
            <img src={logoSvg} alt='' width='63' height='32' />
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
            {sectionListTerms.map(section => {
              return (
                <ExternalFooterLink
                  href={section.items[1].url}
                  key={section.title}
                >
                  {section.title}
                </ExternalFooterLink>
              );
            })}
          </nav>
        </Flex>
      </Flex>
    </Container>
  </footer>
);

export default Footer;
