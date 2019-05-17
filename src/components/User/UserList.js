import React from 'react'
import { List, 
  Datagrid, 
  TextField, 
  EmailField, 
  EditButton, 
  ShowButton, 
  Responsive, 
  SimpleList, 
  ImageField } from 'react-admin';

  


import PaperUserLogin from '../PaperUserLogin'

export const UserList = props => (
  <div>
  <PaperUserLogin nameUser="Pepe"/>

  <List title="User list " {...props}  perPage={5} >
    <Responsive 
      small={
        <SimpleList 
          primaryText={record => `${record.first_name} ${record.last_name}`}
          secondaryText={record => `Email ${record.email} `}
          tertiaryText={record => `Id.${record.id} `}
        />
      }

      medium={
        <Datagrid >
          <TextField source="id" />
          <ImageField source="avatar" title="title" />
          <TextField source="first_name" />
          <TextField source="last_name" />
          <EmailField source="email" />
          <ShowButton />
          <EditButton /> 
        </Datagrid>
      }
    
    />
    </List>
    </div>

);

export default UserList
