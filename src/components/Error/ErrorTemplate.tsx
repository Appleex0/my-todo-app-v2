import { MdErrorOutline } from "react-icons/md";

function ErrorTemplate({ details, detailsNumber, howMuch }: {details:string, detailsNumber:string, howMuch:string}) {
  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex items-center justify-between gap-3 min-w-70 max-w-md border border-red-200/30 dark:border-red-900/50 px-4 py-3 rounded-xl bg-red-50 dark:bg-red-950/40 text-red-800 dark:text-red-200 shadow-lg backdrop-blur-sm transition-all duration-300 animate-slide-up">
      <div className="flex items-center gap-2 text-sm font-semibold tracking-wide">
        <MdErrorOutline className="text-xl shrink-0 text-red-600 dark:text-red-400" />
        <span>
          {details} cannot be {howMuch} than {detailsNumber} characters.
        </span>
      </div>
    </div>
  );
}

export default ErrorTemplate;