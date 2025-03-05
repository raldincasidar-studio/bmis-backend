import ChairsBorrow from "../../../model/BorrowAssets/ChairsBorrow.js";

export default async (req, res) => {
    try {
        const data = req.body;
        const chairsBorrow = new ChairsBorrow({
            
                date: data.date,
                time: data.time,
                purpose_of_borrowing: data.purpose_of_borrowing,
                
        });

        await chairsBorrow.save();
        res.status(200).json({
            status: "success",
            message: "Chairs borrow upload info successfully",
        });
    } catch (error) {
        res.status(401).json({
            status: "error",
            message: "Check input fields",
            error: error.message,
        });
    }
}