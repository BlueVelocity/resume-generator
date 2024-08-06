import FieldCollection from "./FieldCollection.jsx";
import inputFieldsData from "../data/inputFieldsData.js";

export default function UserInput({ fieldSets }) {
  return (
    <div className="flex-1 w-full bg-secondary border border-solid rounded-2xl">
      <FieldCollection fields={inputFieldsData.general} />
    </div>
  );
}
