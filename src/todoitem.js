import * as React from 'react'
import {Checkbox, UnorderedList, ListItem} from '@chakra-ui/react';

function TodoItem({todo, onChecked}){
    function  renderList() {
        return todo.map((item) => {
            console.log(item.value, item.checked)
            return (
                <ListItem key={item.value}>
                    <Checkbox defaultChecked={item.checked} onChange={() => {onChecked(item.value)}}>{item.value}</Checkbox>
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