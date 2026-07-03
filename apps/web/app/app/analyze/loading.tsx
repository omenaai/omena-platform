export default function AnalyzeLoadingPage() {
  return (
    <div className="mx-auto flex w-full max-w-[1200px] flex-col gap-6 px-6 py-10 md:py-14">
      <div className="rounded-[32px] border border-border bg-card/90 p-6 shadow-sm">
        <div className="h-4 w-28 animate-pulse rounded-full bg-primary/12" />
        <div className="mt-5 h-10 max-w-xl animate-pulse rounded-2xl bg-muted" />
        <div className="mt-3 h-5 max-w-2xl animate-pulse rounded-2xl bg-muted/80" />
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
        {Array.from({ length: 5 }).map((_, index) => (
          <div key={index} className="h-28 animate-pulse rounded-[24px] border border-border bg-card/90" />
        ))}
      </div>

      <div className="grid gap-6 xl:grid-cols-2">
        {Array.from({ length: 4 }).map((_, index) => (
          <div key={index} className="h-72 animate-pulse rounded-[28px] border border-border bg-card/90" />
        ))}
      </div>
    </div>
  );
}
