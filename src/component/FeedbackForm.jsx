import React from 'react';
import { useForm } from "react-hook-form";
import './FeedbackForm.css';
function Feedbackform()
{
  const {register,handleSubmit,formState:{errors}}=useForm();
  const handleFeedback=(data)=>{alert("Current State is: "+JSON.stringify(data))}
  const handleError=(error)=>{}

  const Validation={
    Name:{
      required:"Enter the Name",
      minLength:{
        value:3,
        message:"Must be greater than 3 characters"
      },
      maxLength:{
        value:15,
        message:"Must be less than 15 characters"
      }
    },
    Comment:{
      required:"Enter the feedback comment"
    }
  };
  
  return(
    <>
    <form onSubmit={handleSubmit(handleFeedback,handleError)} >
      <h2>Submit comment</h2>
      <hr/>
      <label>Rating</label> <br/><br/>
      <select name="Rating"{...register('Rating')} className="inputs">
        <option value="">Select</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select> <br/><br/>
      
      <label>Your Name</label> <br/><br/>
      <input type="text" placeholder="Your Name" name="Name" {...register('Name',Validation.Name)} className="inputs"/> <br/><br/>
      <label style={{color:"red"}}>{errors?.Name && errors.Name.message}</label> <br/><br/>
      
      <label>Comment</label> <br/><br/>
      <textarea placeholder="Write Your Comment Here..." rows="9" cols="50" name="Comment" {...register('Comment',Validation.Comment)} className=""></textarea> <br/><br/>  
      <label style={{color:"red"}}>{errors?.Comment && errors.Comment.message}</label> <br/><br/>
      <button id="button">Submit</button>
    </form>
    </>
  )
}

export default Feedbackform;