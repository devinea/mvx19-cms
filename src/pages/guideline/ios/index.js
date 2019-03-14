import React from 'react';
import Flex from '../../../components/Flex';
import Layout from '../../../components/Layout';
import LeftNav from '../../../components/LeftNav';
import iosBackground from '../../../img/ios_background.png';
import { Link, graphql } from 'gatsby';
import { media, colors } from '../../../components/theme';
import ResourcesList from '../../../components/ResourceList/ResourcesList';
import Tabs from '../../../components/Tabs';
import Panel from '../../../components/Panel';
import Dropdown from '../../../components/Dropdown';
import SeeAllButton from '../../../components/SeeAllButton';
import { css } from '@emotion/core';

export default class GuidelineIosIndexPage extends React.Component {
  constructor(props) {
    super(props);

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
    console.log('TESTTT', data);
    
    return (
      <Layout location={location}>
        <Flex
          direction='row'
          shrink='0'
          grow='1'
          overflow='auto'
          valign='stretch'
          css={{
            width: '100%',
          }}
        >
          {/* <LeftNav data={data.leftNav.edges[0]} /> */}
          <div
            css={{
              width: '100%',
              display: 'flex',
              flexFlow: 'column',
              [media.lessThan('large')]: {
                marginTop: 40
              }
            }}
          >
            <div
              css={{
                backgroundColor: '#f8f9fb',
                height: 400,
                backgroundImage: 'url(' + iosBackground + ')',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'calc(50% + 400px)',
                backgroundSize: '906px 400px',
                [media.lessThan('medium')]: {
                  backgroundImage: 'none'
                }
              }}
            >
              <div css={{
                width: 828,
                margin: '0 auto',
                paddingBottom: 60,
                paddingTop: 40,
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
              }}>
                <h1 css={{
                  color: colors.gray_600,
                  fontSize: 45,
                  fontWeight: 300,
                  paddingTop: 30,
                  width: '36%',
                  [media.lessThan('large')]: {
                    fontSize: 28
                  },
                  [media.lessThan('medium')]: {
                    fontSize: 30
                  }
                }}>Design and Develop delightful iOS mobile apps.</h1>
              </div>
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
            }}>
              <h1 css={css`
              color: ${colors.gray_600};
              font-family: 72-Regular;
              font-size: 36px;
              font-weight: normal;
              letter-spacing: 0.11px;
              line-height: 43px;`}>explore Fiori for iOS</h1>
              {this.state.mediumSize ?
                <Dropdown options={panels} />
                :
                <Tabs>
                  {panels.map((tab, idx) => {
                    return (
                      <div label={tab.node.title} key={idx}>
                        <h3 css={css`
                    color: ${colors.gray_600};
                    font-size: 20px;
                    font-weight: normal;
                    line-height: 32px;
                    margin-bottom: 40px;
                    `}>{tab.node.desc}</h3>
                        <div css={css`
                      display: flex;
                      flex-wrap: wrap;
                      justify-content: space-between;
                      `}>
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
                </Tabs>}
            </div>
            <div
              css={{
                width: 984,
                margin: '0 auto',
                paddingBottom: 20,
                transition: 'width 0.3s ease-in-out',
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
              <h1 css={{
              color: colors.gray_600,
              fontSize: 36,
              fontWeight: 'normal',
              height: 43
              }}>{"what's new"}</h1>
              {posts.map((post) => {
                return (
                  <Link to={post.node.fields.slug} key={post.node.id}>
                    <div css={{
                      height: 180,
                      width: 984,
                      padding: '15px 76px',
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
                      },
                      [media.lessThan('large')]: {
                        height: 125,
                        padding: '15px 0px'
                      },
                      ':hover': {
                        borderRadius: 7,
                        boxShadow: '0 0 10px 0 ${colors.gray_200}',
                        cursor: 'pointer'
                      }
                    }}>
                      <h2 css={{
                        fontFamily: '72-Light',
                        fontSize: 28,
                        fontWeight: 300,
                        height: 31,
                        letterSpacing: 0,
                        marginBottom: 15,
                        [media.lessThan('large')]: {
                          fontSize: 24
                        }
                      }}>{post.node.frontmatter.title}</h2>
                      <p css={css`
                    color: ${colors.gray_700};
                    font-family: 72-Regular;
                    font-size: 16px;
                    font-weight: normal;
                    height: 48px;
                    line-height: 24px;
                    `}>{post.node.frontmatter.description}</p>
                      <div css={{
                        color: colors.gray_700,
                        fontFamily: '72-Light',
                        fontSize: 14,
                        fontWeight: 300,
                        height: 16,
                        letterSpacing: '0.04',
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
        <ResourcesList resource="ios" />
      </Layout>
    );
  }
}

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



