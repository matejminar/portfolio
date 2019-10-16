import React from "react"
import { useStaticQuery } from "gatsby"
import Img from "gatsby-image"

export const CompanyLogos = () => {
  const logos = useStaticQuery(graphql`
    query {
      mcdonalds: file(relativePath: { eq: "companies/mcdonalds.png" }) {
        childImageSharp {
          fixed(height: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      omv: file(relativePath: { eq: "companies/omv.jpg" }) {
        childImageSharp {
          fixed(height: 80) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      volkswagen: file(relativePath: { eq: "companies/volkswagen.png" }) {
        childImageSharp {
          fixed(height: 80) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      adidas: file(relativePath: { eq: "companies/adidas.png" }) {
        childImageSharp {
          fixed(height: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      o2: file(relativePath: { eq: "companies/o2.png" }) {
        childImageSharp {
          fixed(height: 90) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      tatratea: file(relativePath: { eq: "companies/tatratea.jpg" }) {
        childImageSharp {
          fixed(height: 110) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      websupport: file(relativePath: { eq: "companies/websupport.png" }) {
        childImageSharp {
          fixed(height: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      sme: file(relativePath: { eq: "companies/sme.png" }) {
        childImageSharp {
          fixed(height: 70) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      jt: file(relativePath: { eq: "companies/j&t.png" }) {
        childImageSharp {
          fixed(height: 130) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      gate: file(relativePath: { eq: "companies/gate.png" }) {
        childImageSharp {
          fixed(height: 130) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      rajo: file(relativePath: { eq: "companies/rajo.png" }) {
        childImageSharp {
          fixed(height: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      postova: file(relativePath: { eq: "companies/postova.png" }) {
        childImageSharp {
          fixed(height: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      csob: file(relativePath: { eq: "companies/csob.png" }) {
        childImageSharp {
          fixed(height: 80) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      eduscho: file(relativePath: { eq: "companies/eduscho.png" }) {
        childImageSharp {
          fixed(height: 80) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      preto: file(relativePath: { eq: "companies/preto.png" }) {
        childImageSharp {
          fixed(height: 80) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      markiza: file(relativePath: { eq: "companies/markiza.png" }) {
        childImageSharp {
          fixed(height: 90) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      yit: file(relativePath: { eq: "companies/yit.png" }) {
        childImageSharp {
          fixed(height: 90) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      pilsner: file(relativePath: { eq: "companies/pilsner.png" }) {
        childImageSharp {
          fixed(height: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      sse: file(relativePath: { eq: "companies/sse.png" }) {
        childImageSharp {
          fixed(height: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      grape: file(relativePath: { eq: "companies/grape.png" }) {
        childImageSharp {
          fixed(height: 60) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      vinea: file(relativePath: { eq: "companies/vinea.png" }) {
        childImageSharp {
          fixed(height: 90) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      hbreavis: file(relativePath: { eq: "companies/hbreavis.png" }) {
        childImageSharp {
          fixed(height: 50) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      dennikn: file(relativePath: { eq: "companies/dennikn.jpg" }) {
        childImageSharp {
          fixed(height: 80) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      pantarhei: file(relativePath: { eq: "companies/pantarhei.jpg" }) {
        childImageSharp {
          fixed(height: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      kontentino: file(relativePath: { eq: "companies/kontentino.png" }) {
        childImageSharp {
          fixed(height: 50) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      up: file(relativePath: { eq: "companies/up.png" }) {
        childImageSharp {
          fixed(height: 80) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return (
    <section className="flex items-center justify-center flex-wrap px-1 opacity-75">
      {Object.entries(logos).map(logo => {
        return (
          <div key={logo[0]} className="py-3 px-5">
            <Img fixed={logo[1].childImageSharp.fixed} />
          </div>
        )
      })}
    </section>
  )
}
