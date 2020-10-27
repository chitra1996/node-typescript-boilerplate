import { name_of_your_collection } from "../../../db/firestore";
import { v4 as uuid } from "uuid";

export class ModuleDao {
	// Save data in DB
	public create = async (payload: any): Promise<boolean> => {
		try {
			const documentRef = name_of_your_collection.doc(uuid());
			await documentRef.set(payload);
			return true;
		} catch (error) {
			return Promise.reject(error);
		}
	};

	// Fetch data from DB
	public fetchData = async (): Promise<any[]> => {
		try {
			let result: any[];
			const snapshot = await name_of_your_collection.get();

			snapshot.forEach((document: any) => {
				result.push({
					_id: document.id,
					data: document.data(),
				});
			});
			return result;
		} catch (error) {
			return Promise.reject(error);
		}
	};
}
