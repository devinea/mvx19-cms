const initialState = {
  isHamburgerMenuOpen: false,
};

const TOGGLE_HAMBURGER_MENU = 'TOGGLE_HAMBURGER_MENU';
export const toggleHamburgerMenu = open => ({ type: TOGGLE_HAMBURGER_MENU, payload: open });

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case TOGGLE_HAMBURGER_MENU:
      return { ...state, isHamburgerMenuOpen: payload };
    default:
      return state;
  }
};
