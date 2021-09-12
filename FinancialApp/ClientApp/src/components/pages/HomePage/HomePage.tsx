import * as React from 'react';
import * as UserAccount from '../../../redux/reducers/accountReducer';
import { connect } from 'react-redux';
import { ApplicationState } from '../../../redux/reducers/rootReducer';
import { AccountState } from '../../../redux/types/accountTypes';
import { Redirect } from 'react-router';
import MainTemplate from '../../templates/MainTemplate/MainTemplate';
import styles from './HomePage.module.scss';
import Chart from '../../atoms/Chart/Chart';
import Button from '../../atoms/Button/Button';
import Title from '../../atoms/Title/Title';
import OperationBar from '../../organisms/OperationBar/OperationBar';
import OperationAside from '../../organisms/OperationAside/OpearationAside';

interface IHomePageProps {}

type Props = IHomePageProps &
  typeof UserAccount.actionCreator &
  ApplicationState;

const HomePage: React.FC<Props> = ({ getData, user, error }) => {
  const [addOperation, setAddOperation] = React.useState<boolean>(false);

  React.useEffect((): any => {
    getData();
  }, []);
  if (error?.error === 401) {
    return <Redirect to="/" />;
  }
  return (
    <>
      <MainTemplate className={styles.mainWrapper}>
        <section className={styles.status}>
          <Title secondTitle>Your Budget</Title>
          <Title currentMoney>{3218732} PLN</Title>
          <Title secondTitle>Money status</Title>
        </section>
        <section className={styles.chart}>
          <Chart />
        </section>
        <section className={styles.buttonWrapper}>
          <Button
            version="firstReverse"
            onClick={() => setAddOperation(!addOperation)}
          >
            Add operation
          </Button>
        </section>
        <section className={styles.aside}>
          <OperationAside/>
        </section>
      </MainTemplate>
      {addOperation ? (
        <OperationBar setClose={setAddOperation} close={addOperation} />
      ) : null}
    </>
  );
};

export default connect(
  (state: ApplicationState) => state,
  UserAccount.actionCreator,
)(HomePage as any);
