import { List, ListItem, Spinner } from "@chakra-ui/react";
import useTags from "../hooks/useTags";
import { Tag } from "../hooks/useTags";

interface TagProps {
  endpoint: string;
}

const TagList = (props: TagProps) => {
  const { endpoint } = props;
  const { tags, isLoading, error } = useTags(endpoint);
  if (error ) return null;
  if (isLoading) return <Spinner/>;
  return (
    <List>
        {tags.map(tag => <ListItem key={tag.id}> {tag.name}</ListItem>)}
    </List>
  )
};

export default TagList