import { DECREMENT, INCREMENT } from "../actions/types"

const counterReducer = (state = {count: 0}, action) => { // الرديوسر بوخذ اثنين باراميتر, ستايت وآكشن
// الرديوسر عبارة عن فنكشن بغير الستايت بناءاً على الآكشن
  switch(action.type) {
    case INCREMENT: 
      return {...state, count: state.count + 1}

    case DECREMENT:
      return {...state, count: state.count - 1}

    default:
      return state
  }

}

export default counterReducer