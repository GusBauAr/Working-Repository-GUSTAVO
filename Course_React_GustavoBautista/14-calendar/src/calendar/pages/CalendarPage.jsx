import { Calendar, dateFnsLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import enUS from 'date-fns/locale/en-US'
import { addHours, format, parse, startOfWeek, getDay  } from 'date-fns';

import { NavBar } from "../components/NavBar"

const locales = {
  'en-US': enUS,
}

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
})

const events = [{
  title:'cimple de gustavo',
  notes: 'hay que comprar torta',
  start: new Date(),
  end: addHours(new Date(), 2),
  bgColor: ' #fafafa',
  user:{
    _id:'123',
    name:'gustavo'
  }
}]

export const CalendarPage = () => {
  return (
    <>
      <NavBar/>

      <Calendar
      localizer={localizer}
      events={events}
      startAccessor="start"
      endAccessor="end"
      style={{ height: 500 }}
      />
    </>
  )
}
