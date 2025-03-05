import BusinessPermitModel from "../../../model/Documents/BusinessPermit.js";
import BusinessPermitStatus from "../../../model/Documents/DocumentStatus.js";

export default async (req, res) => {
    try {

        //Status
        const dataStatus = req.body;

        console.log(dataStatus);

        const businessStatus = new BusinessPermitStatus({
            status: 'pending',
            recieved_as: 'pdf',
            set_an_appointment: ''    
        });

        const status = await businessStatus.save();

        
        //Business Permit Data

        const dataPermit = req.body;

        const businessPermit = new BusinessPermitModel({
                // user_id: 1,
                firstname: dataPermit.firstname,
                middlename: dataPermit.middlename,
                lastname: dataPermit.lastname,
                business_name: dataPermit.business_name,
                business_address: dataPermit.business_address,
                nature_of_business: dataPermit.nature_of_business,
                contact: dataPermit.contact,
                valid_ids: [],
                status: status._id,

        });

        await businessPermit.save();
        res.status(200).json({
            status: "success",
            message: "Business permit upload info successfully",
        });
    } catch (error) {
        res.status(401).json({
            status: "error",
            message: "Check input fields",
            error: error.message,
        });
    }
}