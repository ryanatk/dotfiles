/**
 * Traverse the menu with keyboard.
 */

import { MutableRefObject, useCallback, useEffect, useRef } from 'react';
import preventScrolling from './preventScrolling';
import traverseMenu from './traverseMenu';

export const MENU_TRIGGER_INDEX = -1;

interface TraverseMenu {
  onEscape: () => void;
  isCaptured: boolean;
}

interface MenuState {
  menuRef: MutableRefObject<HTMLDivElement>;
  menuTriggerRef: MutableRefObject<HTMLButtonElement>;
}

const useTraverseMenu = ({ isCaptured, onEscape }: TraverseMenu): MenuState => {
  const menuRef = useRef<HTMLDivElement>(null);
  const menuTriggerRef = useRef<HTMLButtonElement>(null);
  const focusedLinkIndex = useRef<number>(-1);

  const handleKeyup = useCallback(
    (event: KeyboardEvent) => {
      if (isCaptured) {
        traverseMenu(event, {
          menu: menuRef.current,
          menuTrigger: menuTriggerRef.current,
          currentIndex: focusedLinkIndex.current,
          onTraverse: (index: number) => (focusedLinkIndex.current = index),
          onEscape,
        });
      } else {
        // Reset focused link index on menu close
        if (focusedLinkIndex.current !== -1) {
          focusedLinkIndex.current = -1;
        }
      }
    },
    [isCaptured, onEscape],
  );

  const handleKeydown = useCallback(
    (event: KeyboardEvent): void => {
      if (isCaptured) {
        preventScrolling(event);
      }
    },
    [isCaptured],
  );

  useEffect(() => {
    document.body.addEventListener('keydown', handleKeydown);
    document.body.addEventListener('keyup', handleKeyup);

    return () => {
      document.body.removeEventListener('keydown', handleKeydown);
      document.body.removeEventListener('keyup', handleKeyup);
    };
  }, [handleKeydown, handleKeyup]);

  return {
    menuRef,
    menuTriggerRef,
  };
};

export default useTraverseMenu;
