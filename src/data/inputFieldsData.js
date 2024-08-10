export default {
  general: [
    {
      id: 1,
      label: "Full Name",
      type: "text",
      placeholder: "Name",
      pattern: "^[^\\s]+(\\s+[^\\s]+)+$",
    },
    { id: 2, label: "Address", type: "text", placeholder: "000 Streetname St, Province, CA A1A 1A1" },
    { id: 3, label: "Email", type: "email", placeholder: "example@provider.com" },
    {
      id: 4,
      label: "Phone Number",
      type: "tel",
      placeholder: "000 000-0000"
    },
  ],
  edExperience: [
    { id: 1, label: "School Name", type: "text", placeholder: "Blank Academy" },
    { id: 2, label: "Title of Study", type: "text", placeholder: "Computer Science" },
    { id: 3, label: "Date of Study", type: "date", placeholder: "" },
  ],
  pracExperience: [
    { id: 1, label: "Company Name", type: "text", placeholder: "Example Business Name" },
    { id: 2, label: "Position Title", type: "text", placeholder: "Example CEO" },
    { id: 3, label: "Main Responsibilities", type: "text", placeholder: "Personality Hire" },
    { id: 4, label: "Start Date", type: "date", placeholder: "" },
    { id: 5, label: "End Date (Leave blank for current)", type: "date", required: false, placeholder: "" },
  ],
};
