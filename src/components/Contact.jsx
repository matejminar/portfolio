import React from "react"

export const Contact = () => {
  return (
    <section className="max-w-4xl py-16 pb-20 px-3 mx-auto">
      <p className="text-2xl md:text-3xl text-grey text-center">
        I'd be more than happy to chat with you about joining your team. Shoot
        me an email at{" "}
        <a
          href="mailto:matej@minar.dev"
          target="_blank"
          rel="noopener noreferrer"
          className="underline text-purple"
        >
          matej@minar.dev
        </a>
        , download my{" "}
        <a
          href="/matej-minar-resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="underline text-green"
        >
          pdf resume
        </a>
        , check out my{" "}
        <a
          href="https://github.com/matejminar"
          target="_blank"
          rel="noopener noreferrer"
          className="underline text-pink"
        >
          github
        </a>{" "}
        or connect with me on{" "}
        <a
          href="https://www.linkedin.com/in/matejminar/"
          target="_blank"
          rel="noopener noreferrer"
          className="underline text-yellow"
        >
          linkedin
        </a>
        .
      </p>
    </section>
  )
}
