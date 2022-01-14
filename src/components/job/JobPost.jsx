import axios from "axios";
import { useState } from "react";
import styles from "./JobPost.module.css"
import JobPostHeader from "./JobPostHeader";


export default function JobPost(){
    const [formData, setFormData] = useState(
        {"title":"",
        "comp_name":"", 
        "location":"",
        "work_type":"",
        "emp_type":""});

    const handleTitle = (e) => {
        var val = e.target.value
        setFormData({...formData, title : val});   
    }
    const handleCompany = (e) => {
        var val = e.target.value
        setFormData({...formData, comp_name : val});   
    }
    const handleWorkPlace = (e) => {
        var val = e.target.value
        setFormData({...formData, work_type : val});   
    }
    const handleLocation = (e) => {
        var val = e.target.value
        setFormData({...formData, location : val});   
    }
    const handleEmpType = (e) => {
        var val = e.target.value
        setFormData({...formData, emp_type : val});   
    }
     async function handleSubmit(e){
         console.log("+++")
        e.preventDefault();
        if(formData.title == "" || formData.comp_name == "" || formData.location == "" || formData.work_type == "" || formData.emp_type == ""){
            alert("All fields are required!!");
            return;
        }
        await axios({
            method: 'post',
            url: 'http://localhost:3000/jobs',
            data: formData, // you are sending body instead
            headers: {
             // 'Authorization': `bearer ${token}`,
            'Content-Type': 'application/json'
            }, 
          })
          
    }

    
    return (
        <>
            <JobPostHeader/>
            <div style={{"backgroundColor":"rgb(10,102,194)", "padding":"1rem" }}>
                <div style={{"color":"white", "margin":"50px auto", "width":"400px"}}>
                    <div style={{"textAlign":"center"}}>
                        <p style={{"fontSize":"2.3rem", "marginBottom":"5px"}}>Find a great hire, fast</p>
                        <p style={{"fontSize":"1.2rem",}}>Rated #1 in delivering quality hires</p>
                    </div>
                    
                    <div style={{"background":"white", "color":"black", "marginTop":"1.5rem", "padding":"2rem", "borderRadius":"10px"}}>
                        <form>
                            <div style={{"marginBottom":"1rem"}}>
                                <div style={{"marginBottom":"5px"}}><label>Job title *</label></div>
                                <input type="text" placeholder="Job title" value={formData.title} onChange={handleTitle} style={{"width":"100%", "height":"30px","fontSize":"1rem","paddingLeft":"0.5rem"}}/>
                            </div>
                            <div style={{"marginBottom":"1rem"}}>
                                <div style={{"marginBottom":"5px"}}><label>Company *</label></div>
                                <input type="text" placeholder="Company" value={formData.comp_name} onChange={handleCompany} style={{"width":"100%", "height":"30px","fontSize":"1rem","paddingLeft":"0.5rem"}}/>
                            </div>
                            <div style={{"marginBottom":"1rem"}}>
                                <div style={{"marginBottom":"5px"}}><label>Workplace type *</label></div>
                                <select onChange={handleWorkPlace} style={{"width":"104%", "height":"40px","fontSize":"1rem","paddingLeft":"0.5rem"}}>
                                    <option>Select Workplace Type</option>
                                    <option value="On-site">On-site</option>
                                    <option value="Hybrid">Hybrid</option>
                                    <option value="Remote">Remote</option>
                                </select>
                            </div>
                            <div style={{"marginBottom":"1rem"}}>
                                <div style={{"marginBottom":"5px"}}><label>Job location *</label></div>
                                <input type="text" placeholder="City or metro area" value={formData.location} onChange={handleLocation} style={{"width":"100%", "height":"30px","fontSize":"1rem","paddingLeft":"0.5rem"}} />
                            </div>
                            <div style={{"marginBottom":"1rem"}}>
                                <div style={{"marginBottom":"5px"}}><label>Employment type *</label></div>
                                <div><select onChange={handleEmpType} style={{"width":"104%", "height":"40px","fontSize":"1rem","paddingLeft":"0.5rem"}}>
                                    <option>Select Employment type</option>
                                    <option value="Full-time">Full-time</option>
                                    <option value="Part-time">Part-time</option>
                                    <option value="Contract">Contract</option>
                                    <option value="Temporary">Temporary</option>
                                    <option value="Volunteer">Volunteer</option>
                                    <option value="Internship">Internship</option>
                                </select></div>
                            </div>
                            <button type="submit" onClick={(e) => handleSubmit(e)} className={styles.postBtn}>Get Started for free</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}