import { useState } from "react";

export function ItemList() {
   console.log("ItemList Called!");
   const [newItem, setNewItem] = useState("");
   const [items, setItems] = useState([]);
   // 리액트 onChange 이벤트는 바닐라 (자바) 스크립트에서의 keydown 이벤트처럼
   // 입력할 때마다 발생함. (설계방식이 다름)
   function onChange(e) {
      setNewItem(e.target.value);
   }
   function addItem() {
      const temp = [...items, newItem];
      setItems(temp);
      setNewItem(""); // input 아이템을 clear 시킴
      console.log("addItem함수안", items);
   }
   console.log("addItem함수안", items);
   return (
      <>
         <input
            placeholder="물품 이름을 입력하세요"
            onChange={onChange}
            value={newItem}
         />
         <button onClick={addItem}>물품추가</button>
         <h3>물품 목록</h3>
         <ul>
            {items.map((item, index) => (
               <li key={item}>{index}</li>
            ))}
         </ul>
      </>
   );
}
