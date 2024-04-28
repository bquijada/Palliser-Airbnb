import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react"


function ActivityCardSkeleton() {
  return (
        <Card>
            <Skeleton borderRadius={10} overflow="hidden" width='500px' height="500px"></Skeleton>
            <CardBody>
                <SkeletonText></SkeletonText>
            </CardBody>
        </Card>
    )
}

export default ActivityCardSkeleton