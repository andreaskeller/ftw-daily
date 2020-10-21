import React from 'react';
import { withRouter } from 'react-router-dom';
import SelectMultipleFilter from './SelectMultipleFilter';
import { stringify, parse } from '../../util/urlHelpers';

const URL_PARAM = 'pub_features';

const options = [
  {
    key: 'set',
    label: 'Set',
  },
  {
    key: 'audio_input',
    label: 'Audio Input',
  },
  {
    key: 'sdi_output',
    label: 'SDI Output',
  },
  {
    key: 'hdmi_output',
    label: 'HDMI Output',
  },
  {
    key: 'image_stabilizer',
    label: 'Sensor Bildstabilisator',
  },
  {
    key: 'slowmotion',
    label: 'Slowmotion 120/240fps',
  },
  {
    key: 'raw_recording',
    label: 'RAW Recording',
  },
  {
    key: 'prores',
    label: 'ProRes / DNxHR/HD Recording',
  },
  {
    key: '10bit',
    label: '10 Bit +',
  },
  {
    key: 'action_cam',
    label: 'Action Cam',
  },
];

const handleSubmit = (values, history) => {
  console.log('Submitting values', values);
  const queryParams = values ? `?${stringify(values)}` : '';
  history.push(`${window.location.pathname}${queryParams}`);
};

const AmenitiesFilterPopup = withRouter(props => {
  const { history, location } = props;

  const params = parse(location.search);
  const features = params[URL_PARAM];
  const initialValues = { [URL_PARAM]: !!features ? features : null };

  return (
    <SelectMultipleFilter
      id="SelectMultipleFilterPopupExample"
      name="features"
      queryParamNames={[URL_PARAM]}
      label="Features"
      onSubmit={values => handleSubmit(values, history)}
      showAsPopup={true}
      liveEdit={false}
      options={options}
      initialValues={initialValues}
      contentPlacementOffset={-14}
    />
  );
});

export const AmenitiesFilterPopupExample = {
  component: AmenitiesFilterPopup,
  props: {},
  group: 'filters',
};

const AmenitiesFilterPlain = withRouter(props => {
  const { history, location } = props;

  const params = parse(location.search);
  const features = params[URL_PARAM];
  const initialValues = { [URL_PARAM]: !!features ? features : null };

  return (
    <SelectMultipleFilter
      id="SelectMultipleFilterPlainExample"
      name="features"
      queryParamNames={[URL_PARAM]}
      label="Features"
      onSubmit={values => {
        handleSubmit(values, history);
      }}
      showAsPopup={false}
      liveEdit={true}
      options={options}
      initialValues={initialValues}
    />
  );
});

export const AmenitiesFilterPlainExample = {
  component: AmenitiesFilterPlain,
  props: {},
  group: 'filters',
};
