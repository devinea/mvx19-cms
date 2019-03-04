import React from 'react';
import { colors } from '../theme';
import LeftNavLink from './LeftNavLink';
import { Link } from 'gatsby';
import crossIcon from './../../img/cross.svg';

let state = {
  navOpen: true,
  sectionOn: -1,
  opened: []
};

let updating = false;

class LeftNav extends React.Component {
  
  constructor(props) {
    super(props);

    this.state = state;
    let sectionOn = null;
    // Quick copy to this.props.data.leftNavFlattened for some minor backward compatibility
    if (!this.props.data.leftNavFlattened){
      this.props.data.leftNavFlattened = (this.props.data.node && this.props.data.node.fields && this.props.data.node.fields.leftNavFlattened) ? this.props.data.node.fields.leftNavFlattened : this.props.data.edges[0].node.fields.leftNavFlattened;
    }

    if (!this.props.data.leftNavFlattened) {
      this.props.data.leftNavFlattened = [];
    }
    this.topLevelItem = this.props.data.leftNavFlattened.find(item => item.navTitle);
    for (let i = 0; i < this.props.data.leftNavFlattened.length; i++) {
      const item = this.props.data.leftNavFlattened[i];
      // Check if this item is currently selected.
      if (typeof window !== 'undefined' && window.location && item.slug === decodeURIComponent(window.location.pathname)) {
        sectionOn = item.id;
      }
      if (item.parentId) {
        const parentItem = this.props.data.leftNavFlattened.find(obj => obj.id == item.parentId);
        if (!this.state.opened.includes(item.slug)) {
          item.isHidden = true;
          // Ensure that the parent element is not expanded.        
          parentItem.expanded = false;
        } else {
          item.isHidden = false;
          // Ensure that the parent element is expanded.        
          parentItem.expanded = true;
        }
      }
``    }
    this.state.sectionOn = sectionOn;

    this.toggleNav = toggle => this._toggleNav(toggle);
    this.expandSection = (event, sectionIndex) => this._expandSection(event, sectionIndex);
    this.mouseEnter = element => this._mouseEnter(element);
    this.mouseLeave = () => this._mouseLeave();
    this.isOverElement = false;
  }

  componentWillMount = () => {
    if(this.props.open === "false") {
      this._toggleNav();
    }
  }

  _toggleNav() {
    this.setState({ navOpen: !this.state.navOpen });
    if (this.props.navOpener) {
      this.props.navOpener(!this.state.navOpen);
    }
  }

  _expandSection(event, id) {
    const section = this.props.data.leftNavFlattened.find(item => item.id == id);
    section.expanded = !section.expanded;
    const childItems = this.props.data.leftNavFlattened.filter(item => item.parentId == id);
    for (let childItem of childItems) {
      childItem.isHidden = !childItem.isHidden;
      if (!childItem.isHidden) {
        this.state.opened.push(childItem.slug);
      } else {
        this.state.opened = this.state.opened.filter(item => item !== childItem.slug);
      }
    }
    state = this.state;
    event.preventDefault();
    this.setState({updating: !this.state.updating})
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
            <Link
                key={this.topLevelItem.id}
                to={this.topLevelItem.slug}>{this.topLevelItem.title}</Link>
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
                backgroundColor: colors.gray_100,
                height: 45,
                width: '100%',
                cursor: 'pointer',
                transition: 'all 0.3s',
                pointerEvents: 'none'
              }}>
            </div>          
            {this.props.data.leftNavFlattened && 
             this.props.data.leftNavFlattened.filter(item => !item.navTitle).map((data, i) => (
              <LeftNavLink
                updating={updating}
                key={(data.slug === '/designguideline/controls/') ? '' : data.id}
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
            fontFamily: 'SAP-icons',
            fontSize: 18,
            lineHeight: '28px',
            textAlign: 'center',
            color: colors.gray_500,
            backgroundColor: 'transparent',
            pointerEvents: 'none',
            '::before': {
                content: 'attr(data-sap-ui-icon-content)'
            },
            ...(!this.state.navOpen && {
              opacity: 1,
              pointerEvents: 'all'
            })
          }}
          data-sap-ui-icon-content=''
          onClick={this.toggleNav}
        />
      </nav>
    )
  }
}

export default LeftNav;