import {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Display from './Display';
import { addEmployee } from '../Reducers/employeeSlice';
import { homePage } from '../Reducers/optionSlice';

const Add = () => {
    const employees =useSelector((state)=>state.employees)
    const dispatch= useDispatch();
    const [formData, setFormData] =useState({
        // id:'',
        name:'',
        email:'',
        dob:'',
    });
    const handleChange =(e)=>{
        const{name,value}=e.target;
        setFormData({...formData,[name]:value})
    };
    const handleOnSubmit=(e)=>{
        e.preventDefault();
        
        const employeeData = {
            // id: formData.id,
            name: formData.name,
            email: formData.email,
            dob:formData.dob,
          };
          console.log(employeeData);
          dispatch(addEmployee(employeeData))
          dispatch(homePage())
          setFormData({  name: '', email: '',dob:'' });
    }
    return (
        <div class="form-control row">
            <h1 class="text-center">Add Employees</h1>
            <form class="col-8 offset-2" action="">
                {/* <div class="mb-3">
                    <label for="exampleInputId" class="form-label">Employee ID</label>
                    <input type="number" onChange={handleChange} class="form-control" name="id" id="exampleInputId" aria-describedby="emailHelp" required />
                </div> */}
                <div class="mb-3">
                    <label for="exampleInputName" class="form-label">Employee Name</label>
                    <input type="text" onChange={handleChange} class="form-control" name="name" id="name" aria-describedby="emailHelp" required />
                </div>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Email address</label>
                    <input type="email" onChange={handleChange} class="form-control" name="email" id="email" aria-describedby="emailHelp" required />
                    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div class="mb-3">
                    <label for="exampleInputDob" class="form-label">DOB</label>
                    <input type="date" onChange={handleChange} class="form-control" name="dob" id="dob" aria-describedby="emailHelp" required />
                </div>

                <div class="mb-3 form-check">
                    <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                    <label class="form-check-label" for="exampleCheck1">Check me out</label>
                </div>
                <button type="submit" onClick={handleOnSubmit} class="btn btn-primary">Submit</button>
            </form>

        </div>
    );
}
export default Add;