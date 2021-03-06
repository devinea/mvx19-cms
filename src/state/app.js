const initialState = {
  isHamburgerMenuOpen: false,
  valueForPanels: 'Controls',
  breakPoint: {
    breakpointName: 'default',
    breakpointSize: null
  },
  lhsItems: []
};

const TOGGLE_HAMBURGER_MENU = 'TOGGLE_HAMBURGER_MENU';
export const toggleHamburgerMenu = open => ({
  type: TOGGLE_HAMBURGER_MENU,
  payload: open
});

const VALUE_FOR_PANELS = 'VALUE_FOR_PANELS';
export const selectPanels = value => {
  return { type: VALUE_FOR_PANELS, payload: value };
};

const SET_ACTIVE_BREAKPOINT = 'SET_ACTIVE_BREAKPOINT';
export const setActiveBreakpoint = value => ({
  type: 'SET_ACTIVE_BREAKPOINT',
  payload: value
});

const LHS_MENU_ITEMS = 'LHS_MENU_ITEMS';
export const setLhsItems = value => ({
    type: LHS_MENU_ITEMS,
    payload: value
});


export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case TOGGLE_HAMBURGER_MENU:
      return { ...state, isHamburgerMenuOpen: payload };
    case VALUE_FOR_PANELS:
      return { ...state, valueForPanels: payload };
    case SET_ACTIVE_BREAKPOINT:
      return { ...state, breakPoint: payload };
    case LHS_MENU_ITEMS:
      return {...state, lhsItems: payload };
    default:
      return state;
  }
};
