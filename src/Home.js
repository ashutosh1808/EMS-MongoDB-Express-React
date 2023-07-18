import {useEffect,useState} from "react"
import axios from "axios"

export default function Home()
{
const[info,setInfo]=useState([])

useEffect(()=>{
	const url="http://localhost:9000/view"
	axios.get(url)
	.then(res=>{
		setInfo(res.data)
		//console.log(info)
	})
	.catch(err=>console.log(err))
},[])

const delEmployee=(eid)=>{
	const url="http://localhost:9000/remove"
	axios.delete(url,{data:{eid}})
	.then(()=>{
		alert("Employee deleted")
		window.location.reload()
	})
	.catch(err=>console.log(err))
}
return(
<>
<center>
<h1>Home</h1>
<table border="3">
<tr>
<th>Emp ID</th>
<th>Emp Name</th>
<th>Gender</th>
<th>Salary</th>
<th>Dept</th>
<th>Delete</th>
</tr>
{
	info.map((e)=>(
		<tr style={{'text-align':'center'}}>
			<td>{e._id}</td>
			<td>{e.name}</td>
			<td>{e.gender}</td>
			<td>{e.sal}</td>
			<td>{e.dept}</td>
			<td><button className="del" onClick={()=>{if(window.confirm("are you sure?")) delEmployee(e._id)}}>Delete</button></td>
		</tr>
	))
}
</table>
</center>
</>
)
}