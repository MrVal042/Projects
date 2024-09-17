import React, {ReactElement, useEffect, useState} from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import * as Yup from 'yup';
import {Colors} from '@constant';
import {FormInputProps} from './FormInput';
import {Button, Divider, Text} from '@component';

// Define props for the Form component
interface FormProps {
  initialValues: Record<string, string>; // Initial values for each form field
  onSubmit: (values: Record<string, string>) => void; // Callback to handle form submission
  children: React.ReactNode; // Accept form inputs as children
  footerComponent?: React.ReactNode; // Accept form inputs as children
  labelSubmit?: string;
  showHeaderError?: boolean;
  headerComponent?: React.ReactNode;
  validationSchema: Yup.ObjectSchema<any>;
}

const Form: React.FC<FormProps> = ({
  validationSchema,
  initialValues,
  labelSubmit,
  headerComponent,
  showHeaderError,
  onSubmit,
  footerComponent,
  children,
}) => {
  const [values, setValues] = useState<Record<string, string>>(initialValues);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isFormValid, setIsFormValid] = useState(false); // To track if the form is valid

  const hasErrors = Object.values(errors).some(error => error);

  // Handle value change for each input
  const handleChange = (name: string, value: string) => {
    setValues(prevValues => ({
      ...prevValues,
      [name]: value,
    }));
    if (errors[name]) {
      setErrors(prevErrors => ({
        ...prevErrors,
        [name]: '',
      }));
    }
  };

  // Handle blur event to trigger validation on input field
  const handleBlur = async (name: string) => {
    try {
      await validationSchema.validateAt(name, values);
      setErrors(prevErrors => ({
        ...prevErrors,
        [name]: '',
      }));
    } catch (error: any) {
      setErrors(prevErrors => ({
        ...prevErrors,
        [name]: error.message,
      }));
    }
  };

  // Handle focus event to clear any error
  const handleFocus = (name: string) => {
    setErrors(prevErrors => ({
      ...prevErrors,
      [name]: '',
    }));
  };

  // Check if the form is valid (all fields are valid)
  useEffect(() => {
    const validateForm = async () => {
      try {
        await validationSchema.validate(values, {abortEarly: false});
        setIsFormValid(true);
      } catch {
        setIsFormValid(false);
      }
    };

    validateForm();
  }, [values]);

  const handleSubmit = () => {
    if (isFormValid) {
      onSubmit(values);
    }
  };

  // Clone children to pass value, onChangeText, and error
  const enhancedChildren = React.Children.map(children, child => {
    if (React.isValidElement<FormInputProps>(child)) {
      const name = child.props.name;
      return React.cloneElement(child as ReactElement<FormInputProps>, {
        value: values[name], // Pass the current value for this input
        onChangeText: (value: string) => handleChange(name, value), // Handle input changes
        onBlur: () => handleBlur(name),
        onFocus: () => handleFocus(name),
        error: errors[name], // Pass the error message for this input
      });
    }
    return child;
  });

  return (
    <View style={{flex: 1, justifyContent: 'space-between'}}>
      <View>
        <Divider space="s" />
        {headerComponent || null}
        {showHeaderError ? (
          <Text variant="title" style={styles.errorText}>
            {hasErrors ? 'Please correct the input bellow' : ''}
          </Text>
        ) : (
          <Divider />
        )}
        <ScrollView showsVerticalScrollIndicator={false}>
          {enhancedChildren}
          <Divider space="l" />
        </ScrollView>
      </View>
      <View>
        <Button
          variants="secondary"
          label={labelSubmit || 'Submit'}
          onPress={handleSubmit}
          disabled={!isFormValid} // Disable if form is not valid or submitting
        />
        <View style={{alignSelf: 'center'}}>{footerComponent}</View>
        <Divider space="m" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  errorText: {
    color: Colors.orange,
    textAlign: 'center',
    marginTop: 10,
  },
});

export default Form;
