const imgSchema = require('../model/ImagesSchema')
const postImage = async (req , res) => {
    try {
        const {file} = req;
        const result = new imgSchema({
            name: file.filename,
            path: file.path,
            type: file.mimetype,
        });

        await result.save();
        return res.status(200).json(result)
    } catch (error) {
        return res.status(404).json(error)
    }
}

const getImage = async (req , res) => {
    let data = await imgSchema.find()
    return res.status(200).json(data)
}

module.exports = {
    postImage,
    getImage
}