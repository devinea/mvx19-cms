const initialState = {
  isHamburgerMenuOpen: false,
  valueForPanels: 'Controls'
};

const TOGGLE_HAMBURGER_MENU = 'TOGGLE_HAMBURGER_MENU';
export const toggleHamburgerMenu = open => ({ type: TOGGLE_HAMBURGER_MENU, payload: open });

const VALUE_FOR_PANELS = 'VALUE_FOR_PANELS';
export const selectPanels = (value) => {
  return {type: VALUE_FOR_PANELS, payload: value}
};

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case TOGGLE_HAMBURGER_MENU:
      return { ...state, isHamburgerMenuOpen: payload };
    case VALUE_FOR_PANELS:
      return { ...state, valueForPanels: payload}
    default:
      return state;
  }
};
