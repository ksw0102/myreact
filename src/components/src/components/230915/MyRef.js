import { useEffect, useState, useRef } from "react";

export function MyRef() {
   console.log("렌더링");
   const [inputValue, setInputValue] = useState("");
   // count처럼 숫자를 세기 위해 기존 값을 저장하지만 렌덜링은 발생시키지
   // 말아야 하는 경우 useRef 후크를 사용해야함
   // 하단 코드처럼 count를 useState로 만들면 횟수를 세는 동안 계속
   // 렌더링을 발생시키는 문제가 있음
   // const [count, setCount] = useState(0);
   const count = useRef(0); // 배열로 받지 않고 count만 받음

   useEffect(() => {
      count.current = count.current + 1;
   }, [inputValue]);
   function setValue(e) {
      setInputValue(e.target.value);
   }
   return (
      <>
         <input value={inputValue} onChange={setValue} />
         <p>
            렌더링 횟수 : <span>{count.current}</span>
         </p>
      </>
   );
}
