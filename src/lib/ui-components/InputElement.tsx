import { Input, NativeBaseProvider } from 'native-base';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { appStandards, TextStyle } from '../../global/styleResources';

interface InputProps {
  labelText: string;
  placeHolder?: string;
  labelPos: 'left' | 'center';
  variant: 'neutral';
}

export default function InputElement({
  labelText,
  placeHolder,
  labelPos,
  variant,
}: InputProps) {
  const inputStyle = appStandards;
  const getLabelPosition = () => {
    switch (labelPos) {
      case 'left':
        return styles.labelTextLeft;
      case 'center':
        return styles.labelTextCenter;
      default:
        return null;
    }
  };
  return (
    <View style={styles.mainContainer}>
      <Text style={[styles.labelText, getLabelPosition()]}>{labelText}</Text>
      <NativeBaseProvider theme={inputStyle}>
        <Input variant={variant} placeholder={placeHolder} />
      </NativeBaseProvider>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    marginTop: 60,
    width: '70%',
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
  },
  labelText: {
    fontSize: TextStyle.fontSize.normal,
    fontFamily: TextStyle.fontFamily.primary,
    width: '100%',
  },
  labelTextCenter: {
    textAlign: 'center',
  },
  labelTextLeft: {
    textAlign: 'left',
  },
});
