// const displayEventsTable = (events) => {
//     const tableStructure = `<thead>
//                                 <tr>
//                                     <th scope="col">Organizer</th>
//                                     <th scope="col">Subject</th>
//                                     <th scope="col">Start</th>
//                                     <th scope="col">End</th>
//                                 </tr>
//                             </thead>
//                             <tbody>
//                             </tbody>`

//     $('.table').append(tableStructure);

//     events.forEach(event => {
//         $('table tbody').append(
//             `<tr>
//                 <th> ${ event.organizer } </th>
//                 <th> ${ event.subject } </th>
//                 <th> ${ event.startDateTime } </th>
//                 <th> ${ event.endDateTime } </th>
//             </tr>`
//         );
//     });
// };

// const getAllEvents = () => {
//     $.ajax({
//         url: 'http://localhost:3000/api/calendar',
//         type: 'GET',
//         crossDomain: true,
//         xhrFields: { withCredentials: true },
//         //credentials: 'include',
//         success: (events) => {
//             displayEventsTable(events);
//         }
//     });
// }

// getAllEvents();
const getColor = () => {
    if ($(".radio-input")[0].checked == true)
        return "red";
    if ($(".radio-input")[1].checked == true)
        return "green";
    if ($(".radio-input")[2].checked == true)
        return "yellow";
    if ($(".radio-input")[3].checked == true)
        return "blue";
}
const fileErrorTreatment = (err) => {
    console.log(err);
    $(".fileError").html("");
    if (err == 401) {
        $(".fileError").append("Please fill in all the fields on the form!");
    }
    if (err == 403) {
        $(".fileError").append("There is friction in the schedule. Please select another time!");
    }
    if (err == 400) {
        $(".fileError").append("Error getting the data from db");
    }
}
function check() {
    const obj = "http://localhost:3000/api/tasks";
    const newTask = {
        "name": document.forms["myForm"]["name"].value,
        "day": document.forms["myForm"]["day"].value,
        "hour_start_time": document.forms["myForm"]["hour_start_time"].value,
        "hour_end_time": document.forms["myForm"]["hour_end_time"].value,
        "color": getColor()
    };
    const res = $.ajax({
        type: "POST",
        url: obj,
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