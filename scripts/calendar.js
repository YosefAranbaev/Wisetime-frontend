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