import { HStack, Skeleton, SkeletonText, Spinner } from "@chakra-ui/react";
import React from "react";

const GenreListSkeleton = () => {
  return (
    <HStack>
      <Spinner />
      {/* <Skeleton boxSize="32px" borderRadius={8}></Skeleton>
      <SkeletonText /> */}
    </HStack>
  );
};

export default GenreListSkeleton;
