function firstName() {
    var required = document.getElementById("name").value;
    if (required === "") {
        alert("First Name Required");
    }


}

function lastName() {
    var required = document.getElementById("lastName").value;
    if (required === "") {
        alert("Last Name Required");
    }


}

function contact() {
    var required = document.getElementById("contact").value;
    if (required === "") {
        alert("Contact Number Required");
    }


}

function email() {
    var required = document.getElementById("email").value;
    if (required === "" || required != " @ " ) {
        alert("Email Required");
    }


}



