import "./Symptoms.scss";

export function Symptoms () {
    return (
        <form className="symptoms" >
           <label htmlFor="symptoms" className="symptoms__label">Describe your symptoms</label>
           <input className="symptoms__input" type="text" id="symptoms" name="symptoms" placeholder="Add your symptoms"></input>
        </form>
    )
}