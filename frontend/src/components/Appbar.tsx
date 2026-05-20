export function Appbar() {
  return (
    <div style={{ display: "flex",justifyContent: "space-between", alignItems: "center", padding: 20, backgroundColor: "#af3535" }}>
      <h1 style={{ margin: 0 }}>MyTube</h1>
      <div>
        <input type="search" placeholder="Search..." />
      </div>
      <div >
        <button onClick={() => window.location = "/uploads"} style={{ marginRight: 10 }}>Upload</button>
        <button onClick={() => window.location = "/signin"}>Sign In</button>
      </div>
      
    </div>
  );
}