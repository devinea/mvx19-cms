/** @jsx jsx */
import { jsx } from '@emotion/core'
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import { colors } from '../theme';

const Panel = (props) => (
    <Link to={props.data.fields.slug}>
        <div css={{
            marginBottom: 24
        }}>
            <div
                css={{
                    width: 260,
                    height: 140,
                    backgroundColor: colors.gray_100,
                    marginBottom: 20,
                    borderRadius: 6,
                    display: 'flex',
                    alignItems: 'center',
                    transitionDuration: '0.5s',
                    ':hover': {
                        boxShadow: '0 5px 15px 0 rgba(0, 0, 0, 0.15)',
                        transform: 'translateY(-5px)',
                        transitionDuration: '0.5s',
                        transitionTimingFunction: 'cubic-bezier(0.25, 0.1, 0.25, 1)'
                    }
                }}
            >

              <Img css={{
                    padding: 10,
                    width: 260
                }}
                   imgStyle={{padding: 10,
                     width: 260}}
                     sizes={props.data.frontmatter.picture.childImageSharp.sizes} />
            </div>
            <div css={{
                color: colors.gray_700,
                fontSize: 16,
                fontWeight: 'normal',
                height: 24
            }}>
                {props.data.frontmatter.title}
            </div>
        </div>
    </Link>
);

export default Panel;
