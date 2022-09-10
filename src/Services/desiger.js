import http from './axios';


const getAllDesinger= async () => {
    return new Promise(async (resolve, reject) => {
        let result = await http.get('users?page=2');
        resolve(result.data);
    })
}


export default getAllDesinger
