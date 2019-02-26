import React from 'react';
import ReactDOM from "react-dom";
import arrowIcon from './../../img/arrow.svg';
import { Link } from 'gatsby';
import { colors } from '../theme';

class LeftNavLink extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Link
                css= {{
                    float: 'left',
                    clear: 'both',
                    width: '100%'
                }}
                key={(this.props.section.fields.slug == '/designguideline/controls/') ? '' : this.props.section.id}
                to={(this.props.section.fields.slug == '/designguideline/controls/') ? '/design/controls/' : this.props.section.fields.slug}>
                <nav
                    css={{
                        width: '100%',
                        float: 'left',
                        paddingLeft: 40,
                        cursor: 'pointer',
                        position: 'relative',
                        ...(this.props.sectionOn == this.props.sectionIndex && {
                            cursor: 'default'
                        }),
                        ...(this.props.section.frontmatter.hasChildren && {
                            cursor: 'default'
                        })
                    }}
                    onMouseEnter={() => {
                        if (this.props.sectionOn !== this.props.sectionIndex) {
                            this.props.mouseEnter(ReactDOM.findDOMNode(this))
                        }
                    }
                    }
                    onMouseLeave={() => {
                        if (this.props.sectionOn !== this.props.sectionIndex) {
                            this.props.mouseLeave()
                        }
                    }
                    }
                >
                    <div
                        css={{
                            float: 'left',
                            clear: 'both',
                            position: 'relative',
                            fontSize: 16,
                            height: 45,
                            color: colors.gray_500,
                            lineHeight: '45px',
                            whiteSpace: 'nowrap',
                            ...(this.props.section.frontmatter.leftnavorder.l2 > 0 && {
                                paddingLeft: 15,
                                fontSize: 14,
                                height: 0,
                                opacity: 0,
                                transition: 'height 0.3s ease-in-out, opacity 0.3s ease-in-out'
                            }),
                            ...(this.props.section.frontmatter.isHidden == false && {
                                height: 45,
                                opacity: 1
                            }),
                            ...(this.props.sectionOn == this.props.sectionIndex && {
                                color: colors.black,
                                ':after': {
                                    backgroundImage: 'url(' + arrowIcon + ')',
                                    backgroundPosition: 'center center',
                                    backgroundRepeat: 'no-repeat',
                                    content: '""',
                                    width: 12,
                                    height: 12,
                                    position: 'absolute',
                                    top: 17,
                                    right: -21
                                }
                            })
                        }}
                    >{this.props.section.frontmatter.title}
                    </div>
                    {this.props.section.frontmatter.hasChildren && (
                        <div
                            css={{
                                position: 'absolute',
                                outline: 0,
                                content: '""',
                                border: 0,
                                top: 15,
                                right: 10,
                                width: 14,
                                cursor: 'pointer',
                                fontFamily: 'SAP-icons',
                                fontSize: 14,
                                color: colors.gray_500,
                                backgroundColor: 'transparent',
                                ...(!this.props.section.frontmatter.expanded && {
                                    '::before': {
                                        content: '""'
                                    }
                                }),
                                ...(this.props.section.frontmatter.expanded && {
                                    '::before': {
                                        content: '""'
                                    }
                                })                                
                            }}
                            onClick={(e) => {
                                this.props.expander(e, this.props.sectionIndex)
                            }}
                        ></div>
                    )}
                </nav>
            </Link>
        )
    }
}

export default LeftNavLink;

