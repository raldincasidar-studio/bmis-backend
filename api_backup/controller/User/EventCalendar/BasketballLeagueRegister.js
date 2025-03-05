import BasketballLeague from "../../../model/EventCalendar/BasketballLeague.js";

export default async (req, res) => {
    try {
        // const user = new BasketballLeague(req.body);
        const basketballLeague = new BasketballLeague({
                // user_id: 1,
                firstname: 'Peter Casidar',
                lastname: 'Peter Casidar',
                date_of_birth: '2000-01-01',
                contact: '09357708642',
                valid_documents: ['img1', 'img2', 'img3'],
                
        });

        await basketballLeague.save();
        res.status(200).json({
            status: "success",
            message: "Basketball League upload info successfully",
        });
    } catch (error) {
        res.status(401).json({
            status: "error",
            message: "Check input fields",
            error: error.message,
        });
    }
}