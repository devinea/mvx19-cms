import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import { media, colors } from '../theme';

import BackgroundImage from 'gatsby-background-image'

import styled from '@emotion/styled';

const BackgroundSection = ({ className }) => (
    <StaticQuery query={graphql`
      query {
        coverImage: file(
            relativePath: { regex: "/ios_background/" }
          ) {
            childImageSharp {
              fluid(
                quality: 90
              ) {
                ...GatsbyImageSharpFluid_noBase64
              }
              
            }
            
          }
      }
    `}
     render={data => {

      const getWidths = () => {
        return {
          [media.greaterThan('small')]: {
            minWidth: media.getSize('small').width,
            maxWidth: media.getSize('small').width
          },
          [media.greaterThan('medium')]: {
            minWidth: media.getSize('medium').width,
            maxWidth: media.getSize('medium').width
          },
          [media.greaterThan('large')]: {
            minWidth: media.getSize('large').width,
            maxWidth: media.getSize('large').width
          },
          [media.greaterThan('xlarge')]: {
            minWidth: media.getSize('xlarge').width,
            maxWidth: media.getSize('xlarge').width
          }
        }
      };


    const getFontStyle = (color, fontSize, fontWeight) => {
      return { color, fontSize, fontWeight };
    }

       // Set ImageData.
       const imageData = data.coverImage.childImageSharp.fluid
       return (
         <BacgroundWrapper>
          <BackgroundImage fluid={imageData} classId="bgimg"  css={{height : 400, 
              [media.lessThan('medium')]: {
                display: 'none'
              }
            }}>
              <div css={{
                width: 828,
                margin: '0 auto',
                paddingBottom: 60,
                paddingTop: 40,
                ...getWidths()
              }}>
                <h1 css={{
                  ...getFontStyle(colors.gray_600, 45, 300),
                  paddingTop: 30,
                  width: '36%',
                  [media.lessThan('large')]: {
                    fontSize: 28
                  },
                  [media.lessThan('medium')]: {
                    fontSize: 30
                  }
                }}>Design and Develop delightful iOS mobile apps.</h1>
              </div>
            </BackgroundImage>
          </BacgroundWrapper>
       )
     }
     }
    />
)

const StyledBackgroundImage = styled(BackgroundSection)`
   background-repeat: no-repeat;
   height: 400px;
  }
`
const BacgroundWrapper = styled.div`
  background-color: #f8f9fb ;

  .gatsby-background-image-bgimg:after, .gatsby-background-image-bgimg:before {
    background-size: 906px 400px ;
    background-position: calc(50% + 400px);
  }
`
export default StyledBackgroundImage