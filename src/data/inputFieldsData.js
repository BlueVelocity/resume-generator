export default {
  general: [
    { id: 1, label: "Full Name", type: "text", pattern: "\\w+\\s+\\w+" },
    { id: 2, label: "Email", type: "email" },
    {
      id: 3,
      label: "Phone Number",
      type: "tel",
    },
  ],
  experience: [
    { id: 1, label: "Company Name", type: "text" },
    { id: 2, label: "Position Title", type: "text" },
    { id: 3, label: "Main Responsibilities", type: "text" },
    { id: 4, label: "Start Date", type: "date" },
    { id: 5, label: "End Date", type: "date" },
  ],
};
