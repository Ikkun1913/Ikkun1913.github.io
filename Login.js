// https://qiita.com/qqn5192/items/f68615b47f6b055fb0d3

let userdata = [
    { name: "admin", password: "root" },
    { name: "Ik", password: "admin" }
  ];
  
  function login() {
    let loginuser = ""
    let username = document.getElementById("username").value;
    let password = document.getElementById("pass").value;
  
    let found = false;
    let i = 0;
  
    while (!found && i < userdata.length) {
      loginuser = userdata[i];
      if (loginuser.hasOwnProperty("name") && loginuser.hasOwnProperty("password")) {
        if (loginuser.name === username && loginuser.password === password) {
          found = true;
        }
      }
      i++;
    }
  
    if (found) {
      alert(`こんにちは。${username}さん。`);
    }