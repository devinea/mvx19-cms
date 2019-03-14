/** @jsx jsx */
import { jsx } from '@emotion/core'
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import { colors, media } from '../theme';

const Panel = (props) => (
    <Link to={props.data.fields.slug} css={{
        marginBottom: 24
    }}>
        <div
            css={{
                backgroundColor: colors.gray_100,
                marginBottom: 20,
                borderRadius: 6,
                display: 'flex',
                alignItems: 'center',
                ':hover': {
                    boxShadow: '0 5px 15px 0 rgba(0, 0, 0, 0.15)',
                    transform: 'translateY(-5px)',
                    transition: 'all 0.3s ease-in-out'
                },
                [media.lessThan('medium')]: {
                    height: 100,
                    width: 144
                },
                [media.lessThan('large')]: {
                    width: 256,
                    height: 150
                },
                [media.lessThan('xlarge')]: {
                    width: 312,
                    height: 198
                }
            }}
        >

            <Img css={{
                padding: 10,
                width: 312,
                [media.lessThan('medium')]: {
                    height: 100,
                    width: 144
                },
                [media.lessThan('large')]: {
                    width: 256,
                    height: 150
                },
                [media.lessThan('xlarge')]: {
                    width: 312,
                    height: 198
                }
            }}
                imgStyle={{
                    padding: 10,
                    width: 312,
                    [media.lessThan('medium')]: {
                        height: 100,
                        width: 144
                    },
                    [media.lessThan('large')]: {
                        width: 256,
                        height: 150
                    },
                    [media.lessThan('xlarge')]: {
                        width: 312,
                        height: 198
                    }
                }}
                sizes={props.data.frontmatter.featuredImage.childImageSharp.sizes} />
        </div>
        <div css={{
            color: colors.gray_700,
            fontSize: 16,
            fontWeight: 'normal',
            height: 24,
            ':hover': {
                color: colors.blue_300
            }
        }}>
            {props.data.frontmatter.title}
        </div>
    </Link>
);

export default Panel;
