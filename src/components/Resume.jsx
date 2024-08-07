import EdResumeSection from "./EdResumeSection.jsx";
import PracResumeSection from "./PracResumeSection.jsx";

export default function () {
  return (
    <div className="flex-1 flex flex-col justify-start text-center max-w-[210mm] min-w-[210mm] min-h-[266mm] bg-white text-black border-x-2">
      <p className="align-self-center text-4xl font-special text-bold pt-16">
        Slim Shady
      </p>
      <p className="align-self-center pt-1">
        123, Henesy Street, Cleveland, Ohio L8F 3F4
      </p>
      <p className="justify-self-end">
        (905) 245-9087 | theGreatKazoo@gmail.com
      </p>
      <hr className="my-4 mx-8" />
      <EdResumeSection
        title="EDUCATION"
        content={[
          {
            id: 1,
            schoolName: "Young Bernards Academy",
            titleOfStudy: "Bakers Bachelor",
            dateOfStudy: "2024-06-21 to Current",
          },
        ]}
      />
      <hr className="my-4 mx-8" />
      <PracResumeSection
        title="PRACTICAL EXPERIENCE"
        content={[
          {
            id: 1,
            companyName: "Walmart",
            positionTitle: "Supervisor",
            mainResponsibilities: "Cool dude",
            startDate: "2024-01-01",
            endDate: "2024.02-02",
          },
        ]}
      />
    </div>
  );
}
//Takes in {title: String, content: Objects[{id: number, companyName: String, positionTitle: String, mainResponsibilities: String, startDate: Date, endDate: Date}]}
