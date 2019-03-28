import React from 'react';
import PropTypes from 'prop-types';
import SVG from 'react-inlinesvg';
import { Link } from 'gatsby';
import Img from 'gatsby-image';

import { colors, media } from '../theme';

class Blog extends React.Component {
  constructor(props) {
    super(props);

    this.mode = [
      { web: '/img/svg/fiori_web.svg' },
      { ios: '/img/svg/fiori_ios.svg' },
      { android: '/img/svg/fiori_android.svg' },
      { cux: '/img/svg/fiori_cux.svg' }
    ];
    this.default_mode = [{ sap: '/img/svg/fiori_sap.svg' }];
    this.state = {
      mode: 'sap',
      isImage: false
    };
  }

  componentDidMount = () => {
    const type = this.mode.filter(v => {
      if (this.props.tags) {
        return this.props.tags.includes(Object.keys(v)[0]);
      }
    });
    if (type.length) {
      this.setState({ mode: Object.keys(type[0])[0] });
    } else {
      this.setState({ mode: Object.keys(this.default_mode[0])[0] });
    }

    if (this.props.image !== null) {
      this.setState({
        isImage: true
      });
    }
  };

  render() {
    return (
      <Link
        to={this.props.url}
        css={{
          display: 'block',
          [media.greaterThan('xlarge', true)]: {},
          [media.between('large', 'xlarge', true)]: {},
          [media.between('medium', 'large', true)]: {},
          [media.lessThan('medium', true)]: {}
        }}
      >
        <div
          css={{
            display: 'inline-block',
            width: '100%',
            [media.greaterThan('xlarge', true)]: {},
            [media.between('large', 'xlarge', true)]: {},
            [media.between('medium', 'large', true)]: {},
            [media.lessThan('medium', true)]: {}
          }}
        >
          <div
            css={{
              float: 'left',
              textAlign: 'center',
              [media.greaterThan('xlarge', true)]: {},
              [media.between('large', 'xlarge', true)]: {},
              [media.between('medium', 'large', true)]: {},
              [media.lessThan('medium', true)]: {}
            }}
          >
            {!this.state.isImage && (
              <SVG
                src={this.props.image}
                css={{
                  [media.lessThan('medium')]: {
                    width: 50,
                    height: 50,
                    svg: {
                      width: 50,
                      height: 50
                    }
                  },
                  [media.greaterThan('large')]: {},
                  display: 'block'
                }}
              />
            )}
            {this.state.isImage && (
              <Img
                sizes={this.props.image}
                imgStyle={{
                  [media.lessThan('medium')]: {
                    width: 64,
                    height: 'auto'
                  }
                }}
              />
            )}
          </div>

          <div
            css={{
              [media.greaterThan('xlarge', true)]: {},
              [media.between('large', 'xlarge', true)]: {},
              [media.between('medium', 'large', true)]: {},
              [media.lessThan('medium', true)]: {}
            }}
          >
            <div
              css={{
                fontSize: 28,
                fontWeight: 300,
                fontWeight: 'normal',
                lineHeight: '33px',
                paddingBottom: 24,
                color: colors.gray_700,
                [media.greaterThan('xlarge', true)]: {},
                [media.between('large', 'xlarge', true)]: {},
                [media.between('medium', 'large', true)]: {},
                [media.lessThan('medium', true)]: {}
              }}
            >
              {this.props.title} - {this.state.mode}
            </div>
            <div
              css={{
                fontSize: 16,
                fontWeight: 'normal',
                lineHeight: '24px',
                paddingBottom: 46,
                color: colors.gray_700,
                [media.greaterThan('xlarge', true)]: {},
                [media.between('large', 'xlarge', true)]: {},
                [media.between('medium', 'large', true)]: {},
                [media.lessThan('medium', true)]: {}
              }}
            >
              {this.props.description}
            </div>
          </div>
        </div>
      </Link>
    );
  }
}

Blog.propTypes = {
  image: PropTypes.string,
  tags: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string,
  description: PropTypes.string,
  url: PropTypes.string
};

export default Blog;
