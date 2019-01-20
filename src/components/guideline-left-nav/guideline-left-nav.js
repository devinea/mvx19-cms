import React from 'react'
import { Link } from 'gatsby'
import './guideline-left-nav.scss'
import { StaticQuery, graphql } from "gatsby"


// console.log(props.controls);

/**
 * Generates the guideline LHS navigation.
 */
const GuidelineLeftNav = class extends React.Component {
    render() {
        console.log('props:', this.props);
        const to = this.props.persona + '/guidelines';
        return (
            <nav className="guideline-left-nav">
                <h1>Fiori For Web</h1>
                <input></input>
                <Link className="main-nav" to={to}>Home</Link>
                <h2>Foundation</h2>
                <h2>Layouts &amp; Floorplans</h2>
                <h2>Controls</h2>
                {this.props.controls
              .map(({ node: post }) => (
                  <Link className="control-menu" key={post.id} to={post.fields.slug}>{post.frontmatter.title}</Link>
              ))  }           
                <h2>Sample Apps</h2>
                <h2>What's new</h2>
                <h2>Resources</h2>
            </nav>
    )}
}

export default GuidelineLeftNav
