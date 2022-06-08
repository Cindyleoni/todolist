import * as React from 'react'
import {Checkbox, UnorderedList, ListItem} from '@chakra-ui/react';

function TodoItem({todo}){
    function  renderList() {
      console.log(todo)
      return todo.map((item) => {
        return (
            <ListItem>
                <Checkbox checked={item.checked}>{item.value}</Checkbox>
            </ListItem>
            )
      })
    }
  
    React.useEffect(() => {  
      window.localStorage.setItem('todo', JSON.stringify(todo))
      }, [todo])
  
    return (
      <div>
          <UnorderedList styleType={'none'}>
            {renderList()}
          </UnorderedList>
      </div>
    )
  }

  export {TodoItem}