import {useState,useEffect,useRef} from "react"
import axios from "axios"

export default function Create()
{
const rId=useRef()
const rName=useRef()
const rSal=useRef()
const rPhone=useRef()
const rDept=useRef()

const[eid,setEid]=useState("")
const[name,setName]=useState("")
const[gender,setGender]=useState("male")
const[sal,setSal]=useState("")
const[phone,setPhone]=useState("")
const[dept,setDept]=useState("")

const hEid=(event)=>{setEid(event.target.value)}
const hName=(event)=>{setName(event.target.value)}
const hGender=(event)=>{setGender(event.target.value)}
const hSal=(event)=>{setSal(event.target.value)}
const hPhone=(event)=>{setPhone(event.target.value)}
const hDept=(event)=>{setDept(event.target.value)}

const save=(event)=>{
	event.preventDefault()
	if(!name.match(/^[a-zA-Z ]+$/))
	{
		alert("Invalid Name")
		setName("")
		rName.current.focus()
	}
	let url="http://localhost:9000/save"
	let data={eid,name,gender,sal,phone,dept}
	axios.post(url,data)
	.then(res=>{
		if(res.data.insertedId)
		{
			alert("Record created")
			setEid("")
			setName("")
			setSal("")
			setPhone("")
			setDept("")
			rId.current.focus()
		}
		else
		{
			alert("Record already exists")
			setEid("")
			setName("")
			setSal("")
			setPhone("")
			setDept("")
			rId.current.focus()
		}
	})
	.catch(err=>console.log(err))
}

useEffect(()=>{rId.current.focus()},[])
return(
<>
<center>
<h1>Create</h1>
</center>
<form onSubmit={save}>
<input type="number" placeholder="enter eid" ref={rId} onChange={hEid} value={eid} min="1" required/>
<br/><br/>
<input type="text" placeholder="enter name" value={name} ref={rName} required onChange={hName}/>
<br/><br/>
<fieldset>
<legend>Choose your gender</legend>
<input type="radio" name="g" value="male" defaultChecked={true} onChange={hGender}/>Male
<input type="radio" name="g" value="female" onChange={hGender}/>Female
</fieldset>
<br/><br/>
<input type="number" placeholder="enter salary (in $)" min="8000" value={sal} ref={rSal} onChange={hSal} required/>
<br/><br/>
<input type="number" placeholder="enter phone no" max_length="10" min="1000000000" ref={rPhone} value={phone} onChange={hPhone} required/>
<br/><br/>
<select name="dept" required onChange={hDept}>
<option value="">--Select your department--</option>
<option value="admin">Admin</option>
<option value="sales">Sales</option>
<option value="hr">Human Resource</option>
<option value="it">IT</option>
<option value="accounts">Accounts</option>
<option value="qa">Quality Assurance</option>
</select>
<br/><br/>
<center>
<input type="submit"/>
</center>
</form>
</>
)
}