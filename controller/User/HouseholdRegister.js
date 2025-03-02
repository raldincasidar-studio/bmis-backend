import HouseholdModel from "../../model/Household.js";

export default async (req, res) => {
    try {
        // const user = new HouseholdModel(req.body);
        const householdModel = new HouseholdModel({
                // user_id: 1,
                select_role: "Head of Family",
                firstname: "Raldin",
                middlename: "Disomimba",
                lastname: "Casidar",
                gender: "male",
                date_of_birth: "2005/01/25",
                civil_status: "single",
                year_lived: "5 years",
                occupation: "software engineer",
                contact: "09627389508",
                valid_ids: ['img_01222', 'img_01222', 'img_01222'],

                
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