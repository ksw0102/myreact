import styled from "styled-components";
import { Avatar } from "./Avatar";

const Container = styled.div`
   height: 300px;
   width: 100%;
   border: 2px solid black;
   display: flex;
   justify-content: center;
   align-items: center;
   gap: 50px;
   background-color: gray;
`;

const persons = [
   { name: "Rudy", job: "Programmer", country: "KR" },
   { name: "Nick", job: "Docter", country: "US" },
   { name: "Rachel", job: "Engineer", country: "CN" },
   { name: "Bill", job: "Soldier", country: "US" },
];

const colors = ["lightpink", "teal", "lightgray", "khaki"];

export function AvatarList() {
   return (
      <>
         <Container>
            {persons.map((p, i) => {
               return <Avatar bgcolor={colors[i]} person={p} />;
            })}
         </Container>
      </>
   );
}
