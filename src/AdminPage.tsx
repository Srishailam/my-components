import React from 'react'
import { NavLink, Route, RouteComponentProps } from 'react-router-dom'

interface IUser {
  id: number;
  name: string;
  isAdmin: boolean;
}
const adminUsersData: IUser[] = [
  { id: 1, name: "Fred", isAdmin: true },
  { id: 2, name: "Bob", isAdmin: false },
  { id: 3, name: "Jane", isAdmin: true }
];

const AdminProducts: React.FC = () => {
  return <div>Some options to administer products</div>;
};
const AdminUser: React.FC<RouteComponentProps<{ id: string }>> = props => {
  let user: IUser;
  if(props.match.params.id){
    const id: number = parseInt(props.match.params.id,10);
    user = adminUsersData.filter(u => u.id === id)[0];
  } else {
    return null;
  }
  return (
    <div>
      <div>
        <b>Id: </b>
        <span>{user.id.toString()}</span>
      </div>
      <div>
        <b>Is Admin: </b>
        <span>{user.isAdmin.toString()}</span>
      </div>
    </div>
  );
};
const AdminUsers: React.FC = () => {
  return (
    <div>
      <ul className="admin-sections">
        {adminUsersData.map(user => (
          <li key={user.id}>
            <NavLink
              to={`/admin/users/${user.id}`}
              activeClassName="admin-link-active"
            >
              {user.name}
            </NavLink>
          </li>
        ))}
      </ul>
      <Route path="/admin/users/:id" component={AdminUser} />
    </div>
  );
};
const AdminPage: React.FC = () => {
  return (
    <div className="AdminPage">
      <div className="page-container">
        <h1>Admin Panel</h1>
        <ul className="admin-sections">
          <li key="users">
            <NavLink to={`/admin/users`} activeClassName="admin-link-active">
              Users
            </NavLink>
          </li>
          <li key="products">
            <NavLink to={`/admin/products`} activeClassName="admin-link-active">
              Products
              </NavLink>
          </li>
        </ul >
        <Route path="/admin/users" component={AdminUsers} />
        <Route path="/admin/products" component={AdminProducts} />
      </div >
    </div >
  )
}

export default AdminPage;
