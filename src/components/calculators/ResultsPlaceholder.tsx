export function ResultsPlaceholder({ message }: { message?: string }) {
  return (
    <div className="flex min-h-[160px] flex-col justify-center">
      <p className="text-[15px] font-semibold text-text">Waiting on dimensions</p>
      <p className="mt-1 text-[14px] leading-relaxed text-text-2">
        {message ?? "Enter a length, width, and depth greater than zero. Results update as you type — nothing is sent to a server."}
      </p>
    </div>
  );
}
