interface SkeletonProps {
  className: string;
}

const Skeleton = ({ className }: SkeletonProps) => (
  <div className={`bg-light-skeleton dark:bg-dark-skeleton animate-pulse rounded-sm md:rounded-md ${className}`} />
);

export default Skeleton;
