/** @jsx jsx */
import { jsx } from '@emotion/core'
import { Link } from 'gatsby';
import { colors } from '../theme';
import selectArrowIcon from './../../img/select-arrow.svg';

import { css } from '@emotion/core';

const Dropdown = (props) => {
    return (
    <div css={css`
    background: url(${selectArrowIcon}) no-repeat 100px 10px;
    height: 30px;
    overflow: hidden;
    width: 130px;
    margin: 30px 10px;
    `}>
        <select css={css`
            background: transparent;
            border: none;
            font-size: 16px;
            height: 30px;
            width: 150px;
            outline: none;
            font-weight: 600;
        `}>
            {props.options.map((o, idx) => {
                return (<option css={css`

                `}
                key={idx}
                value={o.label}>{o.label}</option>);
            }
            )}
        </select>
    </div>
)};

export default Dropdown;
