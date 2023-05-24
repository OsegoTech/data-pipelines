import { useState } from "react";
import axios from "axios";

export default function DataCaptureForm() {
    const [formData, setFormData] = useState({
        name: "",
        age: "",
        gender: "",
        diagnosis: "",
        weight: "",
        height: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        axios.post("/source-data", formData)
        .then((response) => {
            console.log('Data stored successfully');
        })
        .catch((error) => {
            console.log(error);
        });
        
    }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h3>Patient Capture Form</h3>
        <label htmlFor="name">Name</label>
        <input name="name" type="text" placeholder="patients-name" value={formData.name}/>
        <label htmlFor="age">Age</label>
        <input name="age" type="number" placeholder="27" value={formData.age}/>
        <label htmlFor="gender">Gender</label>
        <input name="gender" type="text" placeholder="Male/Female" value={formData.gender}/>
        <label htmlFor="diagnosis">Diagnosis</label>
        <textarea
             
          name="diagnosis"
          id=""
          cols="30"
          rows="10"
          placeholder="Diagnosis Statement"
          value={formData.diagnosis}
        ></textarea>
        <label htmlFor="weight">Weight</label>
        <input name="weight" type="number" placeholder="65" value={formData.weight}/>
        <label htmlFor="height">Height</label>
        <input name="height" type="text" placeholder="75" value={formData.height}/>
        <button className="submit" type="submit">Submit</button>
      </form>
    </div>
  );
}
