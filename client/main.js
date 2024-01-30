const messageForm = document.querySelector("#messageForm");

function handleSubmitMessageForm(event) {
  event.preventDefault();
  //send entered data to the server using Fetch API
  const formData = new FormData(messageForm);
  const message = formData.get("message");

  fetch("http://localhost:7000/messages", {
    method: "POST", //sets the POST HTTP request
    headers: {
      "Content-Type": "application/json", //tells server we're sending stringified data
    },
    body: JSON.stringify({ message }),
  });
}

messageForm.addEventListener("submit", handleSubmitMessageForm);
