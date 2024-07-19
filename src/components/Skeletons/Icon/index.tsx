import ContentLoader from "react-content-loader";

const IconSkeleton = () => (
  <ContentLoader
    speed={2}
    width={180}
    height={160}
    backgroundColor="#f3f3f3"
    foregroundColor="#c3c3c3"
    data-testid="icon-skeleton"
  >
    <rect x="10" y="10" rx="6" ry="6" width="180" height="160" />
  </ContentLoader>
);

export default IconSkeleton;
