import ResidencyModel from "../../../model/Documents/CertificateOfResidency.js";
import ResidencyStatus from "../../../model/Documents/DocumentStatus.js";

export default async (req, res) => {
    try {

        //Status
        const dataStatus = req.body;

        console.log(dataStatus);

        const residencyStatus = new ResidencyStatus({
                    status: dataStatus.status,
                    recieved_as: dataStatus.recieved_as,
                    set_an_appointment: dataStatus.set_an_appointment    
        });

        const status = await residencyStatus.save();


        //Add Residency Data
        const dataResidency = req.body;
        
        const residency = new ResidencyModel({
                // user_id: 1,
                firstname: dataResidency.firstname,
                middlename: dataResidency.middlename,
                lastname: dataResidency.lastname,
                address: dataResidency.address,
                years_in_barangay: dataResidency.years_in_barangay,
                purpose: dataResidency.purpose,
                contact: dataResidency.contact,
                valid_ids: dataResidency.valid_ids,
                status: status._id,
                
        });

        await residency.save();
        res.status(200).json({
            status: "success",
            message: "Residency upload info successfully",
        });
    } catch (error) {
        res.status(401).json({
            status: "error",
            message: "Check input fields",
            error: error.message,
        });
    }
}