import cx from 'classnames';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { forwardRef, Ref, useEffect, useState } from 'react';
import useMediaQuery from '../../../hooks/useMediaQuery';
import { Grid, VectorImage } from '../../sormus';
import { breakpoints } from '../../sormus/constants';
import {
  HamburgerButton,
  HeaderBlur,
  HeaderLinks,
  HeaderOverlay,
} from '../../sormus/Header/components';
import { useStickyHeader } from '../../sormus/Header/hooks';
import styles from './BusinessHeader.module.scss';
import { SectionsAccordion, SectionsList, Typ } from './components';

const BusinessHeader = forwardRef(function BusinessHeaderFC(
  props,
  ref: Ref<HTMLDivElement>,
): JSX.Element {
  const [accordionOpen, setAccordionOpen] = useState(false);
  const [offcanvasOpen, setOffcanvasOpen] = useState(false);
  const { sticky, pinned, measuredRef, wrapperStyles } = useStickyHeader({
    alwaysPin: true,
  });
  const isLargeScreen = useMediaQuery(`(min-width: ${breakpoints.large}px)`);
  const router = useRouter();

  const handleHamburgerClick = () => {
    setOffcanvasOpen((prevOffcanvasOpen) => !prevOffcanvasOpen);
  };

  const handleOverlayClick = () => {
    setOffcanvasOpen(false);
    setAccordionOpen(false);
  };

  useEffect(() => {
    const handleRouteChange = () => {
      setOffcanvasOpen(false);
    };

    router.events.on('routeChangeStart', handleRouteChange);

    return () => {
      router.events.off('routeChangeStart', handleRouteChange);
    };
  }, [router.events]);

  return (
    <Typ
      Element="div"
      className={cx(styles.wrap, {
        [styles.sticky]: sticky,
        [styles.pinned]: pinned,
      })}
      style={wrapperStyles}
      ref={ref}
    >
      {isLargeScreen && <HeaderBlur sticky={sticky} pinned={pinned} />}

      <HeaderOverlay
        open={offcanvasOpen || accordionOpen}
        onClick={handleOverlayClick}
      />

      <header ref={measuredRef} className={styles.header}>
        <Grid className="gap-y-0">
          <div className={styles.content}>
            {!isLargeScreen && (
              <HamburgerButton
                onClick={handleHamburgerClick}
                open={offcanvasOpen}
              />
            )}

            <Link href="/">
              <a className={styles.logo} id="nav_home" aria-label="Oura home">
                <VectorImage
                  color="inherit"
                  name="oura-business"
                  maxWidth={isLargeScreen ? 170 : 122}
                />
              </a>
            </Link>

            {!(isLargeScreen && sticky) && (
              <HeaderLinks
                offcanvasOpen={offcanvasOpen}
                isInverse={false}
                shopButton={false}
              />
            )}
          </div>

          <div className={styles.sections}>
            {isLargeScreen ? (
              <SectionsList className={styles.sectionsList} />
            ) : (
              <div className={styles.accordion}>
                <SectionsAccordion
                  open={accordionOpen}
                  setOpen={setAccordionOpen}
                />
              </div>
            )}
          </div>
        </Grid>
      </header>
    </Typ>
  );
});

export default BusinessHeader;
