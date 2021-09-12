import * as React from 'react';
import NavigationBar from '../../organisms/NavigationBar/NavigationBar';
import styles from './MainTemplate.module.scss';
import { ReactComponent as Logo } from '../../../assets/images/profits.svg';
import { ReactComponent as HamburgerIcon } from '../../../assets/images/HamburgerIcon.svg';
import Nav from '../../molecules/Nav/Nav';

interface IMainTemplateProps {
  className?: string;
}

const MainTemplate: React.FC<IMainTemplateProps> = ({className, children}) => {
  const [OpenNavigation, setOpenNavigation] = React.useState(false);
  return (
    <>
        <NavigationBar
          activeClass={OpenNavigation}
          setActive={setOpenNavigation}
          active={OpenNavigation}
        />
      <div className={styles.mainWrapper}>
        <header className={styles.header}>
          <Logo className={styles.logo}/>
          <Nav  className={styles.nav}/>
          <HamburgerIcon
            className={styles.cancel}
            onClick={() => setOpenNavigation(!OpenNavigation)}
          />
        </header>
        <main className={[styles.content, className].join(' ')}>
          {children}
        </main>
      </div>
    </>
  );
};

export default MainTemplate;
