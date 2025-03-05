import UserModel from "../../model/User.js";

export default async (req, res) => {
    try {

        const userData = req.body;

		const user = new UserModel({
                firstname: userData.firstname,
                middlename: userData.middlename,
                lastname: userData.lastname,
                gender: userData.gender,
                date_of_birth: userData.date_of_birth,
                civil_status: userData.civil_status,
                subdivision: userData.subdivision,
                block: userData.block,
                lot: userData.lot,
                year_lived: userData.year_lived,
                occupation: userData.occupation,
                voters: userData.voters,
                contact: userData.contact,
                email: userData.email,
                password: userData.password,
                profile: userData.profile,
                proof_of_residency: userData.proof_of_residency,
                role: userData.role,
        });

        const savedUser = await user.save();
        
        // get data from the newly created user
        const newUserData = await UserModel.findById(savedUser._id);

		res.status(200).json({
			status: "success",
			message: "Registered successfully",
            newUserData: newUserData
		});
	} catch (error) {
		res.status(401).json({
			status: "error",
			message: "Check input fields",
			error: error.message,
		});
	}
}