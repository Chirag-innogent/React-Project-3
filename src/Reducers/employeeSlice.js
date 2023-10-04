import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  employees: [],
  loading: false,
  error: null,
};
let updateState={
    newEmployee:[]
}
const employeeSlice = createSlice({
  name: 'employee',
  initialState,
  reducers: {
    fetchEmployeeStart(state) {
      state.loading = true;
      state.error = null;
    },
    fetchEmployeeSuccess(state, action) {
      state.loading = false;
      state.employees = action.payload;
      updateState.newEmployee=[...state.employees];
    },
    fetchEmployeeError(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
     addEmployee  (state, action){
        try {
            const response=  axios.post("http://localhost:8283/company/2/employees",action.payload).then();
        } catch (error) {
            return error;
        }
    },
    
     deleteEmployee(state, action) {
        try{
            const response = axios.delete("http://localhost:8283/company/2/employees/"+action.payload)
            .then();
            const empid = action.payload;
            const newEmployees = state.employees.filter((emp) => emp.id !== empid);
            state.employees=[...newEmployees]
        }catch(error){
            return error;
        }
    },
    updateEmployee(state,action){
        try {
           const response= axios.put("http://localhost:8283/company/2/employees",action.payload)
            .then();
           

        } catch (error) {
            return error;
        }
    }
  },
});

export const {
  addEmployee,
  deleteEmployee,
  fetchEmployeeStart,
  fetchEmployeeSuccess,
  fetchEmployeeError,
  updateEmployee,
} = employeeSlice.actions;

export const fetchEmployeeData = () => async (dispatch) => {
  dispatch(fetchEmployeeStart());
  try {
    const response = await axios.get('http://localhost:8283/company/2/employees');
    dispatch(fetchEmployeeSuccess(response.data));
  } catch (error) {
    dispatch(fetchEmployeeError(error.message));
  }
};

export default employeeSlice.reducer;

