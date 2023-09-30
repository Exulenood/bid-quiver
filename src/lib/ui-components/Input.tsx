import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface InputProps {
  labelText: string;
  labelPos: 'left' | 'center';
  isPassword: boolean;
}

function Input({ labelText, labelPos, isPassword }: InputProps) {
  return (
    <View>
      <Text>{labelText}</Text>
    </View>
  );
}
