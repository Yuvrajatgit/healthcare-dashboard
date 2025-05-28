const calendarAppointments = [
  {
    name: "Mon",
    date: 25,
    times: [{ label: "10:00" }, { label: "11:00" }, { label: "12:00" }],
  },
  {
    name: "Tues",
    date: 26,
    isActive: true,
    times: [
      { label: "08:00" },
      { label: "09:00", highlight: true },
      { label: "10:00" },
    ],
  },
  {
    name: "Wed",
    date: 27,
    times: [{ label: "12:00" }, { label: "-" }, { label: "13:00" }],
  },
  {
    name: "Thurs",
    date: 28,
    times: [
      { label: "10:00" },
      { label: "11:00", highlight: "gray", showDot: true },
      { label: "-" },
    ],
  },
  {
    name: "Fri",
    date: 29,
    times: [{ label: "-" }, { label: "14:00" }, { label: "16:00" }],
  },
  {
    name: "Sat",
    date: 30,
    sharedHighlightGroupStart: true,
    times: [
      { label: "12:00", highlight: "gray", showDot: true },
      { label: "14:00" },
      { label: "15:00" },
    ],
  },
  {
    name: "Sun",
    date: 31,
    sharedHighlightGroupStart: true,
    disabled: true,
    times: [
      { label: "09:00", highlight: "gray", showDot: true },
      { label: "10:00" },
      { label: "11:00" },
    ],
  },
];

export const calendarEventCards = [
  {
    title: "Dentist",
    icon: "🦷",
    time: "09:00–11:00",
    doctor: "Dr. Cameron Williamson",
    bgColor: "#3634a8",
    color: "#ffffff",
    width: "11rem",
  },
  {
    title: "Physiotherapy Appointment",
    icon: "💪",
    time: "11:00–12:00",
    doctor: "Dr. Kevin Djones",
    width: "19rem",
    color: "#39358d",
  },
];

export default calendarAppointments;
