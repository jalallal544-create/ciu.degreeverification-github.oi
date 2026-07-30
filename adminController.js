import Student from "../models/Student.js";

export async function verifyDegree(req,res){

    try{

        const {studentId}=req.params;

        const student =
            await Student.findByStudentId(studentId);

        if(!student){

            return res.status(404).json({

                success:false,
                message:"Degree not found"

            });

        }

        res.json({

            success:true,
            data:student

        });

    }

    catch(error){

        res.status(500).json({

            success:false,
            message:error.message

        });

    }

}
