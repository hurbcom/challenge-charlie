export function ForecastOverviewSekeletonComponent() {
  return (
    <div className="grid grid-rows-[44px_192px_64px_64px]">
      <div className="bg-gray-200 grid grid-rows-1 p-4">
        <div className="bg-gray-400 rounded-full animate-pulse"></div>
      </div>
      <div className="bg-gray-100 grid grid-cols-2">
        <div className="grid place-items-center">
          <div className="bg-gray-200 rounded-full w-[140px] h-[140px] animate-pulse"></div>
        </div>
        <div className="grid grid-rows-auto gap-2 pt-8 pr-4 pb-8">
          <div className="bg-gray-200 rounded-full animate-pulse"></div>
          <div className="bg-gray-200 rounded-full animate-pulse"></div>
          <div className="bg-gray-200 rounded-full animate-pulse"></div>
          <div className="bg-gray-200 rounded-full animate-pulse"></div>
          <div className="bg-gray-200 rounded-full animate-pulse"></div>
          <div className="bg-gray-200 rounded-full animate-pulse"></div>
        </div>
      </div>
      <div className="bg-gray-300 grid grid-rows-1 p-6">
        <div className="bg-gray-500 rounded-full animate-pulse"></div>
      </div>
      <div className="bg-gray-400 grid grid-rows-1 p-6">
        <div className="bg-gray-600 rounded-full animate-pulse"></div>
      </div>
    </div>
  );
}
