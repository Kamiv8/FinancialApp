import * as React from 'react';
import styles from './NavigationBar.module.scss';
import { ReactComponent as Cancel } from '../../../assets/images/cancel.svg';
import { ReactComponent as Logout } from '../../../assets/images/LogoutIcon.svg';
import Title from '../../atoms/Title/Title';
import Nav from '../../molecules/Nav/Nav';
import { ApplicationState } from '../../../redux/reducers/rootReducer';
import * as UserAccount from '../../../redux/reducers/accountReducer';

import { connect } from 'react-redux';
import { AccountState } from '../../../redux/types/accountTypes';
import { useHistory } from 'react-router-dom';

interface INavigationBarProps {
    activeClass?: boolean;
    setActive: React.Dispatch<React.SetStateAction<boolean>>
    active: boolean;
}

type Props = INavigationBarProps &
  typeof UserAccount.actionCreator &
  AccountState;

const NavigationBar: React.FC<Props> = ({ logout, email, username,activeClass,setActive,active }) => {
    const history = useHistory();
    const logoutAction = ()=>{
        logout(history)
    }
    const mode = activeClass ? styles.activeClass : null;
  return (
    <div className={[styles.wrapper, mode].join(' ')}>
      <div className={styles.userPanel}>
        <div className={styles.profileImage}></div>
        <Title whiteStyle>{username === null ? email : username}</Title>
        <Cancel className={styles.cancel} onClick={()=>setActive(!active)}/>
      </div>
      <Nav />
      <Logout style={{ fill: 'white' }} onClick={logoutAction} className={styles.logout} />
    </div>
  );
};

export default connect(
  (state: ApplicationState) => state.user,
  UserAccount.actionCreator,
)(NavigationBar as any);
