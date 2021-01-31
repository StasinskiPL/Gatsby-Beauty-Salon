import React from 'react'
import Info from "./Info"
import { graphql, useStaticQuery } from "gatsby";

const text1 = "Wszystkim naszym klientom zapewniamy indywidualne podejście, każdy z naszych zabiegów może zostać spersonalizowany do twoich oczekiwań. "
const text2 = "Nasi pracownicy mają bagaż doświadczenia. Systematycznie podnoszą swoje umiejętności by zapewnić najlepszą jakość oferowanych usług."
const text3 = "Jesteśmy otwarci 6 dni w tygodniu, w godzinach 10.00-20.00, by twój ograniczony czas nie stanowił przeszkody."

const About = () => {
    const {allFile:{nodes:images}} = useStaticQuery(query);
    return (
        <section className="about">
            <div className="about-inner">
                <div className="about-title">
                    <h2>Poznaj Nas!</h2>  
                    <div className="about-title-underline"></div>
                </div>
                <div className="about-infos">
                <Info title="Indywidualne Podejście" text={text1} imageUrl={images[0]}/>
                <Info title="Wykwalifikowana Kadra" reverse={true} text={text2} imageUrl={images[1]}/>
                <Info title="Przystępne godziny otwarcia" text={text3} imageUrl={images[2]}/>

                </div>
            </div>
            
        </section>
    )
}

  const query = graphql`
  {
    allFile(filter: {relativePath: {regex: "/^about/"}}) {
      nodes {
        childrenImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`

export default About
