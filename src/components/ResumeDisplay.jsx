import Resume from "./Resume.jsx";

export default function ResumeDisplay({ edExperience, pracExperience }) {
  return (
    <div className="row-span-2 w-full min-h-full bg-[#d1d5db] px-6 rounded flex justify-center">
      <Resume edExperience={edExperience} pracExperience={pracExperience} />
    </div>
  );
}
