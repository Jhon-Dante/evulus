let data = {};
let mode = 1;
let Base = mode === 1 ? '127.0.0.1' : '';

switch(mode) {
    
    case 1: // dev local
        data = {
            BaseURI: 'http://' + Base + ':8000' + '/api/',
            BasePublic: 'http://' + Base + ':8000' + '/',
            Socket: 'http://' + Base + ':11033'
        }
        break;
    default:
        break;
}

export default data;