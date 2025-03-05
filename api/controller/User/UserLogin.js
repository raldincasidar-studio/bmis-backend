import UserModel from '../../model/User.js';
// import bcrypt from 'bcrypt';

export default async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ error: 'Email and password are required' });
        }

        const user = await UserModel.findOne({ email });

        if (!user) {
            return res.status(401).json({ error: 'Invalid email or password' });
        }

        if (user.password !== password) {
            return res.status(401).json({ error: 'Invalid password' });
        }

        res.status(200).json({
            status: "success",
            message: "Login successfully",
            userData: {
                firstname: user.firstname,
                middlename: user.firstname,
                lastname: user.firstname,
                gender: user.gender,
                date_of_birth: user.date_of_birth,
                civil_status: user.civil_status,
                subdivision: user.subdivision,
                block: user.block,
                lot: user.lot,
                year_lived: user.year_lived,
                occupation: user.occupation,
                voters: user.voters,
                contact: user.contact,
                email: user.email,
                profile: user.profile,
                proof_of_residency: user.valid_ids,
                role: user.role,
            }
        });

    } catch (error) {
        console.error("Login Error:", error);
        res.status(500).json({ status: "error", message: "Internal server error" });
    }
};




// export default async (req, res) => {
//     try {
//         const { email, password } = req.body;

//         if (!email || !password) {
//             return res.status(400).json({ error: 'Email and password are required' });
//         }

//         const user = await UserModel.findOne({ email });

//         if (!user) {
//             return res.status(401).json({ error: 'Invalid email or password' });
//         }

//         const isMatch = await bcrypt.compare(password, user.password);
//         if (!isMatch) {
//             return res.status(401).json({ error: 'Invalid email or password' });
//         }

//         res.status(200).json({
//             status: "success",
//             message: "Login successfully",
//             userData: {
//                 fullname: user.fullname,
//                 date_of_birth: user.date_of_birth,
//                 place_of_birth: user.place_of_birth,
//                 email: user.email,
//                 gender: user.gender,
//                 civil_status: user.civil_status,
//                 household_info: user.household_info,
//                 profile: user.profile,
//                 valid_ids: user.valid_ids
//             }
//         });

//     } catch (error) {
//         console.error("Login Error:", error);
//         res.status(500).json({ status: "error", message: "Internal server error" });
//     }
// };
