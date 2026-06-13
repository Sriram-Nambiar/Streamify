export function Sidebar(){
    function nav() {
        window.location = "/Subscriptions"
        
    }
    return (
      <div style={{display:"flex", width: 100, marginTop: 20,backgroundColor: "#6F2D43", height: "100vh" , justifyContent:"centre", alignItems: "center", flexDirection: "column", padding:10}}>
          <div style={{margin:40}}><button onClick ={nav}style={{all: "unset"}}>Subscriptions</button></div>
          <div style={{margin:40}}><button style={{all: "unset"}}>History</button></div>
          <div style={{margin:40}}><button style={{all: "unset"}}> Liked </button></div>

    </div>
    )
}
