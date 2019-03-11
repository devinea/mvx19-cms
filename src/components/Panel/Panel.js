/** @jsx jsx */
import { jsx } from '@emotion/core'
import { Link } from 'gatsby';
import { colors } from '../theme';

const Panel = (props) => (
    <Link to={props.data.url}>
        <div css={{
            marginBottom: 72
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
                    position: 'relative'
                }}
            >
                <img css={{
                    padding: '10px 10px 0 10px',
                    width: 260,
                    bottom: 0,
                    position: 'absolute'
                }}
                    src={props.data.image.src} />
            </div>
            <div css={{
                color: '#373737',
                fontSize: 16,
                fontWeight: 'normal',
                height: 24
            }}>
                {props.data.title}
            </div>
        </div>
    </Link>
);

export default Panel;
