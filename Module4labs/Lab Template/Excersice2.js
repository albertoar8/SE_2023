/*Exercise 2 :
Modify the code so that your cards are automatically 
generated based on data from an array. This way you 
will create as many cards as you need to display all the 
data in the array.
 */
const data = [{name: 'bob', age: 23}, {name: 'alice', age: 39}]

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