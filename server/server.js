const express=require("express")
const cors=require("cors")
const {MongoClient}=require("mongodb")


const app=express()
app.use(cors())
app.use(express.json())

app.post("/save",(req,res)=>{
	const url="mongodb://0.0.0.0:27017"
	const client=new MongoClient(url)
	const db=client.db("ems18july23")
	const coll=db.collection("employee")
	const data={"_id":req.body.eid,"name":req.body.name,"gender":req.body.gender,"sal":req.body.sal,"phone":req.body.phone,"dept":req.body.dept}
	coll.insertOne(data)
	.then(result=>res.send(result))
	.catch(err=>res.send(err))
})

app.get("/view",(req,res)=>{
	const url="mongodb://0.0.0.0:27017"
	const client=new MongoClient(url)
	const db=client.db("ems18july23")
	const coll=db.collection("employee")
	coll.find({}).toArray()
	.then(result=>res.send(result))
	.catch(err=>res.send(err))
})

app.delete("/remove",(req,res)=>{
	const url="mongodb://0.0.0.0:27017"
	const client=new MongoClient(url)
	const db=client.db("ems18july23")
	const coll=db.collection("employee")
	const data={"_id":req.body.eid}
	coll.deleteOne(data)
	.then(result=>res.send(result))
	.catch(err=>res.send(err))
})

app.put("/update",(req,res)=>{
	const url="mongodb://0.0.0.0:27017"
	const client=new MongoClient(url)
	const db=client.db("ems18july23")
	const coll=db.collection("employee")
	const data={"name":req.body.name,"gender":req.body.gender,"sal":req.body.sal,"phone":req.body.phone,"dept":req.body.dept}
	coll.updateOne({"_id":req.body.eid},{$set:data})
	.then(result=>res.send(result))
	.catch(err=>res.send(err))
})
	
app.listen(9000,()=>{console.log("server ready @ 9000")})
