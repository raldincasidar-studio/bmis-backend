import ChairsBorrow from "../../../model/BorrowAssets/ChairsBorrow.js";

export default async (req, res) => {
    try {
        // const user = new ChairsBorrow(req.body);
        const chairsBorrow = new ChairsBorrow({
                // user_id: 1,
                date: '2000-01-01',
                time: '10:30 PM',
                purpose_of_borrowing: 'para maka lingkod',
                
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