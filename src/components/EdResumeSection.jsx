import { Fragment } from "react";
//Takes in {title: String, content: Objects[{id: number, schoolName: String, titleOfStudy: String, dateOfStudy: String}]}
export default function ({ title, content }) {
  return (
    <section className="grid-auto">
      <p className="font-special text-2xl col-start-1 col-end-3">{title}</p>
      <ul className="w-full my-4">
        {content.map((part) => {
          return (
            <li key={part.id} className="w-full grid grid-cols-[25%_75%]">
              {Object.keys(part).map((key, index) => {
                if (key === "id") return null;
                return (
                  <Fragment key={key}>
                    <label className="font-bold">{key}:</label>
                    <p className="justify-self-start">{part[`${key}`]}</p>
                  </Fragment>
                );
              })}
            </li>
          );
        })}
      </ul>
    </section>
  );
}
