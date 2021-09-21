const element = document.getElementById("main");
element.remove();

const newHeader = document.createElement("h1");
newHeader.id ="victory";
newHeader.innerHTML = "Pema is the champion";


// document.body.append(newHeader);
//why doesnot it work when I append it?