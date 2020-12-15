// Array of Objects
let comments = [];

// API
let API_KEY = "?api_key=b98f2ef4-acac-487e-9f78-c9873e97aac5";
let url = "https://project-1-api.herokuapp.com/comments/";
let header = { headers: { "content-type": "application/json" } };

// event listener
function eListener() {
  let information = document.querySelector("form");
  information.addEventListener("submit", function data(event) {
    event.preventDefault();

    axios
      .post(
        url + API_KEY,
        (newUserComment = {
          name: information.name.value,
          comment: information.comment.value,
        }),
        header
      )
      .then((reply) => {
        console.log(reply, reply.data);
        displayComment();
      })
      .catch((error) => {
        console.log(error);
      });
    comments.push(newUserComment);
    information.reset();
  });
}
eListener();

// Function that loops through comments array and parent container.
function loopArray() {
  comments
    .slice()
    .reverse()
    .forEach((element) => eListener(element));
}

// Parent Container Function
function parentCont() {
  let commentContainer = document.createElement("div");
  commentContainer.classList.add("comment-container");
  let commentContainerRef = document.querySelector(
    ".comment-container__bottom-hr"
  );
  let commentContainerParent = document.querySelector("main");
  commentContainerParent.insertBefore(commentContainer, commentContainerRef);
  loopArray();
}

parentCont();

// Function for creating Child Element
function displayComment() {
  axios.get(url + API_KEY).then((res) => {
    console.log(res, res.data);
    comments.push(res.data);
    // remove the comments from the DOM.
    let clearList = document.querySelector(".comment-container");
    clearList.innerHTML = "";
    // regenerates posted comments from API.
    res.data.reverse().forEach((item) => {
      const d = new Date(item.timestamp);
      dateFormat = d.getMonth() + 1 + "/" + d.getDate() + "/" + d.getFullYear();

      let newDateFormat = { date: dateFormat };

      let commentContainer = document.querySelector(".comment-container");

      let commentContainerSub = document.createElement("div");
      commentContainerSub.classList.add("comment-container__sub-container");
      commentContainer.appendChild(commentContainerSub);

      let commentImageContainer = document.createElement("div");
      commentImageContainer.classList.add("comment-container__image-container");
      commentContainerSub.appendChild(commentImageContainer);

      let commentContainerImage = document.createElement("div");
      commentContainerImage.classList.add("comment-container__image");
      commentImageContainer.appendChild(commentContainerImage);

      let commentNameContainer = document.createElement("div");
      commentNameContainer.classList.add("comment-container__name-container");
      commentNameContainer.classList.add(
        "comment-container__name-container-one"
      );
      commentContainerSub.appendChild(commentNameContainer);

      let commentContainerName = document.createElement("p");
      commentContainerName.classList.add("comment-container__name");
      commentContainerName.innerText = item.name;
      commentNameContainer.appendChild(commentContainerName);

      let commentContainerDate = document.createElement("p");
      commentContainerDate.classList.add("comment-container__date");
      commentContainerDate.innerText = newDateFormat.date;
      commentNameContainer.appendChild(commentContainerDate);

      let commentTextContainer = document.createElement("div");
      commentTextContainer.classList.add("comment-container__text-container");
      commentContainer.appendChild(commentTextContainer);

      let commentContainerComment = document.createElement("p");
      commentContainerComment.classList.add("comment-container__comment");
      commentContainerComment.innerText = item.comment;
      commentTextContainer.appendChild(commentContainerComment);
    });
  });
}

displayComment();
