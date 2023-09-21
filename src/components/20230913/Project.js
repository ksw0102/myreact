import styled from "styled-components";
export const Vinyl = [
   {
      url: "https://i.namu.wiki/i/P-zbBeYKGfsOST0KBFuYWd6rCJRoilLELGC5QqWawWYterPE6LgYGEXFIakWvXWeC1uYDp2aypLh2PMER-DUuA.webp",
   },
];
const Container = styled.div`
   justify-content: center;
   display: flex;
   flex-direction: column;
   height: 100%;
   width: 95vw;
   margin: 0 auto;
   background-color: lightgray;
`;

const Title = styled.div`
   position: fixed;
   height: 20vh;
   display: flex;
   background-color: white;
   width: 10vw;
   align-items: center;
   top: 0;
   right: 0;
   margin: 0 auto;
   border-radius: 100%;
   margin-top: 15px;
   margin-left: 15px;
   opacity: 0.3;
   &:hover {
      opacity: 1;
      transition: 0.5s ease;
   }
   img {
      animation: rotate_image 4s linear infinite;
      transform-origin: 50% 50%;
      width: 130px;
      height: 130px;
      margin: 0 auto;
      @keyframes rotate_image {
         100% {
            transform: rotate(360deg);
         }
      }
   }
`;

const Product = styled.div`
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
   font-size: 3rem;
   letter-spacing: 10px;
   border-top: 2px solid gray;
   border-bottom: 2px solid gray;
   margin: 0 auto;
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
   margin-top: 3vh;
   margin-bottom: 3vh;
   h3 {
      margin: 30px;
   }
`;
export function Project() {
   return (
      <>
         <Container>
            <Title>
               <img src="https://images.pexels.com/photos/2746823/pexels-photo-2746823.jpeg?cs=srgb&dl=pexels-brett-jordan-2746823.jpg&fm=jpg" />
               {/* <Tmenu>
                  <h2>Home</h2>
                  <h2>Store</h2> 
                  <h2>My page</h2>
                  <h2>Search</h2>
               </Tmenu> */}
            </Title>
            <Product>
               <Pronav>당신의 취향에 맞춘 VINYLS </Pronav>
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
                     <Song>Hybrid Theory</Song>
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
                     <Song>Minutes To Midnight</Song>
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
                     <Song>Highway To Hell</Song>
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
                     <Song>The Black Parade</Song>
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
                     <Song>American Idiot</Song>
                  </p>
               </Mainp>
               <Mainp>
                  <a
                     href="https://open.spotify.com/album/4LH4d3cOWNNsVw41Gqt2kv"
                     target="blank_"
                  >
                     <Img src="https://upload.wikimedia.org/wikipedia/commons/c/c7/The_Dark_Side_of_the_Moon_Cover.svg"></Img>
                  </a>
                  <p>
                     Pink floyd <br />
                     <Song>The Dark Side of the Moon</Song>
                  </p>
               </Mainp>
               <Mainp>
                  <a
                     href="https://open.spotify.com/search/guns%20n%20ro"
                     target="blank_"
                  >
                     <Img src="https://i.namu.wiki/i/fLcahvvv4y2FKG8zStk0OQn5i1kQBuB0LfYqWQoL7eZSNvLrOjq7skz5YSmczld5YEkNHkl6kPvVa_1OpyH2iKExzehA3ewW-9woMswcwDkjexUERJRfyZqtU3qrgVvUqa3FE5tlEPwA0-Y7L-eeWQ.webp"></Img>
                  </a>
                  <p>
                     Guns N' Roses <br />
                     <Song>Appetite for Destruction</Song>
                  </p>
               </Mainp>
               <Mainp>
                  <a
                     href="https://open.spotify.com/album/2UJcKiJxNryhL050F5Z1Fk"
                     target="blank_"
                  >
                     <Img src="https://i.namu.wiki/i/dw2xjhiMz4EOqUVFZVJJzaVZYeNJHsagvOk6BkNsHRLaHijxoWOE7rUtS9rcrwz6yPdrbSDxpisOEUJ4lgEMicImIYUMN-C-5VqRn34_M9TBXJ6t71B1YaBA0x0M12Ml6cuHjqB1a_n0j7JTIkUIgA.webp"></Img>
                  </a>
                  <p>
                     Nirvana <br />
                     <Song>Nevermind</Song>
                  </p>
               </Mainp>
               <Mainp>
                  <a
                     href="https://open.spotify.com/album/6IYPmM3xsOPL2XPSvf1ZAz"
                     target="blank_"
                  >
                     <Img src="https://i.namu.wiki/i/JjS1e9a6AUu-CX5vhTw1cfhLK0OqIj570lgg7U4LGaPChW0GAS8H3h0otWsuaSKepzbIMvL_oDueGJpr2FR9_0G_Ac14zw-9JxM-4izcZ34dhK5UIK4PlnlKVgq5_QiaKs_YCFKIlUoRXeo0PZ6SDw.webp"></Img>
                  </a>
                  <p>
                     Bring Me The Horizon <br />
                     <Song>Sempiternal</Song>
                  </p>
               </Mainp>
               <Mainp>
                  <a
                     href="https://open.spotify.com/album/2Kh43m04B1UkVcpcRa1Zug"
                     target="blank_"
                  >
                     <Img src="https://i.namu.wiki/i/P-t8xxBgwLaMjWyMD7xJ_tnWFRNy-HsKlFjuI70h6rDV5bk2m3iu60u19qklgaMH-pInblchLQTKW7y5wZlHytQkZZA4eCUGuQl4mC1g4VvWZ84QFUmL3rmdZmnGtDFOUyf6U9oslg6Xs21jZVr3iw.webp"></Img>
                  </a>
                  <p>
                     Metallica <br />
                     <Song>Metallica</Song>
                  </p>
               </Mainp>
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
               <Mainp>
                  <a
                     href="https://open.spotify.com/album/7GjVWG39IOj4viyWplJV4H"
                     target="blank_"
                  >
                     <Img src="https://upload.wikimedia.org/wikipedia/en/8/8d/MGMT_-_Little_Dark_Age.png"></Img>
                  </a>
                  <p>
                     MGMT <br />
                     <Song> Little Dark Age</Song>
                  </p>
               </Mainp>
               <Mainp>
                  <a
                     href="https://open.spotify.com/album/1XkGORuUX2QGOEIL4EbJKm"
                     target="blank_"
                  >
                     <Img src="https://i.namu.wiki/i/AOYSMHRPspuvNGHPKBe5i7rq3gOAl4lXkYKeL5yYpevpcR8w3mCVk65hbcD5yG8rtrRSb86M-g_LjCZLBCK2eQ.webp"></Img>
                  </a>
                  <p>
                     Arctic Monkeys
                     <br />
                     <Song>Favourite Worst Nightmare</Song>
                  </p>
               </Mainp>
               <Mainp>
                  <a
                     href="https://open.spotify.com/album/0kBfgEilUFCMIQY5IOjG4t"
                     target="blank_"
                  >
                     <Img src="https://upload.wikimedia.org/wikipedia/en/a/ab/Bon_jovi_slippery_when_wet.jpg"></Img>
                  </a>
                  <p>
                     Bon Jovi <br />
                     <Song>Slippery When Wet</Song>
                  </p>
               </Mainp>
               <Mainp>
                  <a
                     href="https://open.spotify.com/album/2widuo17g5CEC66IbzveRu"
                     target="blank_"
                  >
                     <Img src="https://upload.wikimedia.org/wikipedia/en/4/49/Hotelcalifornia.jpg"></Img>
                  </a>
                  <p>
                     Eagles <br />
                     <Song>Hotel California</Song>
                  </p>
               </Mainp>
               <Mainp>
                  <a
                     href="https://open.spotify.com/album/0OmYuz9hwn1XoqmDaU0yJ7"
                     target="blank_"
                  >
                     <Img src="https://upload.wikimedia.org/wikipedia/en/thumb/6/69/Elton_John_StillStanding.jpg/220px-Elton_John_StillStanding.jpg"></Img>
                  </a>
                  <p>
                     Elton Jhon <br />
                     <Song>Too Low For Zero</Song>
                  </p>
               </Mainp>
            </Main>
         </Container>
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
