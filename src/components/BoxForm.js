
import React, {useState} from 'react'


const BoxForm = () => {

    const [inputColor,setInputColor] = useState("");
    const [boxWidth, setBoxWidth] = useState("");
    const [boxHeight, setBoxHeight] = useState("");
    const [boxList, setBoxList] = useState([]);

    const [showAllInputRequired, setShowAllInputRequired] = useState(false);


    const handler = (e) =>{
        e.preventDefault();

        setShowAllInputRequired(true); // Mark the "Add" button click

      // Check if any input field is empty
      if (!inputColor || !boxWidth || boxWidth <= 0 || !boxHeight || boxHeight <= 0) {
        return;
      }

        const setStyle = {
            display: "inline-block",
            margin: "20px",
            backgroundColor: inputColor,
            width: `${boxWidth}px`     ,
            height: `${boxHeight}px`

        };

        setBoxList([...boxList, setStyle]);
        setInputColor("");
        setBoxWidth("");
        setBoxHeight("");

        setShowAllInputRequired(false);


    }

    // const isValidColor = (color) => /^#[0-9A-F]{6}$/i.test(color.trim());
    const isValidColor = (color) => {
        const tempDiv = document.createElement("div");
        tempDiv.style.backgroundColor = color;
        return tempDiv.style.backgroundColor !== "" ;
      };

  return (
    
    <div className="row">
        <form onSubmit={handler} className="col md-4 offset 1" style={{padding: "20px"}} >

        {showAllInputRequired && (!inputColor || !boxWidth || boxWidth <= 0 || !boxHeight || boxHeight <= 0) && (
          <p style={{ color: "red", marginBottom: "5px", width: "100%" }}>All input is required!</p>
        )}

        {!isValidColor(inputColor) && inputColor.length ? <p style={{ color: "red", marginBottom: "5px" }}>Invalid color format! Please enter a valid color!</p> : ""}
        {boxWidth && boxWidth <= 0 && <p style={{ color: "red", marginBottom: "5px" }}>Width must be greater than zero!</p>}
        {boxHeight && boxHeight <= 0 && <p style={{ color: "red", marginBottom: "5px" }}>Height must be greater than zero!</p>}
        {/* {!isValidColor(inputColor) || inputColor || boxWidth || boxWidth <= 0 || boxHeight || boxHeight <= 0 ? <p> All input is required</p> : ""} */}


            <label style={{fontFamily: "Papyrus", fontSize: "25px" }} htmlFor="inputColor">Color: </label>
            <input type="text" value={inputColor} name="inputColor" onChange={(e) => setInputColor(e.target.value)}
            style={{backgroundColor: "rgb(243 237 237)", height: "30px", borderRadius: "5px", border: "1px solid black", margin: "5px" }}/>

            <label style={{fontFamily: "Papyrus", fontSize: "25px" }} htmlFor="boxWidth">Width: </label>
            <input type="number" value={boxWidth} name="boxWidth" onChange={(e) => setBoxWidth(e.target.value)}
            style={{backgroundColor: "rgb(243 237 237)", height: "30px", borderRadius: "5px", border: "1px solid black", margin: "5px" }}/>

            <label style={{fontFamily: "Papyrus", fontSize: "25px" }} htmlFor="boxHeight">Height: </label>
            <input type="number" value={boxHeight} name="boxHeight" onChange={(e) => setBoxHeight(e.target.value)}
            style={{backgroundColor: "rgb(243 237 237)", height: "30px", borderRadius: "5px", border: "1px solid black", margin: "5px" }} />

            <input type="submit" value="Add" 
            style={{
                fontFamily: "Verdana",
                fontSize: "20px",
                padding: "10px 20px",
                background: "#007bff", 
                color: "black", //
                border: "none",
                borderRadius: "3px",
                cursor: "pointer",
                boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)", 
              }}

            // disabled={!inputColor || inputColorError || boxWidth <= 0 || boxHeight <= 0}
              />

        </form>
        <div>
           

            {
                boxList.map((box, index) =>
                    <div key={index} style={box} >    
                    </div>
                    
                )
            }

        </div>

    </div>
  )
}

export default BoxForm