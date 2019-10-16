import React from "react"
import SEO from "../components/seo"
import { CompanyLogos } from "../components/CompanyLogos"
import "../styles/tailwind.css"

const LandingPage = () => (
  <>
    <SEO title="Home" />
    <section className="max-w-4xl py-16 px-2 mx-auto">
      <p className="text-3xl text-grey text-center">
        Hey. This is <span className="text-purple">Matej Minar</span>. I am a
        <span className="text-green"> javascript engineer</span> who loves
        building beautiful and intuitive UIs. I always like to learn new things
        and contribute to the <span className="text-pink">open source</span>, as
        I am very grateful for the community and owe it so much. I just moved to{" "}
        <span className="text-yellow">Vienna</span> and I am looking for new
        opportunities. In the past, I had the pleasure of working on products
        for following companies:
      </p>
    </section>

    <section className="flex items-center justify-center flex-wrap px-1">
      <CompanyLogos />
    </section>

    <section className="max-w-4xl py-16 px-2 mx-auto">
      <p className="text-3xl text-grey text-center">
        I'd be more than happy to chat with you about joining your team. Shoot
        me an email at{" "}
        <a
          href="mailto:matej@minar.dev"
          target="_blank"
          className="underline text-purple"
        >
          matej@minar.dev
        </a>
        , download my{" "}
        <a
          href="/matej-minar-resume.pdf"
          target="_blank"
          className="underline text-green"
        >
          pdf resume
        </a>
        , check out my{" "}
        <a
          href="https://github.com/matejminar"
          target="_blank"
          className="underline text-pink"
        >
          github
        </a>{" "}
        or connect with me on{" "}
        <a
          href="https://www.linkedin.com/in/matejminar/"
          target="_blank"
          className="underline text-yellow"
        >
          linkedin
        </a>
        .
      </p>
    </section>
  </>
)

export default LandingPage
