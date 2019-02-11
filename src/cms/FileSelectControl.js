import React from 'react';
import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { Map, List, fromJS } from 'immutable';
import { find } from 'lodash';
import Select from 'react-select';
import { colors } from 'netlify-cms-ui-default';

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

// export const query = graphql`
//     query{
//         allFile( filter: { sourceInstanceName: { eq: "Fundamentals" } } ){
//             edges {
//                 node {
//                     id
//                     name
//                     sourceInstanceName
//                     absolutePath
//                 }
//             }
//         }
//     }`;

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

    const {field} = this.props;
    const currentUser = netlifyIdentity.currentUser();
    if( currentUser && (!this.state || !this.state.ajaxResponse) ){
      currentUser.jwt().then(accessToken => {
        const Http = new XMLHttpRequest();
        //const url= 'https://api.github.com/repositories/162210062/contents/static/docs/fundamental/components';
        const url = window.localStorage.getItem("netlifySiteURL") + field.get('url');
        Http.open("GET", url);
        console.log(accessToken);
        Http.setRequestHeader('Authorization', `Bearer ${accessToken}`);
        Http.setRequestHeader('Accept', 'application/vnd.github.v3+json'); //optional but encouraged
        Http.send();
        // TODO: maybe find a way to retrieve only the info we need from github...
        Http.onload=()=>{
          console.log(Http.responseURL);
          console.log(Http.responseText);
          this.setState(()=>{
            return { ajaxResponse: JSON.parse(Http.responseText).filter((elem) => elem.path.endsWith('.html')).map((elem) => {
              let path = elem.path;
              const prefix = 'static/';
              if(path.startsWith(prefix)){
                path = path.slice(prefix.length);
              }
              return path;
              })};
          });
        };
      });
    }
  }

  // the only thing we want to change here
  render() {
    let response = null;
    if(this.state && this.state.ajaxResponse){
      response = this.state.ajaxResponse;
    }

    const { field, value, forID, classNameWrapper, setActiveStyle, setInactiveStyle, data } = this.props;
    const data2 = data || response || ["data not found"];
    const fieldOptions = [...data2];


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

// export default (props) => (
//   <StaticQuery query={graphql`
//     query FundamentalsQuery {
//         allFile( filter: { sourceInstanceName: { eq: "Fundamentals" } } ){
//              edges {
//                  node {
//                      id
//                      name
//                      sourceInstanceName
//                      absolutePath
//                  }
//              }
//         }
//     }`
//   }
//                render={(data) => (
//                  <FileSelectControl
//                    data={data}
//                    {...props}
//                  />
//                )}/>
// );
