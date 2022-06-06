import Globals from './Globals';

class Error {
	
    default = (data) => {
		if (data) {
			Globals.showError(data.message);
         	return;
		}
		else {
			Globals.showError('Ha ocurrido un error');
		}
	}
}

export default new Error();