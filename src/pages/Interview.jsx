import { questions } from "../data/questions";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { VoiceAIButton } from "vtk-voice-ai-sdk";

function Interview() {
  const location = useLocation();

  const candidateName =
    location.state?.candidateName || "Candidate";

  const interviewType =
    location.state?.interviewType || "React";

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const interviewQuestions =
    questions[interviewType] || questions.React;

  const handleNextQuestion = () => {
    if (currentQuestionIndex < interviewQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white relative">
      <div className="max-w-5xl mx-auto px-6 py-10">
        <h1 className="text-4xl font-bold">
          Technical Interview
        </h1>

        <p className="text-slate-300 mt-3">
          Candidate: {candidateName}
        </p>

        <p className="text-blue-400">
          Interview Type: {interviewType}
        </p>

        <p className="text-slate-400 mt-2">
          Question {currentQuestionIndex + 1} of{" "}
          {interviewQuestions.length}
        </p>

        {/* Progress Bar */}
        <div className="w-full bg-slate-800 rounded-full h-3 mt-8">
          <div
            className="bg-blue-500 h-3 rounded-full transition-all duration-300"
            style={{
              width: `${
                ((currentQuestionIndex + 1) /
                  interviewQuestions.length) *
                100
              }%`,
            }}
          />
        </div>

        {/* Question Card */}
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 mt-10">
          <h2 className="text-xl font-semibold text-blue-400">
            AI Interviewer
          </h2>

          <p className="mt-6 text-2xl">
            {interviewQuestions[currentQuestionIndex]}
          </p>
        </div>

        {/* Transcript Area */}
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 mt-8">
          <h3 className="text-lg font-semibold">
            Your Answer
          </h3>

          <p className="mt-4 text-slate-400">
            Your voice transcript will appear here...
          </p>
        </div>

        {/* Controls */}
        <div className="flex gap-4 mt-8 flex-wrap">
          <button className="bg-green-600 hover:bg-green-700 px-6 py-3 rounded-xl">
            Start Recording
          </button>

          <button className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-xl">
            Submit Answer
          </button>

          <button
            onClick={handleNextQuestion}
            className="bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-xl"
          >
            Next Question
          </button>
        </div>
      </div>

      {/* AIROMOB Voice Widget */}
      <VoiceAIButton
        buttonType="widget"
        title="AI Interview Assistant"
      />
    </div>
  );
}

export default Interview;