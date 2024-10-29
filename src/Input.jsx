import { useState } from "react"

function InputComponent() {

    const [inputValue, setInputValue] = useState("")

    const manageInput=(e)=>{
        setInputValue(e.target.value)
    }

    return(
        <div>
            <label htmlFor="name">Enter Name</label>
            <input type="text" 
            name="name" 
            id="name"
            value={inputValue}
            onChange={(e)=>manageInput(e)}
            />
        </div>
    )
}

export default InputComponent