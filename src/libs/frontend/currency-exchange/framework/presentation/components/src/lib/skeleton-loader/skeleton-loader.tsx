export function SkeletonLoader() {
  return (
    <div className="grid grid-rows-auto rounded-lg overflow-hidden shadow-lg">
      <div className="text-xl text-gray-600 bg-gray-200/60 p-2">
        <div className="bg-gray-300/60 rounded-full animate-pulse h-[28px]"></div>
      </div>
      <div className="grid grid-rows-auto bg-gray-100/60 gap-2 p-2">
        <div className="grid grid-cols-[auto_1fr] grid-rows-1 gap-2">
          <div className="grid grid-cols-[40px_100px] gap-2">
            <div className="self-center">
              <div className="bg-gray-200/60 rounded-full animate-pulse h-[24px]"></div>
            </div>
            <div className="bg-gray-200/60 rounded-full animate-pulse h-[40px]"></div>
          </div>
          <div className="grid grid-cols-1">
            <div className="bg-gray-200/60 rounded-full animate-pulse h-[40px]"></div>
          </div>
        </div>
        <div className="grid grid-cols-[auto_1fr] grid-rows-1 gap-2">
          <div className="grid grid-cols-[40px_100px] gap-2">
            <div className="self-center">
              <div className="bg-gray-200/60 rounded-full animate-pulse h-[24px]"></div>
            </div>
            <div className="bg-gray-200/60 rounded-full animate-pulse h-[40px]"></div>
          </div>
          <div className="grid grid-cols-1">
            <div className="bg-gray-200/60 rounded-full animate-pulse h-[40px]"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
