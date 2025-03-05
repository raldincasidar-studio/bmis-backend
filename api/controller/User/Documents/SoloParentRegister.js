import SoloParentModel from "../../../model/Documents/CertificateOfSoloParent.js";
import SoloParentStatus from "../../../model/Documents/DocumentStatus.js";

export default async (req, res) => {
    try {
        //Status
        const dataStatus = req.body;

        console.log(dataStatus);

        const soloParentStatus = new SoloParentStatus({
                    status: dataStatus.status,
                    recieved_as: dataStatus.recieved_as,
                    set_an_appointment: dataStatus.set_an_appointment    
        });

        const status = await soloParentStatus.save();

        
        //Add Live-in Partnership Data

        const dataSoloParent = req.body;

        const soloParent = new SoloParentModel({
                // user_id: 1,
                firstname: dataSoloParent.firstname,
                middlename: dataSoloParent.middlename,
                lastname: dataSoloParent.lastname,
                address: dataSoloParent.address,
                number_of_children: dataSoloParent.number_of_children,
                purpose: dataSoloParent.purpose,
                contact: dataSoloParent.contact,
                valid_ids: dataSoloParent.valid_ids,
                status: status._id,
                
        });

        await soloParent.save();
        res.status(200).json({
            status: "success",
            message: "Solo parent upload info successfully",
        });
    } catch (error) {
        res.status(401).json({
            status: "error",
            message: "Check input fields",
            error: error.message,
        });
    }
}