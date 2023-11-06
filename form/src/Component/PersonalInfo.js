import React  from 'react'


const PersonalInfo = ({formData, setFormData}) => {

   


    return(
        <div className="personalInfo">

            <div>
            <label htmlFor="">Name</label><br/>
            <input type="text" 
            value={formData.name}  
            onChange={(event) => setFormData({...formData, name: event.target.value})}
            /> 
            </div>



            <div>
            <label htmlFor="">Contact</label> <br/>
            <input type="number" 
            value={formData.contact} 
            onChange={(event) => setFormData({...formData, contact: event.target.value})}
            />  
            </div>



            <div>
            <label htmlFor="">Other:</label> <br/>
            <input type="text" 
            placeholder='phone number,username,or email'
            value={formData.other} 
            onChange={(event) => setFormData({...formData, other: event.target.value})}
            />  
            </div>
            
        </div>
    )
}
export default PersonalInfo
