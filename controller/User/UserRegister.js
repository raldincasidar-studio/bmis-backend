import UserModel from "../../model/User.js";;

export default async (req, res) => {
    try {
        // const user = new UserModel(req.body);
		const user = new UserModel({
                firstname: 'Raldin',
                middlename: 'Disomimba',
                lastname: 'Casidar',
                gender: 'male',
                date_of_birth: '2004/05/13',
                civil_status: 'married',
                subdivision: 'Maddison Village',
                block: 'block 2',
                lot: 'lot 1',
                year_lived: '2005',
                occupation: 'software engineer',
                voters: 'registered/active',
                contact: '09357708642',
                email: 'erljrv.disomimba13@gmail.com',
                password: 'raldin123',
                profile: 'img_01222',
                proof_of_residency: ['img_01222', 'img_01222', 'img_01222'],
                role: 'admin',
        });

		await user.save();
		res.status(200).json({
			status: "success",
			message: "Registered successfully",
		});
	} catch (error) {
		res.status(401).json({
			status: "error",
			message: "Check input fields",
			error: error.message,
		});
	}
}