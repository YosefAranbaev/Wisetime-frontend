import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import UserService from "../services/user.service";
import Heading from './Partials/Heading';
import AuthService from '../services/auth.service';
import $ from 'jquery';
import DeleteIcon from '@mui/icons-material/Delete';

const hours = {
    "07:00": "s",
    "07:15": "sf",
    "07:30": "st",
    "07:45": "sff",
    "08:00": "e",
    "08:15": "ef",
    "08:30": "et",
    "08:45": "eff",
    "09:00": "n",
    "09:15": "nf",
    "09:30": "nt",
    "09:45": "nff",
    "10:00": "t",
    "10:15": "tf",
    "10:30": "tt",
    "10:45": "tff",
    "11:00": "el",
    "11:15": "elf",
    "11:30": "elt",
    "11:45": "elff",
    "12:00": "tw",
    "12:15": "twf",
    "12:30": "twt",
    "12:45": "twff",
    "13:00": "th",
    "13:15": "thf",
    "13:30": "tht",
    "13:45": "thff",
    "14:00": "ft",
    "14:15": "ftf",
    "14:30": "ftt",
    "14:45": "ftff",
    "15:00": "fit",
    "15:15": "fitf",
    "15:30": "fitt",
    "15:45": "fitff",
    "16:00": "sit",
    "16:15": "sitf",
    "16:30": "sitt",
    "16:45": "sitff",
    "17:00": "set",
    "17:15": "setf",
    "17:30": "sett",
    "17:45": "setff",
    "18:00": "ett",
    "18:15": "ettf",
    "18:30": "ettt",
    "18:45": "ettff",
    "19:00": "ntt",
    "19:15": "nttf",
    "19:30": "nttt",
    "19:45": "nttff",
    "20:00": "ttw",
    "20:15": "ttwf",
    "20:30": "ttwt",
    "20:45": "ttwff",
    "21:00": "to",
    "21:15": "tof",
    "21:30": "tot",
    "21:45": "toff",
    "22:00": "tto",
    "22:15": "ttof",
    "22:30": "ttot",
    "22:45": "ttoff",
    "23:00": "tth",
}
const ScheduleObj = (props) => {
    const getTimelist = async () => {
        try {
            const response = fetch('http://localhost:8080/api/users/61c1b960f3ac2475edc30492/tasks', { method: 'GET' })
            if (response) {
                const jsonRes = response;
                // console.log(response);
                console.log(jsonRes);
                return jsonRes;
            }
            return false;
        }
        catch (e) {
            console.log("fetch failed", e);
            return false;
        }
    }
    const doneTask = (task) => {
        alert("d")
        console.log("jjjj");
        // const res = $.ajax({
        //     type: "PUT",
        //     url: `http://localhost:8080/api/users/61c1b960f3ac2475edc30492/tasks/${task.id}`,
        //     data: { "is_done": true },
        //     success:(res)=>{
        //         window.location.href="http://127.0.0.1:5500/wisetime-frontend/home.html";
        //     },
        //     error: (response) => {
        //         // fileErrorTreatment(response.status);
        //     }
        // });
    };
    const deleteTask = (task) => {
    
        const url = `http://localhost:8080/api/users/61c1b960f3ac2475edc30492/tasks/${task.id}`;
        $("#deleteTaskbutton").on("click",function()
        {
           const res = $.ajax({
            type: "DELETE",
            url: url,
            // success:(res)=>{
            //     window.location.href="http://127.0.0.1:5500/wisetime-frontend/home.html";
            // },
            // error: (response) => {
            //     // fileErrorTreatment(response.status);
            // }
        });
        })
    };
    const addTaskToSchedule = () => {
        getTimelist().then(res => {
            res.json().then(result => {
                result.forEach(element => {
                    if (!element.is_done) {
                        $(".schedule").append(
                            `<div class="schedule-item schedule-${element.day} time-from-${hours[element.hour_start_time]} time-to-${hours[element.hour_end_time]} nt bg-${element.color}">
                                <div class="icons">
                                    <button title="Done" class="done" id=${element._id} onClick="doneTask(this)">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-lg" viewBox="0 0 16 16">
                                      <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"/>
                                    </svg>
                                    </button>
                                    
                                    <button title="Delete" id=${element._id} onclick="deleteTask(this)" href="#myModal" class="trigger-btn" data-toggle="modal">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3-fill" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M6 1.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v1H6v-1Zm5 0v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5ZM4.5 5.029a.5.5 0 1 1 .998-.06l.5 8.5a.5.5 0 0 1-.998.06l-.5-8.5Zm6.53-.528a.5.5 0 0 1 .47.528l-.5 8.5a.5.5 0 1 1-.998-.058l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z"/>
                                    </svg>
                                    </button>
                                </div>
                            ${element.name}
                            </div>`
                        )
                    }
                })
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
                <div class="schedule_time time-from-s">07:00 A.M.</div>
                <div class="schedule_time time-from-sf">07:15 A.M.</div>
                <div class="schedule_time time-from-st">07:30 AM.</div>
                <div class="schedule_time time-from-sff">07:45 A.M.</div>
                <div class="schedule_time time-from-e">08:00 A.M.</div>
                <div class="schedule_time time-from-ef">08:15 A.M.</div>
                <div class="schedule_time time-from-et">08:30 AM.</div>
                <div class="schedule_time time-from-eff">08:45 A.M.</div>
                <div class="schedule_time time-from-n">09:00 A.M.</div>
                <div class="schedule_time time-from-nf">09:15 A.M.</div>
                <div class="schedule_time time-from-nt">09:30 AM.</div>
                <div class="schedule_time time-from-nff">09:45 A.M.</div>
                <div class="schedule_time time-from-t">10:00 A.M.</div>
                <div class="schedule_time time-from-tf">10:15 A.M.</div>
                <div class="schedule_time time-from-tt">10:30 A.M.</div>
                <div class="schedule_time time-from-tff">10:45 A.M.</div>
                <div class="schedule_time time-from-el">  11:00 A.M.</div>
                <div class="schedule_time time-from-elf"> 11:15 A.M.</div>
                <div class="schedule_time time-from-elt"> 11:30 A.M.</div>
                <div class="schedule_time time-from-elff">11:45 A.M.</div>
                <div class="schedule_time time-from-tw"> 12:00 A.M.</div>
                <div class="schedule_time time-from-twf"> 12:15 A.M.</div>
                <div class="schedule_time time-from-twt"> 12:30 A.M.</div>
                <div class="schedule_time time-from-twff"> 12:45 A.M.</div>
                <div class="schedule_time time-from-th">   13:00 A.M.</div>
                <div class="schedule_time time-from-thf">  13:15 A.M.</div>
                <div class="schedule_time time-from-tht">  13:30 A.M.</div>
                <div class="schedule_time time-from-thff"> 13:45 A.M.</div>
                <div class="schedule_time time-from-ft">   14:00 A.M.</div>
                <div class="schedule_time time-from-ftf">  14:15 A.M.</div>
                <div class="schedule_time time-from-ftt">  14:30 A.M.</div>
                <div class="schedule_time time-from-ftff"> 14:45 A.M.</div>
                <div class="schedule_time time-from-fit">  15:00 A.M.</div>
                <div class="schedule_time time-from-fitf"> 15:15 A.M.</div>
                <div class="schedule_time time-from-fitt"> 15:30 A.M.</div>
                <div class="schedule_time time-from-fitff">15:45 A.M.</div>
                <div class="schedule_time time-from-sit">  16:00 A.M.</div>
                <div class="schedule_time time-from-sitf"> 16:15 A.M.</div>
                <div class="schedule_time time-from-sitt"> 16:30 A.M.</div>
                <div class="schedule_time time-from-sitff">16:45 A.M.</div>
                <div class="schedule_time time-from-set">  17:00 A.M.</div>
                <div class="schedule_time time-from-setf"> 17:15 A.M.</div>
                <div class="schedule_time time-from-sett"> 17:30 A.M.</div>
                <div class="schedule_time time-from-setff">17:45 A.M.</div>
                <div class="schedule_time time-from-ett">  18:00 A.M.</div>
                <div class="schedule_time time-from-ettf"> 18:15 A.M.</div>
                <div class="schedule_time time-from-ettt"> 18:30 A.M.</div>
                <div class="schedule_time time-from-ettff">18:45 A.M.</div>
                <div class="schedule_time time-from-ntt">  19:00 A.M.</div>
                <div class="schedule_time time-from-nttf"> 19:15 A.M.</div>
                <div class="schedule_time time-from-nttt"> 19:30 A.M.</div>
                <div class="schedule_time time-from-nttff">19:45 A.M.</div>
                <div class="schedule_time time-from-ttw">   20:00 A.M.</div>
                <div class="schedule_time time-from-ttwf">  20:15 A.M.</div>
                <div class="schedule_time time-from-ttwt">  20:30 A.M.</div>
                <div class="schedule_time time-from-ttwff"> 20:45 A.M.</div>
                <div class="schedule_time time-from-to">   21:00 A.M.</div>
                <div class="schedule_time time-from-tof">  21:15 A.M.</div>
                <div class="schedule_time time-from-tot">  21:30 A.M.</div>
                <div class="schedule_time time-from-toff"> 21:45 A.M.</div>
                <div class="schedule_time time-from-tto">   22:00 A.M.</div>
                <div class="schedule_time time-from-ttof">  22:15 A.M.</div>
                <div class="schedule_time time-from-ttot">  22:30 A.M.</div>
                <div class="schedule_time time-from-ttoff"> 22:45 A.M.</div>
                <div class="schedule_time time-from-tth"> 23:00 A.M.</div>

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
            </div>
        </div>
    )
}
export default ScheduleObj;