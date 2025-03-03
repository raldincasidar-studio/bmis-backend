import TablesBorrow from "../../../model/BorrowAssets/TablesBorrow.js";

export default async (req, res) => {
    try {
        const data = req.body;
        const tablesBorrow = new TablesBorrow({
                // user_id: 1,
                date: data.date,
                time: data.time,
                purpose_of_borrowing: data.purpose_of_borrowing,
                
        });

        await tablesBorrow.save();
        res.status(200).json({
            status: "success",
            message: "Tables borrow upload info successfully",
        });
    } catch (error) {
        res.status(401).json({
            status: "error",
            message: "Check input fields",
            error: error.message,
        });
    }
}