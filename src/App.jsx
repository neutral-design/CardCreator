import { useState, useEffect } from 'react'

import './App.css'

function App() {
  const [formData, setFormData] = useState(
      {sliderMargin: "50", sliderPadding: "50", sliderBorderRadius: "50"}
  )
  const [cardStyle, setCardStyle] = useState({
    
    padding: formData.sliderPadding+"px", 
    margin: formData.sliderMargin+"px", 
    borderRadius:formData.sliderBorderRadius+"px"
  })

  function handleChange(event) {
    
    setFormData(prevFormData => {
        return {
            ...prevFormData,
            [event.target.name]: event.target.value
        }
    })
}

  useEffect(() => {
    setCardStyle(   
    {
    
      padding: formData.sliderPadding+"px", 
      margin: formData.sliderMargin+"px", 
      borderRadius:formData.sliderBorderRadius+"px"
    })
    // console.log(cardStyle)
  }, [formData]);

  

  return (
    <div className="App">
      
      
      <div className="container">
        <header><h1>Card Creator</h1></header>
        <div className="card-container">
          <div 
            className="card" 
            style={cardStyle}
            > Move the sliders to modify this div. 
          </div>
        </div>
        <div className="sliders">
          <div className="slidecontainer">
            <label htmlFor="sliderMargin">Margin</label>
            <input 
              onChange={handleChange}
              type="range" 
              min="1" 
              max="100" 
              value={formData.sliderMargin}
              className="slider" 
              name="sliderMargin" 
            />
            <p className="slidervalue">{formData.sliderMargin}</p>
          </div>
          <div className="slidecontainer">
            <label htmlFor="sliderPadding">Padding</label>
            <input 
              onChange={handleChange}
              type="range" 
              min="1" 
              max="100" 
              value={formData.sliderPadding}
              className="slider" 
              name="sliderPadding" 
            />
            <p className="slidervalue">{formData.sliderPadding}</p>
          </div>
          <div className="slidecontainer">
            <label htmlFor="sliderBorderRadius">Border Radius</label>
            <input 
                onChange={handleChange}
                type="range" 
                min="1" 
                max="100" 
                value={formData.sliderBorderRadius}
                className="slider" 
                name="sliderBorderRadius" 
              />
              <p className="slidervalue">{formData.sliderBorderRadius}</p>
          </div>
        </div>

        <div className="code-container">
        
        <pre>
          Text in a pre element
          is displayed in a fixed-width
          font, and it preserves
          both      spaces and
          line breaks
        </pre>
            
          
        </div>
        <footer>
          <h1>Footer goes here....</h1>
          
        </footer>
      </div>
    </div>
  )
}

export default App
