import React from 'react';
import { connect } from 'react-redux';
import { ApplicationState } from '../../redux/reducers/rootReducer';
import * as ErrorStore from '../../redux/reducers/errorReducer';
import { Redirect } from 'react-router';

type SimpleErrorsStore = ErrorStore.ErrorState;

const SimpleErrors: React.FC = () => {
  return (
    <>
      <p>siemka tu errors</p>
    </>
  );
};

export default (SimpleErrors);
