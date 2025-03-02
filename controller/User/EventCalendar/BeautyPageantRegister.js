import BeautyPageant from "../../../model/EventCalendar/BeautyPageant.js";

export default async (req, res) => {
    try {
        // const user = new BeautyPageant(req.body);
        const beautyPageant = new BeautyPageant({
                // user_id: 1,
                firstname: 'Earl JARV',
                lastname: 'Asmoserea',
                date_of_birth: '2000-01-01',
                contact: '09357708642',
                valid_documents: ['img1', 'img2', 'img3'],
                
        });

        await beautyPageant.save();
        res.status(200).json({
            status: "success",
            message: "Beauty pageant upload info successfully",
        });
    } catch (error) {
        res.status(401).json({
            status: "error",
            message: "Check input fields",
            error: error.message,
        });
    }
}