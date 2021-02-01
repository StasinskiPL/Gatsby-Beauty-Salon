import React from 'react'
import GalleryComponent from '../components/Gallery'
import Layout from "../components/Layout"

const galeria = ({data}) => {
    let images = data.allFile.nodes.map((node) => node.childrenImageSharp[0].fluid);
    return (
        <Layout>
            <GalleryComponent page={true} propImages={images}/>
            
        </Layout>
    )
}

export const query = graphql`
  {
    allFile(filter: { relativePath: { regex: "/^about/" } }) {
      nodes {
        childrenImageSharp {
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`;

export default galeria
