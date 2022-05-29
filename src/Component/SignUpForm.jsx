import React,{useEffect, useState} from 'react'

function SignUpForm() {
    const [formData, setFormData] = useState({
        fName:'',lName:'',email:'',password:''
    })
    const submitForm = (e)=>{
        e.preventDefault()

        console.log(formData)
    }
    const handleData = (e)=>{
        e.stopPropagation()  // stop the bubble phase
        console.log('form change')
        const obj = {[e.target.name]:e.target.value}
        setFormData({...formData,...obj})
    }
  return (
    <div >
        <form onSubmit={submitForm} onChange={handleData}>
            <label>First name</label>
            <input type='text' name='fName' value={formData.fName} onChange={(e)=>{console.log('hello')}}/>
            <br/>
            <label>Last name</label>
            <input type='text' name='lName' value={formData.lName} />
            <br/>
            <label>Email</label>
            <input type='text' name="email" value={formData.email} />
            <br/>
            <label>Password</label>
            <input type='password' name="password" value={formData.password} />
            <br/>
            <button type='submit'>submit</button>
        </form>
    </div>
  )
}

export default SignUpForm

// event delegation :- if we are using same event on all the child elements then we can move this event to the parent element

// event bubbling :-  when we have same event with different function on both parent and child . bubble will trigger both the event
// e.stopPropagation"- the element that contains this function will prevent the triggering of the parent elements event