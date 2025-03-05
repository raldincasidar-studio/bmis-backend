import PartnershipModel from "../../../model/Documents/CertificateOfPartnership.js";
import PartnershipStatus from "../../../model/Documents/DocumentStatus.js";

export default async (req, res) => {
    try {
        //Status
        const dataStatus = req.body;

        console.log(dataStatus);

        const partnershipStatus = new PartnershipStatus({
                    status: dataStatus.status,
                    recieved_as: dataStatus.recieved_as,
                    set_an_appointment: dataStatus.set_an_appointment    
        });

        const status = await partnershipStatus.save();

        
        //Add Live-in Partnership Data

        const dataPartnership = req.body;

        const liveinPartnership = new PartnershipModel({
                // user_id: 1,
                male_firstname: dataPartnership.male_firstname,
                male_middlename: dataPartnership.male_middlename,
                male_lastname: dataPartnership.male_lastname,
                female_firstname: dataPartnership.female_firstname,
                female_middlename: dataPartnership.female_middlename,
                female_lastname: dataPartnership.female_lastname,
                couple_address: dataPartnership.couple_address,
                years_of_cohibitation: dataPartnership.years_of_cohibitation,
                contact: dataPartnership.contact,
                valid_ids: dataPartnership.valid_ids,
                status: status._id,
                
        });

        await liveinPartnership.save();
        res.status(200).json({
            status: "success",
            message: "Live in partnership upload info successfully",
        });
    } catch (error) {
        res.status(401).json({
            status: "error",
            message: "Check input fields",
            error: error.message,
        });
    }
}