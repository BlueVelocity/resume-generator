import UserInput from "./components/UserInput.jsx";
import ResumeDisplay from "./components/ResumeDisplay.jsx";

export default function App() {
  return (
    <main className="flex-1 grid grid-cols-main gap-1 max-w-screen-2xl">
      <UserInput />
      <ResumeDisplay />
    </main>
  );
}
