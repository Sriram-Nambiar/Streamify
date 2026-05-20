export function Appbar() {
  return (
    <div style={{ display: "flex", alignItems: "center", padding: 20, backgroundColor: "#af3535" }}>
      <h1 style={{ margin: 0 }}>MyTube</h1>
      <div style={{ marginLeft: "auto" }}>
        <button style={{ marginRight: 10 }}>Upload</button>
        <button>Sign In</button>
      </div>
    </div>
  );
}