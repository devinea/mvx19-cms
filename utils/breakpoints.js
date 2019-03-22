import { setActiveBreakpoint } from '../src/state/app.js';

export const defaultBreakpoints = {
  xlarge: 1680,
  large: 1280,
  medium: 1024,
  small: 600
};

function dispatchActiveQuery(dispatch, mediaQueryState, action) {
  const activeQuery = mediaQueryState.reduce((prev, curr) =>
    curr.matches ? curr : prev && prev.matches ? prev : null
  );

  const breakpointName = activeQuery ? activeQuery.name : 'xxlarge';
  const breakpointSize = activeQuery && activeQuery.breakpoint;

  const payload = {
    breakpointName,
    breakpointSize,
    mediaQueryState
  };
  dispatch(action(payload));
}

export function initReduxBreakpoints(
  breakpoints = defaultBreakpoints,
  action = setActiveBreakpoint,
  windowObj = window
) {
  if (!this.mediaQueryState) {
    this.mediaQueryState = [];
  }

  Object.keys(breakpoints).forEach(key => {
    const query = windowObj.matchMedia(`(max-width: ${breakpoints[key]}px)`);
    query.breakpoint = breakpoints[key];
    query.name = key;
    function breakpointChange() {
      dispatchActiveQuery(this.props.dispatch, this.mediaQueryState, action);
    }

    query.addListener(breakpointChange.bind(this));
    this.mediaQueryState.push(query);
  });

  dispatchActiveQuery(this.props.dispatch, this.mediaQueryState, action);
}
