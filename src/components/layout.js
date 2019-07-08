/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'
import s from 'styled-components'

import Header from './Header'
import Footer from './Footer'
import Nav from './Nav'

import './layout.css'

const ContentWrapper = s.div`
  min-height: 100vh;
  width: 100%;
`

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <ContentWrapper>
        <Header siteTitle={data.site.siteMetadata.title} />

        <main>{children}</main>
      </ContentWrapper>

      <Nav />

      <Footer />

      <link href="https://fonts.googleapis.com/css?family=Roboto:400,500,700&display=swap" rel="stylesheet"></link>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
