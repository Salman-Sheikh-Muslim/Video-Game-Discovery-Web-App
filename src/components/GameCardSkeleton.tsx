import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";

const GameCardSkeleton = () => {
  return (
    <Card>
      {/* Skeleton is like a placeholder for an image that is being loaded. */}
      <Skeleton height="200px"></Skeleton>
      <CardBody>
        <SkeletonText></SkeletonText>
      </CardBody>
    </Card>
  );
};

export default GameCardSkeleton;
