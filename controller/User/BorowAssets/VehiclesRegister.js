import VehiclesBorrow from "../../../model/BorrowAssets/VehiclesBorrow.js";

export default async (req, res) => {
    try {
        // const user = new VehiclesBorrow(req.body);
        const vehiclesBorrow = new VehiclesBorrow({
                // user_id: 1,
                date: '2000-01-01',
                time: '10:40 PM',
                purpose_of_borrowing: 'para naay masakyan',
                
        });

        await vehiclesBorrow.save();
        res.status(200).json({
            status: "success",
            message: "Vehicles borrow upload info successfully",
        });
    } catch (error) {
        res.status(401).json({
            status: "error",
            message: "Check input fields",
            error: error.message,
        });
    }
}