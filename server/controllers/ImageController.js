const path = require("path");
const fs = require("fs");
const {User} = require("../config/adminDB");


class ImageController {

    static uploadImage = async (req, res) => {
        const userId = req.body.userId;
        console.log("req body", req.body);

        if (!userId) {
            return res.status(400).send('User ID is required');
        }

        if (!req.file) {
            return res.status(400).send('No file uploaded.');
        }

        try {

            const userDir = path.join(__dirname, '..', 'uploads', userId);

            if (!fs.existsSync(userDir)) {
                fs.mkdirSync(userDir, { recursive: true });
            }else{
                const file = fs.readdirSync(userDir);
                fs.unlinkSync(path.join(userDir, file[0]));
            }

            const newFilePath = path.join(userDir, req.file.filename);
            fs.renameSync(req.file.path, newFilePath);


            const filePath = `http://localhost:${process.env.PORT || 8088}/uploads/${userId}/${req.file.filename}`;
            const user = await User.findByIdAndUpdate(userId, { avatar: filePath }, { new: true });


            if (!user) {
                return res.status(404).send('User not found');
            }

            res.status(200).send({ message: 'File uploaded successfully', filePath });
        } catch (error) {
            console.error(error);
            res.status(500).send('Error saving file to database');
        }
    };

}

module.exports = ImageController;