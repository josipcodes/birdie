// IMPORTANT!!
// Because this React app is running in the same workspace as the API,

// there is no need to set a separate baseURL until you reach deployment.

// Setting a baseURL before you reach deployment will cause errors

import axios from 'axios';

// should be api/
axios.defaults.baseURL = 'api/';

// copied from drf_api
// multipart as our app will deal with images, texts...
axios.defaults.headers.post['Content-Type'] = "multipart/form-data"
axios.defaults.withCredentials = true;