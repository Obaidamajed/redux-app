import {createStore} from 'redux';
import counterReducer from './reducers/counterReducer';


const store = createStore(counterReducer) // createStore لازم يستقبل على الأقل رديوسر واحد 

export default store