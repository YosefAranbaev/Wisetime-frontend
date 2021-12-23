const addCategories = () => {
    const newCategories = {
        "study":    document.forms["categoriesForm"]["study"].value,
        "work":     document.forms["categoriesForm"]["work"].value,
        "hobby":    document.forms["categoriesForm"]["hobby"].value,
        "chores":   document.forms["categoriesForm"]["chores"].value
    };

    const res = $.ajax({
        type: "POST",
        url: "http://wisetime.herokuapp.com/api/users/61c1b960f3ac2475edc30492/categories",
        data: newCategories,
        success:(res)=>{
            window.location.href="http://127.0.0.1:5500/wisetime-frontend/home.html";
        },
        error: (response) => {
            fileErrorTreatment(response.status);
        }
    });

    return false;
}