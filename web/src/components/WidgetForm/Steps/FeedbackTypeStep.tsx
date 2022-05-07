import { CloseButton } from "../../CloseButton";
import { FeedbackType, feedbackTypes } from "../WidgetForm";

interface FeedbackTypeStepProps {
  onSelectFeedbackType: (key: FeedbackType) => void;
}

export function FeedbackTypeStep({
  onSelectFeedbackType,
}: FeedbackTypeStepProps) {
  return (
    <>
      <header>
        <span className="text-xl leading-6">Deixe seu Feedback</span>
        <CloseButton />
      </header>
      <div className="flex w-full gap-2 py-8">
        {Object.entries(feedbackTypes).map(([key, value]) => (
          <button
            key={key}
            className="
                flex w-24 flex-1 flex-col items-center gap-2 rounded-lg
                border-2 border-transparent bg-zinc-800 py-5
                hover:border-brand-500 focus:border-brand-500
                focus:outline-none
              "
            type="button"
            onClick={() => onSelectFeedbackType(key as FeedbackType)}
          >
            <img src={value.image.source} alt={value.image.alt} />
            <span>{value.title}</span>
          </button>
        ))}
      </div>
    </>
  );
}
