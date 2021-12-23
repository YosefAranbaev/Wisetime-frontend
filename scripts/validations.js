const getColor = () => {
    if ($(".radio-input")[0].checked == true)
        return "green";
    if ($(".radio-input")[1].checked == true)
        return "red";
    if ($(".radio-input")[2].checked == true)
        return "yellow";
    if ($(".radio-input")[3].checked == true)
        return "blue";

}
const fileErrorTreatment = (err) => {
    $(".fileError").html("");
    if (err == 400) {
        $(".fileError").append("Please fill in all the fields on the form!");
    }
    if (err == 409) {
        $(".fileError").append("There is friction in the schedule. Please select another time!");
    }
    if (err == 500) {
        $(".fileError").append("Error getting the data from db");
    } 
}
const check = () => {
    const newTask = {
        "name": document.forms["myForm"]["name"].value,
        "day": document.forms["myForm"]["day"].value,
        "hour_start_time": document.forms["myForm"]["hour_start_time"].value,
        "hour_end_time": document.forms["myForm"]["hour_end_time"].value,
        "color": getColor()
    };

    const res = $.ajax({
        type: "POST",
        url: "http://wisetime.herokuapp.com/api/users/61c1b960f3ac2475edc30492/tasks",
        data: newTask,
        success:(res)=>{
            window.location.href="http://127.0.0.1:5500/wisetime-frontend/home.html";
        },
        error: (response) => {
            fileErrorTreatment(response.status);
        }
    });

    return false;
}
