import React from 'react'
import PropTypes from 'prop-types'
import { css } from '@emotion/core'

class Typography extends React.Component {
  render() {

    const { name, uppercase, style, color, size, height } = this.props;
    const textCase = uppercase === true ? "uppercase" : "lowercase";

    return (
    <section>
        <table>
            <tbody>
                <tr>
                <td>
                    <div
                        css={css`
                            text-transform: ${textCase};
                            font-family: ${style};
                            color: ${color};
                            font-size: ${size}px;
                            line-height: ${height}px; /* Not sure that this.props.height in this case relates to CSS line-height... */
                            width: 150px;
                            text-align: right;`
                        }
                    >
                        {name}
                    </div>
                </td>
                <td
                    css={{
                        textAlign: 'left',
                        borderLeft: 3,
                        borderLeftStyle: 'solid',
                        borderLeftColor: '#9D9B9A'
                    }}
                >
                    <div><b>Uppercase:</b> {uppercase.toString()}</div>
                    <div><b>Style:</b> {style}</div>
                    <div><b>Color:</b> {color}</div>
                    <div><b>Size:</b> {size}</div>
                    <div><b>Height:</b> {height}</div>
                </td>
                </tr>
            </tbody>
        </table>
    </section>
    )
  }
}

Typography.defaultProps = {
  name: "<Style Name>",
  uppercase: false,
  style: "Regular",
  color: "#000000",
  size: 12,
  height: 12,
}

Typography.propTypes = {
  name: PropTypes.string,
  uppercase: PropTypes.bool,
  style: PropTypes.string,
  color: PropTypes.string,
  size: PropTypes.number,
  height: PropTypes.number,
}

export default Typography