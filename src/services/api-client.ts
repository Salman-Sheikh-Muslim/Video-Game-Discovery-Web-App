//we need to create an axsios instance with custom configuration in that configuration we are going to include the API key provide by RAWG website.
import axios from "axios"

 const apiKey = import.meta.env.VITE_REACT_APP_RAWG_API_KEY;
// const apiBaseURL = import.meta.env.VITE_REACT_APP_API_BASE_URL;


// if (!apiKey) {
//   throw new Error('API key not found. Make sure to set it in your .env file.');
// }

// if (!apiBaseURL) {
//     throw new Error('API base URL not found. Make sure to set it in your .env file.');
//  }
  

//Creating an axios instance with custom configuration.
export default axios.create({ //exporting axios instance as a default object.
    // baseURL: apiBaseURL,

    baseURL: 'https://api.rawg.io/api',
    params:{
        key:  apiKey,
        
    }
})
/*
With this configuration this key will be included in the query string
of every http request we send to our backend.
*/
