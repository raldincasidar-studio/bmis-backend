import GeneralAssembly from "../../../model/EventCalendar/GeneralAssembly.js";

export default async (req, res) => {
    try {
        // const user = new GeneralAssembly(req.body);
        const generalAssembly = new GeneralAssembly({
                // user_id: 1,
                firstname: 'Earl JARV',
                lastname: 'Asmoserea',
                date_of_birth: '2000-01-01',
                contact: '09357708642',
                valid_documents: ['img1', 'img2', 'img3'],
                
        });

        await generalAssembly.save();
        res.status(200).json({
            status: "success",
            message: "General assembly upload info successfully",
        });
    } catch (error) {
        res.status(401).json({
            status: "error",
            message: "Check input fields",
            error: error.message,
        });
    }
}