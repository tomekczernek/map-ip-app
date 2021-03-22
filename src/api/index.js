import axios from 'axios';

function request(method, endpoint, data = null){

    return axios({
        method,
        url: `${process.env.REACT_APP_URL}${endpoint}${'?access_key='}${process.env.REACT_APP_KEY}`,
        data
    });
}

function get(endpoint){
    return request('GET', endpoint);
}

function post(endpoint, data){
    return request('POST', endpoint, data);
}

function patch(endpoint, data){
    return request('PATCH', endpoint, data);
}

function _delete(endpoint){
    return request('DELETE', endpoint);
}

export default {
    get,
    post,
    patch,
    delete: _delete
};