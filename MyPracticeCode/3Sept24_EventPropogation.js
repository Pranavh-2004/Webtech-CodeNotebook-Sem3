function show(event) {
  document.querySelector("#showarea").innerHTML +=
    event.target.id + " " + event.eventPhase + " " + this.id + "<br/>";

  //if (this.id == "d1" && event.eventPhase == 1) event.stopPropogation();
  event.cancelBubble == true;
  console.log(event);
}

let d1 = document.querySelector("#d1");
d1.addEventListener("click", show, true);
d1.addEventListener("click", show, false);

let p1 = document.querySelector("#p1");
