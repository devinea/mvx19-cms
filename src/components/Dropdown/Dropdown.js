/** @jsx jsx */
import { jsx } from '@emotion/core'
import selectArrowIcon from './../../img/select-arrow.svg';
import { ReactReduxContext, connect } from 'react-redux';
import { selectPanels as selectPanelsAction } from '../../state/app';

import React from 'react';

export default class Dropdown extends React.Component {

    static contextType = ReactReduxContext;


    constructor(props) {
        super(props);
        this.state = {value: 'Controls'};
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
        this.context.store.dispatch(selectPanelsAction(event.target.value));
      }

    render() {
        return (
            <div css={{
                background: `url(${selectArrowIcon}) no-repeat 100px 10px`,
                height: 30,
                overflow: 'hidden',
                width: 130,
                margin: '30px 10px'
            }}>
                <select
                    value={this.state.value}
                    onChange={this.handleChange}
                    css={{
                        background: 'transparent',
                        border: 'none',
                        fontSize: 16,
                        height: 30,
                        width: 150,
                        outline: 'none',
                        fontWeight: 600
                    }}>
                    {this.props.options
                        .map((o, idx) => {
                            return (<option key={idx} value={o.node.title}>{o.node.title}</option>);
                        })
                    }
                </select>
            </div >
        )
    }
}
