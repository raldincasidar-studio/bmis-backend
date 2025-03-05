import IndigencyModel from "../../../model/Documents/CertificateOfIndigency.js";
import IndigencyStatus from "../../../model/Documents/DocumentStatus.js";

export default async (req, res) => {
    try {
        //Status
        const dataStatus = req.body;

        console.log(dataStatus);

        const indigencyStatus = new IndigencyStatus({
                    status: dataStatus.status,
                    recieved_as: dataStatus.recieved_as,
                    set_an_appointment: dataStatus.set_an_appointment    
        });

        const status = await indigencyStatus.save();

        
        //Add Indigency Data

        const dataIndigency = req.body;

        const indigency = new IndigencyModel({
                // user_id: 1,
                firstname: dataIndigency.firstname,
                middlename: dataIndigency.middlename,
                lastname: dataIndigency.lastname,
                address: dataIndigency.address,
                occupation: dataIndigency.occupation,
                purpose: dataIndigency.purpose,
                contact: dataIndigency.contact,
                valid_ids: dataIndigency.valid_ids,
                status: status._id
                
        });

        await indigency.save();
        res.status(200).json({
            status: "success",
            message: "Indigency upload info successfully",
        });
    } catch (error) {
        res.status(401).json({
            status: "error",
            message: "Check input fields",
            error: error.message,
        });
    }
}