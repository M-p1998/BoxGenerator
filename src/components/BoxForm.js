
import React, {useState} from 'react'

const BoxForm = () => {

    const [inputColor,setInputColor] = useState("");
    const [boxWidth, setBoxWidth] = useState("");
    const [boxHeight, setBoxHeight] = useState("");
    const [boxList, setBoxList] = useState([]);

    const handler = (e) =>{
        e.preventDefault();
        
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


    }

  return (
    
    <div className="row">
        <form onSubmit={handler} className="col md-4 offset 1">
            <label htmlFor="inputColor">Color</label>
            <input type="text" value={inputColor} name="inputColor" onChange={(e) => setInputColor(e.target.value)}/>

            <label htmlFor="boxWidth">Width</label>
            <input type="text" value={boxWidth} name="boxWidth" onChange={(e) => setBoxWidth(e.target.value)}/>

            <label htmlFor="boxHeight">Height</label>
            <input type="text" value={boxHeight} name="boxHeight" onChange={(e) => setBoxHeight(e.target.value)} />

            <input type="submit" value="Add" />

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