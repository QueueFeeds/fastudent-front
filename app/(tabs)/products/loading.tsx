export default function Loading() {
  return (
    <div className="p-5 animate-pulse flex flex-col gap-5">
      {[...Array(10)].map((_, index) => (
        <div key={index} className="*:rounded-md flex gap-5 animate-pulse">
          <div className="size-28 rounded-md bg-neutral-700" />
          <div className="flex flex-col gap-2 *:rounded-md">
            <div className="bg-neutral-700 h-5 w-60" />
            <div className="bg-neutral-700 h-5 w-32" />
            <div className="bg-neutral-700 h-5 w-16" />
          </div>
        </div>
      ))}
    </div>
  );
}
