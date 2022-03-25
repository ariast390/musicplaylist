import "../styles.css";
import data from "../data";

const buttonStyle = {
    backgroundColor: "#5463FF",
    border: "none",
    borderRadius: "50px",
    color: "white",
    padding: "10px 32px",
    textAlign: "center",
    textDecoration: "none",
    display: "inline-block",
    fontSize: "16px",
    margin: "40px 2px",
    cursor: "pointer"
  };

function conPlaylist() {
    return(
<div className="divStyle" id="track">
<img 
  width="400"
  src="https://img1.hotstarext.com/image/upload/f_auto,t_hcdl/sources/r1/cms/prod/2327/572327-h"
/> 
<div className="judul_lagu" style={{ fontSize: "30px" }} id="title">
  <br />
  {data.name}
</div>
<br />
<strong class>{data.artists[0].name}</strong> -{" "}
<strong>{data.album.name}</strong> <br />
<button style={buttonStyle}>Select</button>
</div>
    );
}

export default conPlaylist;