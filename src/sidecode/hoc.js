import React from 'react';
import ReactDOM from 'react-dom';

const Info = ({ info }) => (
  <div>
    <h1>Info</h1>
    <p>The info is {info}</p>
  </div>
);

const withAdminWarning = WrappedComponent => {
  return props => (
    <div>
      {props.isAdmin && <p>This is private info, please don't share</p>}
      <WrappedComponent {...props} />
    </div>
  );
};

const requireAuthentication = WrappedComponent => {
  return props => (
    <div>
      {props.isAuthenticated ? (
        <WrappedComponent {...props} />
      ) : (
        <p>Hello please log in</p>
      )}
    </div>
  );
};

const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);

// ReactDOM.render(
//   <AdminInfo isAdmin={true} info="this is info" />,
//   document.getElementById('app')
// );

ReactDOM.render(
  <AuthInfo isAuthenticated={true} info="auth" />,
  document.getElementById('app')
);
