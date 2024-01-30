//we need to create an axsios instance with custom configuration in that configuration we are going to include the API key provide by RAWG website.


import axios from "axios"

//Creating an axios instance with custom configuration.
export default axios.create({ //exporting axios instance as a default object.
    baseURL: 'https://api.rawg.io/api',
    params:{
        key: 'xxxxxxxxxxxxxxxxxxxx'
    }
})
/*
With this configuration this key will be included in the query string
of every http request we send to our backend.
*/
