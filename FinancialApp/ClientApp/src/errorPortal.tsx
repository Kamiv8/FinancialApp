import React from 'react';
import * as ReactDOM from 'react-dom';
import PromiseResultModal from './components/molecules/PromiseResultModal/PromiseResultModal';
const error: any = document.getElementById('error-handler');


class ErrorPortal extends React.Component {
    
    render() {
    return ReactDOM.createPortal(
      this.props.children,
      error,
      );
    }
  }
  
  export default ErrorPortal;
  //<PromiseResultModal isError={isError}>{children}</PromiseResultModal>, // or eventually this.props.children,