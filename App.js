import React from "react";
import { gql } from "apollo-boost";
import { Query, useMutation } from "react-apollo";
import WaveLoading from "@bit/akameco.styled-spinkit.wave-loading";
import Item from "./Item";
// import React, { Component } from "react";
import { makeStyles } from "@bit/mui-org.material-ui.styles";
import Card from "@bit/mui-org.material-ui.card";
import CardActionArea from "@bit/mui-org.material-ui.card-action-area";
import CardActions from "@bit/mui-org.material-ui.card-actions";
import CardContent from "@bit/mui-org.material-ui.card-content";
import CardMedia from "@bit/mui-org.material-ui.card-media";
import Button from "@bit/mui-org.material-ui.button";
import Typography from "@bit/mui-org.material-ui.typography";

// import ClassItem from "./ClassItem";

const GET_CLASSES = gql`
  query {
    classes {
      classname
      endDate
      startDate
      created_at
      ALsName
      Instructor
      classimg {
        url
      }
    }
  }
`;

const App = () => (
  <Query query={GET_CLASSES}>
    {({ loading, error, data }) => {
      if (loading) return <WaveLoading color="black" size={60} />;
      if (error) return <h1>Error</h1>;

      return (
        <div className="grid">
          {data.classes.map((el, i) => (
            <Item key={i} el={el}></Item>
          ))}
        </div>
      );
    }}
  </Query>
);

//         <section>
//             <h1>TechX 2020</h1>
//           {data.classes.map((el, i) => (
//             <div key={i}>
//               <h1>{el.classname}</h1>
//               <img src={`http://localhost:1337${el.classimg[0].url}`} />
//               <pre>
//                 Academic Leaders: {el.ALsName}
//                 <br/>
//                 From {el.startDate} to {el.endDate}
//               </pre>
//             </div>
//           ))}
//         </section>
//       );
//     }}

// );

export default App;
