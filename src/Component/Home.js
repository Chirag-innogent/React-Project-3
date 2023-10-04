import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchEmployeeData, deleteEmployee } from '../Reducers/employeeSlice';
import { homePage, updatePage } from '../Reducers/optionSlice';
import axios from 'axios';
const Home = () => {

 
    const dispatch = useDispatch();
    const { employees, loading, error } = useSelector((state) => state.employeeState);

    useEffect(() => {
        dispatch(fetchEmployeeData());
    }, [dispatch]);

    function deleteEmp(id) {
        dispatch(deleteEmployee(id));
    }

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }
    function deleteEmp(id){
        dispatch(deleteEmployee(id));
    }
    function updateEmp(id){
        
        dispatch(updatePage(id));
    }
    console.log(employees);


    return (
        <>
            <h1>This is Home Page and we able to fetch date</h1>
            <table id="homeDisplay" class="table table-hover table-light">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>DOB</th>
                        <th>Delete</th>
                        <th>Update</th>
                    </tr>
                </thead>
                <tbody>
                    {employees.map((emp) => (
                        <tr key={emp.id}>
                            <td>{emp.id}</td>
                            <td>{emp.name}</td>
                            <td>{emp.email}</td>
                            <td>{emp.dob}</td>
                            <td><buttton class="btn btn-danger" onClick={() => deleteEmp(emp.id)} >Delete</buttton></td>
                            <td><buttton class="btn btn-success" onClick={() => updateEmp(emp.id)} >Update</buttton></td>
                        </tr>
                    ))}
                </tbody>
            </table>

        </>
    );
}
export default Home;