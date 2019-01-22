import React, { Component, createRef } from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, Link, graphql } from 'gatsby'
import { Index } from 'elasticlunr'
import { Location } from '@reach/router'
import uuid from 'uuid/v4'


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
    } else {
      this.setState({ results: [] })
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
            {this.state.results.slice(0, 5).map(page => {
              return (
                <li key={uuid()}>
                  <Link  to={`/${page.path}`}>
                    <span >{page.title}</span>
                    <span >'--'</span>
                    <span >{page.description}</span>
                    <span >'--'</span>
                    <span >{page.templateKeyName}</span>
                  </Link>
                </li>
              )
            })}
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

const withStaticQuery = () => (
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
        render={({ search }) => <Search search={search} location={location} />}
      />
    )}
  </Location>
)

export default withStaticQuery
