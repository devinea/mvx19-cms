import React from 'react';
import { colors, media } from '../theme';
import LeftNavLink from './LeftNavLink';
import crossIcon from './../../img/cross.svg';
import selectArrowIcon from './../../img/select-arrow.svg';
import {LeftNavData} from '../Layout/Layout';

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
    let sectionOn = -1;
    if (!this.props.data) {
      return;
    }
    for (let i = 0; i < this.props.data.edges.length; i++) {
      const item = this.props.data.edges[i];
      // Check if this item is currently selected.
      if (typeof window !== 'undefined' && window.location && item.node.fields.slug === decodeURIComponent(window.location.pathname)) {
        sectionOn = i;
      }
      if (item.node.frontmatter.leftnavorder.l2 > 0) {
        if (!this.state.opened.includes(item.node.fields.slug)) {
          item.node.frontmatter.isHidden = true;
        } else {
          item.node.frontmatter.isHidden = false;
        }
        if (this.props.data.edges[i -1].node.frontmatter.leftnavorder.l2 == 0) {
          this.props.data.edges[i -1].node.frontmatter.hasChildren = true;
          if (!item.node.frontmatter.isHidden) {
            this.props.data.edges[i -1].node.frontmatter.expanded = true;
          } else {
            this.props.data.edges[i -1].node.frontmatter.expanded = false;
          }
        }
      }
    }
    
    this.state.sectionOn = sectionOn;

    this.toggleNav = toggle => this._toggleNav(toggle);
    this.expandSection = (event, sectionIndex) => this._expandSection(event, sectionIndex);
    this.mouseEnter = element => this._mouseEnter(element);
    this.mouseLeave = () => this._mouseLeave();
    this.closeToggle = () => this._closeToggle();
    this.isOverElement = false;
  }

  componentDidMount() {
    console.log('mounting!!!');
    // let self = this;
    // self.state.navOpen = false;
    // self.setState({ navOpen: false});
    return;

    setTimeout(function() {
      if (self.state.navOpen) {
        console.log('closing');
        // self.state.navOpen = false;
        self.setState({ navOpen: false});
      }
    });

    // let self = this;
    // setTimeout(function() {
    //   self.state.navOpen = false;
    //   self.setState({ navOpen: false});
    //   console.log('should close!');
    // }, 3000);
    // // this.setState({ navOpen: !this.state.navOpen });
  }

  _toggleNav() {
    console.log('toggling');
    this.setState({ navOpen: !this.state.navOpen });
    if (this.props.navOpener) {
      this.props.navOpener(!this.state.navOpen);
    }
  }

  _closeToggle() {
    console.log('closing!!!!');
    let self = this;
    self.setState({ navOpen: false});
    self.state.navOpen = false;
  }

  _expandSection(event, sectionIndex) {
    this.props.data.edges[sectionIndex].node.frontmatter.expanded = !this.props.data.edges[sectionIndex].node.frontmatter.expanded;
    for (let i = sectionIndex + 1; i < i < this.props.data.edges.length; i++) {
      if (this.props.data.edges[i] && this.props.data.edges[i].node.frontmatter.leftnavorder.l2 > 0) {
        this.props.data.edges[i].node.frontmatter.isHidden = !this.props.data.edges[i].node.frontmatter.isHidden;
        if (!this.props.data.edges[i].node.frontmatter.isHidden) {
          this.state.opened.push(this.props.data.edges[i].node.fields.slug);
        } else {
          this.state.opened = this.state.opened.filter(item => item !== this.props.data.edges[i].node.fields.slug);
        }
      } else {
        break;
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
          zIndex: 100,
          transition: 'width 0.3s ease-in-out',
          ...(this.state.navOpen && {
            width: 260,
          }),
          [media.lessThan('large')]: {
            width: '100%',
            height: 'auto',
            backgroundColor: colors.gray_100
          },
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
            [media.greaterThan('large')]: {
              opacity: 0,
              ...(this.state.navOpen && {
                opacity: 1,
              })
            }
          }}>
          <div
            css={{
              overflow: 'hidden',
              lineHeight: '90px',
              height: 90,
              paddingLeft: 40,
              [media.lessThan('large')]: {
                lineHeight: '45px',
                height: 45,
                paddingLeft: 20,
                color: colors.gray_700
              },
              width: '100%',
              
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
              cursor: 'pointer',
              [media.lessThan('large')]: {
                display: 'none'
              }              
            }}
            onClick={this.toggleNav}
          />
          <div css={{
            position: 'absolute',
            right: 45,
            top: 0,
            height: 45,
            lineHeight: '45px',
            display: 'none',
            fontFamily: '72',
            fontWeight: 'bold',
            color: colors.gray_700,
            fontSize: 16,
            cursor: 'pointer',
            [media.lessThan('large')]: {
              display: 'block',
              ...(this.state.navOpen && {
                color: 'transparent'
              })
            },
            '::after': {
              position: 'absolute',
              backgroundImage: 'url(' + selectArrowIcon + ')',
              ...(this.state.navOpen && {
                backgroundImage: 'url(' + crossIcon + ')',
              }),
              backgroundRepeat: 'no-repeat',
              backgroundPosition: '10px center',
              width: 50,
              height: 45,
              content: '""'
            }          
          }}
          onClick={this.toggleNav}
          >arseM</div>
          {/* >{(self.state.sectionOn == -1) ? 'Overview' : this.props.data.edges[self.state.sectionOn].node.frontmatter.title}&nbsp;</div> */}

          <div id="menuContainer"
            css={{
              position: 'relative',
              float: 'left',
              width: '100%',
              float: 'left',
              overflow: 'hidden',
              [media.lessThan('large')]: {
                maxHeight: 0,
                transition: 'max-height 0.3s ease-in-out',
                ...(this.state.navOpen && {
                  maxHeight: '100vh',
                })
              }
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
            {/* <LeftNavData.Consumer>
            {({data, setNavData}) => (
              <button
                onClick={setNavData}
                style={{backgroundColor: data}}>
                Toggle data
              </button>
            )}
            </LeftNavData.Consumer> */}
            {this.props.data && this.props.data.edges.map(({ node: data }, i) => (
              <LeftNavLink 
                updating={updating}
                key={(data.fields.slug === '/designguideline/controls/') ? '' : data.id} 
                section={data} 
                sectionIndex={i} 
                sectionOn={self.state.sectionOn} 
                expander={self.expandSection} 
                mouseEnter={self.mouseEnter} 
                mouseLeave={self.mouseLeave}
                closeToggle={self.closeToggle}
                />
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
            [media.greaterThan('large')]: {
              ...(!this.state.navOpen && {
                opacity: 1,
                pointerEvents: 'all'
              })
            }
          }}
          data-sap-ui-icon-content=''
          onClick={this.toggleNav}
        />
      </nav>
    )
  }
}

// LeftNav.contextType = MyContext;

export default LeftNav;