import navHeaderLinks from '../content/header/links.yml';

const sectionListHeaderLinks = navHeaderLinks.map(item => ({
  ...item
}));

export {
  sectionListHeaderLinks
};
