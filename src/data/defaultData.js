export default {
  genInfo: [
    {
      id: 1,
      fullName: { data: "[Full Name]", type: "text" },
      address: {
        data: "[House #], [St. Name], [City], [State/Province] [ZIP Code]",
        type: "text",
      },
      email: { data: "[Email]", type: "email" },
      phoneNumber: { data: "226 507-1234", type: "tel" },
    },
  ],
  edExperience: [
    {
      id: 1,
      schoolName: {
        label: "School Name",
        data: "Young Bernards Academy",
        type: "text",
      },
      titleOfStudy: {
        label: "Title of Study",
        data: "Bakers Bachelor",
        type: "text",
      },
      dateOfStudy: { label: "Date of Study", data: "2024-06-21", type: "date" },
    },
  ],
  pracExperience: [
    {
      id: 1,
      companyName: { label: "Company Name", data: "Walmart", type: "text" },
      positionTitle: {
        label: "Position Title",
        data: "Supervisor",
        type: "text",
      },
      mainResponsibilities: {
        label: "Main Responsibilities",
        data: "Cool dude",
        type: "text",
      },
      startDate: { label: "Start Date", data: "2024-01-01", type: "date" },
      endDate: { label: "End Date", data: "2024-02-02", type: "date" },
    },
  ],
};
