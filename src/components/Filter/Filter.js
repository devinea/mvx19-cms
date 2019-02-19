import React, { Component } from 'react';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import {StaticQuery, graphql } from 'gatsby';
import { navigate } from 'gatsby';


//versions for the designs
let versions =[];

class Filter extends Component {
  constructor(props) {
    super(props)

    //prepare a list of versions
    const posts = this.props.data.allMarkdownRemark.edges;
    // Iterate through each post, putting all found version into `versions`
    posts.forEach(edge => {
      if (_.get(edge, `node.frontmatter.version`)) {
        versions = versions.concat(edge.node.frontmatter.version)
      }
    })
    // Eliminate duplicate versions
    versions = _.uniq(versions)
    this.state = {value:versions[0]};
    this.curVersion = this.state.value;
    this._onVersionSelect = this._onVersionSelect.bind(this);
  }

  render(){
    return (
      <div
        css={{
          display: 'block',
          flexDirection: 'column',
          width:'200px',
          paddingTop: '20px'
        }}>
        <Dropdown options={versions} onChange={this._onVersionSelect} value={this.state.value} placeholder="Select an option" />
        <p/>
      </div>
    );

  }

  _onVersionSelect= event => {
    const { location } = this.props;
    this.setState({value: event.value});
    const version = event.value;
    const target = location.pathname.replace(this.curVersion, version);
    this.curVersion = version;
    navigate(target, {
      replace: false
    });
  }


}

/**
 * Generates the version list
 */
export default props => (
  <StaticQuery
    query={graphql`
{
  allMarkdownRemark(sort: {order: ASC, fields: [frontmatter___version]}, filter: {frontmatter: {templateKey: {eq: "design-guideline-post"}, version: {ne: null}}}) {
    edges {
      node {
        frontmatter {
          version
        }
      }
    }
  }
}
    `}
    render={data => <Filter data={data} location={location} {...props} />}
  />
);

// export default Filter;


