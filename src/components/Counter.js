import React, {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { DECREMENT, INCREMENT } from '../redux/actions/types';

export default function Counter() {
  const count = useSelector(state => state.count) // = const {count} = useSelector(state => state)
   // countState شايل قيمة الكاي اللي اسمو كاونت, بجيب الستايت الخاص بالرديوسر
  // useSelector بتجيبلي الستايت الموجود في الريدوكس
  const dispatch = useDispatch();

  const handleIncrement = () => {
    // setCount(count + 1); // هات الكاونت القديم وزيد عليه واحد

    dispatch( {
      type: INCREMENT // هذا ديسباتش الآكشن تبعو اسمو إنكريمينت
    } );
  }

  const handleDecrement = () => {
    // setCount(count - 1); // هات الكاونت القديم وإطرح منو واحد
    dispatch ( {
      type: DECREMENT // هذا ديسباتش الآكشن تبعو اسمو ديكريمنت
    } );
  }
  
  return (
    <div>
      <p>{count}</p>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
    </div>
  )
}

