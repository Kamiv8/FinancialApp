import React from 'react';
import { connect } from 'react-redux';
import { ApplicationState } from '../../redux/reducers/rootReducer';
import * as ErrorStore from '../../redux/reducers/errorReducer';
import { Redirect } from 'react-router';

type SimpleErrorsStore = ErrorStore.ErrorState;

const SimpleErrors: React.FC<SimpleErrorsStore> = ({ error }) => {
  return (
    <>
      {error === 401 ? (
        <>
          <p>jkfhdskfdsjhfds</p>
        </>
      ) : null}
    </>
  );
};

export default connect((state: ApplicationState) => state.error)(SimpleErrors);
