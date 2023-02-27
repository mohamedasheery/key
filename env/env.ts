import { IEnvironment } from './env.types';



let userToken  = sessionStorage.getItem('Token')
const environment: IEnvironment = {
  
     baseUrl:'https://key.edudigit.net',

  headers: {
     'Authorization': `Bearer ${sessionStorage.getItem('Token')}`,
    'X.localization':'en',
    'Access-Control-Allow-Origin':'*',
    'Accept': 'application/json',

  }

}
export default environment



