import React from "react"
import styled from 'styled-components';
import {media} from '@styles'
import { Layout, Hero, About, Project, Projects, Jobs, Contact } from '@components'
import { graphql } from "gatsby";

const Container = styled.main`
  padding: 0 150px;
  margin: 0 auto;
  max-width: 1600px;
  min-height: 100vh;
  ${media.desktop`padding: 0 100px;`};
  ${media.tablet`padding: 0 50px;`};
  ${media.phablet`padding: 0 25px;`};
`;

const IndexPage = ({ location, data }) => {
  return(
    <Layout location={location}>
      <Container>
        <Hero data={data.hero.edges} />
        <About data={data.about.edges} />
        <Project data={data.project.edges} />
        <Projects data={data.projects.edges} />
        <Jobs data={data.jobs.edges} />
        <Contact data={data.contact.edges} />
      </Container>
    </Layout>
  )
}

export default IndexPage;

export const pageQuery = graphql `
  {
    hero: allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/hero/"}}) {
      edges {
        node {
          frontmatter {
            title
            name_1
            name_2
            name_3
            name_4
            subtitle
            buttonText
            resumeText
          }
          html
        }
      }
    }
    project: allMarkdownRemark(
      filter: {fileAbsolutePath: {regex: "/Project/"}}
      sort: {fields: [frontmatter___no], order:ASC}
    ) {
        edges {
          node {
            frontmatter {
              title
              cover {
                childImageSharp {
                  fluid(maxWidth: 700, quality: 90) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
              built
              github
              external
            }
            html
          }
        }
      }
    about: allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/about/" } }) {
      edges {
        node {
          frontmatter {
            title
            avatar {
              childImageSharp{
                fluid(maxWidth: 700, quality: 90, traceSVG: { color: "#4DC932"}) {
                  ...GatsbyImageSharpFluid_withWebp_tracedSVG
                }
              }
            }
            skills
          }
          html
        }
      }
    }
    projects: allMarkdownRemark(
      filter: {fileAbsolutePath: {regex: "/projects/"}}
      sort: {fields: [frontmatter___id], order:ASC}
    ) {
        edges {
          node {
            frontmatter {
              bg {
                childImageSharp {
                  fluid(maxWidth: 700, quality: 90) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
              title
              built
              github
              external
            }
            html
          }
        }
      }
    jobs: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/jobs/" } }
      sort:{ fields: [frontmatter___date], order: ASC}
    ) {
      edges {
        node {
          frontmatter {
            title
            company
            range
            url
          }
        }
      }
    }
    contact: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/contact/" } }) {
      edges {
        node {
          frontmatter {
            title
            subtext
            buttonText
          }
          html
        }
      }
    }
  }
`;