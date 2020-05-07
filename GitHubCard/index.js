/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/

/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3.
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

const followersArray = [];

/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/

/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/


/* STEP ONE */

axios
  .get("https://api.github.com/users/tketheeswaran09")
  .then(response => {
    const data = response.data;
    cards.appendChild(cardMaker(response.data));
    console.log(response.data);
  })
  .catch(error => {
    console.log(error);
  });

/* STEP 5 */

const followersArray = [' tetondan', 'dustinmyers', 'justsml', 'luishrd', 'bigknell'];
followersArray.forEach(user => {
  axios
    .get(`https://api.github.com/users/${user}`)
    .then(res => {
      const userCard = cardMaker(res.data);
      document.querySelector(".cards").appendChild(userCard);
    })
    .catch(err => {
      console.error(err);
    });
});

// axios.get('https://api.github.com/users/<tketheeswaran09>/followers') 
// .then(function (response) {
//   const followersArray = response.data

//   followersArray.forEach((follower) => {
//     axios.get(follower.url)
//     .then(function (response) {
//       const card = document.querySelector(".cards");
//       card.appendChild(cardMaker(response.data));
//     })
//   })
// })


/* STEP 3 */

// 0 -create function
function cardMaker(data) {
  // 1- create HTML element
  const cardDiv = document.createElement('div');
  const cardImage = document.createElement('img');
  const cardInfo = document.createElement('div');
  const cardName = document.createElement('h3');
  const cardProfile = document.createElement('p');
  const cardGitAddress = document.createElement('a');
  const cardUserName = document.createElement('p');
  const cardLocation = document.createElement('p');
  const cardFollowers = document.createElement('p');
  const cardFollowing = document.createElement('p');
  const cardBio = document.createElement('p');
  // 2-define HTML structure
  cardDiv.classList.add('card');
  cardInfo.classList.add('card-info');
  cardName.classList.add('name');
  cardUserName.classList.add('username');
  // 3-Add css style classes
  cardDiv.append(cardImage);
  cardDiv.append(cardInfo);
  cardInfo.append(cardName)
  cardInfo.append(cardUserName);
  cardInfo.append(cardUserName);
  cardInfo.append(cardLocation);
  cardInfo.append(cardProfile);
  cardInfo.append(cardFollowers);
  cardInfo.append(cardFollowing)
  cardInfo.append(cardBio);
  cardProfile.appendChild(cardGitAddress);
  // 4-Configure text / image content
  cardImage.src = data.avatar_url;
  cardName.textContent = data.name;
  cardUserName.textContent = data.login;
  cardLocation.textContent = `Location: ${data.location}`;
  cardGitAddress.src = `Profile: ${data.url}`;
  cardFollowers.textContent = `Followers: ${data.followers}`;
  cardFollowing.textContent = `Following: ${data.following}`;
  cardBio.textContent = `Bio: ${data.bio}`;


  return cardDiv;


};


//selecting parent 
const cards = document.querySelector(".cards");

  // Making API Request
