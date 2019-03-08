/** @jsx jsx */
import { jsx } from '@emotion/core'
import { Link } from 'gatsby';
import { colors } from '../theme';

const SeeAllButton = (props) => (
    <Link to={props.data.slug}>
        <div css={{
            backgroundColor: colors.gray_100,
            borderRadius: '18.5px 18.5px 18.5px 18.5px',
            height: 37,
            width: 112,
            display: 'flex',
            justifyContent: 'center',
            flexFlow: 'column',
            alignItems: 'center'
        }}>
            <span css={{
                color: colors.gray_500,
                fontFamily: '72-Bold',
                fontSize: 14,
                fontWeight: 'bold',
                letterSpacing: 0.05,
                textTransform: 'uppercase'
            }}>See All</span>
        </div>
    </Link>
);

export default SeeAllButton;
