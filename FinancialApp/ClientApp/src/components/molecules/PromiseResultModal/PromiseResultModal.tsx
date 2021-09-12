import * as React from 'react';
import styles from './PromiseResultModal.module.scss';
import { ReactComponent as Image } from '../../../assets/images/NotFound.svg';
import { ReactComponent as Cancel } from '../../../assets/images/cancel.svg';
import { ReactComponent as Created } from '../../../assets/images/CreatedAccount.svg';
import { useState } from 'react';
import * as ErrorType from '../../../redux/reducers/errorReducer';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import Paragraph from '../../atoms/Paragraph/Paragraph';

interface IPromiseResultModalProps {
  done?: boolean;
}

type Props = IPromiseResultModalProps & typeof ErrorType.actionCreator;

const PromiseResultModal: React.FC<Props> = ({
  closeError,
  children,
  done,
}) => {
  const [openModal, setOpenModal] = useState<boolean>(true);

  const SetModal = () => {
    if (openModal && done) {
      setOpenModal(!openModal);
      closeError();
    } else if (!done) {
      setOpenModal(!openModal);
    }
  };
  return (
    <>
      {openModal ? (
        <div className={styles.background}>
          <div className={styles.cardContainer}>
            {done ? (
              <Image className={styles.image} />
            ) : (
              <Created className={styles.image} />
            )}
            <Cancel onClick={() => SetModal()} className={styles.cancel} />
            <p className={styles.paragraph}>{children}</p>
            {!done ? (
              <Link to='/'>
                <Paragraph type='redirect' className={styles.link}>
                  Now you can login, click here
                </Paragraph>
              </Link>
            ) : null}
          </div>
        </div>
      ) : (
        ''
      )}
      <div></div>
    </>
  );
};

export default connect(
  null,
  ErrorType.actionCreator,
)(PromiseResultModal as any);
