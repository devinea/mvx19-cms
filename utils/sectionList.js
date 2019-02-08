import navFooterLinks from '../content/footer/links.yml';
import navHeaderLinks from '../content/header/links.yml';

const sectionListFooterLinks = navFooterLinks.map(item => ({
  ...item
}));

const sectionListHeaderLinks = navHeaderLinks.map(item => ({
  ...item
}));

export {
  sectionListFooterLinks,
  sectionListHeaderLinks
};
