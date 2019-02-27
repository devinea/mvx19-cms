import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';

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
        margin-bottom: -1px;
        padding: 10px 60px;
        color: ${activeTab === label ? '#427CAC' : '#424242'};
        font-family: 72-Regular;
        font-size: 20px;
        font-weight: normal;
        height: 32px;
        line-height: 32px;
        cursor:pointer;`

        return (
            <li css={listItem} onClick={onClick}>
                {label}
            </li>
        );
    }
}


export default Tab;

