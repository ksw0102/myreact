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
export function Rock() {
   return (
      <>
         <Title>R O C K </Title>
         <Main>
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
