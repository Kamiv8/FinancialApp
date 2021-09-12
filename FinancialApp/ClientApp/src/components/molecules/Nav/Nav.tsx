import * as React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Nav.module.scss';
import { ReactComponent as HomeIcon } from '../../../assets/images/HomeIcon.svg';
import { ReactComponent as HistoryIcon } from '../../../assets/images/HistoryIcon.svg';
import { ReactComponent as GroupIcon } from '../../../assets/images/GroupIcon.svg';
import { ReactComponent as SettingsIcon } from '../../../assets/images/SettingsIcon.svg';

import Routes from '../../../utilities/Routes';
import Title from '../../atoms/Title/Title';
interface INavProps {
  className?: string;
}

interface SubpageElementType {
  name: string;
  route: string;
  image: React.ReactElement;
}

const SubpageElement: SubpageElementType[] = [
  {
    name: 'Home',
    route: Routes.home,
    image: <HomeIcon className={styles.icon} />,
  },
  {
    name: 'History',
    route: Routes.history,
    image: <HistoryIcon className={styles.icon} />,
  },
  {
    name: 'Group',
    route: Routes.group,
    image: <GroupIcon className={styles.icon} />,
  },
  {
    name: 'Settings',
    route: Routes.settings,
    image: <SettingsIcon className={styles.icon} />,
  },
];

const Nav: React.FC<INavProps> = (props) => {
  return (
    <nav className={[styles.navWrapper,props.className].join(' ')}>
      <ul className={styles.listContainer}>
        {SubpageElement.map(({ name, image, route }) => (
          <li key={name} className={styles.listItem}>
            <NavLink to={route} className={styles.link} activeClassName={styles.activeTab}>
              <div>{image}</div>
              <Title className={styles.name} whiteStyle>{name}</Title>
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
//
