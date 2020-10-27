import { initializeApp, credential, firestore } from "firebase-admin";
const serviceAccount = require("../serviceAccountKey.json");

//initialize admin SDK using serciceAcountKey
initializeApp({
	credential: credential.cert(serviceAccount),
});

const db = firestore();

// Collection to store all the events in firestore
export const name_of_your_collection = db.collection("name_of_your_collection");
