import User from "../../model/User.js";

export default async (req, res) => {
    try {

        const users = await User.find();

        res.status(200).json({
            status: "success",
            message: "All users retrieved successfully",
            data: users,
        });
    } catch (error) {
        res.status(401).json({
            status: "error",
            message: "Failed to retrieve all users",
            error: error.message,
        });
    }
}
