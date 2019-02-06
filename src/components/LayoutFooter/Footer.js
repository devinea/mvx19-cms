import React from 'react';
import { Link } from 'gatsby';

import Container from './../Container';
import Flex from '../Flex';
import ExternalFooterLink from './ExternalFooterLink';
import FooterLink from './FooterLink';
import FooterNav from './FooterNav';
import FooterTitle from './FooterTitle';

import logoSvg from './../../img/logo.svg';
import { colors } from '../theme';
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
      backgroundColor: colors.gray,
      color: colors.white
    }}
  >
    <Container>
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
        borderTop: '1px solid lightgray'
      }}
    >
      <Flex direction='row' wrap='wrap'>
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
                color: colors.lighter,
                marginLeft: 10,
                fontWeight: 400,
                paddingRight: 10,
                fontSize: 20,
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
              height: '100%'
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
