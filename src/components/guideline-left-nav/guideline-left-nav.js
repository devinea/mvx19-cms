import React from 'react';
import { Link, StaticQuery, graphql } from 'gatsby';
import { Location } from '@reach/router';
import { css } from '@emotion/core'
import whiteSearch from './img/search-white.png'

const controlMenu = css`
        font-family: '72-Light';
        color: white;
        font-size: 16px;
        height: 40px;
        line-height: 40px;
        padding-left: 60px;
        display: block;
        `
const mainNav = css`
        padding-left: 40px;
        color: white;
        font: '72-Bold';
        font-size: 20px;
        height: 40px;
        line-height: 40px;
        cursor: pointer;
        display: block;
        &.selected {
            cursor: default;
            background-color: #676767;
        }
        &:not(.selected):hover {
            background-color: #676767;
        }`

const LeftNav = ({ data }) => (
  <nav
    css={css`
    width: 365px;
    background-color: #383838;
    padding-top: 40px;
  `}>
    <h1 css={css`
            font: '72-Light';
            color: white;
            font-size: 24px;
            margin-bottom: 25px;
            padding-left: 40px;`}>Fiori For Web</h1>
    <input
      css={css`
    margin-left: 40px;
    width: calc(100% - 80px);
    background-color: #666666;
    height: 30px;
    line-height: 28px;
    font-size: 14px;
    font-family: '72-Regular';
    color: white;
    border: none;
    padding-left: 10px;
    padding-right: 40px;
    border-radius: 5px;
    background-image: url('${whiteSearch}');
    background-repeat: no-repeat;
    background-position: right 10px center;
    margin-bottom: 35px;
    &:focus {
        outline-width: 0;
    }`} />
    <Location>
      {({ location }) => {
        return (
          <Link
            css={mainNav}
            to={
              (location.pathname.startsWith('/develop')
                ? 'develop'
                : 'design') + '/guidelines'
            }
          >
            Home
          </Link>
        );
      }}
    </Location>
    {data.edges.map(({ node: data }) => (

      <Link css={(data.frontmatter.leftnavorder.l2 != 0) ? controlMenu : mainNav}

        key={(data.fields.slug === '/designguideline/controls/') ? '' : data.id}
        to={(data.fields.slug === '/designguideline/controls/') ? '/design/controls/' : data.fields.slug}>
        {data.frontmatter.title}
      </Link>
    ))}
  </nav>
);

export default LeftNav;
