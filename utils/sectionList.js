import navCommunity from '../content/footer/community.yml';
import navContact from '../content/footer/contact.yml';
import navContribute from '../content/footer/contribute.yml';
import navFioriService from '../content/footer/fiori-service.yml';
import navTerms from '../content/footer/terms.yml';

import navHeaderLinks from '../content/header/links.yml';


const sectionListCommunity = navCommunity.map(item => ({
  ...item
}));

const sectionListContact = navContact.map(item => ({
  ...item
}));

const sectionListContribute = navContribute.map(item => ({
  ...item
}));

const sectionListFioriService = navFioriService.map(item => ({
  ...item
}));

const sectionListTerms = navTerms.map(item => ({
  ...item
}));

const sectionListHeaderLinks = navHeaderLinks.map(item => ({
  ...item
}));

export {
  sectionListCommunity,
  sectionListContact,
  sectionListContribute,
  sectionListFioriService,
  sectionListTerms,
  sectionListHeaderLinks
};
