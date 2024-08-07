export default function FieldCollection({ fields }) {
  return (
    <form className="w-full my-4 px-12" onSubmit={(e) => e.preventDefault()}>
      <ul>
        {fields.map((fieldData) => {
          return (
            <li key={fieldData.id} className="flex flex-col my-2">
              <label htmlFor={fieldData.id}>{fieldData.label}</label>
              <input
                type={fieldData.type}
                id={fieldData.id}
                required
                pattern={fieldData.pattern}
                className="text-black outline outline-1 rounded p-0.5 invalid:outline-red-500 valid:outline-2 valid:outline-green-500"
              />
            </li>
          );
        })}
      </ul>
      <div>
        <button className="text-black bg-accent rounded px-4 py-1 my-2">
          Submit
        </button>
        <button className="text-black bg-accent rounded px-4 py-1 my-2 ml-4">
          Edit
        </button>
      </div>
    </form>
  );
}

// { id: , name: , type: }
