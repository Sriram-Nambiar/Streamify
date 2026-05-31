export function Appbar() {
  return (
    <div style={{ display: "flex",justifyContent: "space-between", alignItems: "center", padding: 20, backgroundColor: "#1E1E1E" }}>
      <h1 style={{ margin: 0 }}>MyTube</h1>
      <div>
        <input style={{width : 500, padding: 10 , borderRadius: 20, backgroundColor:"#424242"}} type="search" placeholder="Search..." />
      </div>
      <div >
        <button onClick={() => window.location = "/uploads"} style={{ marginRight: 10 }}>Upload</button>
        <button onClick={() => window.location = "/signin"}>Sign In</button>
      </div>
      
    </div>
  );
}
