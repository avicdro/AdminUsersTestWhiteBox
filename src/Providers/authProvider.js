import { AUTH_LOGIN, AUTH_LOGOUT, AUTH_CHECK, AUTH_ERROR } from 'react-admin';

export default (type, params) => {
    if (type === AUTH_LOGIN) {
        // Data user
        let tokenId;
        let nameUser;
        let emailUser;
        let imageUser;
        let site = params.site;
        //    
        if (site === "Google"){
            if (params.response.tokenId  === undefined){ 
                return Promise.reject();
            }
            tokenId = params.response.tokenId;    
            nameUser =   params.response.profileObj.name;
            emailUser =   params.response.profileObj.email;
            imageUser =   params.response.profileObj.imageUrl;
        }
        // 
        if (site === "Facebook"){
            if (params.response.accessToken === undefined){
                return Promise.reject()
            }
                
            tokenId = params.response.accessToken;
            nameUser =   params.response.name;
            emailUser =   params.response.email;
            imageUser =   params.response.picture.data.url;
        }
        
        // Storage
        localStorage.setItem('site', site);
        localStorage.setItem('tokenId', tokenId);
        localStorage.setItem('nameUser', nameUser);
        localStorage.setItem('emailUser', emailUser);
        localStorage.setItem('imageUser', imageUser);
        return Promise.resolve();
    }
    if (type === AUTH_LOGOUT) {
        // Clear data.
        localStorage.removeItem('site');
        localStorage.removeItem('tokenId');
        localStorage.removeItem('tokenId');
        localStorage.removeItem('nameUser');
        localStorage.removeItem('emailUser');
        localStorage.removeItem('imageUser');
        return Promise.resolve();
    }
    if (type === AUTH_ERROR) {
        return Promise.resolve();
    }
    if (type === AUTH_CHECK) {
        return localStorage.getItem('tokenId')
            ? Promise.resolve()
            : Promise.reject();
    }
    return Promise.reject('Unkown method');
};