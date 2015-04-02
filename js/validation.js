function validateForm() {
    var x = document.forms["DMKBABY"]["entry.1460336335"].value;
    if (x == null || x == "") {
        Alert.render("First name must be filled out");
        return false;
    }

    var x = document.forms["DMKBABY"]["entry.1446146070"].value;
    if (x == null || x == "") {
        Alert.render("Last name must be filled out");
        return false;
    }

    var x = document.forms["DMKBABY"]["entry.685769320"].value;
    if (x == null || x == "") {
        Alert.render("Flight number name must be filled out");
        return false;
    }

}