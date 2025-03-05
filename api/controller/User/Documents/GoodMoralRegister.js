import MoralModel from "../../../model/Documents/CertificateOfGoodMoral.js";
import MoralStatus from "../../../model/Documents/DocumentStatus.js";

export default async (req, res) => {
    try {
        //Status
        const dataStatus = req.body;

        console.log(dataStatus);

        const moralStatus = new MoralStatus({
                    status: dataStatus.status,
                    recieved_as: dataStatus.recieved_as,
                    set_an_appointment: dataStatus.set_an_appointment    
        });

        const status = await moralStatus.save();

        
        //Add Good Moral Data

        const dataMoral = req.body;

        const moral = new MoralModel({
                // user_id: 1,
                firstname: dataMoral.firstname,
                middlename: dataMoral.middlename,
                lastname: dataMoral.lastname,
                address: dataMoral.address,
                occupation: dataMoral.occupation,
                purpose: dataMoral.purpose,
                contact: dataMoral.contact,
                valid_ids: dataMoral.valid_ids,
                status: status._id,
                
        });

        await moral.save();
        res.status(200).json({
            status: "success",
            message: "Cedula upload info successfully",
        });
    } catch (error) {
        res.status(401).json({
            status: "error",
            message: "Check input fields",
            error: error.message,
        });
    }
}