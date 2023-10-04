import { combineReducers } from 'redux';
import employeeSlice from '../Reducers/employeeSlice';
import optionSlice from '../Reducers/optionSlice';

const rootReducer = combineReducers({
    employeeState: employeeSlice,
    optionState: optionSlice,
})
export default rootReducer;

