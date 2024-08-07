import ResumeSection from "./ResumeSection.jsx";

export default function ({ genInfo, edExperience, pracExperience }) {
  return (
    <div className="flex-1 flex flex-col justify-start text-center max-w-[210mm] min-w-[210mm] min-h-[266mm] bg-white text-black border-x-2">
      <p className="align-self-center text-4xl font-special text-bold pt-16">
        {genInfo.fullName.data}
      </p>
      <p className="align-self-center pt-1">
        {genInfo.address.data}
      </p>
      <p className="justify-self-end">
        {genInfo.phoneNumber.data} | {genInfo.email.data}
      </p>
      <hr className="my-4 mx-8" />
      <ResumeSection title="EDUCATION" content={edExperience} />
      <hr className="my-4 mx-8" />
      <ResumeSection
        title="PRACTICAL EXPERIENCE"
        content={pracExperience}
      />
    </div>
  );
}
//Takes in {title: String, content: Objects[{id: number, companyName: String, positionTitle: String, mainResponsibilities: String, startDate: Date, endDate: Date}]}
