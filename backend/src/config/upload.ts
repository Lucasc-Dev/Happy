import multer from 'multer';
import path from 'path';

export default {
    uploadsFolder: path.join(__dirname, '..', '..', 'tmp', 'uploads'),

    storage: multer.diskStorage({
        destination: path.join(__dirname, '..', '..', 'tmp'),
        filename: (request, file, cb) => {
            const filename = `${Date.now()}-${file.originalname.split(' ').join('-')}`;

            cb(null, filename);
        }
    })
}