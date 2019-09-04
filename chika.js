function validateForm() {
    var name = document.forms["contactForm"]["name"];
    var email = document.forms["contactForm"]["email"];
    var title = document.forms["contactForm"]["title"];
    var message = document.forms["contactForm"]["message"];


    if (name.value == "") {
        window.alert("Please enter your name.");
        name.focus();
        return false;
    }

    if (name.value.length < 4) {
        window.alert("4 or more characters required in the Name field");
        name.focus();
        return false;
    }

    if (email.value == "") {
        window.alert("Please enter a valid e-mail address.");
        email.focus();
        return false;
    }

    if (email.value.indexOf("@", 0) < 0) {
        window.alert("Please enter a valid e-mail address.");
        email.focus();
        return false;
    }

    if (email.value.indexOf(".", 0) < 0) {
        window.alert("Please enter a valid e-mail address.");
        email.focus();
        return false;
    }

    if (title.value == "") {
        window.alert("Please enter a title.");
        title.focus();
        return false;
    }

    if (message.value == "") {
        window.alert("Please enter your message.");
        message.focus();
        return false;
    }

    if (message.value.length < 20) {
        window.alert("20 or more characters required in the Message field");
        message.focus();
        return false;
    }

    return true;
}