import http from './axios';

const getAllAdmin = async () => {
    return new Promise(async (resolve, reject) => {
        let result = await http.get('users?page=2');
        resolve(result.data);
    })
}

const getAllList =async()=>{
    return new Promise(async (resolve, reject) => {
        let result = await http.get('unknown');
        resolve(result.data);
    })
}





export { getAllAdmin,getAllList}