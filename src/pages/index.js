import React from "react"
import { graphql } from 'gatsby'

export default function Home({data}) {
  console.log(data);
  return (
    <div>
      Hello world!
      {
        data.allDataJson.nodes.map(e => {
          return (<h4>{e.name} {e.salary}</h4>)
        }) 
      }
    </div>
  )
}

export const query = graphql`{
  allDataJson {
      nodes {
        married
        name
        salary
      }
  }
}`
