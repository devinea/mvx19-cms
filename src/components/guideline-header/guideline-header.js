import React from 'react'
import { Link } from 'gatsby'
import './guideline-header.scss'

/**
 * Generates the guideline header used to swich between Fiori web / mobile / CUX etc
 */
const GuidelineHeader = class extends React.Component {

    render() {
        return (
            <nav className="guideline-header">
                <div className="options">
                    <div className="option selected">Fiori for Web</div>
                    <div className="option">Fiori for Mobile</div>
                    <div className="option">Fiori for CUX</div>
                    <div className="option">Fiori for AR &amp; VR</div>
                </div>
            </nav>
    )}
}

export default GuidelineHeader