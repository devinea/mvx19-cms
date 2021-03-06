import React from 'react';
import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { Map, List, fromJS } from 'immutable';
import { find } from 'lodash';
import Select from 'react-select';
// import { colors } from 'netlify-cms-ui-default';
/**
 * Theme Colors
 */
const colorsRaw = {
  white: '#fff',
  grayLight: '#eff0f4',
  gray: '#798291',
  grayDark: '#313d3e',
  blue: '#3a69c7',
  blueLight: '#e8f5fe',
  green: '#005614',
  greenLight: '#caef6f',
  brown: '#754e00',
  yellow: '#ffee9c',
  red: '#ff003b',
  redLight: '#fcefea',
  purple: '#70399f',
  purpleLight: '#f6d8ff',
  teal: '#17a2b8',
  tealLight: '#ddf5f9',
};

const colors = {
  statusDraftText: colorsRaw.purple,
  statusDraftBackground: colorsRaw.purpleLight,
  statusReviewText: colorsRaw.Brown,
  statusReviewBackground: colorsRaw.yellow,
  statusReadyText: colorsRaw.green,
  statusReadyBackground: colorsRaw.greenLight,
  text: colorsRaw.gray,
  textLight: colorsRaw.white,
  textLead: colorsRaw.grayDark,
  background: colorsRaw.grayLight,
  foreground: colorsRaw.white,
  active: colorsRaw.blue,
  activeBackground: colorsRaw.blueLight,
  inactive: colorsRaw.gray,
  button: colorsRaw.gray,
  buttonText: colorsRaw.white,
  inputBackground: colorsRaw.white,
  infoText: colorsRaw.blue,
  infoBackground: colorsRaw.blueLight,
  successText: colorsRaw.green,
  successBackground: colorsRaw.greenLight,
  warnText: colorsRaw.brown,
  warnBackground: colorsRaw.yellow,
  errorText: colorsRaw.red,
  errorBackground: colorsRaw.redLight,
  textFieldBorder: '#dfdfe3',
  controlLabel: '#7a8291',
};

const styles = {
  control: styles => ({
    ...styles,
    border: 0,
    boxShadow: 'none',
    padding: '9px 0 9px 12px',
  }),
  option: (styles, state) => ({
    ...styles,
    backgroundColor: state.isSelected
      ? `${colors.active}`
      : state.isFocused
        ? `${colors.activeBackground}`
        : 'transparent',
    paddingLeft: '22px',
  }),
  menu: styles => ({ ...styles, right: 0, zIndex: 2 }),
  container: styles => ({ ...styles, padding: '0 !important' }),
  indicatorSeparator: (styles, state) =>
    state.hasValue && state.selectProps.isClearable
      ? { ...styles, backgroundColor: `${colors.textFieldBorder}` }
      : { display: 'none' },
  dropdownIndicator: styles => ({ ...styles, color: `${colors.controlLabel}` }),
  clearIndicator: styles => ({ ...styles, color: `${colors.controlLabel}` }),
  multiValue: styles => ({
    ...styles,
    backgroundColor: colors.background,
  }),
  multiValueLabel: styles => ({
    ...styles,
    color: colors.textLead,
    fontWeight: 500,
  }),
  multiValueRemove: styles => ({
    ...styles,
    color: colors.controlLabel,
    ':hover': {
      color: colors.errorText,
      backgroundColor: colors.errorBackground,
    },
  }),
};

function optionToString(option) {
  return option && option.value ? option.value : '';
}

function convertToOption(raw) {
  if (typeof raw === 'string') {
    return { label: raw, value: raw };
  }
  return Map.isMap(raw) ? raw.toJS() : raw;
}

/**
 * this component is a copy of the netlify-cms select-widget
 * with changes in componentDidMount() and render() to be able to show
 * a file overview from a url set in the config.yml
 */
export default class FileSelectControl extends React.Component {
  static propTypes = {
    onChange: PropTypes.func.isRequired,
    value: PropTypes.node,
    forID: PropTypes.string.isRequired,
    classNameWrapper: PropTypes.string.isRequired,
    setActiveStyle: PropTypes.func.isRequired,
    setInactiveStyle: PropTypes.func.isRequired,
    field: ImmutablePropTypes.contains({
      url: PropTypes.string.isRequired,
    }),
  };

  handleChange = selectedOption => {
    const { onChange } = this.props;

    if (Array.isArray(selectedOption)) {
      onChange(fromJS(selectedOption.map(optionToString)));
    } else {
      onChange(optionToString(selectedOption));
    }
  };

  getSelectedValue = ({ value, options, isMultiple }) => {
    if (isMultiple) {
      const selectedOptions = List.isList(value) ? value.toJS() : value;

      if (!selectedOptions || !Array.isArray(selectedOptions)) {
        return null;
      }

      return selectedOptions
        .filter(i => options.find(o => o.value === (i.value || i)))
        .map(convertToOption);
    } else {
      return find(options, ['value', value]) || null;
    }
  };

  componentDidMount() {
    //https://github.com/netlify/netlify-identity-widget/issues/144#issuecomment-396868911
    const currentUser = netlifyIdentity.currentUser();
    if(currentUser && (!this.state || !this.state.ajaxResponse)){
      currentUser.jwt().then( accessToken => {
        const { field } = this.props;
        const url = (window.localStorage.getItem("netlifySiteURL") ) ? window.localStorage.getItem("netlifySiteURL") + field.get('url'):
          window.location.protocol + '//' + window.location.hostname  + '/' + field.get('url');
        const Http = new XMLHttpRequest();
        Http.open("GET", url);
        Http.setRequestHeader('Authorization', `Bearer ${accessToken}`);
        Http.setRequestHeader('Accept', 'application/vnd.github.v3+json'); // optional but encouraged
        Http.send();

        // TODO: maybe find a way to retrieve only the info we need from github...
        Http.onload=()=>{
          this.setState(()=>{
            return { ajaxResponse: JSON.parse(Http.responseText)
                .filter((elem) => elem.path.endsWith('.html'))
                .map((elem) => {
              let path = elem.path;
              const prefix = 'static/';
              if(path.startsWith(prefix)){
                path = path.slice(prefix.length);
              }
              return path;
              })
            };
          });
        };
      });
    }
  }

  render() {
    let response = null;
    if(this.state && this.state.ajaxResponse) {
      response = this.state.ajaxResponse;
    }

    const { field, value, forID, classNameWrapper, setActiveStyle, setInactiveStyle } = this.props;
    const fieldOptions = response;


    const isMultiple = field.get('multiple', false);
    const isClearable = !field.get('required', true) || isMultiple;

    if (!fieldOptions) {
      return <div>Error rendering select control for {field.get('name')}: No options</div>;
    }

    const options = [...fieldOptions.map(convertToOption)];
    const selectedValue = this.getSelectedValue({
      options,
      value,
      isMultiple,
    });

    return (
      <Select
        inputId={forID}
        value={selectedValue}
        onChange={this.handleChange}
        className={classNameWrapper}
        onFocus={setActiveStyle}
        onBlur={setInactiveStyle}
        options={options}
        styles={styles}
        isMulti={isMultiple}
        isClearable={isClearable}
        placeholder=""
      />
    );
  }
}
