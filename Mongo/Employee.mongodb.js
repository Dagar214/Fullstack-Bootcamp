use("employee")

//////////////1.Create a collection named" employee and insert records in it
//////////////key: name, empId, department, email, Salary, bonus


//db.employee.insertMany([
//  { name: "Amit", empId: 101, department: "IT", email: "amit@company.com", Salary: 50000, bonus: 5000 },
//  { name: "Riya", empId: 102, department: "HR", email: "riya@company.com", Salary: 45000, bonus: 3000 },
//  { name: "Karan", empId: 103, department: "Finance", email: "karan@company.com", Salary: 60000, bonus: 7000 }
//])


//////////////2.Read the records from the "employee" collection
//db.employee.find()

//////////////3.Update the salary of the employee with specific empId
//db.employee.updateOne(
//  { empId: 101 },
//  { $set: { Salary: 55000 } }
//)

//////////////4.Delete the employee record with specific empId
//db.employee.deleteOne({ empId: 103 })



//////////aggregate
db.employee.aggregate([
  {
    $sort: { Salary: -1 } // Sort by Salary in descending order
    },
    {
        $project: {"name":1, "Salary":1, "department":1, "_id":
            0, totalSalary: {$add: ["$Salary", "$bonus"]}} // Project only name, Salary, and department fields
    }
])

//.employee.aggregate([
//  {
//    $group: {
//      _id: "$department", // Group by department
//      "totalSalary":{$sum: {$add: ["$Salary", "$bonus"]}}, // Calculate total salary for each department
//    }
//}])

db.employee.aggregate([
  {
    $group: {
      _id: "null", // Group all documents together
      totalSalary: { $sum: { $add: ["$Salary", "$bonus"] } }
    }
  }
])


//db.employee.find({empId:105})

db.employee