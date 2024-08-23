import React from 'react'
import ReactSwitch from 'react-switch'


const PasswordGenerator = () => {
  return (
    <div>
        <div>
            <label>Password Length : </label>
            <input type="number" />
        </div>

        <div>
            <label>Include Uppercase : </label>
            <ReactSwitch 
                height={24}
                width={48}
                handleDiameter={24}
            />
        </div>

        <div>
            <label>Include Numbers : </label>
            <ReactSwitch 
                height={24}
                width={48}
                handleDiameter={24}
            />
        </div>

        <div>
            <label>Include Special Characters : </label>
            <ReactSwitch 
                height={24}
                width={48}
                handleDiameter={24}
            />
        </div>

        <button>
            Generate Password
        </button>
        
    </div>
  )
}

export default PasswordGenerator