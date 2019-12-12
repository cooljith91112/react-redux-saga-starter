import HttpService from '../../services/http.service';

export const loginMock = (params)=>{
    return HttpService.fetch({
        url: 'https://reqres.in/api/login',
        method: 'post',
        data: params
    }, true);
}