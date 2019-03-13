/** @jsx jsx */
import { jsx } from '@emotion/core'
import selectArrowIcon from './../../img/select-arrow.svg';

const Dropdown = (props) => {
    return (
        <div css={{
            background: `url(${selectArrowIcon}) no-repeat 100px 10px`,
            height: 30,
            overflow: 'hidden',
            width: 130,
            margin: '30px 10px'
        }}>
            <select css={{
                background: 'transparent',
                border: 'none',
                fontSize: 16,
                height: 30,
                width: 150,
                outline: 'none',
                fontWeight: 600
            }}>
                {props.options
                    .map((o, idx) => {
                        return (<option key={idx} value={o.node.title}>{o.node.title}</option>);
                    })
                }
            </select>
        </div>
    )
};

export default Dropdown;
