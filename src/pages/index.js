import React from "react"
import SEO from "../components/seo"
import { DecorativeStripes } from "../components/DecorativeStripes"
import { WelcomeText } from "../components/WelcomeText"
import { CompanyLogos } from "../components/CompanyLogos"
import { RecommendationsTitle } from "../components/RecommendationsTitle"
import { Recommendations } from "../components/Recommendations"
import { Contact } from "../components/Contact"
import "../styles/styles.css"

const LandingPage = () => (
  <>
    <SEO title="Portfolio" />

    <DecorativeStripes />

    <WelcomeText />

    <CompanyLogos />

    <RecommendationsTitle />

    <section className="skewed-background">
      <Recommendations />
      <Contact />
    </section>

    <DecorativeStripes />
  </>
)

export default LandingPage
