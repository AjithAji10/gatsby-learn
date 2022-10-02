import React from 'react';
import { graphql } from 'gatsby'

function Home({data}) {
    console.log('data');
    console.log(data);
    return (
        <div>
            <h2>My first</h2>
        </div>
    );
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


export default Home;