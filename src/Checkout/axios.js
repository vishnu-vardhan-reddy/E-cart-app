import axios from 'axios'

const instance = axios.create({
        baseURL:'https://us-central1-fir-bebd8.cloudfunctions.net/api',
        withCredentials: false,
        headers: {
          'Access-Control-Allow-Origin' : '*',
          'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',   
      }
    })
    export default instance

    //https://us-central1-fir-bebd8.cloudfunctions.net/api