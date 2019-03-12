import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';
import { colors } from '../theme';

class Tab extends Component {
    static propTypes = {
        activeTab: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        onClick: PropTypes.func.isRequired,
    };

    onClick = () => {
        const { label, onClick } = this.props;
        onClick(label);
    }

    render() {
        const {
            onClick,
            props: {
                activeTab,
                label,
            },
        } = this;

        const listItem = css`display: inline-block;
        list-style: none;
        padding: 10px 0px;
        margin-right: 60px;
        color: ${colors.gray_700};
        font-family: 72-Regular;
        font-size: 20px;
        font-weight: normal;
        height: 32px;
        line-height: 10px;
        border-bottom: ${activeTab === label ? '2px solid ' + colors.gray_700 : 'none'};
        cursor:pointer;
        :hover {
            color: ${activeTab === label ? colors.gray_700 : colors.blue_300};
        }`

        return (
            <li css={listItem} onClick={onClick}>
                {label}
            </li>
        );
    }
}


export default Tab;

