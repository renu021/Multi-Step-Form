
import React from 'react'
import {useState} from 'react'
import Signup from './Signup'
import PersonalInfo from './PersonalInfo';
import Address from './Address';



const Form = () =>{
    
        // const {finalData, submitData} =useContext(multiStepContext)  //new line



    const [formData, setFormData] = useState({
        email: "",
        password: "",
        confirmPassword: "",
        name: "",
        contact: "",
        other: "",
        state: "",
        district: "",
        city: ""
    })

     const [page, setPage] = useState(0); 

    

    const formTitle = ["Sing Up", "Personal Info", "Address"]

    const PageDisplay = () => {
        if(page === 0){
             
            return <Signup formData={formData} setFormData={setFormData} />
        }
        else if(page === 1){
            return <PersonalInfo formData={formData} setFormData={setFormData} />
        }
        else {
            return <Address formData={formData} setFormData={setFormData} />
        }
       
    }


    const handleSubmission = (setFinalData) => {
        if (page === formTitle.length - 1) {
          alert('Successfully Form submitted');
          console.log(formData);
          setFormData({
            email: '',
            password: '',
            confirmPassword: '',
            name: '',
            gender: '',
            phone: '',
            address: '',
            state: '',
            city: '',
          });
           setPage(0);  
        
        } else {
           setPage((currentPage) => currentPage + 1);  
        }
      };


    return(
        
            <div className="form">
                
                <div className="progress-bar">
                    <div style={{width: page === 0 ? "33.3%" : page === 1? "66.6%" : "100%" }}></div>
                </div>
                <div className="form-container">
                    <div className="form-header"> <h1>{formTitle[page]}</h1> </div>
                    <div className="form-body"> {PageDisplay()} </div>
                    <div className="form-footer">
                         {(page !== 0 )?<button onClick={() => {setPage((currentPage) => currentPage - 1)}} 
                                > Back </button> : null}    


                          

                        {/* <button onClick= {() => {
                            if( page === formTitle.length - 1){
                                alert(" Successfully Form submitted")
                                console.log(formData)
                            }else{
                                setPage((currentPage) => currentPage + 1) }}
                            }>
                           
                             {page === formTitle.length - 1?  "Submit" : "Next"  }
                            
                        </button> */}


                <button onClick={handleSubmission} >
                     {page === formTitle.length - 1 ? 'Submit' : 'Next'}
                </button>   


               
                    </div>
                </div>

            </div>
        
     ) 
}

export default Form























