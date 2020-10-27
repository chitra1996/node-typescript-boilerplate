import { ModuleDao } from "./module_name.dao";

export class ModuleHandler {
	appointmentDao: ModuleDao;
	constructor() {
		this.appointmentDao = new ModuleDao();
	}

	public new_handler = async (payload: any): Promise<any[]> => {
		try {
			// business logic here
			this.appointmentDao.create(payload);

			return;
		} catch (error) {
			return Promise.reject(error);
		}
	};
}
