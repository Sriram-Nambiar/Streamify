import axios from "axios"; export function Signup() { async function signup(){ await axios.post('http://localhost:3000/signup', { username: document.getElementById("username")!.value, password: document.getElementById("password")!.value, gender: "male", channelName: document.getElementById("channelname")!.value }).then((res)=>{ localStorage.setItem("token", res.data.token);
        window.location = "/signin";
    })
  }
  return (
    <div>
     <input id="username" type="text" placeholder="username" />
        <input id="password" type="text" placeholder="password" />
        {/* <input id="gender" type="text" placeholder="gender" /> */}
        <input id="channelname" type="text" placeholder="channelname" />
        <button onClick={signup}>signup</button>
    </div>
  );
}
