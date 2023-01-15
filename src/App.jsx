import { useState, useEffect } from 'react'

import './App.css'

const properties = [
  {
    name: "margin",
    realName: "margin",
    min: 0,
    max: 100,
    initial: 10,
    unit: "px"
  },
  {
    name: "padding",
    realName: "padding",
    min: 0,
    max: 100,
    initial: 40,
    unit: "px"
  },
  {
    name: "borderRadius",
    realName: "border-radius",
    min: 0,
    max: 100,
    initial: 30,
    unit: "px"
  },
  {
    name: "borderWidth",
    realName: "border-width",
    min: 0,
    max: 10,
    initial: 1,
    unit: "px"
  },
  {
    name: "fontSize",
    realName: "font-size",
    min: 0,
    max: 32,
    initial: 16,
    unit: "px"
  },
 ]

function App() {
 
  const [divContent, setDivContent] = useState("Move the sliders to modify this div.")
  
  const [propData, setPropData] = useState(
    properties.reduce((accumulator, currentValue) => { 
      return ({...accumulator, [currentValue.name]:currentValue.initial})
    }, {})
  )
  const [cardStyle, setCardStyle] = useState(properties.reduce((accumulator, currentValue) => { 
    return ({...accumulator, [currentValue.name]:currentValue.initial+currentValue.unit})
  }, {}))


  function handleChange(event) {
    
    setPropData(prevFormData => {
        return {
            ...prevFormData,
            [event.target.name]: event.target.value
        }
    })
  }

  function handleTextChange(event){
    setDivContent(event.target.value)
  }

  useEffect(() => {
    
    setCardStyle(properties.reduce((accumulator, currentValue) => { 
      return ({...accumulator, [currentValue.name]:propData[currentValue.name]+currentValue.unit})
    }, {}))

  }, [propData]);


  const sliders = properties.map((property) => {
    return (
      <div className="slidecontainer">
        <label htmlFor={property.name}>{property.realName}</label>
        <input 
          onChange={handleChange}
          type="range" 
          min={property.min} 
          max={property.max}
          value={propData[property.name]}
          className="slider" 
          name={property.name} 
        />
        <p className="slidervalue">{propData[property.name]}{property.unit}</p>
      </div>
    )
  })

  const stylingCode = properties.map((property) => {
    return (
      <div><span className="property-name">{property.realName}</span>: <span className="property-value">{propData[property.name]}{property.unit}</span></div>
    )
  })
  console.log("StylingCode:", stylingCode)

  

  return (
    <div className="App">
      
      
      <div className="container">
        <header><h1>Card Creator</h1></header>
        <div className="card-container">
          <div 
            className="card" 
            style={cardStyle}
            > 
              {divContent}
          </div>
        </div>
        <div className="sliders">
          {sliders}
        </div>

        <div className="code-container">

        
        div &#123;
                {stylingCode}
        &#125;
            
        
            
          
        </div>
        <footer>
          <p>Created by Erik</p>
          
        </footer>
      </div>
    </div>
  )
}

export default App
