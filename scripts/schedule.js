const hours = {
    "07:00":"s" ,
    "07:15":"sf",
    "07:30":"st",
    "07:45":"sff",
    "08:00":"e",
    "08:15":"ef",
    "08:30":"et",
    "08:45":"eff",
   "09:00":"n",
   "09:15":"nf",
   "09:30":"nt",
   "09:45":"nff",
   "10:00":"t",
   "10:15":"tf",
   "10:30":"tt",
   "10:45":"tff",
   "11:00":"el",
   "11:15":"elf",
   "11:30":"elt",
   "11:45":"elff",
   "12:00":"tw",
   "12:15":"twf",
   "12:30":"twt",
   "12:45":"twff",
   "13:00":"th",
   "13:15":"thf",
   "13:30":"tht",
   "13:45":"thff",
   "14:00":"ft",
   "14:15":"ftf",
   "14:30":"ftt",
   "14:45":"ftff",
   "15:00":"fit",
   "15:15":"fitf",
   "15:30":"fitt",
   "15:45":"fitff",
   "16:00":"sit",
   "16:15":"sitf",
   "16:30":"sitt",
   "16:45":"sitff",
   "17:00":"set",
   "17:15":"setf",
   "17:30":"sett",
   "17:45":"setff",
   "18:00":"ett",
   "18:15":"ettf",
   "18:30":"ettt",
   "18:45":"ettff",
   "19:00":"ntt",
   "19:15":"nttf",
   "19:30":"nttt",
   "19:45":"nttff",
   "20:00":"ttw",
   "20:15":"ttwf",
   "20:30":"ttwt",
   "20:45":"ttwff",
   "21:00":"to",
   "21:15":"tof",
   "21:30":"tot",
   "21:45":"toff",
   "22:00":"tto",
   "22:15":"ttof",
   "22:30":"ttot",
   "22:45":"ttoff",
   "23:00":"tth",
   "23:15":"tth",
   "23:30":"tth",
   "23:45":"tth",
   "00:00":"tth",
   "00:15":"tth",
   "00:30":"tth",
   "00:45":"tth",
}

const addTaskToSchedule = () => {
    getTimelist().then(res => {
        res.json().then(result => {
            result.forEach(element => {
                if(!element.is_done){
                    $(".schedule").append(
                        `<div class="schedule-item schedule-${element.day} time-from-${hours[element.hour_start_time]} time-to-${hours[element.hour_end_time]} nt bg-${element.color}">
                            <div class="icons">
                                <button title="Done" id=${element._id} onclick="doneTask(this)"><i class="fas fa-check"></i></button>
                                <button title="Update" id=${element._id}"><i class="fas fa-pen"></i></button>
                                <button title="Delete" id=${element._id} onclick="deleteTask(this)"><i class="fas fa-times"></i></button>
                            </div>
                        ${element.name}
                        </div>`
                    )              
                }
            })
       });
   });
}

const getTimelist = async () => {
    try {
        const response = fetch('http://localhost:3000/api/users/61c1b960f3ac2475edc30492/tasks', 
            { method: 'GET' }
        );

       if (response) {
           return response;
       }
       return false;
   } catch (e) {
       return false;
   }
}

const doneTask = (task) => {
    const res = $.ajax({
        type: "PUT",
        url: `http://localhost:3000/api/users/61c1b960f3ac2475edc30492/tasks/${task.id}`,
        data: { "is_done": true },
        success:(res)=>{
            window.location.href="http://127.0.0.1:5500/wisetime-frontend/home.html";
        },
        error: (response) => {
            fileErrorTreatment(response.status);
        }
    });
};

const deleteTask = (task) => {
    $.ajax({
        type: "DELETE",
        url: `http://localhost:3000/api/users/61c1b960f3ac2475edc30492/tasks/${task.id}`,
        success:(res)=>{
            window.location.href="http://127.0.0.1:5500/wisetime-frontend/home.html";
        },
        error: (response) => {
            fileErrorTreatment(response.status);
        }
    });
};