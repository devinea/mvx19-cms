/** @jsx jsx */
import { jsx } from '@emotion/core'
import { Link } from 'gatsby';
import { colors } from '../theme';

const Panel = (props) => (
    <Link to={props.data.url}>
        <div css={{
            marginBottom: 30,
            height: 260
        }}>
            <div
                css={{
                    width: 315,
                    height: 200,
                    backgroundColor: colors.gray_100,
                    marginBottom: 20,
                    borderRadius: 6,
                    display: 'flex',
                    alignItems: 'center'
                }}
            >
                <img css={{
                    padding: 10,
                    width: 310,
                    margin: '0 auto',
                    display: 'block'
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
