//use("user")
//create 
// db.student.insertOne({
//    "name": "John Doe",
//    "rollNo":12344,
//    "section":"DS",
//    "email":"abc@abc.com"
// })

//db.student.insertMany([
//    {
//        "name":"Danny",
//       "rollNo":12345,
//        "section":"Aiml",
//        "email":"def@def.com"
//    },
//    {
//        "name":"Rohan",
//        "rollNo":12346,
//      "section":"FSD",
//      "email":"cdc@cdc.com"
//    }
//])

///////////////Read
//db.student.find()
//db.student.find({"section"})
//db.student.find({"rollNo":{$lte:12345 }})
//db.student.find({},{name:1, section:1, _id:1})
//db.student.find().limit(2).skip(2)

/////////////////Update
//db.student.updateOne({"rollNo":12344},{$set:{"name":"John Doe","section":"DOS"}})
//db.student.updateOne({"rollNo":12344},{$inc:{$inc:{"rollNo":1}}})

////////////////Delete
//db.student.deleteOne({"rollNo":12345})
//db.student.deleteMany({"section":"Aiml"})


