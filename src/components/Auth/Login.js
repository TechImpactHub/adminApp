import React, { useState } from 'react';
import { useHistory } from 'react-router';
import { useMutation } from '@apollo/client';
import {client} from '../../gql-config';
import {LOGIN} from '../../services/query';
import { AUTH_TOKEN } from '../../constants';
const Login = () => {
  const history = useHistory();
  const [formState, setFormState] = useState({
    login: true,
    phone: '',
    pushToken: '',
  });
  const [login] = useMutation(LOGIN, {
    variables: {
      phone: formState.phone,
      pushToken: formState.pushToken
    },
    client: client,
    onCompleted: ({ login }) => {
        console.log(login)
      localStorage.setItem(AUTH_TOKEN, login.phone);
      history.push('/');
    }
  });

  return (
    <div>
      <h4 className="mv3">
        {formState.login ? 'Login' : 'Sign Up'}
      </h4>
      <div className="flex flex-column">
        {!formState.login && (
          <input
            value={formState.username}
            onChange={(e) =>
              setFormState({
                ...formState,
                username: e.target.value
                
              })
            }
            type="text"
            placeholder="Your username"
          />
        )}
        <input
          value={formState.phone}
          onChange={(e) =>
            setFormState({
              ...formState,
              phone: e.target.value
            })
          }
          type="text"
          placeholder="Your phone address"
        />
        <input
          value={formState.pushToken}
          onChange={(e) =>
            setFormState({
              ...formState,
              pushToken: e.target.value
            })
          }
          type="pushToken"
          placeholder="Choose a safe pushToken"
        />
      </div>
      <div className="flex mt3">
        <button
          className="pointer mr2 button"
          onClick={login}
        >
          {formState.login ? 'login' : 'create account'}
        </button>
        <button
          className="pointer button"
          onClick={(e) =>
            setFormState({
              ...formState,
              login: !formState.login
            })
          }
        >
          {formState.login
            ? 'need to create an account?'
            : 'already have an account?'}
        </button>
      </div>
    </div>
  );
};

export default Login;