const getConstraintsFormValues = () => {
    return {
        "sunday_start_time":    document.forms["constraintsForm"]["sunday_start_time"].value,
        "monday_start_time":    document.forms["constraintsForm"]["monday_start_time"].value,
        "tuesday_start_time":   document.forms["constraintsForm"]["tuesday_start_time"].value,
        "wednesday_start_time": document.forms["constraintsForm"]["wednesday_start_time"].value,
        "thursday_start_time":  document.forms["constraintsForm"]["thursday_start_time"].value,
        "friday_start_time":    document.forms["constraintsForm"]["friday_start_time"].value,
        "saturday_start_time":  document.forms["constraintsForm"]["saturday_start_time"].value,   
        "sunday_end_time":      document.forms["constraintsForm"]["sunday_end_time"].value,
        "monday_end_time":      document.forms["constraintsForm"]["monday_end_time"].value,
        "tuesday_end_time":     document.forms["constraintsForm"]["tuesday_end_time"].value,
        "wednesday_end_time":   document.forms["constraintsForm"]["wednesday_end_time"].value,
        "thursday_end_time":    document.forms["constraintsForm"]["thursday_end_time"].value,
        "friday_end_time":      document.forms["constraintsForm"]["friday_end_time"].value,
        "saturday_end_time":    document.forms["constraintsForm"]["saturday_end_time"].value
    };
}

const addConstraints = () => {
    const newConstraints = getConstraintsFormValues();

    const res = $.ajax({
        type: "POST",
        url: "http://wisetime.herokuapp.com/api/users/61c1b960f3ac2475edc30492/constraints",
        data: newConstraints,
        success:(res)=>{
            window.location.href="http://127.0.0.1:5500/wisetime-frontend/welcome2.html";
        },
        error: (response) => {
            fileErrorTreatment(response.status);
        }
    });

    return false;
}