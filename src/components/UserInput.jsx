import FieldCollection from "./FieldCollection.jsx";
import inputFieldsData from "../data/inputFieldsData.js";

export default function UserInput({ genInfo, handleGenChange, edExperience, handleEdChange, pracExperience, handlePracChange }) {
  return (
    <div className="sticky top-6 flex-1 w-full bg-secondary border border-solid rounded-2xl">
      <FieldCollection sectionName="General Info" fields={inputFieldsData.general} inputData={genInfo} handleChange={handleGenChange} />
      <FieldCollection sectionName="Educational Experience" fields={inputFieldsData.edExperience} inputData={edExperience} handleChange={handleEdChange} />
      <FieldCollection sectionName="Practical Experience" fields={inputFieldsData.pracExperience} inputData={pracExperience} handleChange={handlePracChange} />
    </div>
  );
}
