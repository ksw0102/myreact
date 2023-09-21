import styled from "styled-components";

const Title = styled.div`
   margin: 0 auto;
   width: 40vw;
   font-size: 3rem;
   border-top: 2px solid gray;
   border-bottom: 2px solid gray;
   text-align: center;
   padding: 1rem;
   align-items: center;
   font-weight: bold;
   letter-spacing: 10px;
   margin-bottom: 5vh;
`;
const Main = styled.div`
   width: 85vw;
   height: 100%;
   background-color: transparent;
   display: grid;
   grid-template-columns: repeat(5, 3fr);
   justify-content: center;
   margin: 0 auto;
   align-items: center;
   text-align: center;
   margin-top: 2rem;
`;

const Mainp = styled.div`
   justify-content: center;
   align-items: center;
   text-align: center;
   display: flex;
   flex-direction: column;
   width: 360px;
   height: 360px;
   font-weight: bold;
   letter-spacing: 1.5px;
   font-size: 23px;
   p {
      margin-top: 10px;
   }
   &:hover :nth-child(even) {
      animation: gradient 0.7s ease forwards;
      background: linear-gradient(to right top, black, white);
      color: transparent;
      transition: 0.7s;
      -webkit-background-clip: text;
      @keyframes gradient {
         from {
            background-position-y: 0%;
         }
         to {
            background-position-y: 100%;
         }
      }
   }
`;
const Song = styled.p`
   font-size: 18px;
`;

const Img = styled.img`
   width: 250px;
   height: 250px;

   &:hover {
      width: 270px;
      height: 270px;
      transition: 1s ease;
   }
`;

const Footer = styled.div`
   text-transform: uppercase;
   bottom: 0;
   padding: 10px;
   margin: 0 auto;
   text-align: center;
   align-items: center;
   width: 20vw;
   height: 5vh;
   font-size: 1.5rem;
   display: flex;
   justify-content: center;
   border-top: 2px solid gray;
   border-bottom: 2px solid gray;
   h3 {
      margin: 30px;
   }
`;
export function HipHop() {
   return (
      <>
         <Title>H I P H O P</Title>
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
                  <Song>Jesus is king</Song>
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
                  <Song>Whole Lotta Red</Song>
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
                  <Song>madvillainy</Song>
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
                  <Song>DAMN.</Song>
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
                  <Song>Illmatic</Song>
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
                  <Song>AstroWorld</Song>
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
                  <Song>Yezzus</Song>
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
                  <Song>Luv 4 Rent</Song>
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
                  <Song>Love Sick</Song>
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
                  XXXTENTACION <br />
                  <Song>?</Song>
               </p>
            </Mainp>{" "}
            <Mainp>
               <a
                  href="https://open.spotify.com/track/33ZXjLCpiINn8eQIDYEPTD"
                  target="blank_"
               >
                  <Img src="https://upload.wikimedia.org/wikipedia/commons/1/10/%22Shook_Ones_%28Part_II%29%22_cover.jpg"></Img>
               </a>
               <p>
                  Mobb Deep <br />
                  <Song> Shook Ones (Part II)</Song>
               </p>
            </Mainp>
            <Mainp>
               <a
                  href="https://open.spotify.com/album/2HTbQ0RHwukKVXAlTmCZP2"
                  target="blank_"
               >
                  <Img src="https://i.namu.wiki/i/UwpW8yXjLmxv5tfEnts6uMBQlV0V9qv87c8QSuVMbpfiQclGbn8qv4wkxRzPKLh3u713cTTQKpgiCqG7AEvpZbOQeqrFOQzBqRD_7jBuc4ARO0BFwwcvZsEkDC8Rza9J2Blj9lx-Z2URMA6QkiJCRg.webp"></Img>
               </a>
               <p>
                  The Notorious B.I.G. <br />
                  <Song> Ready to Die</Song>
               </p>
            </Mainp>
            <Mainp>
               <a
                  href="https://open.spotify.com/album/7KtyUeiJidoZO0ybxBXw0Q"
                  target="blank_"
               >
                  <Img src="https://upload.wikimedia.org/wikipedia/en/1/13/Denzel_Curry_-_Walkin.png"></Img>
               </a>
               <p>
                  Denzel Curry
                  <br />
                  <Song>Melt My Eyez See Your Future</Song>
               </p>
            </Mainp>
            <Mainp>
               <a
                  href="https://open.spotify.com/album/5bjUbZPVTEQcb6W3LquX1E"
                  target="blank_"
               >
                  <Img src="https://image.bugsm.co.kr/album/images/500/2813/281316.jpg"></Img>
               </a>
               <p>
                  MF DOOM <br />
                  <Song>Operation: Doomsday</Song>
               </p>
            </Mainp>
            <Mainp>
               <a
                  href="https://open.spotify.com/album/7cWeE9QvnxkY0JlDcv2dE7"
                  target="blank_"
               >
                  <Img src="https://i1.sndcdn.com/artworks-fNh3M392p6X7-0-t500x500.jpg"></Img>
               </a>
               <p>
                  Mac Miller <br />
                  <Song>Lovely Littel Tunes</Song>
               </p>
            </Mainp>
         </Main>
         <Footer>
            <h3>Vinyl</h3>
            <h3>for </h3>
            <h3>You</h3>
            <h3>
               <i class="ti ti-vinyl"></i>
            </h3>
         </Footer>
      </>
   );
}
