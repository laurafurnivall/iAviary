import "./Species.css"

//search input field, with parameter of setterFunction, watches for change,
// value is whatever the input is in the text field
export const SpeciesSearch = ({ setterFunction }) => {
    return (
        <div>
            <input className="search" onChange={
                (changeEvent) => {
                    setterFunction(changeEvent.target.value)
                }
            }
            type="text" placeholder="Search the species database..." />
        </div>
    )
}