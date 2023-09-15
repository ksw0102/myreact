import styled from "styled-components";

const Container = styled.div`
   box-sizing: border-box;
   width: 300px;
   background-color: ${(props) => props.bgcolor};
   box-shadow: 3px 3px 3px black;
   padding: 10px;
   margin-bottom: 20px;
   border-radius: 25px;
`;
const Bold = styled.p`
   font-weight: 700;
   font-size: 2rem;
   color: black;
`;

const Text = styled.p`
   font-size: 20px;
   color: blue;
`;

export function Avatar({ bgcolor, person: { name, job, country } }) {
   return (
      <>
         <Container bgcolor={bgcolor}>
            <div>
               <Bold>{name}</Bold>
               <Text>Job : {job}</Text>
               <Text>Country : {country}</Text>
               <hr />
            </div>
         </Container>
      </>
   );
}
