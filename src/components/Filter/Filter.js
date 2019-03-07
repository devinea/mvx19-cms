import React, { Component } from 'react';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import { navigate } from 'gatsby';
const _ = require('lodash')


//versions for the designs
let versions =[];

class Filter extends Component {
  constructor(props) {
    super(props)

    //prepare a list of versions
    const posts = this.props.versions.edges;
    // Iterate through each post, putting all found version into `versions`
    posts.forEach(edge => {
      if (_.get(edge, `node.frontmatter.version`)) {
        versions = versions.concat(edge.node.frontmatter.version)
      }
    })
    // Eliminate duplicate versions 
    versions = _.uniq(versions)

    //get the version from the pageContext
    this.state = {value:this.props.pageContext.version};
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
    this.setState({value: event.value});
    const version = event.value;
    const target = location.pathname.replace(this.props.pageContext.version, version);
    navigate(target, {
      replace: false
    });
  }


}

export default Filter;