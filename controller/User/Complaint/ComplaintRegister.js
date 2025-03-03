import ComplaintModel from "../../../model/Complaint/Complaint.js";

export default async (req, res) => {
    try {
        const data = req.body;
        const complaint = new ComplaintModel({
            
                address: data.address,
                date: data.date,
                incident_details: data.incident_details,
                photo_evidence: data.photo_evidence,
                
        });

        await complaint.save();
        res.status(200).json({
            status: "success",
            message: "Complaint upload info successfully",
        });
    } catch (error) {
        res.status(401).json({
            status: "error",
            message: "Check input fields",
            error: error.message,
        });
    }
}