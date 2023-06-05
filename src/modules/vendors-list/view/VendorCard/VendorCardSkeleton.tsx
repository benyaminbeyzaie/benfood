function VendorCardSkeleton() {
  return (
    <div className="overflow-clip rounded-md shadow-md">
      <div className="h-[17rem]">
        <div className="h-56 w-full animate-pulse bg-slate-200" />
        <div className="mx-5 h-20 w-20 translate-y-[-50%] rounded-md bg-slate-200 object-cover shadow-sm" />
      </div>
      <div className="px-5 pb-5">
        <div className="flex flex-row  items-center justify-between text-xs">
          <div className="h-4 w-32 animate-pulse bg-slate-200 text-lg font-bold" />
          <span className="h-8 w-12 animate-pulse bg-slate-200" />
        </div>
        <div className="mt-2 flex flex-row flex-wrap gap-2 text-sm">
          <span className="h-3 w-10 animate-pulse bg-slate-200" />
          <span className="h-3 w-10 animate-pulse bg-slate-200" />
          <span className="h-3 w-10 animate-pulse bg-slate-200" />
        </div>
        <div className="mt-4 flex flex-row items-center justify-between gap-3 text-sm">
          <span className="h-4 w-28 animate-pulse bg-slate-200" />

          <span className="h-4 w-20 animate-pulse bg-slate-200" />
        </div>
      </div>
    </div>
  );
}

export default VendorCardSkeleton;
