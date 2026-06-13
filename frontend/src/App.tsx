
import "./index.css";
import { Subscriptions } from "./screens/Subscriptions.tsx"
import { BrowserRouter, Routes, Route } from "react-router";
import { Home } from "./screens/Home";
import { VideoPage } from "./screens/VideoPage";
import { SignIn } from "./screens/SignIn";
import { Signup } from "./screens/Signup";
import { Uploads } from "./screens/Uploads";

export function App() {
  return (
    <div style={{ backgroundColor: "#331631", minHeight: "100vh", color: "white" }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/watch" element={<VideoPage />} />
          <Route path="/uploads" element={<Uploads />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/Subscriptions" element={<Subscriptions/>}/> 
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
