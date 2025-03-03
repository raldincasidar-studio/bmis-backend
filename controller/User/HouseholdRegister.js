import HouseholdModel from "../../model/Household.js";

export default async (req, res) => {
    try {

        const user = req.body;

        const householdModel = new HouseholdModel({
                
                select_role: user.select_role,
                firstname: user.firstname,
                middlename: user.middlename,
                lastname: user.lastname,
                gender: user.gender,
                date_of_birth: user.date_of_birth,
                civil_status: user.civil_status,
                year_lived: user.year_lived,
                occupation: user.occupation,
                contact: user.contact,
                valid_ids: user.valid_ids,

                
        });

        await householdModel.save();
        res.status(200).json({
            status: "success",
            message: "Household upload info successfully",
        });
    } catch (error) {
        res.status(401).json({
            status: "error",
            message: "Check input fields",
            error: error.message,
        });
    }
}