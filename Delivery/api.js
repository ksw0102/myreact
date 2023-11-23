export function getAllDeliverys() {
   return fetch(`http://localhost:8082/products`, {
      method: "GET",
   }).then((response) => response.json());
}

export function getDeliveryById(id) {
   return fetch(`http://localhost:8082/products/${id}`, {
      method: "GET",
   }).then((response) => response.json());
}

export function getAllFoods() {
   return fetch(`http://localhost:8082/foods`, {
      method: "GET",
   }).then((response) => response.json());
}

export function getFoodsById(id) {
   return fetch(`http://localhost:8082/foods/${id}`, {
      method: "GET",
   }).then((response) => response.json());
}

export function signUp(user) {
   return fetch(`http://localhost:8083/api/member/signup`, {
      method: "POST",
      headers: {
         "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
   }).then((response) => response.json());
}

export function login(user) {
   return fetch(`http://localhost:8083/api/member/login`, {
      method: "POST",
      headers: {
         "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
   }).then((response) => response.json());
}

export function purchaseDelivers(menus) {
   const purchases = menus.map((menu) => ({
      menu: menu,
      quantity: 1, // 원하는 구매 수량을 여기에 설정
   }));
   return fetch(`http://localhost:8082/products/purchaselist`, {
      method: "POST",
      headers: {
         "Content-Type": "application/json",
      },
      body: JSON.stringify(purchases),
   }).then((response) => response.json());
}

export function getAllPurchasedDelivers() {
   return fetch(`http://localhost:8082/products/purchase`, {
      method: "GET",
   }).then((response) => response.json());
}
