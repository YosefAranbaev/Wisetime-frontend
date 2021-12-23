$(document).ready(function(){
    $('input.timepicker').timepicker({
        timeFormat: 'HH:mm',
        minTime: '07:00', 
        maxHour: 23,
        maxMinutes: 00,
        startTime: new Date(0,0,0,7,0,0),
        interval: 15 
    });
});

