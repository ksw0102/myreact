import styled from "styled-components";

const Container = styled.div`
   width: 100vw;
   margin: 0 auto;
   text-align: center;
`;

const Title = styled.h1`
   font-size: 2.5rem;
   color: ${(props) => (props.isActive ? "orange" : props.fontColor)};
`;

const TitleBlue = styled(Title)`
   color: blue;
`;

const Brad = styled.img`
   border-radius: 50%;
   width: 500px;
   height: 500px;
`;
export function List() {
   const products = [
      { title: "Banana" },
      { title: "Apple" },
      { title: "Watermelon" },
   ];
   const user = {
      name: "Playboi carti",
      imageUrl: "https://i.imgur.com/JqX8aUo.png",
      imageSize: 90,
   };
   return (
      <>
         <h1>List Component</h1>
         <p>리액트 연습 코드</p>
         <ul>
            {products.map((p) => (
               <Title isActive={false} fontColor="blue">
                  {p.title}
               </Title>
            ))}
         </ul>
         <Container>
            <Title fontColor="pink" isActive={false}>
               {user.name}
            </Title>
            <Brad src={user.imageUrl} />
         </Container>
      </>
   );
}
