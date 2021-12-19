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
}

const do_ = () => {
   get_time_set().then(res => {
       const j = res.json().then(result => {
           console.log("dd"+result);
           console.log("08:01" < "09:00");
           result.forEach(element => {
               console.log(element.hour_end_time);
           $(".schedule").append(
               '<div class="schedule-item'
               + ' schedule-' + element.day
               + ' time-from-' + hours[element.hour_start_time]
               + ' time-to-' + hours[element.hour_end_time]
               + ' nt bg-' + element.color + '">'
               + ' <div class="icons">'
               + ' <a href="#" class="done" title="Done"><i class="fas fa-check"></i></a>'
               + ' <a href="#" class="update" title="Update"><i class="fas fa-pen"></i></a>'
               + ' <a href="#" class="delete" title="Delete"><i class="fas fa-times"></i></a>'
               + ' </div>'
               + element.name
               + '</div>'
           )
           })
       });
   })
}

function sleep(ms) {
   return new Promise(resolve => setTimeout(resolve, ms));
}

const get_time_set = async () => {
   try {
       const response = fetch('http://localhost:3000/api/tasks', { method: 'GET' })
       if (response) {
           const jsonRes = response;
           // console.log(response);
           return jsonRes;
       }
       return false;
   }
   catch (e) {
       console.log("fetch failed", e);
       return false;
   }
}
//     console.log("jjj");
//     fetch('/api/tasks', {
//         method: 'GET'
//     }).then(response => response.json())
//         .then(async (result) => {
//             console.log("iii");
//             // console.log(result[2]);
//             return await result[2];
//         }).catch(error => {
//             console.error('Error:', error);
//         });
// }
// const do1_ = () => {
//     get_time_set().then(res => {
//         console.log(res)
//         const j = res.json().then(result => { console.log(result[2]); });
//         console.log(j);
//     })
// }
// do1_();
