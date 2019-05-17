import React from 'react' 
import { 
  Create, 
  SimpleForm, 
  TextInput, 
  email, 
  required,
  minLength,
  maxLength,
  ImageInput,
  ImageField } from "react-admin";


const requiredThis = [required(), minLength(2), maxLength(20)];
const validateEmail = email();

const UserCreate = props => (
  <Create {...props}>
    <SimpleForm>
      <TextInput label="First name" source="first_name"  validate={requiredThis}/>
      <TextInput label="Last name" source="last_name" validate={requiredThis} />
      <TextInput label="Email" type="email" source="email" validate={validateEmail} />
      <ImageInput source="avatar" label="Avatar img" accept="image/*">
        <ImageField source="avatar" title="title" />
      </ImageInput>
    </SimpleForm>
  </Create>
);

export default UserCreate; 