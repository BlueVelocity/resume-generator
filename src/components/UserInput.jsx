import FieldCollection from "./FieldCollection.jsx";
import inputFieldsData from "../data/inputFieldsData.js";

export default function UserInput({ genInfo, handleGenChange, edExperience, handleEdChange, pracExperience, handlePracChange }) {
  return (
    <div className="sticky top-6 flex-1 w-full bg-secondary border border-solid rounded-2xl">
      <FieldCollection fields={inputFieldsData.general} inputData={genInfo} handleChange={handleGenChange} />
      <FieldCollection fields={inputFieldsData.edExperience} inputData={edExperience} handleChange={handleEdChange} />
      <FieldCollection fields={inputFieldsData.pracExperience} inputData={pracExperience} handleChange={handlePracChange} />
    </div>
  );
}
