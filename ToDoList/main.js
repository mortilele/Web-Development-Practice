 function add() {
            let data = document.getElementById("in").value;
            let checkbox = document.createElement("input");
            checkbox.setAttribute("type", "checkbox")
            checkbox.addEventListener("click", function() { check(this)});
            checkbox.setAttribute("class", "checker");
            let label = document.createElement("label");
            label.innerHTML = data;
            let btn = document.createElement("button");
            btn.addEventListener("click", function() { remove(this)});
            btn.innerHTML = '-';
            btn.setAttribute("class", "delete");
            let block = document.createElement("div");
            block.setAttribute("class", "item");
            block.appendChild(checkbox);
            block.appendChild(label);
            block.appendChild(btn);
            document.getElementById("items").appendChild(block);
            document.getElementById("in").value = "";
        }

function remove(element) {
    document.getElementById("items").removeChild(element.parentNode);
}

function check(element) {
    if (element.nextElementSibling.style.textDecoration == "line-through")
        element.nextElementSibling.style.textDecoration = "none";
    else  element.nextElementSibling.style.textDecoration = "line-through";
}

function cls() {
    let items = document.getElementsByClassName("checker");
    let i = 0;
    while (items[i]) {
        if (items[i].checked == true) {
            remove(items[i]);
        }
        else
            i++;
    }
}


