import { useState } from "react";

export default function FieldCollection({
  sectionName,
  fields,
  inputData,
  handleChange,
  handleAddClick,
}) {
  const [isMinimized, setIsMinimized] = useState(true);

  const handleMinimize = () => {
    isMinimized ? setIsMinimized(false) : setIsMinimized(true);
  };

  return (
    <form className="w-full my-4 px-12" onSubmit={(e) => e.preventDefault()}>
      <p className="text-2xl">{sectionName}</p>
      {inputData.map((dataSegment, index) => {
        return (
          <ul key={dataSegment.id} className={`${isMinimized ? "hidden" : ""}`}>
            {index !== 0 && <hr className="my-4 border-accent" />}
            {fields.map((fieldData, index) => {
              return (
                <li key={fieldData.id} className="flex flex-col my-2">
                  <label htmlFor={fieldData.id}>{fieldData.label}</label>
                  <input
                    type={fieldData.type}
                    name={
                      dataSegment === undefined
                        ? undefined
                        : Object.keys(dataSegment)[index + 1]
                    }
                    id={fieldData.id}
                    required={
                      fieldData.required === undefined ||
                      fieldData.required === true
                    }
                    pattern={fieldData.pattern}
                    className="text-black outline outline-1 rounded-[0.2rem] p-0.5 invalid:outline-red-500 valid:outline-green-500"
                    defaultValue={
                      dataSegment === undefined
                        ? undefined
                        : dataSegment[`${Object.keys(dataSegment)[index + 1]}`]
                          .data
                    }
                    onChange={handleChange}
                    data-id={dataSegment.id}
                  />
                </li>
              );
            })}
          </ul>
        );
      })}
      <div>
        <button
          onClick={handleMinimize}
          className="text-black bg-accent rounded px-4 py-1 my-2"
        >
          {isMinimized ? "Maximize" : "Minimize"}
        </button>
        <button
          name={sectionName + " Add Button"}
          onClick={handleAddClick}
          className={`${isMinimized ? "hidden" : ""} text-black bg-green-600 rounded px-3 py-1 my-2 ml-2`}
        >
          +
        </button>
      </div>
    </form>
  );
}

// { id: , name: , type: }
