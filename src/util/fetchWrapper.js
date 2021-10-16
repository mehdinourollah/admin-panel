export const get = (url) => {

    const requestOptions = {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            "authorization": "Bearer " + sessionStorage.getItem("token"),
        },
    };
    return fetch(process.env.NODE_ENV == 'production' && 'https://api.laroza.dev' +  url, requestOptions).then(handleResponse);
}

export const post = (url, body) => {
    const requestOptions = {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            "authorization": "Bearer " + sessionStorage.getItem("token"),
        },
        body: JSON.stringify(body)
    };
    return fetch(process.env.NODE_ENV == 'production' && 'https://api.laroza.dev' + url, requestOptions).then(handleResponse);
}

export const put = (url, body) => {
    const requestOptions = {
        method: 'PUT',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            "authorization": "Bearer " + sessionStorage.getItem("token"),
        },
        body: JSON.stringify(body)
    };
    return fetch(process.env.NODE_ENV == 'production' && 'https://api.laroza.dev' + url, requestOptions).then(handleResponse);
}

// prefixed with underscored because delete is a reserved word in javascript
export const _delete = (url) => {
    const requestOptions = {
        method: 'DELETE',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            "authorization": "Bearer " + sessionStorage.getItem("token"),
        },
    };
    return fetch(process.env.NODE_ENV == 'production' && 'https://api.laroza.dev' + url, requestOptions).then(handleResponse);
}

// helper functions

export function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);

        if (!response.ok) {
            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }

        return data;
    });
}





