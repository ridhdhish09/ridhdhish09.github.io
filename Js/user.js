const user_auth = (e) => {
  let form_login = document.getElementById("form_login");

  let username = form_login.elements[0].value;
  let password = form_login.elements[1].value;

  if (username === "user" && password === "user") {
    window.location = "/Users/user_index.html";
  } else {
    window.alert("Username or password is wrong!");
  }
};

const admin_auth = (e) => {
  let form_login = document.getElementById("form_login");

  let username = form_login.elements[0].value;
  let password = form_login.elements[1].value;

  if (username === "admin123" && password === "admin@123") {
    window.location = "/Admin/admin_index.html";
  } else {
    window.alert("Username or password is wrong!");
  }
};
