import styled from "styled-components";

export const Vinyl = [
   {
      name: "asdf",
      artist: "asdasd",
      url: "https://i.namu.wiki/i/P-zbBeYKGfsOST0KBFuYWd6rCJRoilLELGC5QqWawWYterPE6LgYGEXFIakWvXWeC1uYDp2aypLh2PMER-DUuA.webp",
   },
];

const Container = styled.div`
   background-color: snow;
   display: flex;
   flex-direction: column;
   height: 100%;
   width: 100vw;
   margin: 0 auto;
`;

const Title = styled.div`
   position: fixed;
   height: 16vh;
   background-color: snow;
   display: flex;
   width: 100vw;
   align-items: center;
   top: 0;
   margin: 0 auto;
   img {
      animation: rotate_image 6s linear infinite;
      transform-origin: 50% 50%;
      width: 100px;
      height: 100px;
      @keyframes rotate_image {
         100% {
            transform: rotate(360deg);
         }
      }
   }
`;

const Tmain = styled.div`
   font-size: 2rem;
   font-weight: bold;
   margin: 20px;
   padding: 1rem;
`;

const Tmenu = styled.div`
   display: flex;
   margin: 0 auto;
   font-size: 1.5rem;
   h2 {
      padding: 20px;
   }
`;

const Product = styled.div`
   margin-top: 15vh;
   height: 10vh;
   background-color: snow;
   display: flex;
   text-align: center;
   align-items: center;
   justify-content: center;
   font-weight: bold;
   letter-spacing: 2.5px;
`;

const Pronav = styled.div`
   padding: 20px;
   font-size: 1.5rem;
`;

const Main = styled.div`
   width: 80vw;
   height: 100vh;
   background-color: transparent;
   display: grid;
   grid-template-columns: repeat(5, 3fr);
   justify-content: center;
   margin: 0 auto;
   align-items: center;
   text-align: center;
   margin-top: 15px;
`;

const Mainp = styled.div`
   justify-content: center;
   align-items: center;
   text-align: center;
   display: flex;
   flex-direction: column;
   width: 250px;
   height: 250px;
   p {
      font-weight: bold;
      text-align: center;
      font-size: 1rem;
   }
`;

const Bottom = styled.div`
   width: 90vw;
   height: 250px;
   background-color: #ffffad;
   margin: 0 auto;
   text-align: center;
`;

const Location = styled.div`
   width: 250px;
   height: 250px;
   background-color: #c47e7e;
`;

const Footer = styled.div`
   bottom: 0;
   width: 250px;
   height: 100px;
   background-color: #6d6d27;
   margin: 0 auto;
`;

const Img = styled.img`
   width: 200px;
   height: 200px;

   &:hover {
      width: 230px;
      height: 230px;
      transition: 0.5s ease;
   }
`;
export function Project() {
   return (
      <>
         <Container>
            <Title>
               <img src="https://images.pexels.com/photos/2746823/pexels-photo-2746823.jpeg?cs=srgb&dl=pexels-brett-jordan-2746823.jpg&fm=jpg" />
               <Tmenu>
                  <h2>Home</h2>
                  <h2>Store</h2>
                  <h2>My page</h2>
                  <h2>Search</h2>
               </Tmenu>
            </Title>
            <Product>
               <Pronav>전체</Pronav>
               <Pronav>Korean</Pronav>
               <Pronav>HipHop / Soul / R & B</Pronav>
               <Pronav>ROCK / POP / Electronica</Pronav>
               <Pronav>Jazz</Pronav>
               <Pronav>Japanese</Pronav>
            </Product>
            <Main>
               <Mainp>
                  <a
                     href="https://open.spotify.com/search/jesus%20is%20king/albums"
                     target="blank_"
                  >
                     <Img src="https://upload.wikimedia.org/wikipedia/en/a/a4/Kanye_West_-_Jesus_Is_King.png"></Img>
                  </a>
                  <p>
                     ye
                     <br />
                     Jesus is king
                  </p>
               </Mainp>
               <Mainp>
                  <a
                     href="https://open.spotify.com/album/2QRedhP5RmKJiJ1i8VgDGR"
                     target="blank_"
                  >
                     <Img src="https://i.namu.wiki/i/Igxm2OYyG5uZPSmyRU4FdQGBkeyUlrhLyqwV-usG0sPFG54ITHpYcOfJO9ImQZyo4biOz0Hvy3Txu3WQbKWJsw.webp"></Img>
                  </a>
                  <p>
                     Playboi Carti <br />
                     Whole Lotta Red
                  </p>
               </Mainp>
               <Mainp>
                  <a
                     href="https://open.spotify.com/album/19bQiwEKhXUBJWY6oV3KZk?highlight=spotify:track:21O0XXPEWPtePt5RMY93Ob"
                     target="blank_"
                  >
                     <Img src="https://upload.wikimedia.org/wikipedia/en/5/5e/Madvillainy_cover.png"></Img>
                  </a>
                  <p>
                     MadVillan <br />
                     madvillainy
                  </p>
               </Mainp>
               <Mainp>
                  <a
                     href="https://open.spotify.com/album/4eLPsYPBmXABThSJ821sqY"
                     target="blank_"
                  >
                     <Img src="https://pbs.twimg.com/media/C9H8-PWUIAAzbQ2?format=jpg&name=large"></Img>
                  </a>
                  <p>
                     Kendrick Lamar <br />
                     DAMN.
                  </p>
               </Mainp>
               <Mainp>
                  <a
                     href="https://open.spotify.com/album/3kEtdS2pH6hKcMU9Wioob1"
                     target="blank_"
                  >
                     <Img src="https://i.namu.wiki/i/wrCmrlYghUG8iV5NXQ4GiQDQBHAcYbL-DddDYONyYrVYN5zv4mOvPjd7tuEpoVTkOoLc6JWCE1P5Q-B_yQP1CA.webp"></Img>
                  </a>
                  <p>
                     Nas <br />
                     Illmatic
                  </p>
               </Mainp>
               <Mainp>
                  <a
                     href="https://open.spotify.com/album/41GuZcammIkupMPKH2OJ6I"
                     target="blank_"
                  >
                     <Img src="https://upload.wikimedia.org/wikipedia/en/0/0b/Astroworld_by_Travis_Scott.jpg"></Img>
                  </a>
                  <p>
                     Travis Scott <br />
                     AstroWorld
                  </p>
               </Mainp>
               <Mainp>
                  <a
                     href="https://open.spotify.com/album/7D2NdGvBHIavgLhmcwhluK"
                     target="blank_"
                  >
                     <Img src="https://www.rollingstone.com/wp-content/uploads/2022/05/269-Kanye-West-Yeezus.jpg?w=1000"></Img>
                  </a>
                  <p>
                     Ye <br />
                     Yezzus
                  </p>
               </Mainp>
               <Mainp>
                  <a
                     href="https://open.spotify.com/album/6dtDTbVBQ9QwsNaqEnjsOT"
                     target="blank_"
                  >
                     <Img src="https://media.pitchfork.com/photos/635fecdf058f5e6dc1c6ded9/1:1/w_450%2Cc_limit/Smino-%2520Luv%25204%2520Rent.jpg"></Img>
                  </a>
                  <p>
                     Smino <br />
                     Luv 4 Rent
                  </p>
               </Mainp>
               <Mainp>
                  <a
                     href="https://open.spotify.com/album/26z5llzd194mcCZHADWd6k"
                     target="blank_"
                  >
                     <Img src="https://i1.sndcdn.com/artworks-4d0061cf-89fc-43f2-8ad4-757a8fba20f5-0-t500x500.jpg"></Img>
                  </a>
                  <p>
                     Don Toliver <br />
                     Love Sick
                  </p>
               </Mainp>
               <Mainp>
                  <a
                     href="https://open.spotify.com/album/2Ti79nwTsont5ZHfdxIzAm"
                     target="blank_"
                  >
                     <Img src="https://upload.wikimedia.org/wikipedia/en/2/21/%3F_XXXTENTACION_Cover.png"></Img>
                  </a>
                  <p>
                     XXXTENTACION <br />?
                  </p>
               </Mainp>
               <Mainp>
                  <a
                     href="https://open.spotify.com/album/6hPkbAV3ZXpGZBGUvL6jVM"
                     target="blank_"
                  >
                     <Img src="https://m.media-amazon.com/images/I/81iC+O0ec2L._UF1000,1000_QL80_.jpg"></Img>
                  </a>
                  <p>
                     Linkin Park <br />
                     Hybrid Theory
                  </p>
               </Mainp>
               <Mainp>
                  <a
                     href="https://open.spotify.com/album/2tlTBLz2w52rpGCLBGyGw6"
                     target="blank_"
                  >
                     <Img src="https://i.discogs.com/P6rqfF1MmH2pVGHxNy6YCsX-OtCcDgNGbj3ZtdE90hI/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTE4OTYw/NDUtMTI2NDg0NzAz/MS5qcGVn.jpeg"></Img>
                  </a>
                  <p>
                     Linkin Park <br />
                     Minutes To Midnight
                  </p>
               </Mainp>
               <Mainp>
                  <a
                     href="https://open.spotify.com/album/10v912xgTZbjAtYfyKWJCS"
                     target="blank_"
                  >
                     <Img src="https://i.discogs.com/LtoROx0KsRwYB2ybC36gF6sCgMkiZd6nl0LTP8WPzrc/rs:fit/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTE2NDE3/OTItMTUzNzAyMzc1/Mi02NjAwLmpwZWc.jpeg"></Img>
                  </a>
                  <p>
                     AC/DC <br />
                     Highway To Hell
                  </p>
               </Mainp>
               <Mainp>
                  <a
                     href="https://open.spotify.com/album/0FZK97MXMm5mUQ8mtudjuK"
                     target="blank_"
                  >
                     <Img src="https://i.namu.wiki/i/P-zbBeYKGfsOST0KBFuYWd6rCJRoilLELGC5QqWawWYterPE6LgYGEXFIakWvXWeC1uYDp2aypLh2PMER-DUuA.webp"></Img>
                  </a>
                  <p>
                     My Chemical Romance <br />
                     The Black Parade
                  </p>
               </Mainp>
               <Mainp>
                  <a
                     href="https://open.spotify.com/album/5dN7F9DV0Qg1XRdIgW8rke"
                     target="blank_"
                  >
                     <Img src="https://upload.wikimedia.org/wikipedia/en/e/ed/Green_Day_-_American_Idiot_album_cover.png"></Img>
                  </a>
                  <p>
                     Green Day <br />
                     American Idiot
                  </p>
               </Mainp>
            </Main>
            <Bottom>
               <h2>V 4 U</h2>
               <h3>오직 당신을 위한 Vinyl</h3>
            </Bottom>
         </Container>
      </>
   );
}
