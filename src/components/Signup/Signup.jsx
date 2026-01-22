import SignupForm from "./SignupLeft";
import SignupRightPanel from "./SignupRight";


export default function Signup() {
  return (
    <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2 bg-white dark:bg-gray-950">

      {/* LEFT PANEL */}
      <div className="flex items-center justify-center px-6 py-12">
        <SignupForm />
      </div>

      {/* RIGHT PANEL */}
      <SignupRightPanel />

    </div>
  );
}
