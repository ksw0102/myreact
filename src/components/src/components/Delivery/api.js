export function getAllMenus() {
   return fetch(`http://localhost:8082/products`, {
      method: "GET",
   }).then((response) => response.json());
}

export function getMenuById(id) {
   return fetch(`http://localhost:8082/products/${id}`, {
      method: "GET",
   }).then((response) => response.json());
}

export function purchaseMenus(menus) {
   const purchases = menus.map((menu) => ({
      menu: menu,
      quantity: 1,
   }));
   return fetch(`http://localhost:8082/products/purchaselist`, {
      method: "POST",
      headers: {
         "Content-Type": "application/json",
      },
      body: JSON.stringify(purchases),
   }).then((response) => response.json());
}

export function getAllPurchasedMenus() {
   return fetch(`http://localhost:8082/products/purchase`, {
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
