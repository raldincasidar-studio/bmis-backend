import ComplaintStatus from "../../../model/Complaint/ComplaintStatus.js";

export default async (req, res) => {
    try {
        // const user = new ComplaintStatus(req.body);
        const complaintStatus = new ComplaintStatus({
                set_an_appointment: '10:30 am, Wednesday, February 25, 2025 Permit'    
        });

        await complaintStatus.save();
        res.status(200).json({
            status: "success",
            message: "Complaint upload status successfully",
        });
    } catch (error) {
        res.status(401).json({
            status: "error",
            message: "Check input fields",
            error: error.message,
        });
    }
}