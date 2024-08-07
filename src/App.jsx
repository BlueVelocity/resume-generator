import { useState } from "react";
import UserInput from "./components/UserInput.jsx";
import ResumeDisplay from "./components/ResumeDisplay.jsx";

export default function App() {
  const [genInfo, setGenInfo] = useState({
    id: 1,
    fullName: { data: "Slim Shady", type: "text" },
    address: { data: "123, Henesy Street, Cleveland, OH L8F 3F4", type: "text" },
    email: { data: "spaghetti@hotmail.com", type: "email" },
    phoneNumber: { data: "226 507-1234", type: "tel" }
  });

  const handleGenChange = (e) => {
    const { name, value } = e.target;
    setGenInfo(prevState => ({
      ...prevState,
      [name]: { ...prevState[`${name}`], data: value },
    }));
  };

  const [edExperience, setEdExperience] = useState({
    id: 1,
    schoolName: { label: "School Name", data: "Young Bernards Academy", type: "text" },
    titleOfStudy: { label: "Title of Study", data: "Bakers Bachelor", type: "text" },
    dateOfStudy: { label: "Date of Study", data: "2024-06-21", type: "date" }
  });

  const handleEdChange = (e) => {
    const { name, value } = e.target;
    setEdExperience(prevState => ({
      ...prevState,
      [name]: { ...prevState[`${name}`], data: value },
    }));
  };

  const [pracExperience, setPracExperience] = useState({
    id: 1,
    companyName: { label: "Company Name", data: "Walmart", type: "text" },
    positionTitle: { label: "Position Title", data: "Supervisor", type: "text" },
    mainResponsibilities: { label: "Main Responsibilities", data: "Cool dude", type: "text" },
    startDate: { label: "Start Date", data: "2024-01-01", type: "date" },
    endDate: { label: "End Date", data: "2024-02-02", type: "date" },
  });

  const handlePracChange = (e) => {
    const { name, value } = e.target;
    setPracExperience(prevState => ({
      ...prevState,
      [name]: { ...prevState[`${name}`], data: value },
    }));
  }

  return (
    <main className="flex-1 grid grid-cols-main grid-rows-main gap-4 max-w-screen-2xl mx-4">
      <UserInput
        genInfo={genInfo}
        handleGenChange={handleGenChange}
        edExperience={edExperience}
        handleEdChange={handleEdChange}
        pracExperience={pracExperience}
        handlePracChange={handlePracChange}
      />
      <ResumeDisplay
        genInfo={genInfo}
        edExperience={edExperience}
        pracExperience={pracExperience}
      />
    </main>
  );
}
