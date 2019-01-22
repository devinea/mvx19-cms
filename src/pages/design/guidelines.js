import React from 'react'
import Layout from '../../components/Layout'
import GuidelineHeader from '../../components/guideline-header/guideline-header'
import GuidelineLeftNav from '../../components/guideline-left-nav/guideline-left-nav';
import './guidelines.scss'

export default class DesignGuidelineIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <GuidelineHeader></GuidelineHeader>
        <GuidelineLeftNav></GuidelineLeftNav>
        <section className="section design-guidelines">
          <div className="welcome"></div>
        </section>
      </Layout>
    )
  }
}
