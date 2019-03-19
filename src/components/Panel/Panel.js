/** @jsx jsx */
import { jsx } from '@emotion/core'
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import { colors, media } from '../theme';

const imageDimensions = () => {
    // React complains if it is in kebab case
    return {
        padding: 10,
        [`@media (minWidth: 1280px)`]: {
            width: 312,
            height: 198,
        },
        [`@media (minWidth: 1279px)`]: {
            width: 260,
            height: 198
        },
        [`@media (minWidth: 1023px)`]: {
            width: 256,
            height: 150
        },
        [`@media (minWidth: 599px)`]: {
            height: 100,
            width: 144
        }
    }
}

const Panel = (props) => (
    <Link to={props.data.fields.slug} css={{ marginBottom: 24 }}>
        <div
            css={{
                backgroundColor: colors.gray_100,
                marginBottom: 20,
                borderRadius: 6,
                width: 312,
                height: 198,
                display: 'flex',
                alignItems: 'center',
                ':hover': {
                    boxShadow: '0 5px 15px 0 rgba(0, 0, 0, 0.15)',
                    transform: 'translateY(-5px)',
                    transition: 'all 0.3s ease-in-out'
                },
                [media.lessThan('xlarge')]: {
                    width: 260,
                    height: 198
                },
                [media.lessThan('large')]: {
                    width: 256,
                    height: 150
                },
                [media.lessThan('medium')]: {
                    height: 100,
                    width: 144
                }
            }}
        >

            <Img css={{ width: '100%', height: '100%' }}
                imgStyle={imageDimensions()}
                sizes={props.data.frontmatter.picture.childImageSharp.sizes} />
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
