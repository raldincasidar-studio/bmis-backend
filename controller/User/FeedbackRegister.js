import FeedbackModel from "../../model/Feedback.js";

export default async (req, res) => {
    try {
        // const user = new FeedbackModel(req.body);
        const feedbackModel = new FeedbackModel({
                // user_id: 1,
                feedback: "Your app is so great! Amazing app!",
                rate: 5,
                assessment: "Yes",

                
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