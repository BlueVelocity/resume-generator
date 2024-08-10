export default {
  genInfo: [
    {
      id: 1,
      fullName: { data: "", type: "text" },
      address: {
        data: "",
        type: "text",
      },
      email: { data: "", type: "email", placeholder: "Email" },
      phoneNumber: { data: "", type: "tel" },
    },
  ],
  edExperience: [
    {
      id: 1,
      schoolName: {
        label: "School Name",
        data: "",
        type: "text",
      },
      titleOfStudy: {
        label: "Title of Study",
        data: "",
        type: "text",
      },
      dateOfStudy: { label: "Date of Study", data: "", type: "date" },
    },
  ],
  pracExperience: [
    {
      id: 1,
      companyName: { label: "Company Name", data: "", type: "text" },
      positionTitle: {
        label: "Position Title",
        data: "",
        type: "text",
      },
      mainResponsibilities: {
        label: "Main Responsibilities",
        data: "",
        type: "text",
      },
      startDate: { label: "Start Date", data: "", type: "date" },
      endDate: { label: "End Date", data: "", type: "date" },
    },
  ],
};
