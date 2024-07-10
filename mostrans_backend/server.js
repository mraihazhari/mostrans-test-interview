const express = require("express");
const cors = require("cors");
const Characters = require("./config");
const app = express();
app.use(express.json());
app.use(cors());

//Add or update the location of the Characters collection
app.post("/create", async (req, res) => {
  try{
    const q = await Characters.where("id", "==", req.body.data.id).get();
    if(q.empty){
      await Characters.add(req.body);
      res.send({ msg: "Characters Successfully Added" });
      console.log("Characters Successfully Added");
    }
    else{
      id = q.docs[0].id;
      console.log(id);
      await Characters.doc(id).update(req.body);
      res.send({ msg: "Characters Successfully Updated" });
    }
  }catch(err){
    console.log(err);
    res.send({ msg: err });
  }
});

app.get("/getCharacterLocation", async (req, res) => {
  try{
    const q = await Characters.get();
    let data = {};
    q.forEach(doc => {
      const location = doc.data().location;
      if(!data[location]){
        data[location] = [];
      }
      data[location].push(doc.data());
    });
    res.send({data});
  }catch(err){
    console.log(err);
    res.send({ msg: err });
  }
}
);

app.listen(4000, () => console.log("Backend run in PORT 4000"));
