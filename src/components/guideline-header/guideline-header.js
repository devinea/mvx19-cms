import React from 'react'
import { css } from '@emotion/core'

/**
 * Generates the guideline header used to swich between Fiori web / mobile / CUX etc
 */

const guidelineHeaderOptions = [
    'Fiori for Web',
    'Fiori for Mobile',
    'Fiori for CUX',
    'Fiori for AR & VR'
];
const GuidelineHeader = class extends React.Component {
    render() {
        return (
            <nav css={{
                height: '70px',
                backgroundColor: '#eaeaea',
                width: '100%',
                lineHeight: '70px'
            }}>
                <div css={{ float: 'right' }}>
                    {
                        guidelineHeaderOptions.map((o, idx) => {
                        const selected = idx === 0 ? '800' : '400'
                        return <div key={o}
                            css={css`
                                float: left;
                                font-size: 16px;
                                color: #515151;
                                width: 175px;
                                cursor: pointer;
                                font-weight: ${selected};
                        `}>{o}</div>
                    })
                    }
                </div>
            </nav>
        )
    }
}

export default GuidelineHeader
