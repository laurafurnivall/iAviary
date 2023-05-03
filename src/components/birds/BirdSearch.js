import "./Birds.css"

//input field with for searching, parameter of setterFuncton
export const BirdSearch = ({ setterFunctionTwo }) => {
    return (
        <div>
            <input className="search" onChange={
                (changeEvent) => {
                    setterFunctionTwo(changeEvent.target.value)
                }
            }
            type="text" placeholder="Search for a specific bird..."/>
        </div>
    )
}