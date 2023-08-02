/*Exercise 1 :
Modify the function so that you can pass the content 
for the card dynamically.
 */

function addCard(Content) {
  const template = document
    .getElementById("card-template")
    .content.cloneNode(true);
  template.querySelector(".card-title").innerText = Content.title;
  template.querySelector(".card-text").innerText = Content.text;
  document.querySelector("#card-list").appendChild(template);
}
if ("content" in document.createElement("template")) {
    const ThisContent={title: "Excersice 1", text:"This content has been passed dinamically"};
    addCard(ThisContent);
}
