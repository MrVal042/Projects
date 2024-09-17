import {Icon} from '@assets';
import {Colors} from '@constant';
import {Text} from '@component';
import React, {useState} from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  TextInputProps,
  TouchableOpacity,
} from 'react-native';

export interface FormInputProps extends Omit<TextInputProps, 'onChangeText'> {
  name: string; // Name of the input field (matches the form state)
  label: string;
  value?: string; // Current value of the input
  error?: string; // Error message
  minLength?: number;
  placeholder?: string;
  secureTextEntry?: boolean;
  leftAdornment?: React.ReactNode;
  rightAdornment?: React.ReactNode;
  onChangeText?: (value: string, error: string) => void; // Handler to report changes and errors
}

const FormInput: React.FC<FormInputProps> = ({
  label,
  name,
  onChangeText,
  value,
  minLength,
  maxLength,
  placeholder,
  leftAdornment,
  rightAdornment,
  secureTextEntry,
  error,
  ...props
}) => {
  const [inputValue, setInputValue] = useState<string>(value || '');
  const [showPassword, setShowPassword] = useState<boolean>(
    secureTextEntry ? true : false,
  );

  // Handle change and validate input
  const handleChange = (input: string) => {
    setInputValue(input);
    let errorMessage = '';
    if (minLength && minLength < 3) {
      errorMessage = 'must be at least 3 characters long';
    }
    onChangeText?.(input, errorMessage);
  };
  const handleShowPassword = () => setShowPassword(!showPassword);

  return (
    <View style={{marginBottom: 10}}>
      {label && <Text style={styles.label}>{label}</Text>}
      <View style={styles.inputWrap}>
        {leftAdornment ? <View>{leftAdornment}</View> : null}
        <TextInput
          {...props}
          accessible={true}
          returnKeyType="done"
          blurOnSubmit={false}
          autoCapitalize="none"
          value={inputValue}
          placeholder={placeholder}
          onChangeText={handleChange}
          placeholderTextColor={Colors.grey}
          accessibilityLabel={label || placeholder}
          secureTextEntry={secureTextEntry ? showPassword : false}
          style={[styles.input, error ? styles.inputError : null]}
        />
        <View>
          {secureTextEntry ? (
            <TouchableOpacity style={{padding: 5}} onPress={handleShowPassword}>
              <Icon
                name={showPassword ? 'eye-closed' : 'eye'}
                onPress={handleShowPassword}
              />
            </TouchableOpacity>
          ) : (
            rightAdornment
          )}
        </View>
      </View>
      <Text color={Colors.red} size={12} textAlign="right">
        {error || ''}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
  },
  label: {
    marginBottom: 8,
    fontSize: 16,
    color: '#333',
  },
  input: {
    height: 50,
    fontSize: 16,
    flex: 1,
    minWidth: '80%',
    paddingHorizontal: 5,
  },
  inputWrap: {
    borderWidth: 1,
    borderRadius: 4,
    borderColor: '#ccc',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 8,
    borderBottomWidth: 1,
    justifyContent: 'space-between',
    borderBottomColor: Colors.primary,
  },
  inputError: {
    borderColor: 'red',
  },
});

export default FormInput;
