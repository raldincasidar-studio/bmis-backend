import FeedbackModel from "../../model/Feedback.js";

export default async (req, res) => {
    try {
        const data = req.body;

        const feedbackModel = new FeedbackModel({

                feedback: data.feedback,
                rate: data.rate,
                assessment: data.assessment,

                
        });

        await feedbackModel.save();
        res.status(200).json({
            status: "success",
            message: "Feedback upload info successfully",
        });
    } catch (error) {
        res.status(401).json({
            status: "error",
            message: "Check input fields",
            error: error.message,
        });
    }
}