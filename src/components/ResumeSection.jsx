import { Fragment } from "react";

export default function ({ title, contentGroup }) {
  return (
    <section className="grid-auto">
      <p className="text-xl col-start-1 col-end-3">{title}</p>
      {contentGroup.map((content) => {
        return (
          <ul key={content.id} className="w-full my-4">
            <li key={content.id} className="w-full grid grid-cols-[25%_75%]">
              {Object.keys(content).map((key, index) => {
                if (key === "id") return null;
                return (
                  <Fragment key={key}>
                    <label className="font-bold">
                      {content[`${key}`].label}:
                    </label>
                    <p className="justify-self-start">
                      {content[`${key}`].data}
                    </p>
                  </Fragment>
                );
              })}
            </li>
          </ul>
        );
      })}
    </section>
  );
}
