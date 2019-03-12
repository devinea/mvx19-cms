/** @jsx jsx */
import { jsx } from '@emotion/core'
import { Link } from 'gatsby';
import { colors } from '../theme';
import { Img }  from "gatsby-image";
import React from "react";

const Panel = (props) => (
    <Link to={props.data.fields.slug} id={props.data.id}>
        <div css={{
            marginBottom: 30,
            height: 260
        }}>
            <div
                css={{
                    width: 260,
                    height: 180,
                    backgroundColor: colors.gray_100,
                    marginBottom: 20,
                    borderRadius: 6,
                    display: 'flex',
                    alignItems: 'center'
                }}
            >
                <img css={{
                    padding: 10,
                    width: 260,
                    margin: '0 auto',
                    display: 'block'
                }}

                     src={props.data.frontmatter.featuredImage.childImageSharp.sizes.src} />

            </div>
            <div css={{
                color: '#373737',
                fontSize: 16,
                fontWeight: 'normal',
                height: 24
            }}>
                {props.data.frontmatter.title}
            </div>
        </div>
    </Link>
);

export default Panel;
