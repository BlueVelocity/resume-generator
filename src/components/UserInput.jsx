import FieldCollection from "./FieldCollection.jsx";
import inputFieldsData from "../data/inputFieldsData.js";

export default function UserInput() {
  return (
    <div className="sticky top-6 flex-1 w-full bg-secondary border border-solid rounded-2xl">
      <FieldCollection fields={inputFieldsData.general} />
      <FieldCollection fields={inputFieldsData.edExperience} />
      <FieldCollection fields={inputFieldsData.pracExperience} />
    </div>
  );
}
