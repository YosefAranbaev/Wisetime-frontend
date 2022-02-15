import React, { useState } from "react";
import AuthService from '../../services/auth.service';
import Task from './Task';
import authHeader from "../../services/auth-header";

const ScheduleObj = (props) => {
    const user  = AuthService.getCurrentUser();
    let [Tasks, setTasks] = useState([])

    const getTimelist = async () => {
        try {
            const response = fetch(`http://localhost:8080/api/users/${user.id}/tasks`, { method: 'GET',headers:authHeader() })
            if (response) {
                return response;
            }
            return false;
        }
        catch (e) {
            return false;
        }
    }

    const eachTask =(item,i)=>{
        if(item.is_done){
            return;
        }
        return (<Task key={i} color={item.color} hour_start_time={item.hour_start_time} hour_end_time={item.hour_end_time}
            day={item.day} name={item.name} id={item._id}></Task>
        )

    }

    const addTaskToSchedule = () => {
        getTimelist().then(res => {
            res.json().then(result => {
                setTasks(Tasks=result);
            });
        });
    }

    return (
        <div role="main" class="container">
            <div class="schedule">
                <div class="schedule_header"> <span class="dl">Time</span> <span class="ds">Ti</span></div>
                <div class="schedule_header schedule-sunday"> <span class="dl">Sunday</span> <span class="ds">Su</span> </div>
                <div class="schedule_header schedule-monday"> <span class="dl">Monday</span> <span class="ds">M</span></div>
                <div class="schedule_header schedule-tuesday"> <span class="dl">Tuesday</span> <span class="ds">T</span></div>
                <div class="schedule_header schedule-wednesday"> <span class="dl">Wednesday</span> <span class="ds">W</span></div>
                <div class="schedule_header schedule-thursday"> <span class="dl">Thursday</span> <span class="ds">Th</span></div>
                <div class="schedule_header schedule-friday"> <span class="dl">Friday</span> <span class="ds">F</span></div>
                <div class="schedule_header schedule-saturday"> <span class="dl">Saturday</span> <span class="ds">Sa</span></div>
                {/* <!-- Time--> */}
                <div class="schedule_time time-from-s">07:00 </div>
                <div class="schedule_time time-from-sf">07:15</div>
                <div class="schedule_time time-from-st">07:30</div>
                <div class="schedule_time time-from-sff">07:45</div>
                <div class="schedule_time time-from-e">08:00</div>
                <div class="schedule_time time-from-ef">08:15</div>
                <div class="schedule_time time-from-et">08:30</div>
                <div class="schedule_time time-from-eff">08:45</div>
                <div class="schedule_time time-from-n">09:00</div>
                <div class="schedule_time time-from-nf">09:15</div>
                <div class="schedule_time time-from-nt">09:30</div>
                <div class="schedule_time time-from-nff">09:45</div>
                <div class="schedule_time time-from-t">10:00</div>
                <div class="schedule_time time-from-tf">10:15</div>
                <div class="schedule_time time-from-tt">10:30</div>
                <div class="schedule_time time-from-tff">10:45</div>
                <div class="schedule_time time-from-el">  11:00</div>
                <div class="schedule_time time-from-elf"> 11:15</div>
                <div class="schedule_time time-from-elt"> 11:30</div>
                <div class="schedule_time time-from-elff">11:45</div>
                <div class="schedule_time time-from-tw"> 12:00 </div>
                <div class="schedule_time time-from-twf"> 12:15 </div>
                <div class="schedule_time time-from-twt"> 12:30 </div>
                <div class="schedule_time time-from-twff"> 12:45</div>
                <div class="schedule_time time-from-th">   13:00</div>
                <div class="schedule_time time-from-thf">  13:15</div>
                <div class="schedule_time time-from-tht">  13:30</div>
                <div class="schedule_time time-from-thff"> 13:45</div>
                <div class="schedule_time time-from-ft">   14:00</div>
                <div class="schedule_time time-from-ftf">  14:15</div>
                <div class="schedule_time time-from-ftt">  14:30</div>
                <div class="schedule_time time-from-ftff"> 14:45</div>
                <div class="schedule_time time-from-fit">  15:00</div>
                <div class="schedule_time time-from-fitf"> 15:15</div>
                <div class="schedule_time time-from-fitt"> 15:30</div>
                <div class="schedule_time time-from-fitff">15:45</div>
                <div class="schedule_time time-from-sit">  16:00</div>
                <div class="schedule_time time-from-sitf"> 16:15</div>
                <div class="schedule_time time-from-sitt"> 16:30</div>
                <div class="schedule_time time-from-sitff">16:45</div>
                <div class="schedule_time time-from-set">  17:00</div>
                <div class="schedule_time time-from-setf"> 17:15</div>
                <div class="schedule_time time-from-sett"> 17:30</div>
                <div class="schedule_time time-from-setff">17:45</div>
                <div class="schedule_time time-from-ett">  18:00</div>
                <div class="schedule_time time-from-ettf"> 18:15</div>
                <div class="schedule_time time-from-ettt"> 18:30</div>
                <div class="schedule_time time-from-ettff">18:45</div>
                <div class="schedule_time time-from-ntt">  19:00</div>
                <div class="schedule_time time-from-nttf"> 19:15</div>
                <div class="schedule_time time-from-nttt"> 19:30</div>
                <div class="schedule_time time-from-nttff">19:45</div>
                <div class="schedule_time time-from-ttw">   20:00</div>
                <div class="schedule_time time-from-ttwf">  20:15</div>
                <div class="schedule_time time-from-ttwt">  20:30</div>
                <div class="schedule_time time-from-ttwff"> 20:45</div>
                <div class="schedule_time time-from-to">   21:00</div>
                <div class="schedule_time time-from-tof">  21:15</div>
                <div class="schedule_time time-from-tot">  21:30</div>
                <div class="schedule_time time-from-toff"> 21:45</div>
                <div class="schedule_time time-from-tto">   22:00</div>
                <div class="schedule_time time-from-ttof">  22:15</div>
                <div class="schedule_time time-from-ttot">  22:30</div>
                <div class="schedule_time time-from-ttoff"> 22:45</div>
                <div class="schedule_time time-from-tth"> 23:00</div>

                {/* <!--  Grid Rows--> */}
                <div class="grid time-from-s time-to-sf schedule-row-from-sunday schedule-row-to-saturday"></div>
                <div class="grid time-from-sf time-to-st schedule-row-from-sunday schedule-row-to-saturday"></div>
                <div class="grid time-from-st time-to-sff schedule-row-from-sunday schedule-row-to-saturday"></div>
                <div class="grid time-from-sff time-to-e schedule-row-from-sunday schedule-row-to-saturday"></div>
                <div class="grid time-from-e time-to-ef schedule-row-from-sunday schedule-row-to-saturday"></div>
                <div class="grid time-from-ef time-to-et schedule-row-from-sunday schedule-row-to-saturday"></div>
                <div class="grid time-from-et time-to-eff schedule-row-from-sunday schedule-row-to-saturday"></div>
                <div class="grid time-from-eff time-to-n schedule-row-from-sunday schedule-row-to-saturday"></div>
                <div class="grid time-from-n time-to-nf schedule-row-from-sunday schedule-row-to-saturday"></div>
                <div class="grid time-from-nf time-to-nt schedule-row-from-sunday schedule-row-to-saturday"></div>
                <div class="grid time-from-nt time-to-nff schedule-row-from-sunday schedule-row-to-saturday"></div>
                <div class="grid time-from-nff time-to-t schedule-row-from-sunday schedule-row-to-saturday"></div>
                <div class="grid time-from-t time-to-tf schedule-row-from-sunday schedule-row-to-saturday"></div>
                <div class="grid time-from-tf time-to-tt schedule-row-from-sunday schedule-row-to-saturday"></div>
                <div class="grid time-from-tt time-to-tff schedule-row-from-sunday schedule-row-to-saturday"></div>
                <div class="grid time-from-tff time-to-el schedule-row-from-sunday schedule-row-to-saturday"></div>
                <div class="grid time-from-el time-to-elf schedule-row-from-sunday schedule-row-to-saturday"></div>
                <div class="grid time-from-elf time-to-elt schedule-row-from-sunday schedule-row-to-saturday"></div>
                <div class="grid time-from-elt time-to-elff schedule-row-from-sunday schedule-row-to-saturday"></div>
                <div class="grid time-from-elff time-to-tw schedule-row-from-sunday schedule-row-to-saturday"></div>
                <div class="grid time-from-tw time-to-twf schedule-row-from-sunday schedule-row-to-saturday"></div>
                <div class="grid time-from-twf time-to-twt schedule-row-from-sunday schedule-row-to-saturday"></div>
                <div class="grid time-from-twt time-to-twff schedule-row-from-sunday schedule-row-to-saturday"></div>
                <div class="grid time-from-twff time-to-th schedule-row-from-sunday schedule-row-to-saturday"></div>
                <div class="grid time-from-th time-to-thf schedule-row-from-sunday schedule-row-to-saturday"></div>
                <div class="grid time-from-thf time-to-tht schedule-row-from-sunday schedule-row-to-saturday"></div>
                <div class="grid time-from-tht time-to-thff schedule-row-from-sunday schedule-row-to-saturday"></div>
                <div class="grid time-from-thff time-to-ft schedule-row-from-sunday schedule-row-to-saturday"></div>
                <div class="grid time-from-ft time-to-ftf schedule-row-from-sunday schedule-row-to-saturday"></div>
                <div class="grid time-from-ftf time-to-ftt schedule-row-from-sunday schedule-row-to-saturday"></div>
                <div class="grid time-from-ftt time-to-ftff schedule-row-from-sunday schedule-row-to-saturday"></div>
                <div class="grid time-from-ftff time-to-fit schedule-row-from-sunday schedule-row-to-saturday"></div>
                <div class="grid time-from-fit time-to-fitf schedule-row-from-sunday schedule-row-to-saturday"></div>
                <div class="grid time-from-fitf time-to-fitt schedule-row-from-sunday schedule-row-to-saturday"></div>
                <div class="grid time-from-fitt time-to-fitff schedule-row-from-sunday schedule-row-to-saturday"></div>
                <div class="grid time-from-fitff time-to-sit schedule-row-from-sunday schedule-row-to-saturday"></div>
                <div class="grid time-from-sit time-to-sitf schedule-row-from-sunday schedule-row-to-saturday"></div>
                <div class="grid time-from-sitf time-to-sitt schedule-row-from-sunday schedule-row-to-saturday"></div>
                <div class="grid time-from-sitt time-to-sitff schedule-row-from-sunday schedule-row-to-saturday"></div>
                <div class="grid time-from-sitff time-to-set schedule-row-from-sunday schedule-row-to-saturday"></div>
                <div class="grid time-from-set time-to-setf schedule-row-from-sunday schedule-row-to-saturday"></div>
                <div class="grid time-from-setf time-to-sett schedule-row-from-sunday schedule-row-to-saturday"></div>
                <div class="grid time-from-sett time-to-setff schedule-row-from-sunday schedule-row-to-saturday"></div>
                <div class="grid time-from-setff time-to-et schedule-row-from-sunday schedule-row-to-saturday"></div>
                <div class="grid time-from-ett time-to-ettf schedule-row-from-sunday schedule-row-to-saturday"></div>
                <div class="grid time-from-ettf time-to-ettt schedule-row-from-sunday schedule-row-to-saturday"></div>
                <div class="grid time-from-ettt time-to-ettff schedule-row-from-sunday schedule-row-to-saturday"></div>
                <div class="grid time-from-ettff time-to-ntt schedule-row-from-sunday schedule-row-to-saturday"></div>
                <div class="grid time-from-ntt time-to-nttf schedule-row-from-sunday schedule-row-to-saturday"></div>
                <div class="grid time-from-nttf time-to-nttt schedule-row-from-sunday schedule-row-to-saturday"></div>
                <div class="grid time-from-nttt time-to-nttff schedule-row-from-sunday schedule-row-to-saturday"></div>
                <div class="grid time-from-nttff time-to-ttw schedule-row-from-sunday schedule-row-to-saturday"></div>
                <div class="grid time-from-ttw time-to-ttwf schedule-row-from-sunday schedule-row-to-saturday"></div>
                <div class="grid time-from-ttwf time-to-ttwt schedule-row-from-sunday schedule-row-to-saturday"></div>
                <div class="grid time-from-ttwt time-to-ttwff schedule-row-from-sunday schedule-row-to-saturday"></div>
                <div class="grid time-from-ttwff time-to-to schedule-row-from-sunday schedule-row-to-saturday"></div>
                <div class="grid time-from-to time-to-tof schedule-row-from-sunday schedule-row-to-saturday"></div>
                <div class="grid time-from-tof time-to-tot schedule-row-from-sunday schedule-row-to-saturday"></div>
                <div class="grid time-from-tot time-to-toff schedule-row-from-sunday schedule-row-to-saturday"></div>
                <div class="grid time-from-toff time-to-tto schedule-row-from-sunday schedule-row-to-saturday"></div>
                <div class="grid time-from-tto time-to-ttof schedule-row-from-sunday schedule-row-to-saturday"></div>
                <div class="grid time-from-ttof time-to-ttot schedule-row-from-sunday schedule-row-to-saturday"></div>
                <div class="grid time-from-ttot time-to-ttoff schedule-row-from-sunday schedule-row-to-saturday"></div>
                <div class="grid time-from-ttoff time-to-tth schedule-row-from-sunday schedule-row-to-saturday"></div>
                <div class="grid grid-last time-from-tth time-to-tth schedule-row-from-sunday schedule-row-to-saturday"></div>
                {/* <!--   ./Grid Rows--> */}
                <div class="grid schedule-sunday time-from-s time-to-tth"></div>
                <div class="grid grid-last schedule-sunday time-from-tth time-to-tth"></div>
                <div class="grid schedule-monday time-from-s time-to-tth"></div>
                <div class="grid grid-last schedule-monday time-from-tth time-to-tth"></div>
                <div class="grid schedule-tuesday time-from-s time-to-tth"></div>
                <div class="grid grid-last schedule-tuesday time-from-tth time-to-tth"></div>
                <div class="grid schedule-wednesday time-from-s time-to-tth"></div>
                <div class="grid grid-last schedule-wednesday time-from-tth time-to-tth"></div>
                <div class="grid schedule-thursday time-from-s time-to-tth"></div>
                <div class="grid grid-last schedule-thursday time-from-tth time-to-tth"></div>
                <div class="grid schedule-friday time-from-s time-to-tth"></div>
                <div class="grid grid-last schedule-friday time-from-tth time-to-tth"></div>
                <div class="grid schedule-saturday time-from-s time-to-tth"></div>
                <div class="grid grid-last schedule-saturday time-from-tth time-to-tth"></div>               
                {addTaskToSchedule()}
                {Tasks.map(eachTask)}
            </div>
        </div>
    )
}
export default ScheduleObj;