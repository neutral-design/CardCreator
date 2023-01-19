import { useState, useEffect } from 'react'

function Settings(props) {

    const [propSettings, setPropSettings] = useState(props.propSettings)
    
    function handleChange(event){
        
        const [propertyName, property] = event.target.name.split(" ")
        const value=event.target.value


        setPropSettings(prevPropSettings => {
            return prevPropSettings.map(item => {
                if(item.name===propertyName){
                    return {
                        ...item,
                        [property]:value
                    }
                } else {
                    return item
                }
            })
            
        })
    }

    function handleClick(event){
        props.updatePropFunction(propSettings)
    }


    useEffect(()=>{
        // console.log(propSettings)
    }, propSettings)

    const propList = propSettings.map(property => {
        
        return (
            <div className="settings-list-item">
                <p className="settings-list-propname">{property.realName}</p>
                <input 
                    type="text"
                    className="settings-input"
                    onChange={handleChange}
                    
                    value={property.min}
                    name={property.name+" min"}
                    />
                
                <input 
                    type="text"
                    className="settings-input"
                    onChange={handleChange}
                    
                    value={property.max}
                    name={property.name+" max"}
                    />
                
                <input 
                    type="text"
                    className="settings-input"
                    onChange={handleChange}
                    
                    value={property.initial}
                    name={property.name+" initial"}
                    />
                
                <input 
                    type="text"
                    className="settings-input"
                    onChange={handleChange}
                    
                    value={property.step}
                    name={property.name+" step"}
                    />
                
                <div className="radio-container">
                    <input type="radio" id="px" name={property.name+" unit"} value="px" checked={property.unit==="px"} onChange={handleChange}/>
                    <label htmlFor="px">px</label>
                    <input type="radio" id="%" name={property.name+" unit"} value="%" checked={property.unit==="%"} onChange={handleChange}/>
                    <label htmlFor="%">%</label>
                    <input type="radio" id="em" name={property.name+" unit"} value="em" checked={property.unit==="em"} onChange={handleChange}/>
                    <label htmlFor="em">em</label>
                    <input type="radio" id="rem" name={property.name+" unit"} value="rem" checked={property.unit==="rem"} onChange={handleChange}/>
                    <label htmlFor="rem">rem</label>
                </div>
                
            </div>
            
        )
    })

    return (
        <div className="settings-container">
            <div className="settings-list-item">
            <p className="settings-list-heading">Property name:</p>
            <p className="settings-list-heading">Min value:</p>
            <p className="settings-list-heading">Max value:</p>
            <p className="settings-list-heading">Initial value:</p>
            <p className="settings-list-heading">Step:</p>
            <p className="settings-list-heading">Unit:</p>
            </div>
            {propList}
            <div className="button-container"><button className="settings-close-button" onClick={handleClick}>Done</button></div>
        </div>
    )
}

export default Settings