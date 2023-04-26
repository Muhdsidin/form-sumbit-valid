
import { useState } from "react"
import "./app.css"



function App() {
const [feilds , setfeilds]  = useState({
  Firstname : "",
  Surname : "",
  Mobile  : "",
  Gender : "",
  Country : "",
}) 

const [error , setError] = useState(false)

const handleSumbit = (event)=>{
  event.preventDefault()
  if(feilds.Firstname==0 || feilds.Surname==0 || feilds.Mobile<10 || feilds.Gender=="" || feilds.Country==""){
    setError(true)
  }
  if(feilds.Firstname && feilds.Surname && feilds.Mobile && feilds.Gender && feilds.Country){
    setfeilds((prev)=>({
      ...prev,
      [event.target.name]: event.target.value,
    }))
    console.log(feilds)
  }
  
}

const handleChange = (event)=>{
  setfeilds((prev)=>({
    ...prev,
    [event.target.name]: event.target.value,
  }))
}
/*console.log(feilds)*/

 
return (
  <div className="div-one">
    <div className="div-row">
   <form className="form"  onSubmit={handleSumbit}>

    <label htmlFor="first" className="firstname">FirstName</label> <br />
    <input type="text" placeholder="FirstName..." id="first" name="Firstname" onChange={handleSumbit} className="firstname-input" /><br />
    {error&&feilds.Firstname<=0? (<div><label htmlFor="" className="error">this is emty value</label><br /></div>): "" }
    
     

    <label htmlFor="second" className="">Surname</label><br />
    <input type="text" placeholder="SurName..." id="second" name="Surname" onChange={handleChange} /><br />
    {error&&feilds.Surname<=0? (<div><label htmlFor="" className="error">this is emty value</label><br /></div>): "" }


    <div className="div-no">
    <label htmlFor="mob" className="mob">Mobile</label>
    <input type="number" placeholder="Mobile..." id="mob" name="Mobile" onChange={handleChange} /><br />
    {error&&feilds.Mobile<10? (<div><label htmlFor="" className="error">Please Select Gender </label><br /></div>): "" }
    </div>

    <div className="div-gend">
    <label htmlFor="">Gender</label><br />

    <div className="radios">
    <div className="Radio">
    <input type="radio" id="male" placeholder="Male" name="Gender" onChange={handleChange} value="male"/>
    </div>
    <label htmlFor="male" className="Male">Male</label>
    
    
    <div className="Radio">
    <input type="radio" name="Gender" id="female" onChange={handleChange} value="Female"/>
    </div>
    <label htmlFor="female" className="Female">Female</label>
    </div>
    {error&&feilds.Gender<=""? (<div><label htmlFor="" className="error">Please Enter Correct </label><br /></div>): "" }
    
    

    </div>

    <div className="country">
      <select name="Country" id="" onChange={handleChange} >
        <option value="">Country</option>
        <option value="india">India</option>
        <option value="usa">Usa</option>
        <option value="brazil">Brazil</option>
        <option value="argentina">Argentina</option>
        <option value="Portugal">Portugal</option>

      </select>
      {error&&feilds.Country<=""? (<div><label htmlFor="" className="error">Please Enter Country </label><br /></div>): "" }
    
    </div>
    <button type="sumbit" className="btn" id="btn">Sumbit</button>

   </form>
   </div>
   </div>
  )
}

export default App