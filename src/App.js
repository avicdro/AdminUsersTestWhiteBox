import React from 'react';
import { Admin, Resource } from 'react-admin';

// DataProvider
import dataProvider from './Providers/dataProvider';

// AuthProvider
import authProvider from './Providers/authProvider';

// Components CRUD User list
import UserList  from './components/User/UserList';
import UserEdit from './components/User/UserEdit';
import UserCreate from './components/User/UserCreate';  
import UserShow from './components/User/UserShow'

// Pages 
import LoginPage from './pages/LoginPage'
import LogoutButton from './components/LogoutButton'


const apiUrl = 'https://reqres.in/api';
const dataProvider1 = dataProvider(apiUrl);


const App = () => (
    <Admin  dataProvider={dataProvider1} 
            authProvider={authProvider} 
                loginPage={LoginPage}
                logoutButton={LogoutButton}
        >

        <Resource name="users"   
            list={UserList} 
            edit={UserEdit} 
            create={UserCreate}
            show={UserShow}
        />
    </Admin>
)

export default App;
