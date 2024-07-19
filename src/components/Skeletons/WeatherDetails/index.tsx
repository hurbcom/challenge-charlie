import ContentLoader from "react-content-loader";

type Props = {
  showDetails: boolean;
};

const WeatherDetailsSkeleton = ({ showDetails }: Props) => (
  <ContentLoader
    speed={2}
    width={200}
    height={showDetails ? 184 : 43}
    backgroundColor="#f3f3f3"
    foregroundColor="#c3c3c3"
  >
    <rect x="0" y="0" rx="3" ry="3" width="170" height="18" />
    <rect x="0" y="24" rx="3" ry="3" width="40" height="18" />
    <rect x="0" y="68" rx="3" ry="3" width="155" height="18" />
    {showDetails ? (
      <>
        <rect x="0" y="110" rx="3" ry="3" width="145" height="16" />
        <rect x="0" y="135" rx="3" ry="3" width="115" height="16" />
        <rect x="0" y="160" rx="3" ry="3" width="125" height="16" />
      </>
    ) : null}
  </ContentLoader>
);

export default WeatherDetailsSkeleton;
