import { deleteObject, getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { storage } from "./_firebase/config";



export const uploadFiletoFirebase = async (image: File) => {
    const imgRef = ref(storage, `images/blog/${image["name"]}`);
    const snapshot = await uploadBytesResumable(imgRef, image);
    const downloadUrl = await getDownloadURL(snapshot.ref);
    return downloadUrl;
  };


// delete image from firestore storage by url 
export const deleteImageFromFirebase = async (url: string) => {
  const storageRef = ref(storage, url);
  const response = await deleteObject(storageRef)
  return response;
};

 export const getFileNameFromFirebaseUrl = (url: string) => {
  const storageRef = ref(storage, url);
  
  const fileName = storageRef.name;
  return fileName;
  
 }