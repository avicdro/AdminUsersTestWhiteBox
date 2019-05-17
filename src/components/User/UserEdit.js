import React from 'react'
import { Edit, 
  SimpleForm, 
  TextInput, 
  DisabledInput, 
  email, 
  required,
  minLength,
  maxLength, 
  ImageInput,
  ImageField} from "react-admin";



const requiredThis = [required(), minLength(2), maxLength(20)];
const validateEmail = email();

const UserEditTitle = ({ record }) => {
  return <span>User edit {record ? ` "${record.first_name} ${record.last_name}"` : ''}</span>;
};

const UserEdit = props => (
  <Edit title={<UserEditTitle />}  {...props}>
      <SimpleForm>
          <DisabledInput label="Id" source="id" />
          <TextInput label="First name" source="first_name"  validate={requiredThis}/>
          <TextInput label="Last name" source="last_name" validate={requiredThis} />
          <TextInput label="Email" type="email" source="email" validate={validateEmail} />
          <ImageInput source="avatar" label="Avatar img" accept="image/*">
            <ImageField source="avatar" title="title" />
          </ImageInput>
        </SimpleForm>
  </Edit>
);

export default UserEdit