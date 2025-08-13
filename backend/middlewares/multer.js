import multer from "multer";
const storage = multer.memoryStorage();
export const singleUpload = multer({storage}).single("file"); 
// this middleware is used to handle single file uploads, typically for user profile images or documents
