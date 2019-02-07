import React from 'react'
import Layout from '../../components/Layout'
import './index.scss'
import { graphql, StaticQuery } from "gatsby";
import Img from 'gatsby-image';
import Flex from "../../components/Flex";

class ContributeIndexPage extends React.Component {
  render() {
    const { location } = this.props;
    return (
      <Layout location={location}>
        <Flex
          direction='row'
          shrink='0'
          grow='1'
          overflow='auto'
          valign='stretch'
          css={{
            width: '100%',
          }}
        >
        <div className="contribute-section">
        <Img fixed={this.props.data.file.childImageSharp.fixed} />
        </div>
        </Flex>
      </Layout>
    )
  }
}


export default props => (
  <StaticQuery
    query={graphql`query {
      file(relativePath: { eq: "contributeImage.png" }) {
        childImageSharp {
          # Specify the image processing specifications right in the query.
          # Makes it trivial to update as your page's design changes.
          fixed(width: 1200, height: 1500) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }`}
    render={(data) => <ContributeIndexPage data={data} {...props} /> }
  />
)
