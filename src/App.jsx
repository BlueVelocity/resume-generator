import { useState } from "react";
import UserInput from "./components/UserInput.jsx";
import ResumeDisplay from "./components/ResumeDisplay.jsx";
import defaultData from "./data/defaultData.js";

const defaultEdData = JSON.parse(JSON.stringify(defaultData.edExperience[0]));
const defaultPracData = JSON.parse(JSON.stringify(defaultData.pracExperience[0]));

export default function App() {
  const [genInfo, setGenInfo] = useState(defaultData.genInfo);
  const [edExperience, setEdExperience] = useState(defaultData.edExperience);
  const [pracExperience, setPracExperience] = useState(
    defaultData.pracExperience,
  );

  const handleGenChange = (e) => {
    const { name, value } = e.target;
    setGenInfo((prevState) => {
      const currentObj = prevState[0];
      const currArr = [...prevState];
      const newObj = {
        ...currentObj,
        [name]: { ...currentObj[`${name}`], data: value },
      };
      currArr[0] = newObj;
      return currArr;
    });
  };

  const handleEdChange = (e) => {
    const { name, value } = e.target;
    const dataId = Number(e.target.getAttribute("data-id"));
    setEdExperience((prevState) => {
      const currentObjIndex = prevState.findIndex((obj) => obj.id === dataId);
      const currentObj = prevState[currentObjIndex];
      const currArr = [...prevState];
      const newObj = {
        ...currentObj,
        [name]: { ...currentObj[`${name}`], data: value },
      };
      currArr[currentObjIndex] = newObj;
      return currArr;
    });
  };

  const handlePracChange = (e) => {
    const { name, value } = e.target;
    const dataId = Number(e.target.getAttribute("data-id"));
    setPracExperience((prevState) => {
      const currentObjIndex = prevState.findIndex((obj) => obj.id === dataId);
      const currentObj = prevState[currentObjIndex];
      const currArr = [...prevState];
      if (name === "endDate" && value === "") {
        const newObj = {
          ...currentObj,
          [name]: { ...currentObj[`${name}`], data: "Current" },
        };
        currArr[currentObjIndex] = newObj;
        return currArr;
      }
      const newObj = {
        ...currentObj,
        [name]: { ...currentObj[`${name}`], data: value },
      };
      currArr[currentObjIndex] = newObj;
      return currArr;
    });
  };

  const handleAddFields = (e) => {
    const fieldName = e.target.name;
    if (fieldName === "Educational Experience Add Button") {
      setEdExperience((edExp) => {
        const newData = JSON.parse(JSON.stringify(defaultEdData));
        newData.id = edExp.length + 1;
        return [...edExp, newData]
      });
    } else if (fieldName === "Practical Experience Add Button") {
      setPracExperience((pracExp) => {
        const newData = JSON.parse(JSON.stringify(defaultPracData));
        newData.id = pracExp.length + 1;
        return [...pracExp, newData]
      });
    }
  };

  return (
    <main className="flex-1 grid grid-cols-main grid-rows-main gap-4 max-w-screen-2xl mx-4">
      <UserInput
        genInfo={genInfo}
        handleGenChange={handleGenChange}
        edExperience={edExperience}
        handleEdChange={handleEdChange}
        pracExperience={pracExperience}
        handlePracChange={handlePracChange}
        handleAddFields={handleAddFields}
      />
      <ResumeDisplay
        genInfo={genInfo}
        edExperience={edExperience}
        pracExperience={pracExperience}
      />
    </main>
  );
}
