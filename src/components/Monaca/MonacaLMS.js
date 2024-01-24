// 총괄 컴포넌트
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NavBar } from "./NavBar";
import { Main } from "./Main";
import { Announcement } from "./Announcement";
import { StudentRegister } from "./StudentRegister";
import { MyRoom } from "./MyRoom";
import { Message } from "./Message";
import { CsCenter } from "./CsCenter";
import styled from "styled-components";
import { ProfessorRegister } from "./ProfessorRegister";
import { LectureList } from "./LectureList";
import { LectureInfo } from "./LectureInfo";

const Container = styled.div`
   width: 100vw;
   display: flex;
   justify-content: center;
   align-items: center;
`;

export function MonacaLMS() {
   return (
      <>
         <BrowserRouter>
            <Container>
               <div>
                  <Routes>
                     <Route index element={<Main />} />
                     <Route path="main" element={<Main />} />
                     <Route path="announcement" element={<Announcement />} />
                     <Route
                        path="student-register"
                        element={<StudentRegister />}
                     />
                     <Route
                        path="professor-register"
                        element={<ProfessorRegister />}
                     />
                     <Route path="my-room" element={<MyRoom />} />
                     <Route path="message" element={<Message />} />
                     <Route path="cs-center" element={<CsCenter />} />
                     <Route path="lecture-list" element={<LectureList />} />
                     <Route path="lecture-info" element={<LectureInfo />} />
                  </Routes>
               </div>
            </Container>
         </BrowserRouter>
      </>
   );
}
