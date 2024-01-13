import React, { useState } from 'react';

import Button from '../../UI/Button/Button';
import './CourseInput.css';

const CourseInput = props => {
  const [enteredValue, setEnteredValue] = useState('');
  const [isvalid,setisvalid]=useState(true);

  const goalInputChangeHandler = event => {
    setEnteredValue(event.target.value)
    console.log((event.target.value).length);
   if((event.target.value).trim().length===0) {
    setisvalid(false);
   }
   else {
    setisvalid(true);
   }
    
  };

  const formSubmitHandler = event => {
    event.preventDefault();
    
    props.onAddGoal(enteredValue);
    //trim() counts the whitespace
    if(enteredValue.trim().length===0) {
      setisvalid(false);
    console.warn('not accepted');    
    }
  };
  return (
    <form onSubmit={formSubmitHandler}>
      {/*here we are using backtricks i.e template literals used  for contructing  string and whatever 
      you type here will be treated as regular string .and allows us to pass dynamic values using$ sign  */}
      <div className={`form-control ${!isvalid ? 'invalid':''}`} >
        <label>Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler} />
      </div>
      <div className={`form-control ${isvalid ? 'valid' : 'invalid'}`}>
      <Button type="submit">Add Goal</Button>
      </div>
    </form>
  );
 
 
};

export default CourseInput;
