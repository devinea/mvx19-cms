import React from 'react';
import Flex from '../../../components/Flex';
import LeftNav from '../../../components/LeftNav';
import { Link, graphql } from 'gatsby';
import { media, colors } from '../../../components/theme';
import ResourcesList from '../../../components/ResourceList/ResourcesList';
import ResourcesCarousel from '../../../components/ResourcesCarousel/ResourcesCarousel';
import Tabs from '../../../components/Tabs';
import Panel from '../../../components/Panel';
import Dropdown from '../../../components/Dropdown';
import SeeAllButton from '../../../components/SeeAllButton';
import { ReactReduxContext, connect } from 'react-redux';
import BgImage from 'gatsby-background-image'
import styled from '@emotion/styled';
import StyledBackgroundImage from '../../../components/BackgroundImage/StyledBackgroundImage';

const getWidths = () => {
  return {
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
  }
};

const getFontStyle = (color, fontSize, fontWeight) => {
  return { color, fontSize, fontWeight };
}

class GuidelineIosIndexPage extends React.Component {
  static contextType = ReactReduxContext;

  constructor(props, context) {
    super(props, context);

    this.state = {
      mediumSize: false
    };

    this.mediaQueryListener = null;
    this.onMatchMQ = mediaQueryListener => this._onMatchMQ(mediaQueryListener);
    this.isSmallSize = toggle => this._isSmallSize(toggle);
  }

  componentDidMount = () => {
    if (!window.matchMedia) return;
    const medium = media.getSize('medium');
    this.mediaQueryListener = window.matchMedia(`(max-width: ${medium.max}px)`);
    this.mediaQueryListener.addListener(this.onMatchMQ);
    this.setState({ mediumSize: this.mediaQueryListener.matches });
  };

  componentWillUnmount = () => {
    this.mediaQueryListener &&
      this.mediaQueryListener.removeListener(this.onMatchMQ);
  };

  _onMatchMQ(mql) {
    this.setState({ mediumSize: mql.matches });
  }

  render() {
    const { data, location, pageContext } = this.props;
    const explore = data.explore.edges;
    const panels = data.tabs.edges;
    const posts = data.posts.edges;

    return (
      <div css={{
        width: '100%'
      }}>
        <Flex
          direction='row'
          shrink='0'
          grow='1'
          overflow='auto'
          valign='stretch'
          css={{
            width: '100%',
          }}>
          <LeftNav data={data.leftNav.edges[0]} />
          <div css={{
            width: '100%',
            display: 'flex',
            flexFlow: 'column',
            [media.lessThan('large')]: {
              marginTop: 40
            }
          }}>
            <div>
              <StyledBackgroundImage></StyledBackgroundImage>
            </div>
            <div css={{
              width: 828,
              margin: '0 auto',
              paddingBottom: 60,
              paddingTop: 40,
              transition: 'width 0.3s ease-in-out',
              display: 'inline-block',
              [media.lessThan('large')]: {
                display: 'flex',
                justifyContent: 'space-evenly'
              },
              ...getWidths()
            }}>
              {this.state.mediumSize ?
                <div>
                  <div css={{
                    display: 'flex',
                    justifyContent: 'space-between'
                  }}>
                    <h1 css={{ ...getFontStyle(colors.gray_600, 36, 'normal') }}>
                      explore Fiori for iOS
                    </h1>
                    <Dropdown options={panels} />
                  </div>
                  <div label={this.props.valueForPanels}>
                    <h3 css={{
                      ...getFontStyle(colors.gray_600, 20, 'normal'),
                      marginBottom: 40
                    }}>{
                        panels.map((p) => {
                          if (p.node.title === this.props.valueForPanels) {
                            return p.node.desc;
                          }
                          return '';
                        })
                      }</h3>
                    <div css={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      justifyContent: 'space-between'
                    }}>
                      {
                        explore.map((p, panelIdx) => {
                          if (p.node.frontmatter.categories && p.node.frontmatter.categories.includes(this.props.valueForPanels)) {
                            return <Panel key={panelIdx} data={p.node} />;
                          }
                          return ''
                        })
                      }
                    </div>
                    <SeeAllButton link={`${location.pathname}/${pageContext.curVersion}/${this.props.valueForPanels}`} text={this.props.valueForPanels}></SeeAllButton>
                  </div>
                </div>
                :
                <div>
                  <h1 css={{ ...getFontStyle(colors.gray_600, 36, 'normal') }}>
                    explore Fiori for iOS
                  </h1>
                  <Tabs>
                    {panels.map((tab, idx) => {
                      return (
                        <div label={tab.node.title} key={idx}>
                          <h3 css={{
                            ...getFontStyle(colors.gray_600, 20, 'normal'),
                            marginBottom: 40
                          }}>{tab.node.desc}</h3>
                          <div css={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            justifyContent: 'space-between'
                          }}>
                            {
                              explore.map((p, panelIdx) => {
                                if (p.node.frontmatter.categories && p.node.frontmatter.categories.includes(tab.node.title)) {
                                  return <Panel key={panelIdx} data={p.node} />;
                                }
                                return ''
                              })
                            }
                          </div>
                          <SeeAllButton link={`${location.pathname}/${pageContext.curVersion}/${tab.node.title}`} text={tab.node.title}></SeeAllButton>
                        </div>
                      );
                    })}
                  </Tabs>
                </div>}
            </div>
            <div css={{
              width: 984,
              margin: '0 auto',
              paddingBottom: 20,
              transition: 'width 0.3s ease-in-out',
              ...getWidths()
            }}>
              <h1 css={{ ...getFontStyle(colors.gray_600, 36, 'normal') }}>{"what's new"}</h1>
              {posts.map((post) => {
                return (
                  <Link to={post.node.fields.slug} key={post.node.id}>
                    <div css={{
                      height: 180,
                      width: 984,
                      padding: '15px 76px',
                      ...getWidths(),
                      [media.lessThan('large')]: {
                        height: 125,
                        padding: '15px 0px'
                      },
                      ':hover': {
                        borderRadius: 7,
                        cursor: 'pointer',
                        transition: 'all 0.3s',
                        ':hover': {
                          boxShadow: '0 0 22px 0 rgba(0, 0, 0, 0.10)'
                        },
                      }
                    }}>
                      <h2 css={{
                        ...getFontStyle(colors.gray_600, 28, 300),
                        height: 31,
                        marginBottom: 15,
                        [media.lessThan('large')]: {
                          fontSize: 24
                        }
                      }}>{post.node.frontmatter.title}</h2>
                      <p css={{
                        ...getFontStyle(colors.gray_700, 16, 'normal'),
                        height: 48
                      }}>{post.node.frontmatter.description}</p>
                      <div css={{
                        ...getFontStyle(colors.gray_700, 14, 300),
                        height: 16,
                        padding: '20px 0',
                        [media.lessThan('large')]: {
                          display: 'none'
                        }
                      }}>{post.node.frontmatter.date}</div>
                    </div>
                  </Link>
                )
              })}
            </div>
          </div>
        </Flex>
        {this.state.mediumSize ? <ResourcesCarousel resource="ios" /> : <ResourcesList resource="ios" />}
      </div>
    );
  }
}

export default connect(state => ({ valueForPanels: state.app.valueForPanels }))(GuidelineIosIndexPage);

export const pageQuery = graphql`
    query IosGuidelinePageQuery($curVersion: String!) {
        tabs: allCategoriesJson (sort: {order: ASC, fields: [ordinal]}){
            edges {
                node {
                    title
                    desc
                    ordinal
                }
            }
        },
        leftNav: allMarkdownRemark(filter: {frontmatter: {templateKey: {eq: "left-nav"}, srcTemplateKey: {eq: "ios-guideline"}, version: {eq: $curVersion}}}) {
            edges {
                node {
                    id
                    fields {
                        leftNavFlattened {
                            id
                            slug
                            title
                            parentId
                            hasChildren
                            navTitle
                        }
                    }
                }
            }
        }
        explore: allMarkdownRemark(limit: 24, sort: {order: ASC, fields: [frontmatter___title]}, filter: {frontmatter: {templateKey: {eq: "ios-guideline"}, onOverview: {eq: true}}}) {
            edges {
                node {
                    excerpt(pruneLength: 400)
                    id
                    fields {
                        slug
                    }
                    frontmatter {
                        title
                        templateKey
                        description
                        date(formatString: "MMMM DD, YYYY")
                        categories
                        tags
                        picture {
                            childImageSharp {
                                sizes(maxWidth: 312, maxHeight: 198) {
                                    ...GatsbyImageSharpSizes
                                }
                            }
                        }
                    }
                }
            }
        }
        posts: allMarkdownRemark(sort: {order: DESC, fields: [frontmatter___date]}, filter: {frontmatter: {templateKey: {eq: "blog-post"}}}) {
            edges {
                node {
                    excerpt(pruneLength: 400)
                    id
                    fields {
                        slug
                    }
                    frontmatter {
                        title
                        templateKey
                        description
                        date(formatString: "MMMM DD, YYYY")
                        picture {
                            childImageSharp {
                                sizes(maxWidth: 75) {
                                    ...GatsbyImageSharpSizes
                                }
                            }
                        }
                    }
                }
            }  
        }
    }
`;



