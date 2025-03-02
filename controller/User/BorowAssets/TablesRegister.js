import TablesBorrow from "../../../model/BorrowAssets/TablesBorrow.js";

export default async (req, res) => {
    try {
        // const user = new TablesBorrow(req.body);
        const tablesBorrow = new TablesBorrow({
                // user_id: 1,
                date: '2000-01-01',
                time: '10:40 PM',
                purpose_of_borrowing: 'para naay mabutnga ug gamit',
                
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