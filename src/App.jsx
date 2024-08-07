import { useState } from "react";
import UserInput from "./components/UserInput.jsx";
import ResumeDisplay from "./components/ResumeDisplay.jsx";

export default function App() {
  const [edExperience, setEdExperience] = useState({
    id: 1,
    schoolName: "Young Bernards Academy",
    titleOfStudy: "Bakers Bachelor",
    dateOfStudy: "2024-06-21 to Current",
  });
  const [pracExperience, setPracExperience] = useState({
    id: 1,
    companyName: "Walmart",
    positionTitle: "Supervisor",
    mainResponsibilities: "Cool dude",
    startDate: "2024-01-01",
    endDate: "2024.02-02",
  });

  return (
    <main className="flex-1 grid grid-cols-main grid-rows-main gap-4 max-w-screen-2xl mx-4">
      <UserInput
        edExperience={edExperience}
        onEdExpChange={(obj) => setEdExperience(obj)}
        pracExperience={pracExperience}
        onPraceExpChange={(obj) => setPracExperience(obj)}
      />
      <ResumeDisplay
        edExperience={edExperience}
        pracExperience={pracExperience}
      />
    </main>
  );
}
