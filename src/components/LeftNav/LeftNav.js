import React from 'react';
import { Link, StaticQuery, graphql } from 'gatsby';
import { Location } from '@reach/router';
import { css } from '@emotion/core'
import { colors, header, media } from '../theme';
import LeftNavLink from './LeftNavLink';
import crossIcon from './../../img/cross.svg';
import expandIcon from './../../img/expand.png';

let state = {
  navOpen: true,
  sectionOn: 0,
  opened: []
};

class LeftNav extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = state;
    let sectionOn = 0;
    for (let i = 0; i < this.props.data.allMarkdownRemark.edges.length; i++) {
      const item = this.props.data.allMarkdownRemark.edges[i];
      // Check if this item is currently selected.
      if (item.node.fields.slug === decodeURIComponent(this.props.pathname)) {
        sectionOn = i;
      }
      if (item.node.frontmatter.leftnavorder.l2 > 0) {
        if (!this.state.opened.includes(i)) {
          item.node.frontmatter.isHidden = true;
        }
        if (this.props.data.allMarkdownRemark.edges[i -1].node.frontmatter.leftnavorder.l2 == 0) {
          this.props.data.allMarkdownRemark.edges[i -1].node.frontmatter.hasChildren = true;
        }
      }
    }
    
    this.state.sectionOn = sectionOn;

    this.toggleNav = toggle => this._toggleNav(toggle);
    this.expandSection = (event, sectionIndex) => this._expandSection(event, sectionIndex);
    this.mouseEnter = element => this._mouseEnter(element);
    this.mouseLeave = () => this._mouseLeave();
    this.isOverElement = false;
  }

  _toggleNav() {
    this.setState({ navOpen: !this.state.navOpen });
  }

  componentWillUnmount() {
    // Remember state for the next mount
    state = this.state;
  }

  _expandSection(event, sectionIndex) {
    for (let i = sectionIndex + 1; i < i < this.props.data.allMarkdownRemark.edges.length; i++) {
      if (this.props.data.allMarkdownRemark.edges[i].node.frontmatter.leftnavorder.l2 > 0) {
        this.props.data.allMarkdownRemark.edges[i].node.frontmatter.isHidden = false;
        this.state.opened.push(i);
      } else {
        break;
      }
    }
    // console.log(event);
    // // event.preventDefault();
    // // event.stopPropagation();
    // console.log('expanding!');
  }

  _mouseEnter(element) {
    if (element) {
      const menuContainer = document.getElementById('menuContainer');
      const menuHover = document.getElementById('menuHover');
      if (!menuHover || !menuContainer) {
        return;
      }
      const hoverPosition = element.getBoundingClientRect().y - menuContainer.getBoundingClientRect().y;
      menuHover.style.opacity = 1;
      menuHover.style.top = hoverPosition + 'px';
      this.isOverElement = true;
    }
  }


  _mouseLeave() {
    const self = this;
    this.isOverElement = false;
    setTimeout(function() {
      if (!self.isOverElement) {
        const menuHover = document.getElementById('menuHover');
        if (menuHover) {
          menuHover.style.opacity = 0;
        }
      }
    }, 2000)
  }

  render() {
    const self = this;
    return (
      <nav
        css={{
          position: 'relative',
          backgroundColor: colors.white,
          display: 'flex',
          width: 0,
          transition: 'width 0.3s ease-in-out',
          ...(this.state.navOpen && {
            width: 260,
          }),
          position: 'fixed',
          flexDirection: 'row',
          alignItems: 'top',
          justifyContent: 'space-between',
          height: '100vh',
          boxShadow: '0 2px 39px 0 rgba(0, 0, 0, 0.06)'
        }}>
        <div
          css={{
            transition: 'opacity 0.3s ease-in-out',
            position: 'relative',
            overflow: 'hidden',
            fontSize: 20,
            width: '100%',
            opacity: 0,
            ...(this.state.navOpen && {
              opacity: 1,
            })
          }}>
          <div
            css={{
              overflow: 'hidden',
              lineHeight: '90px',
              height: 90,
              width: '100%',
              paddingLeft: 40,
              float: 'left'
            }}>
            {this.props.title}
          </div>
          <div
            css={{
              width: 12,
              height: 12,
              backgroundSize: 'cover',
              backgroundImage: 'url(' + crossIcon + ')',
              position: 'absolute',
              right: 12,
              fontSize: 12,
              top: 39,
              cursor: 'pointer'
            }}
            onClick={this.toggleNav}
          />
          <div id="menuContainer"
            css={{
              position: 'relative',
              float: 'left',
              width: '100%'
            }}
          >
            <div id="menuHover"
              css={{
                position: 'absolute',
                left: 0,
                opacity: 0,
                backgroundColor: '#f5f6f8',
                height: 45,
                width: '100%',
                cursor: 'pointer',
                transition: 'all 0.3s',
                pointerEvents: 'none'
              }}>
            </div>          
            {this.props.data.allMarkdownRemark.edges.map(({ node: data }, i) => (
              <LeftNavLink 
                key={(data.fields.slug == '/designguideline/controls/') ? '' : data.id} 
                section={data} 
                sectionIndex={i} 
                sectionOn={self.state.sectionOn} 
                expander={self.expandSection} 
                mouseEnter={self.mouseEnter} 
                mouseLeave={self.mouseLeave}/>
            ))}
          </div>
        </div>
        <div
          css={{
            transition: 'opacity 0.3s ease-in-out',
            opacity: 0,
            width: 28,
            height: 28,
            position: 'absolute',
            borderRadius: '2.5px',
            boxShadow: '0 0 14px 0 rgba(0, 0, 0, 0.11)',
            top: 29,
            left: 40,
            cursor: 'pointer',
            backgroundImage: 'url(' + expandIcon + ')',
            backgroundPosition: 'center center',
            backgroundRepeat: 'no-repeat',
            ...(!this.state.navOpen && {
              opacity: 1
            })
          }}
          onClick={this.toggleNav}
        />
      </nav>
    )
  }
}

/**
 * Generates the guideline LHS navigation.
 */
export default props => (
  <StaticQuery
    query={graphql`
      {
        allMarkdownRemark(
          sort: { order: ASC, fields: [
            frontmatter___leftnavorder___l1,
              frontmatter___leftnavorder___l2,
              frontmatter___leftnavorder___l3,
              frontmatter___leftnavorder___l4,
          ] }
          filter: {
            frontmatter: { templateKey: { eq: "design-guideline-post" } }
          }
        ) {
          edges {
            node {
              id
              fields {
                slug
              }
              frontmatter {
                title
                templateKey
                leftnavorder {
                  l1
                  l2
                  l3
                  l4
                }
              }
            }
          }
        }
      }
    `}
    render={data => <LeftNav data={data} {...props} {...location} />}
  />
);

// export default LeftNav;