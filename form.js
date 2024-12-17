document.cookie = "meta=wuh"

function submit() {
    let id = document.getElementById("idInput").value;
    let stroke = document.getElementById("strokeInput").value;
    let time = document.getElementById("timeInput").value;
    let newCookie = String(getCookie("data"));
    console.log(newCookie);
    newCookie = JSON.parse("[" + newCookie + "]");
    
    switch(stroke) {
        case "Free":
            stroke = 0;
            break
        case "Breast":
            stroke = 1;
            break
        case "Back":
            stroke = 2;
            break
        case "Fly":
            stroke = 3;
            break
    }
    console.log( newCookie[id * 4 + stroke])
    newCookie[id * 4 + stroke] = time;
    setCookie("data", newCookie);
}

function getData() {
    data = getCookie("data");
    document.getElementById("outputTextBox").innerText = data;
}

function resetData() {
    let data = [50, 10, 3, 75]
    for (let i = 0; i < 5; i++) {
        data.push([0, 0, 0, 0])
    }
    setCookie("data", data)
    console.log(data)
}

function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
}

function setCookie(cname, cvalue) {
    document.cookie = cname + "=" + cvalue;
  }