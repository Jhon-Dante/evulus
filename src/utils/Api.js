import axios from './axios';
import Error from './Error';

class Api {
    // createResponse = (uri,params) => {
    //     return new Promise((resolve,reject) =>{
    //         axios[params.hasFile ? 'upload' : 'post'](uri,params)
    //         .then(
    //             ({ data }) => {
    //                 // http success
    //                 resolve(data);
    //             },
    //             ({ response }) => {
    //                 const { data } = response;
    //                 Error.default(data);
    //                 // reject(data);
    //             }
    //         )
    //         .catch((err) =>{
    //             // Error.default();
    //             // reject(err)
    //         })
    //         .finally(
    //             // Globals.quitLoading
    //         );
    //     });
    // }

    createResponse = (uri,params) => {
            return new Promise((resolve, reject) => {
                axios['post'](uri,params)
                .then(
                    ({ data }) => {
                        // http success
                        resolve(data);
                    },
                    ({ response }) => {
                        const { data } = response;
                        Error.default(data);
                        // http failed
                        reject(data);
                    }
                );
            });
        }
}


export default new Api;