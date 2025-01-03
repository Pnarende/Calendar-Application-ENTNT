import React, { useState } from 'react';
import FullCalendar from '@fullcalendar/react'; 
import dayGridPlugin from '@fullcalendar/daygrid'; 
import interactionPlugin from '@fullcalendar/interaction'; 
import timeGridPlugin from '@fullcalendar/timegrid'; 
import listPlugin from '@fullcalendar/list';

const CalendarView = () => {
    const [events, setEvents] = useState([
        { id: 1, title: 'Meeting with Client A', date: '2025-01-03' },
        { id: 2, title: 'Project Deadline', date: '2025-01-07' },
        { id: 3, title: 'Team Standup', date: '2025-01-05T10:00:00' },
    ]);

    const [showCalendar, setShowCalendar] = useState(true); 

    const handleDateClick = (info) => {
        const title = prompt('Enter event title:');
        if (title) {
            setEvents([...events, { id: events.length + 1, title, date: info.dateStr }]);
        }
    };

    const toggleCalendarView = () => {
        setShowCalendar(!showCalendar); 
    };

    const styles = {
        container: {
            fontFamily: 'Arial, sans-serif',
            margin: '20px',
            textAlign: 'center',
        },
        heading: {
            fontSize: '36px',
            marginBottom: '20px',
            color: '#333',
        },
        toggleButton: {
            backgroundColor: '#4CAF50',
            color: 'white',
            padding: '10px 20px',
            fontSize: '16px',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            transition: 'background-color 0.3s ease',
        },
        toggleButtonHover: {
            backgroundColor: '#45a049',
        },
        calendarContainer: {
            marginTop: '20px',
            backgroundColor: '#fff',
            borderRadius: '8px',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
            padding: '20px',
        },

        '.fc-event': {
            fontSize: '12px', 
            padding: '5px', 
            height: '20px', 
            width: '80px', 
            lineHeight: '20px', 
        },
        '.fc-daygrid-event': {
            margin: '2px', 
            fontSize: '12px', 
            height: '30px', 
        },
        '.fc-daygrid-event-inner': {
            padding: '2px', 
            textOverflow: 'ellipsis',
            overflow: 'hidden', 
        },
    };

    return (
        <div style={styles.container}>
            <h2 style={styles.heading}>Calendar View</h2>
            <button
                style={styles.toggleButton}
                onClick={toggleCalendarView}
                onMouseOver={(e) => e.target.style.backgroundColor = styles.toggleButtonHover.backgroundColor}
                onMouseOut={(e) => e.target.style.backgroundColor = styles.toggleButton.backgroundColor}
            >
                {showCalendar ? 'Hide Calendar' : 'View Calendar'}
            </button>

            {showCalendar && (
                <div style={styles.calendarContainer}>
                    <FullCalendar
                        plugins={[dayGridPlugin, timeGridPlugin, listPlugin, interactionPlugin]}
                        initialView="dayGridMonth"
                        headerToolbar={{
                            left: 'prev,next today',
                            center: 'title',
                            right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek',
                        }}
                        events={events}
                        dateClick={handleDateClick} 
                        editable={true} 
                        selectable={true} 
                        eventClick={(info) => alert(`Event: ${info.event.title}`)} 
                        eventClassNames="fc-event" 
                    />
                </div>
            )}
        </div>
    );
};

export default CalendarView;
