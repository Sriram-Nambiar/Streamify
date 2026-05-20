import axios from "axios";

export function SignIn() {
  async function signin(){
    await axios.post('http://localhost:3000/signin', {
        username: (document.getElementById("username") as HTMLInputElement).value,
        password: (document.getElementById("password") as HTMLInputElement).value
    }).then((res)=>{
        localStorage.setItem("token", res.data.token);
        window.location = "/";
    })
  }
  return (
    <div>
     <input id="username" type="text" placeholder="username" />
        <input id="password" type="text" placeholder="password" />
        <button onClick={signin}>signin</button>
    </div>
  );
}