import { Button, List, ListItem, Spinner } from "@chakra-ui/react";
import useTags from "../hooks/useTags";
import { Tag } from "../hooks/useTags";

interface TagProps {
  endpoint: string;
  onSelectTag: (tag: Tag) => void;
}


const TagList = ({endpoint, onSelectTag}: TagProps) => {
  const { tags, isLoading, error } = useTags(endpoint);
  if (error ) return null;
  if (isLoading) return <Spinner/>;
  return (
    <List spacing={2}>
        {tags.map(tag => <ListItem key={tag.id}><Button onClick={() => onSelectTag(tag)} fontSize='lg' variant='link'>{tag.name}</Button></ListItem>)}
    </List>
  )
};

export default TagList