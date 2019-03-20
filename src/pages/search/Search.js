import React from 'react';

import { graphql, StaticQuery } from 'gatsby';
import { Link } from 'gatsby';

import queryString from 'query-string';
import { Index } from 'elasticlunr';

import Flex from '../../components/Flex';
import { colors, media } from '../../components/theme';

class Search extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      searchValue: '',
      searchFromUrl: '/',
      results: []
    };
    this.search = (query, idx) => this._search(query, idx);
    this.getOrCreateIndex = () => this._getOrCreateIndex();
  }

  componentDidMount = () => {
    const values = queryString.parse(this.props.location.search);
    const idx = Index.load(this.props.data.search.index);
    if (values.q) {
      this.setState({ searchValue: values.q }, () => {
        this.search(this.state.searchValue, idx);
      });
    }
  };

  componentDidUpdate = prevprops => {
    const values = queryString.parse(this.props.location.search);
    const idx = Index.load(this.props.data.search.index);

    if (values.q) {
      if (this.state.searchValue !== values.q) {
        this.setState({ searchValue: values.q }, () => {
          this.search(this.state.searchValue, idx);
        });
      }
    }
  };


  _search = (query, idx) => {
    this.setState({ query });

    if (query.length > 1) {
      this.setState({
        results: idx
          .search(query, { expand: true })
          .map(({ ref }) => idx.documentStore.getDoc(ref))
      });
    } else {
      this.setState({ results: [] });
    }
  };

  render() {
    const { location } = this.props;

    return (
        <Flex
          direction='column'
          css={{
            margin: '0 auto',
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
          <section
            css={{
              paddingTop: 50,
              width: '100%'
            }}
          >
            <h3
              css={{
                width: '100%',
                fontSize: 14,
                fontWeight: 300,
                color: colors.gray_600,
                marginBottom: 20
              }}
            >
              {this.state.results.length} results for "{this.state.query}"
            </h3>
          </section>

          {this.state.results.map(page => {
            return (

              <div
              key={page.id}
                css={{
                  paddingBottom: 60
                }}
              >
                <div
                  css={{
                    fontSize: 28,
                    fontWeight: 300,
                    color: colors.black
                  }}
                >
                  <Link to={`/${page.path}`}>{page.title}</Link>
                </div>
                <div
                  css={{
                    paddingTop: 10,
                    fontSize: 12,
                    fontWeight: 'normal',
                    color: colors.gray_700
                  }}
                >
                  {page.templateKeyName}
                </div>
                <div
                  css={{
                    fontSize: 16,
                    fontWeight: 'normal',
                    color: colors.gray_700,
                    paddingTop: 20
                  }}
                >
                  {page.description}
                </div>
              </div>

            );
          })}

        </Flex>
    );
  }
}

const searchQuery = props => (
  <StaticQuery
    query={graphql`
      query {
        search: siteSearchIndex {
          index
        }
      }
    `}
    render={data => <Search data={data} location={props.location} />}
  />
);

export default searchQuery;
