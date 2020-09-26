const baseURL = 'https://calendarific.com/api/v2/holidays?api_key=c66acffd47f7ffb23cd4e22d2193c206892e919b&country=US&year=2020';

const baseURL = 'https://www.dictionaryapi.com/api/v3/references/sd2/json/school?key=your-api-key';

fetch(baseURL) //this is fetching the data then it looks for something that is chained to it which is the .then. the response from the api is captured in the .then.
    .then(result => result.json())
    //the next .then is captureing what is being captured from the previous .then
    .then(json => displayData(json));

    function displayData(json){
        console.log(json);
    };
    