export function singUp(user) {
   return fetch(`http://localhost:8080/api/signup`, {
      method: "POST",
      headers: {
         "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
   }).then((response) => response.json());
}

export function login(user) {
   console.log(user);
   return fetch(`http://localhost:8080/api/login`, {
      method: "POST",
      headers: {
         "Content-type": "application/json",
      },
      body: JSON.stringify(user),
   }).then((response) => response.json());
}
