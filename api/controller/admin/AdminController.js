import UserModel from '../../model/User.js';

export default async (req, res) => {


    // This controller ads a new user


    const user1 = new UserModel({
        name: 'Raldin Casidar',
        email: '7YH2n@example.com',
        password: 'password',
        role: 'admin',
    });

    const result = await user1.save();

    console.log(result);

    res.json({ message: 'Welcome to the ADMIN API' });
}