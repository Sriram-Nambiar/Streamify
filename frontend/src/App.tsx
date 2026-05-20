
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router";
import { Home } from "./screens/Home";
import { VideoPage } from "./screens/VideoPage";
import { SignIn } from "./screens/Signin";
import { Signup } from "./screens/Signup";

export function App() {
  return (
    <div style={{ backgroundColor: "#0f0e0e", minHeight: "100vh", color: "white" }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/watch" element={<VideoPage />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
