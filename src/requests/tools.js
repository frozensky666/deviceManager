import {BASEURL} from "../const"
import Axios from 'axios'

const instanceNormal = Axios.create({
    baseURL: BASEURL,
});

const _get = (url, config) => {
    return new Promise((resolve, reject) => {
        instanceNormal
            .get(url, config)
            .then(data => {
                resolve(data.data);
            })
            .catch(err => {
                reject(err);
            });
    });
};
const _post = (url, config) => {
    return new Promise((resolve, reject) => {
        instanceNormal
            .post(url, config)
            .then(data => {
                resolve(data.data);
            })
            .catch(err => {
                reject(err);
            });
    });
};
const _delete = (url, config) => {
    return new Promise((resolve, reject) => {
        instanceNormal
            .delete(url, config)
            .then(data => {
                resolve(data.data);
            })
            .catch(err => {
                reject(err);
            });
    });
};
const _put = (url, config) => {
    return new Promise((resolve, reject) => {
        instanceNormal
            .put(url, config)
            .then(data => {
                resolve(data.data);
            })
            .catch(err => {
                reject(err);
            });
    });
};

export default {
    _get,
    _post,
    _delete,
    _put
};
