import React from 'react'



const Signup = ({formData, setFormData}) => {



    const validatePassword = () => {
        if (formData.password !== formData.confirmPassword) {
          alert("Confirm Password do not match")  
          
        } else {
          alert("Confirm Password match")
        }
      };


    return(
        <div className="signup-container">
            <div>
            <label htmlFor="">Email</label><br />
            <input type="email" 
            value={formData.email}
            onChange={(event) => setFormData({...formData, email: event.target.value})} /> 

            </div>
            

            <div>
            <label htmlFor="">Password</label><br />
                        <input type="password" 
                        value={formData.password} 
                        onChange={(event) => setFormData({...formData, password: event.target.value})}
                        />          
            </div>
                        

            <div>
            <label htmlFor="">Confirm Password</label><br />
                        <input type="password" 
                        value={formData.confirmPassword} 
                        onChange={(event) => setFormData({...formData, confirmPassword: event.target.value})}
                        onBlur={validatePassword}
                        />   
            </div>
            

            
            
        </div>
    )
}
export default Signup