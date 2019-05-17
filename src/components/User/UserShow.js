import React from 'react';
import { Show,  SimpleShowLayout, TextField, EmailField, ImageField } from "react-admin";



const UserShowTitle = ({ record }) => {
  return <span>User {record ? ` "${record.first_name} ${record.last_name}"` : ''}</span>;
};


const UserShow = props => (
  <Show title={<UserShowTitle/>} {...props}>
    <SimpleShowLayout>
        <TextField source="id" />
        <ImageField source="avatar" title="title" />
        <TextField source="first_name" />
        <TextField source="last_name" />
        <EmailField source="email" />
    </SimpleShowLayout>
  </Show>
);

export default UserShow;