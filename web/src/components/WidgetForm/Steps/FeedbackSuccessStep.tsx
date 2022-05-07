import SuccessImage from "../../../assets/success.svg";
import { CloseButton } from "../../CloseButton";

interface FeedbackSuccessStepProps {
  onFeedbackRestartRequested: () => void;
}

export function FeedbackSuccessStep({
  onFeedbackRestartRequested,
}: FeedbackSuccessStepProps) {
  return (
    <>
      <header>
        <CloseButton />
      </header>
      <div className="flex w-[304px] flex-col items-center py-10">
        <img src={SuccessImage} alt="Ícone de sucesso" />
        <span className="mt-2 text-xl">Agradecemos o feedback!</span>
        <button
          type="button"
          onClick={onFeedbackRestartRequested}
          className="
            mt-6 rounded-md border-transparent bg-zinc-800 py-2 px-6
            text-sm leading-6 transition-colors hover:bg-zinc-700
            focus:outline-none focus:ring-2 focus:ring-brand-500
            focus:ring-offset-2 focus:ring-offset-zinc-900
            disabled:opacity-50 disabled:hover:bg-brand-500
          "
        >
          Quero enviar outro
        </button>
      </div>
    </>
  );
}
