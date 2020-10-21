import React from 'react';
import { Form as FinalForm, FormSpy } from 'react-final-form';
import arrayMutators from 'final-form-arrays';
import { Button } from '../../components';
import FieldCheckboxGroup from './FieldCheckboxGroup';
import { requiredFieldArrayCheckbox } from '../../util/validators';

const formName = 'Styleguide.FieldCheckboxGroup';
const formNameRequired = 'Styleguide.FieldCheckboxGroupRequired';

const label = <h3>Filmkamera Features</h3>;

const commonProps = {
  label: label,
  options: [
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
  ],
  twoColumns: true,
};

const optionalProps = {
  name: 'features-optional',
  id: 'features-optional',
  ...commonProps,
};

const requiredProps = {
  name: 'features-required',
  id: `${formNameRequired}.features-required`,
  ...commonProps,
  validate: requiredFieldArrayCheckbox('this is required'),
};
const tosProps = {
  name: 'terms-of-service',
  id: `${formNameRequired}.tos-accepted`,
  options: [
    {
      key: 'tos',
      label: 'Terms of Service',
    },
  ],
  validate: requiredFieldArrayCheckbox('You need to accept Terms of Service'),
};

const formComponent = country => props => (
  <FinalForm
    {...props}
    mutators={{ ...arrayMutators }}
    render={fieldRenderProps => {
      const { handleSubmit, invalid, submitting, componentProps, onChange } = fieldRenderProps;

      const submitDisabled = invalid || submitting;

      return (
        <form
          onSubmit={e => {
            e.preventDefault();
            handleSubmit(e);
          }}
        >
          <FormSpy onChange={onChange} />
          <FieldCheckboxGroup {...componentProps} />

          <Button style={{ marginTop: 24 }} type="submit" disabled={submitDisabled}>
            Submit
          </Button>
        </form>
      );
    }}
  />
);

export const Optional = {
  component: formComponent(formName),
  props: {
    onChange: formState => {
      if (formState.dirty) {
        console.log('form values changed to:', formState.values);
      }
    },
    onSubmit: values => {
      console.log('Submit values: ', values);
    },
    initialValues: { [optionalProps.name]: ['jacuzzi', 'towels'] },
    componentProps: optionalProps,
  },
  group: 'inputs',
};

export const Required = {
  component: formComponent(formNameRequired),
  props: {
    onChange: formState => {
      if (formState.dirty) {
        console.log('form values changed to:', formState.values);
      }
    },
    onSubmit: values => {
      console.log('Submit values: ', values);
    },
    componentProps: requiredProps,
  },
  group: 'inputs',
};

export const ToSAccepted = {
  component: formComponent(formNameRequired),
  props: {
    onChange: formState => {
      if (formState.dirty) {
        console.log('form values changed to:', formState.values);
      }
    },
    onSubmit: values => {
      console.log('Submit values: ', values);
    },
    componentProps: tosProps,
  },
  group: 'inputs',
};
