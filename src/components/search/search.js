import React, { Component, createRef } from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, Link, graphql } from 'gatsby'
import { Index } from 'elasticlunr'
import { Location } from '@reach/router'
import uuid from 'uuid/v4'
import './search.scss'

class Search extends Component {
  constructor(props) {
    super(props)
    this.input = createRef()
    this.state = {
      isOpen: false,
      mount: false,
      query: '',
      results: [],
    }
  }

  componentDidMount() {
    this.handleMount()
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.location.pathname !== prevProps.location.pathname) {
      this.resetState()
    }
    if (this.state.isOpen && !prevState.isOpen) {
      this.input.current.focus()
    }
  }

  handleMount = () => {
    if (this.props.search) {
      this.setState({ mount: true })
    }
  }

  resetState = () => {
    this.setState({ isOpen: false, query: '', results: [] })
  }

  getOrCreateIndex = () =>
    this.index ? this.index : Index.load(this.props.search.index) // Create an elastic lunr index and hydrate with graphql query results

  search = evt => {
    const query = evt.target.value
    this.index = this.getOrCreateIndex()
    this.setState({ query })

    if (query.length > 1) {
      this.setState({
        results: this.index
          .search(query, { expand: true })
          .map(({ ref }) => this.index.documentStore.getDoc(ref)), // Map over each ID and return the full document
      })
      this.props.searchToggle('on');
    } else {
      this.setState({ results: [] })
      this.props.searchToggle('off');
    }
  }

  handleClick = () => {
    this.setState(state => ({
      isOpen: !state.isOpen,
      query: '',
      results: [],
    }))
  }

  render() {
    if (!this.state.mount) return null

    return (
      <div>
              <input
                onChange={this.search}
                placeholder="Search"
                ref={this.input}
                type="search"
                value={this.state.query}
              />
              <div className={`search-results-list ${this.state.query.length > 1 ? 'on' : ''}`}>
                <div className="title">{this.state.results.length} results for "{this.state.query}"</div>
                <div className="search-categories">
                  <div className="selected">Fiori for Web</div>
                  <div>Fiori for iOS</div>
                  <div>Fiori for Android</div>
                  <div class="close"></div>
                </div>
                <div class="search-results-wrapper">
                {this.state.results.map(page => {
                  return (
                    <Link  to={`/${page.path}`}>
                      <div className="search-result" key={uuid()}>
                        <div class="title">{page.title}</div>
                        <div class="description">{page.description}</div>
                        <div class="search-section">{page.templateKeyName}</div>
                      </div>
                    </Link>
                  )
                })}
                </div>
            </div>
      </div>
    )
  }
}

Search.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string,
  }).isRequired,
  search: PropTypes.objectOf(PropTypes.object),
}

Search.defaultProps = {
  search: null,
}

const withStaticQuery = (props) => (
  <Location>
    {({ location }) => (
      <StaticQuery
        query={graphql`
          query {
            search: siteSearchIndex {
              index
            }
          }
        `}
        render={({ search }) => <Search search={search} location={location} searchToggle={props.searchToggle} />}
      />
    )}
  </Location>
)

export default withStaticQuery
