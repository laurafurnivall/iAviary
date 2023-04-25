import "./Species.css"

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