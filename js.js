function op(id,iconId) {
    x = document.getElementById(id);
    if(x.style.display == "none")
        x.style.display = "block";
    else
        x.style.display = "none";
    icon = document.getElementById(iconId);
    if(icon.classList.contains("bi-caret-down")) {
        icon.classList.remove("bi-caret-down");
        icon.classList.add("bi-caret-up");
    } else {
        icon.classList.remove("bi-caret-up");
        icon.classList.add("bi-caret-down");
    }        
}

function openNav() {
  document.getElementById("navMobile").style.height = "100%";
}

function closeNav() {
  document.getElementById("navMobile").style.height = "0%";
}