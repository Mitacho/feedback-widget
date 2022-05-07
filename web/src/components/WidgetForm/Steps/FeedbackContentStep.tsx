import { ArrowLeft } from "phosphor-react";
import { ChangeEvent, FormEvent, useState } from "react";
import { CloseButton } from "../../CloseButton";
import { ScreenshotButton } from "../ScreenshotButton";
import { FeedbackType, feedbackTypes } from "../WidgetForm";

interface FeedbackContentStepProps {
  feedbackType: FeedbackType;
  onFeedbackRestartRequest: () => void;
  onFeedbackSent: () => void;
}

export function FeedbackContentStep({
  feedbackType,
  onFeedbackRestartRequest,
  onFeedbackSent,
}: FeedbackContentStepProps) {
  const [screenshot, setScreenshot] = useState<string | null>(null);
  const [comment, setComment] = useState<string>("");

  const feedbackTypeInfo = feedbackTypes[feedbackType];

  function onChangeComment(event: ChangeEvent<HTMLTextAreaElement>) {
    setComment(event.target.value);
  }

  function handleSubmitFeedback(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    console.log({
      screenshot,
      comment,
    });

    onFeedbackSent();
  }

  return (
    <>
      <header>
        <button
          type="button"
          className="
            absolute top-5 left-5 text-zinc-400
            hover:text-zinc-100
          "
          onClick={onFeedbackRestartRequest}
        >
          <ArrowLeft weight="bold" className="h-4 w-4" />
        </button>
        <span className="flex items-center gap-2 text-xl leading-6">
          <img
            src={feedbackTypeInfo.image.source}
            alt={feedbackTypeInfo.image.alt}
            className="h-6 w-6"
          />
          {feedbackTypeInfo.title}
        </span>
        <CloseButton />
      </header>
      <form onSubmit={handleSubmitFeedback} className="my-4 w-full">
        <textarea
          className="
            min-h-[112px] w-full min-w-[304px] resize-none
            rounded-md border-zinc-600 bg-transparent text-sm
            text-zinc-100 placeholder-zinc-400
            scrollbar scrollbar-track-transparent
            scrollbar-thumb-zinc-700 focus:border-brand-500
            focus:outline-none focus:ring-1 focus:ring-brand-500
          "
          placeholder="Conte com detalhes o que está acontecendo…"
          onChange={onChangeComment}
        />
        <footer className="mt-2 flex gap-2">
          <ScreenshotButton
            onScreenshotTaken={setScreenshot}
            screenshot={screenshot}
          />
          <button
            type="submit"
            disabled={!comment.length}
            className="
              flex flex-1 items-center justify-center rounded-md
              border-transparent bg-brand-500 p-2 text-sm
              transition-colors hover:bg-brand-300 focus:outline-none
              focus:ring-2 focus:ring-brand-500
              focus:ring-offset-2 focus:ring-offset-zinc-900
              disabled:opacity-50 disabled:hover:bg-brand-500
            "
          >
            Enviar feedback
          </button>
        </footer>
      </form>
    </>
  );
}
