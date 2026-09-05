import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const [candidateName, setCandidateName] = useState("");
  const [interviewType, setInterviewType] = useState("React");

  const handleStartInterview = () => {
    if (!candidateName.trim()) {
      alert("Please enter your name");
      return;
    }

    navigate("/interview", {
      state: {
        candidateName,
        interviewType,
      },
    });
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="text-center">
          <span className="px-4 py-2 rounded-full bg-blue-500/20 text-blue-400 text-sm">
            AI Powered Technical Interviews
          </span>

          <h1 className="mt-6 text-5xl md:text-7xl font-bold">
            AI Voice Interview
            <span className="text-blue-500"> Assistant</span>
          </h1>

          <p className="mt-6 text-slate-400 text-lg max-w-2xl mx-auto">
            Practice technical interviews using AI voice conversations,
            real-time feedback, and detailed performance analysis.
          </p>
        </div>

        <div className="max-w-xl mx-auto mt-16">
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 shadow-2xl">
            <h2 className="text-2xl font-semibold mb-6">
              Start New Interview
            </h2>

            <div className="space-y-5">
              <div>
                <label className="block mb-2 text-slate-300">
                  Candidate Name
                </label>

                <input
                  type="text"
                  placeholder="Enter your name"
                  value={candidateName}
                  onChange={(e) => setCandidateName(e.target.value)}
                  className="w-full p-4 rounded-xl bg-slate-800 border border-slate-700 focus:outline-none focus:border-blue-500"
                />
              </div>

              <div>
                <label className="block mb-2 text-slate-300">
                  Interview Type
                </label>

                <select
                  value={interviewType}
                  onChange={(e) => setInterviewType(e.target.value)}
                  className="w-full p-4 rounded-xl bg-slate-800 border border-slate-700 focus:outline-none focus:border-blue-500"
                >
                  <option>React</option>
                  <option>JavaScript</option>
                  <option>MERN Stack</option>
                  <option>Software Engineering</option>
                </select>
              </div>

              <button
                onClick={handleStartInterview}
                className="w-full bg-blue-600 hover:bg-blue-700 transition-all py-4 rounded-xl font-semibold text-lg"
              >
                Start Interview
              </button>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-20">
          <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800">
            <h3 className="text-xl font-semibold">🎙 Voice Interview</h3>
            <p className="text-slate-400 mt-3">
              Conduct realistic voice-based technical interviews.
            </p>
          </div>

          <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800">
            <h3 className="text-xl font-semibold">🤖 Gemini Evaluation</h3>
            <p className="text-slate-400 mt-3">
              Receive AI-generated scores and detailed feedback.
            </p>
          </div>

          <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800">
            <h3 className="text-xl font-semibold">📊 Performance Report</h3>
            <p className="text-slate-400 mt-3">
              Track strengths, weaknesses and interview progress.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;