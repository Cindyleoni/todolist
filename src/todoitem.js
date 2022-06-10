import * as React from "react";
import {
  Checkbox,
  UnorderedList,
  ListItem,
  Button,
  Grid,
  GridItem,
} from "@chakra-ui/react";

function TodoItem({ todo, onChecked, onDelete }) {
  function renderList() {
    return todo.map((item) => {
      return (
        <ListItem key={item.id}>
          <Grid templateColumns="repeat(2, 1fr)">
            <GridItem colSpan={2}>
              <Checkbox
                defaultChecked={item.checked}
                onChange={() => {
                  onChecked(item.id);
                }}
              >
                {item.value}
              </Checkbox>
            </GridItem>
            <GridItem colStart={3} colEnd={3}>
              <Button
                size="xs"
                variant="ghost"
                onClick={() => {
                  onDelete(item.id);
                }}
              >
                X
              </Button>
            </GridItem>
          </Grid>
        </ListItem>
      );
    });
  }

  return (
    <div>
      <UnorderedList styleType={"none"}>{renderList()}</UnorderedList>
    </div>
  );
}

export { TodoItem };
