const input =
  document.getElementById("input");
const button =
  document.getElementById("button");
const unorderedlist =
  document.getElementById(
    "unorderedlist"
  );

button.addEventListener(
  "click",
  function () {
    const li =
      document.createElement("li");
    unorderedlist.append(li);
    li.innerText = input.value;

    input.value = "";
  }
);

unorderedlist.addEventListener(
  "click",
  function (x) {
    x.target.nodeName === "LI" &&
      x.target.remove();
  }
);
