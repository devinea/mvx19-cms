import React from 'react';
import { colors, media } from '../theme';
import LeftNavLink from './LeftNavLink';
import { Link } from 'gatsby';
import crossIcon from './../../img/cross.svg';
import selectArrowIcon from './../../img/select-arrow.svg';

let state = {
  navOpen: true,
  sectionOn: null,
  mobileTitle: null,
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
        this.state.mobileTitle = item.title;
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
    if (!sectionOn) {
      this.state.mobileTitle = 'Overview'
    }

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
      <div
        css={{
          position: 'relative'
        }}>
        <nav
          css={{
            backgroundColor: colors.white,
            display: 'flex',
            left: '-260px',
            zIndex: 1,
            width: '260px',
            transition: 'left 0.3s ease-in-out',
            ...(this.state.navOpen && {
              left: '0'
            }),
            [media.lessThan('large')]: {
              width: '100%',
              height: 'auto',
              left: '0px',
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
                transition: 'opacity 0.3s ease-in-out',
                position: 'absolute',
                right: 12,
                fontSize: 12,
                top: 39,
                cursor: 'pointer',
                opacity: '1',
                [media.greaterThan('xlarge')]: {
                  opacity: '0',
                  pointerEvents: 'none'
                },
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
          >{self.state.mobileTitle}&nbsp;</div>            
            <div id="menuContainer"
              css={{
                position: 'relative',
                float: 'left',
                width: '100%',
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
        </nav>
        <div
            css={{
              transition: 'opacity 0.3s ease-in-out, left 0.3s ease-in-out',
              transitionDelay: '0s',
              opacity: 0,
              width: 28,
              height: 28,
              position: 'absolute',
              zIndex: '3',
              borderRadius: '2.5px',
              boxShadow: '0 0 14px 0 rgba(0, 0, 0, 0.11)',
              top: 29,
              left: 0,
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
                  left: 40,
                  transitionDelay: '0.4s',                  
                  pointerEvents: 'all'
                })
              }
            }}
            data-sap-ui-icon-content=''
            onClick={this.toggleNav}
          />
      </div>
    )
  }
}

export default LeftNav;