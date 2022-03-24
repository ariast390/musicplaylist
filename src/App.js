import "./styles.css";
import data from "./data";

export default function App() {
  // console.log(data);

  const divStyle = {
    border: "2px solid black",
    margin: "20px auto",
    padding: "50px",
    borderRadius: "35px",
    width: "400px"
  };

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

  const h1 = {
    FontFace: "bold",
  };


  return (
    <div className="App">
      <h1>Playlist</h1>
      <div id="track" style={divStyle}>
        <img 
          width="400"
          src="https://img1.hotstarext.com/image/upload/f_auto,t_hcdl/sources/r1/cms/prod/2327/572327-h"
        /> 
        <div className="judul_lagu" style={{ fontSize: "30px" }} id="title">
          <br />
          {data.name}
        </div>
        <br />
        <strong>{data.artists[0].name}</strong> -{" "}
        <strong>{data.album.name}</strong> <br />
        <button style={buttonStyle}>Select</button>
      </div>
    </div>
  );
}