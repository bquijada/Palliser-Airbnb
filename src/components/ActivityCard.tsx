import React from "react";
import { Activity } from "../hooks/useActivities";
import { Card, CardBody, Heading, Image, Link, Text } from "@chakra-ui/react";

interface Props {
  activity: Activity;
}

export const ActivityCard = ({ activity }: Props) => {
  return (
    <Card borderRadius={10} overflow="hidden">
      <Image src={activity.image}></Image>
      <CardBody>
        <Heading fontSize="2xl">{activity.name}</Heading>
        <Text>{activity.description}</Text>
        <Link
          color="teal.500"
          href={activity.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn More
        </Link>
      </CardBody>
    </Card>
  );
};
