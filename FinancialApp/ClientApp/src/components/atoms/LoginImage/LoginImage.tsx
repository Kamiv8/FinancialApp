import React, { useRef, useEffect } from 'react';
import { ReactComponent as Scene } from '../../../assets/images/LoginImage.svg';
import styles from './LoginImage.module.scss';
import gsap from 'gsap';
interface ILoginExampleProps {
  className?: string;
}

type SvgElementType = Element | undefined;

const LoginImage: React.FunctionComponent<ILoginExampleProps> = ({className}) => {
  const wrapper = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const elements: SvgElementType = wrapper.current?.children[0];

    const Character: any = elements?.querySelector('#Character');
    const PiggyBank: any = elements?.querySelector('#PiggyBank');
    const Coin: any = elements?.querySelector('#Coin');
    const BoubleWhite1: any = elements?.querySelector('#BoubleWhite1');
    const BoubleWhite2: any = elements?.querySelector('#BoubleWhite2');
    const BoubleWhite3: any = elements?.querySelector('#BoubleWhite3');
    const Bouble1: any = elements?.querySelector('#Bouble1');
    const Bouble2: any = elements?.querySelector('#Bouble2');
    const Bouble3: any = elements?.querySelector('#Bouble3');
    const Bouble4: any = elements?.querySelector('#Bouble4');

    gsap.set(
      [
        Coin,
        Bouble1,
        Bouble2,
        Bouble3,
        Bouble4,
        BoubleWhite1,
        BoubleWhite2,
        BoubleWhite3,
      ],
      { autoAlpha: 0 },
    );
    const tl = gsap.timeline({ default: { ease: 'linear' } });
    tl.fromTo(Coin, { y: '+=50' }, { y: '-=50', autoAlpha: 1, duration: 1 })
      .to([Character, Coin], { y: '-=15', duration: 0.5 })
      .to(Coin, { x: '-=45', y: '-=20', duration: 1.5, ease: 'linear' })
      .to(Character,{y: '+=20', duration: 1.5, ease: 'power3.in',delay: -1.5})
      .to(Coin, { y: '-=30',x: '-=5', duration: 1.5 })
      .to(Coin, { x: '-=80',y: '+=10', duration: 2 })
      .to(Coin, { y: '+=90', duration: 2}).repeat(-1);



    const tl2 = gsap.timeline({ default: { ease: 'power3.inOut' } });
    tl2
      .fromTo(
        Bouble4,
        { y: '+=10' },
        { y: '-=145', autoAlpha: 1, duration: 2, repeat: -1 },
      )
      .fromTo(
        BoubleWhite3,
        { y: '+=30' },
        { y: '-=145', autoAlpha: 1, duration: 2, delay: -1.5, repeat: -1 },
      )
      .fromTo(
        Bouble3,
        { y: '+=50' },
        { y: '-=145', autoAlpha: 1, duration: 2, delay: -1.5, repeat: -1 },
      )
      .fromTo(
        Bouble2,
        { y: '+=80' },
        { y: '-=145', autoAlpha: 1, duration: 2, delay: -1.5, repeat: -1 },
      )
      .fromTo(
        BoubleWhite1,
        { y: '+=100' },
        { y: '-=145', autoAlpha: 1, duration: 2, delay: -1.5, repeat: -1 },
      )
      .fromTo(
        BoubleWhite2,
        { y: '+=120' },
        { y: '-=145', autoAlpha: 1, duration: 2, delay: -1.5, repeat: -1 },
      )
      .fromTo(
        Bouble1,
        { y: '+=150' },
        { y: '-=145', autoAlpha: 1, duration: 2, delay: -1.5, repeat: -1 },
      );
     
  });

  return (
    <div ref={wrapper} className={className}>
      <Scene />
    </div>
  );
};

export default LoginImage;
