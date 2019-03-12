/** @jsx jsx */
import { jsx } from '@emotion/core'
import { Link } from 'gatsby';
import { colors } from '../theme';

const SeeAllButton = (props) => {
    return (<Link to={props.data.url}>
        <div css={{
            backgroundColor: colors.gray_100,
            borderRadius: '18.5px 18.5px 18.5px 18.5px',
            height: 36,
            width: 'fit-content',
            padding: '20px',
            display: 'flex',
            justifyContent: 'center',
            flexFlow: 'column',
            alignItems: 'center',
            margin: '5px 0'
        }}>
            <span css={{
                color: colors.gray_500,
                fontFamily: '72-Bold',
                fontSize: 14,
                fontWeight: 'bold',
                letterSpacing: 0.05,
                textTransform: 'uppercase'
            }}>See All {props.data.label}</span>
        </div>
    </Link>);
};

export default SeeAllButton;
