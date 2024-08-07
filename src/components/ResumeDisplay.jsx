import Resume from "./Resume.jsx";

export default function ResumeDisplay({ genInfo, edExperience, pracExperience }) {
  return (
    <div className="row-span-2 w-full min-h-full bg-[#d1d5db] px-6 rounded flex justify-center">
      <Resume genInfo={genInfo} edExperience={edExperience} pracExperience={pracExperience} />
    </div>
  );
}
