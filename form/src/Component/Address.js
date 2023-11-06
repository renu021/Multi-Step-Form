import React  from 'react'



const Address = ({formData, setFormData}) => {




    return(
        <div className="address-container">

            <div>
            <label htmlFor="">State</label><br/>
            <input type="text" 
            value={formData.state} 
            onChange={(event) => setFormData({...formData, state: event.target.value})}
            />
            </div>
            


            <div>
            <label htmlFor="">District</label><br/>
            <input type="text" 
            value={formData.district} 
            onChange={(event) => setFormData({...formData, district: event.target.value})}
            />  
            </div>



            <div>
            <label htmlFor="">City</label><br/>
             <input type="text" 
            value={formData.city} 
            onChange={(event) => setFormData({...formData, city: event.target.value})}
            /> 
            </div>
            
        </div>
    )
}
export default Address