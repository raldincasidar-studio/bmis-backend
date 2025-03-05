import ComplaintStatus from "../../../model/Complaint/ComplaintStatus.js";

export default async (req, res) => {
    try {
        const data = req.body;
        const complaintStatus = new ComplaintStatus({
                set_an_appointment: data.set_an_appointment, 
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