
function Settings(props) {

    function handleChange(event){
        
        const [propertyName, property] = event.target.name.split(" ")
        const value=event.target.value

        props.updatePropFunction(propertyName, property, value)
        
    }
    const propList = props.propSettings.map(property => {
        
        return (
            <div className="settings-list-item">
                {property.realName}
                <input 
                    type="text"
                    
                    onChange={handleChange}
                    
                    value={property.min}
                    name={property.name+" min"}
                    />
                
                <input 
                    type="text"
                    
                    onChange={handleChange}
                    
                    value={property.max}
                    name={property.name+" max"}
                    />
                
                <input 
                    type="text"
                    
                    onChange={handleChange}
                    
                    value={property.initial}
                    name={property.name+" initial"}
                    />
                
                <input 
                    type="text"
                    
                    onChange={handleChange}
                    
                    value={property.step}
                    name={property.name+" step"}
                    />
                
                <input 
                    type="text"
                    
                    onChange={handleChange}
                    
                    value={property.unit}
                    name={property.name +" unit"}
                    />
                
            </div>
            
        )
    })

    return (
        <div>
            <h1>This is the Settings-component!</h1>
            {propList}
        </div>
    )
}

export default Settings