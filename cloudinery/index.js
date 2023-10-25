const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');

cloudinary.config({
    cloud_name: 'dmq0ishvs',
    api_key: '628233315491658',
    api_secret: 'lyAtwEFAMznCFxhtKFx41HGB8o0'
});

// initiallize by the docs
const storage = new CloudinaryStorage({
    cloudinary,
    params: {
        folder: 'YelpCamp', // this is the folder in cloudinery where we store our things
        allowedFormats: ['jpeg', 'png', 'jpg']
    }
});

module.exports = {
    cloudinary,
    storage
}