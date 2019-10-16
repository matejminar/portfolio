import React from "react"
import { useStaticQuery } from "gatsby"
import { Recommendation } from "./Recommendation"

export const Recommendations = () => {
  const peoplePhotos = useStaticQuery(graphql`
    query {
      dulacka: file(relativePath: { eq: "people/peter-dulacka.jpg" }) {
        childImageSharp {
          fixed(height: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      perdik: file(relativePath: { eq: "people/pavol-perdik.jpg" }) {
        childImageSharp {
          fixed(height: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      mitlikova: file(relativePath: { eq: "people/maru-mitlikova.jpg" }) {
        childImageSharp {
          fixed(height: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      hanak: file(relativePath: { eq: "people/ivan-hanak.png" }) {
        childImageSharp {
          fixed(height: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  const recommendations = [
    {
      photo: peoplePhotos.dulacka.childImageSharp.fixed,
      name: "Peter Dulacka",
      position: "Lead Developer at REMP",
      color: "purple",
      text: `Matej worked with us as an outsourced power. He's reliable and
      independent engineer who was capable of joining running project with
      a very little of documentation (our case) and still persist high
      work efficiency. Even with these obstacles and very vague task
      definition Matej was able to deliver new features in the way that we
      couldn't - both programatically and visually`,
    },
    {
      photo: peoplePhotos.hanak.childImageSharp.fixed,
      name: "Ivan Hanak",
      position: "CTO at Kontentino",
      color: "green",
      text: `Even though we worked in an agency, where everybody was having its
      own assignments, we both had had a chance to work and help each
      other on side projects. Some of the qualities I admired Matej for
      were his sense of managing his own project and clients, outlook at
      the modern trends in web development and precision of the work
      delivered. I am also looking forward to possible cooperation in the
      future!`,
    },
    {
      photo: peoplePhotos.perdik.childImageSharp.fixed,
      name: "Pavol Perdik",
      position: "Managing Director at Brackets",
      color: "pink",
      text: `Matej is very reliable person with strong knowledge of web
      technologies. He is very pedantic about his work paying strong focus
      on UX details. Always asking right questions and proposing great
      solutions. It was pleasure to work with him for almost 3 years.`,
    },
    {
      photo: peoplePhotos.mitlikova.childImageSharp.fixed,
      name: "Maru Mitlikova",
      position: "Executive Director at Triad Advertising",
      color: "yellow",
      text: `Matej was eager to learn new things. Anytime he struggled with
      something, he worked hard and figured it out. His work was always
      completed thoroughly and I also liked him as a person, as it was
      easy to chat with him just about anything.`,
    },
  ]

  return (
    <div className="flex flex-wrap justify-center">
      {recommendations.map(recommendation => (
        <Recommendation {...recommendation} key={recommendation.name} />
      ))}
    </div>
  )
}
