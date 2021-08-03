import React, { useState } from 'react';
import { useMutation } from '@apollo/client';

import {
    ApolloClient,
    InMemoryCache,
  } from "@apollo/client";

import {CREATE_TAG_MUTATION} from '../../services/query';

const client = new ApolloClient({
    uri: "http://127.0.0.1:8000/graphql",
    cache: new InMemoryCache()
  });


const CreateLink = () => {
  const [formState, setFormState] = useState({
    name: '',

  });
  const [createLink] = useMutation(CREATE_TAG_MUTATION, {
    variables: {
      name: formState.name
    },
    client: client,
    onCompleted: () => {
        console.log('done')
    }
  });

  return (
    
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          createLink();
        }}
      >
        <div className="flex flex-column mt3">
        <input
            className="mb2"
            value={formState.name}
            onChange={(e) =>
              setFormState({
                ...formState,
                name: e.target.value
              })
            }
            type="text"
            placeholder="A name for the link"
          />                             
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
    
  );
};

export default CreateLink;