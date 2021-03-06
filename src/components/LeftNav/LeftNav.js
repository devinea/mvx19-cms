import React from 'react';
import { connect } from 'react-redux';
import { colors, media } from '../theme';
import LeftNavLink from './LeftNavLink';
import { Link } from 'gatsby';
import crossIcon from './../../img/cross.svg';
import selectArrowIcon from './../../img/select-arrow.svg';
import { isSmall, isMedium } from '../../../utils/breakpoints';
import SVG from 'react-inlinesvg';

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
    this.toggleNav = event => this._toggleNav(event);
    this.closeNavOnMobile = () => this._closeNavOnMobile();
    this.expandSection = (event, sectionIndex) => this._expandSection(event, sectionIndex);
    this.mouseEnter = element => this._mouseEnter(element);
    this.mouseLeave = () => this._mouseLeave();
    this.isOverElement = false;
  }

  componentDidUpdate = prevProps => {
    // Determine if the breakpoint has changed, and close the LHS if we've moved to mobile breakpoint.
    if (
      this.props.breakPoint.breakpointName !==
      prevProps.breakPoint.breakpointName
    ) {
      if (isSmall(this.props.breakPoint.breakpointName) || isMedium(this.props.breakPoint.breakpointName)) {
        this._closeNavOnMobile();
      } else {
        this._openNav();
      }
    }
    // Determine if the LHS menu items have been updated.
    if (this.props.lhsItems != prevProps.lhsItems) {
      if (isSmall(this.props.breakPoint.breakpointName) || isMedium(this.props.breakPoint.breakpointName)) {
        this._closeNavOnMobile();
      } else {
        this._openNav();
      }
      let sectionOn = null;
      if (!this.props.lhsItems.leftNavFlattened){
        this.props.lhsItems.leftNavFlattened = (this.props.lhsItems.node && this.props.lhsItems.node.fields && this.props.lhsItems.node.fields.leftNavFlattened) ? this.props.lhsItems.node.fields.leftNavFlattened : this.props.lhsItems.edges ? this.props.lhsItems.edges[0].node.fields.leftNavFlattened : [];
      }
  
      if (!this.props.lhsItems.leftNavFlattened) {
        this.props.lhsItems.leftNavFlattened = [];
      }
      this.topLevelItem = this.props.lhsItems.leftNavFlattened.find(item => item.navTitle);
      for (let i = 0; i < this.props.lhsItems.leftNavFlattened.length; i++) {
        const item = this.props.lhsItems.leftNavFlattened[i];
        // Check if this item is currently selected.
        if (typeof window !== 'undefined' && window.location && item.slug === decodeURIComponent(window.location.pathname)) {
          sectionOn = item.id;
          this.state.mobileTitle = item.title;
        }
        if (item.parentId) {
          const parentItem = this.props.lhsItems.leftNavFlattened.find(obj => obj.id == item.parentId);
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
  ``  }  
      this.setState({ sectionOn: sectionOn });
      if (!sectionOn) {
        this.state.mobileTitle = 'Overview'
      }    
    }
  };

  _toggleNav(event) {
    this.setState({ navOpen: !this.state.navOpen });
  }

  _openNav() {
    this.setState({ navOpen: true });
    this.state.navOpen = true;
    state = this.state;
  }

  _closeNavOnMobile() {
    if (isSmall(this.props.breakPoint.breakpointName) || isMedium(this.props.breakPoint.breakpointName)) {
      this.setState({ navOpen: false });
      this.state.navOpen = false;
      state = this.state;
    }
  }

  _expandSection(event, id) {
    const section = this.props.lhsItems.leftNavFlattened.find(item => item.id == id);
    section.expanded = !section.expanded;
    const childItems = this.props.lhsItems.leftNavFlattened.filter(item => item.parentId == id);
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
    event.stopPropagation();
    this.setState({updating: !this.state.updating})
  }

  _mouseEnter(element) {
    if (element) {
      const menuContainer = document.getElementById('menuContainer');
      const menuHover = document.getElementById('menuHover');
      if (!menuHover || !menuContainer) {
        return;
      }
      const hoverPosition = element.getBoundingClientRect().y - menuContainer.getBoundingClientRect().y + menuContainer.scrollTop;
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
            zIndex: 3,
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
              {this.topLevelItem && this.topLevelItem.id &&
              <Link
                  key={this.topLevelItem.id}
                  to={this.topLevelItem.slug}>{this.topLevelItem.title}</Link>
              }
            </div>
            <div
              css={{
                width: 24,
                height: 24,
                transition: 'opacity 0.3s ease-in-out',
                position: 'absolute',
                right: 15,
                fontSize: 12,
                top: 33,
                cursor: 'pointer',
                opacity: '1',
                [media.greaterThan('xxlarge')]: {
                  opacity: '0',
                  pointerEvents: 'none'
                },
                [media.lessThan('large')]: {
                  display: 'none'
                },
                ':hover': {
                  '.closeMenuIcon': {
                    'path, circle, rect, polygon, line, polyline, ellipse': {
                      fill: colors.blue_300
                    }
                  }
                }
              }}
              onClick={this.toggleNav}>          
                <SVG
                src='/img/icons/ico_cross_24x24.svg'
                className='closeMenuIcon'
                css={{
                  width: 24,
                  height: 24,
                  display: 'block'
                }}
              />
            </div>

<div css={{
            position: 'absolute',
            right: 45,
            top: 0,
            height: 45,
            lineHeight: '45px',
            display: 'none',
            fontFamily: '"72-Bold"',
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
                height: 'calc(100% - 155px)',
                overflowX: 'auto',
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
              {this.props.lhsItems.leftNavFlattened && 
              this.props.lhsItems.leftNavFlattened.filter(item => !item.navTitle).map((data, i) => (
                <LeftNavLink
                  updating={updating}
                  key={(data.slug === '/designguideline/controls/') ? '' : data.id}
                  section={data}
                  sectionIndex={i} 
                  sectionOn={self.state.sectionOn} 
                  expander={self.expandSection} 
                  mouseEnter={self.mouseEnter} 
                  mouseLeave={self.mouseLeave}
                  closeNavOnMobile={self.closeNavOnMobile}/>
              ))}
            </div>
          </div>
        </nav>
        <div
            css={{
              transition: 'opacity 0.3s ease-in-out 0s, left 0.3s ease-in-out 0s, backgroundColor 0.3s ease-in-out 0s',
              opacity: 0,
              width: 34,
              height: 34,
              position: 'fixed',
              zIndex: '2',
              borderRadius: '8px',
              boxShadow: '0 0 14px 0 rgba(0, 0, 0, 0.11)',
              top: 93,
              left: 0,
              cursor: 'pointer',
              fontFamily: 'SAP-icons',
              fontSize: 18,
              lineHeight: '28px',
              textAlign: 'center',
              color: colors.white,
              backgroundColor: colors.blue_300,
              pointerEvents: 'none',
              [media.greaterThan('large')]: {
                ...(!this.state.navOpen && {
                  opacity: 1,
                  left: 40,
                  transition: 'opacity 0.3s ease-in-out 0.3s, left 0.3s ease-in-out 0.3s, background-color 0.3s ease-in-out 0s',
                  pointerEvents: 'all'
                })
              },
              ':hover': {
                backgroundColor: colors.blue_800
              }              
            }}
            onClick={this.toggleNav}
          >                
            <SVG
            src='/img/icons/ico-sidebar_24x24.svg'
            className='openMenuIcon'
            css={{
              width: 24,
              height: 24,
              display: 'block',
              margin: 'auto',
              marginTop: '5px'
            }}
            />
          </div>

      </div>
    )
  }
}

export default connect(state => ({
  breakPoint: state.app.breakPoint,
  lhsItems: state.app.lhsItems
}))(LeftNav);
