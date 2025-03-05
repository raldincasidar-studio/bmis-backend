import BarangayClearanceModel from "../../../model/Documents/BarangayClearance.js";
import ClearanceStatus from "../../../model/Documents/DocumentStatus.js";


export default async (req, res) => {
    try {

        //Status
        const dataStatus = req.body;

        console.log(dataStatus);

        const clearanceStatus = new ClearanceStatus({
                    status: dataStatus.status,
                    recieved_as: dataStatus.recieved_as,
                    set_an_appointment: dataStatus.set_an_appointment    
        });

        const status = await clearanceStatus.save();
        
        //Business Permit Data

        const dataClearance = req.body;
        
        const barangayClearance = new BarangayClearanceModel({
                // user_id: 1,
                firstname: dataClearance.firstname,
                middlename: dataClearance.middlename,
                lastname: dataClearance.lastname,
                address: dataClearance.address,
                date_of_birth: dataClearance.date_of_birth,
                purpose: dataClearance.purpose,
                contact: dataClearance.contact,
                valid_ids: dataClearance.valid_ids,
                status: status._id,
                
        });

        await barangayClearance.save();
        res.status(200).json({
            status: "success",
            message: "Barangay clearance upload info successfully",
        });
    } catch (error) {
        res.status(401).json({
            status: "error",
            message: "Check input fields",
            error: error.message,
        });
    }
}