let btn = document.getElementById("btn");
let input = document.querySelector("input");
let section = document.querySelector("section");
let trash = document.getElementById("trash");

section.innerHTML+= JSON.parse(localStorage.getItem("dd"));

btn.onclick = function (eo) {
  eo.preventDefault();
  let task = `
    <div class="task">
      <i class="fa fa-star icon"></i>
      <p class="del-task">${input.value}</p>
      <div class="two-icon">
        <i class="fa fa-trash icon"></i>
        <i class="fa fa-frown-o icon"></i>
      </div>
    </div>
  `;
  section.innerHTML += task;

   localStorage.setItem("dd", JSON.stringify( section.innerHTML ));
};
// *****************************************************************
section.onclick = function v (eo) {
  if (eo.target.className === "fa fa-trash icon") {
    eo.target.parentElement.parentElement.remove();
  } else if (eo.target.className === "fa fa-frown-o icon") {
    eo.target.classList.add("dp");

    eo.target.parentElement.parentElement
      .getElementsByClassName("del-task")[0]
      .classList.add("del");

    let heart = `
      <i class="fa fa-heart icon"></i>
    `;
    eo.target.parentElement.innerHTML += heart;
    

    // -************************************************************
  } else if (eo.target.className === "fa fa-heart icon") {
    eo.target.classList.add("dp");

    eo.target.parentElement.parentElement
      .getElementsByClassName("del-task")[0]
      .classList.remove("del");

    let angry = `
      <i class="fa fa-frown-o icon"></i>
    `;
    eo.target.parentElement.innerHTML += angry;
  } else if (eo.target.className === "fa fa-star icon") {
    section.prepend(eo.target.parentElement);
  }
};