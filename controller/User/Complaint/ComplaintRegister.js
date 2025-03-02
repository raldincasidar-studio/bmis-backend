import ComplaintModel from "../../../model/Complaint/Complaint.js";

export default async (req, res) => {
    try {
        // const user = new ComplaintModel(req.body);
        const complaint = new ComplaintModel({
                // user_id: 1,
                address: 'Dapitan Owaon Purok 5 Kalye 3',
                date: '2000-01-01',
                incident_details: 'nalubaan kos lubot',
                photo_evidence: ['img1', 'img2', 'img3'],
                
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