const got = require('got');

const handleReceivedResponse = (reponse) => {
  console.log(JSON.parse(reponse.body));
}

const url = 'https://api.github.com/repos/sinatra/sinatra';

got(url).then(handleReceivedResponse);

// // Shorter version using anonymous function:

// got(url)
//   .then((response) => {
//     console.log(JSON.parse(response.body));
//   });