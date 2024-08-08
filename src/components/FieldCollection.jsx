import { useState } from 'react';

export default function FieldCollection({ sectionName, fields, inputData, handleChange }) {
  const [isMinimized, setIsMinimized] = useState(false);

  const handleMinimize = () => {
    isMinimized ? setIsMinimized(false) : setIsMinimized(true);
  }

  return (
    <form className="w-full my-4 px-12" onSubmit={(e) => e.preventDefault()}>
      <p className="text-2xl">{sectionName}</p>
      <ul className={`${isMinimized ? "hidden" : ""}`}>
        {fields.map((fieldData, index) => {
          return (
            <li key={fieldData.id} className="flex flex-col my-2">
              <label htmlFor={fieldData.id}>{fieldData.label}</label>
              <input
                type={fieldData.type}
                name={inputData === undefined ? undefined : Object.keys(inputData)[index + 1]}
                id={fieldData.id}
                required={(fieldData.required === undefined || fieldData.required === true)}
                pattern={fieldData.pattern}
                className="text-black outline outline-1 rounded p-0.5 invalid:outline-red-500 valid:outline-2 valid:outline-green-500"
                defaultValue={inputData === undefined ? undefined : inputData[`${Object.keys(inputData)[index + 1]}`].data}
                onChange={handleChange}
              />
            </li>
          );
        })}
      </ul>
      <div>
        <button onClick={handleMinimize} className="text-black bg-accent rounded px-4 py-1 my-2">
          {isMinimized ? "Maximize" : "Minimize"}
        </button>
      </div>
    </form>
  );
}

// { id: , name: , type: }
