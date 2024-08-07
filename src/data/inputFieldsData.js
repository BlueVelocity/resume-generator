export default {
  general: [
    {
      id: 1,
      label: "Full Name",
      type: "text",
      pattern: "^[^\\s]+(\\s+[^\\s]+)+$",
    },
    { id: 2, label: "Address", type: "text" },
    { id: 3, label: "Email", type: "email" },
    {
      id: 4,
      label: "Phone Number",
      type: "tel",
    },
  ],
  edExperience: [
    { id: 1, label: "School Name", type: "text" },
    { id: 2, label: "Title of Study", type: "text" },
    { id: 3, label: "Date of Study", type: "date" },
  ],
  pracExperience: [
    { id: 1, label: "Company Name", type: "text" },
    { id: 2, label: "Position Title", type: "text" },
    { id: 3, label: "Main Responsibilities", type: "text" },
    { id: 4, label: "Start Date", type: "date" },
    { id: 5, label: "End Date", type: "date" },
  ],
};
