// Array of Objects
const showsArray = [];

// API
let API_KEY = "?api_key=b98f2ef4-acac-487e-9f78-c9873e97aac5";
let url = "https://project-1-api.herokuapp.com/showdates/";

// Axios get
function showsFunc() {
  axios.get(url + API_KEY).then((result) => {
    console.log(result, result.data);
    result.data.forEach((item) => {
      let showsDetails = {
        date: item.date,
        venue: item.place,
        location: item.location,
      };
      showsArray.push(showsDetails);
    });
    loopShows();
  });
}
showsFunc();

// Loop for Axios Get
function loopShows() {
  showsArray.forEach((element) => shows(element));
}

// Parent Container
function parentCont() {
  // -----Shows Main Container-----
  let showsContainer = document.createElement("div");
  showsContainer.classList.add("shows");
  let showsContainerReference = document.querySelector(".end");
  let showsContainerParent = document.querySelector(".main");
  showsContainerParent.insertBefore(showsContainer, showsContainerReference);

  let showsTop = document.createElement("div");
  showsTop.classList.add("shows__display");
  showsContainer.appendChild(showsTop);
  let showsTopDate = document.createElement("p");
  showsTopDate.classList.add(".shows__top-date");
  showsTopDate.innerText = "DATES";
  showsTop.appendChild(showsTopDate);
  let showsTopVenue = document.createElement("p");
  showsTopVenue.classList.add("shows__top-venue");
  showsTopVenue.innerText = "VENUE";
  showsTop.appendChild(showsTopVenue);
  let showsTopLocation = document.createElement("p");
  showsTopLocation.classList.add("shows__top-location");
  showsTopLocation.innerText = "LOCATION";
  showsTop.appendChild(showsTopLocation);
}

parentCont();

// Child Elements for Parent Container
function shows(showsInfo) {
  // -----Shows Sub Container One-----

  let showsContainer = document.querySelector(".shows");
  let showsSubContainer = document.createElement("div");
  showsSubContainer.classList.add("shows__sub-container");
  showsContainer.appendChild(showsSubContainer);

  // -----Date Container -----
  let showsDateContainer = document.createElement("div");
  showsDateContainer.classList.add("shows__date-container");
  showsSubContainer.appendChild(showsDateContainer);

  // -----Shows Date Heading-----
  let showsDateHeading = document.createElement("p");
  showsDateHeading.classList.add("shows__date-heading");
  showsDateHeading.innerText = "DATE";
  showsDateContainer.appendChild(showsDateHeading);

  // -----Shows Date---
  let showsDate = document.createElement("p");
  showsDate.classList.add("shows__date");
  showsDate.innerText = showsInfo.date;
  showsDateContainer.appendChild(showsDate);

  // -----Shows Venue Container-----
  let showsVenueContainer = document.createElement("div");
  showsVenueContainer.classList.add("shows__venue-container");
  showsSubContainer.appendChild(showsVenueContainer);

  // -----Shows Venue Heading-----
  let showsVenueHeading = document.createElement("p");
  showsVenueHeading.classList.add("shows__venue-heading");
  showsVenueHeading.innerText = "VENUE";
  showsVenueContainer.appendChild(showsVenueHeading);

  // -----Shows Venue-----
  let showsVenue = document.createElement("p");
  showsVenue.classList.add("shows__venue");
  showsVenue.innerText = showsInfo.venue;
  showsVenueContainer.appendChild(showsVenue);

  // -----Shows Location Container-----
  let showsLocationContainer = document.createElement("div");
  showsLocationContainer.classList.add("shows__location-container");
  showsSubContainer.appendChild(showsLocationContainer);

  // -----Shows Location Heading-----
  let showsLocationHeading = document.createElement("p");
  showsLocationHeading.classList.add("shows__location-heading");
  showsLocationHeading.innerText = "LOCATION";
  showsLocationContainer.appendChild(showsLocationHeading);

  // -----Shows Location-----
  let showsLocation = document.createElement("p");
  showsLocation.classList.add("shows__location");
  showsLocation.innerText = showsInfo.location;
  showsLocationContainer.appendChild(showsLocation);

  // -----Shows Button Container-----
  let showsButtonContainer = document.createElement("div");
  showsButtonContainer.classList.add("shows__button-container");
  showsSubContainer.appendChild(showsButtonContainer);

  // -----Shows Button-----
  let showsButton = document.createElement("button");
  showsButton.classList.add("shows__button");
  showsButton.innerText = "BUY TICKETS";
  showsButtonContainer.appendChild(showsButton);

  // -----HR -----
  let hrOne = document.createElement("hr");
  hrOne.classList.add("shows__hr");
  let hrOneRef = document.querySelector(".shows__sub-container-two");
  let hrOneParent = document.querySelector(".shows");
  hrOneParent.insertBefore(hrOne, hrOneRef);
}
