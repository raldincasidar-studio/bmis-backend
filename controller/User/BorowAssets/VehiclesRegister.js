import VehiclesBorrow from "../../../model/BorrowAssets/VehiclesBorrow.js";

export default async (req, res) => {
    try {
        const data = req.body;
        const vehiclesBorrow = new VehiclesBorrow({
        
                date: data.date,
                time: data.time,
                purpose_of_borrowing: data.purpose_of_borrowing,
                
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