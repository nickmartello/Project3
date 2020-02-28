import React, {Component} from 'react';
import axios from 'axios'


document.addEventListener('DOMContentLoaded', function() {
    let calendarEl = document.getElementById('calendar');
  
    let calendar = new FullCalendar.Calendar(calendarEl, {
      plugins: [ 'dayGrid' ],
      defaultView: 'dayGridMonth',
      header: {
        center: 'addEventButton'
      },
      customButtons: {
        addEventButton: {
          text: 'add event...',
          click: function() {
            let dateStr = prompt('Enter a date in YYYY-MM-DD format');
            let date = new Date(dateStr + 'T00:00:00'); // will be in local time
  
            if (!isNaN(date.valueOf())) { // valid?
              calendar.addEvent({
                title: 'dynamic event',
                start: date,
                allDay: true
              });
              alert('Great. Now, update your database...');
            } else {
              alert('Invalid date.');
            }
          }
        }
      }
    });
  
    calendar.render();
  });