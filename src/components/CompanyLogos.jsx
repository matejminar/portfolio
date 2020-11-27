import React from "react"
import { useStaticQuery } from "gatsby"
import Img from "gatsby-image"

export const CompanyLogos = () => {
  const logos = useStaticQuery(graphql`
    query {
      mcdonalds: file(relativePath: { eq: "companies/mcdonalds.png" }) {
        childImageSharp {
          fluid(maxHeight: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      omv: file(relativePath: { eq: "companies/omv.jpg" }) {
        childImageSharp {
          fluid(maxHeight: 80) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      volkswagen: file(relativePath: { eq: "companies/volkswagen.png" }) {
        childImageSharp {
          fluid(maxHeight: 80) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      adidas: file(relativePath: { eq: "companies/adidas.png" }) {
        childImageSharp {
          fluid(maxHeight: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      o2: file(relativePath: { eq: "companies/o2.png" }) {
        childImageSharp {
          fluid(maxHeight: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      tatratea: file(relativePath: { eq: "companies/tatratea.jpg" }) {
        childImageSharp {
          fluid(maxHeight: 110) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      websupport: file(relativePath: { eq: "companies/websupport.png" }) {
        childImageSharp {
          fluid(maxHeight: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      sme: file(relativePath: { eq: "companies/sme.png" }) {
        childImageSharp {
          fluid(maxHeight: 70) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      jt: file(relativePath: { eq: "companies/j&t.png" }) {
        childImageSharp {
          fluid(maxHeight: 130) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      gate: file(relativePath: { eq: "companies/gate.png" }) {
        childImageSharp {
          fluid(maxHeight: 130) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      rajo: file(relativePath: { eq: "companies/rajo.png" }) {
        childImageSharp {
          fluid(maxHeight: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      postova: file(relativePath: { eq: "companies/postova.png" }) {
        childImageSharp {
          fluid(maxHeight: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      csob: file(relativePath: { eq: "companies/csob.png" }) {
        childImageSharp {
          fluid(maxHeight: 80) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      eduscho: file(relativePath: { eq: "companies/eduscho.png" }) {
        childImageSharp {
          fluid(maxHeight: 80) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      preto: file(relativePath: { eq: "companies/preto.png" }) {
        childImageSharp {
          fluid(maxHeight: 80) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      markiza: file(relativePath: { eq: "companies/markiza.png" }) {
        childImageSharp {
          fluid(maxHeight: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      yit: file(relativePath: { eq: "companies/yit.png" }) {
        childImageSharp {
          fluid(maxHeight: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      pilsner: file(relativePath: { eq: "companies/pilsner.png" }) {
        childImageSharp {
          fluid(maxHeight: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      sse: file(relativePath: { eq: "companies/sse.png" }) {
        childImageSharp {
          fluid(maxHeight: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      grape: file(relativePath: { eq: "companies/grape.png" }) {
        childImageSharp {
          fluid(maxHeight: 60) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      vinea: file(relativePath: { eq: "companies/vinea.png" }) {
        childImageSharp {
          fluid(maxHeight: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      hbreavis: file(relativePath: { eq: "companies/hbreavis.png" }) {
        childImageSharp {
          fluid(maxHeight: 50) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      dennikn: file(relativePath: { eq: "companies/dennikn.jpg" }) {
        childImageSharp {
          fluid(maxHeight: 80) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      pantarhei: file(relativePath: { eq: "companies/pantarhei.jpg" }) {
        childImageSharp {
          fluid(maxHeight: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      kontentino: file(relativePath: { eq: "companies/kontentino.png" }) {
        childImageSharp {
          fluid(maxHeight: 50) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      up: file(relativePath: { eq: "companies/up.png" }) {
        childImageSharp {
          fluid(maxHeight: 80) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <section className="container mx-auto flex items-center justify-center flex-wrap px-1 opacity-75">
      {Object.entries(logos).map(logo => {
        return (
          <div key={logo[0]} className="py-3 px-5 text-center md:w-1/9 w-1/3">
            <Img fluid={logo[1].childImageSharp.fluid} />
          </div>
        )
      })}
    </section>
  )
}
