const Employee = require('../models/employeesModel');

//Getting All Employess Request using Get
exports.getAllEmployees = async (req, res) =>{
  try{
    //Getting Employees from db
    const getAllEmp = await Employee.find();

    res
    .status(200)
    .json({
            status: 'success',
            data: getAllEmp
        
    });

  //Catching any errors 
  } catch (err){
        res
            .status (400).json({
                status: false,
                message: err.message
            });

  }
  

};
//Creating New Employess Request using Post
exports.createNewEmployee = async(req,res) =>{

  try{
    const data = req.body;
    const newEmployee = await Employee.create(data);

    res
        .status(201)
        .json({
            message: `Employee created succesfully. Employee Id ${newEmployee._id}`
        });

  } catch (err){
        res
            .status (400).json({
                status: false,
                message: err.message
            });

  }
   
    };
    //Getting an Employee using Get
    exports.getEmployee = async (req,res) =>{
      try{
        const id = req.params.eid;
        const emp = await Employee.findById(id);

        if(emp === null){
          throw Error("User not found");
        }
    
        res
            .status(200)
            .json({
                status: "success",
                data: emp
    
            });
      } catch (err){
        res
            .status (404).json({
                status: false,
                message: err.message
            });
      }
      
    };
     //Updating an Employee using put
    exports.updateEmployee = async(req,res) =>{
     try{

        await Employee.findByIdAndUpdate(req.params.eid, req.body,{
            new: true,
            runValidators: true
            
        });

        res
            .status(200)
            .json({
                message: "Employee details updated successfully"
    
            });
     } catch(err){
        res
            .status (400).json({
                status: false,
                message: err.message
            });
     }
       
    };
     //Deleting an Employee using delete
    exports.deleteEmployee = async(req,res) =>{
      try{

        const id = req.query.eid;
         await Employee.findByIdAndDelete(id);

        res
            .status(200)
            .json({
              
                    message: `Employee deleted successfully ${req.query.eid} `
                
            });
      } catch(err){
        res
        .status (400).json({
            status: false,
            message: err.message
        });
      }
        
    };
