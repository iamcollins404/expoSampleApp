import React, { useState } from 'react';
import { Box, Text, Center, VStack, Button, Input, InputField } from '@gluestack-ui/themed';
import { ArrowRight } from 'lucide-react-native';
import { KeyboardAvoidingView, Platform, ActivityIndicator } from 'react-native';
import { router } from 'expo-router';

const Login = () => {
  // State to manage loading and form stage
  const [isLoading, setIsLoading] = useState(false);
  const [stage, setStage] = useState(1); // 1: Email Input, 2: OTP Input

  const handleNextClick = () => {
    setIsLoading(true);
    // Mock loading for demonstration purposes
    setTimeout(() => {
      setIsLoading(false);
      setStage(2); // Move to OTP stage after loading
    }, 2000); // Mock loading time
  };

const handleVerifyClick = () => {
    setIsLoading(true);
    // Mock loading for demonstration purposes
    setTimeout(() => {
      setIsLoading(false);
     router.replace('/dashboard') // Move to OTP stage after loading
    }, 2000); // Mock loading time
}

  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={{ flex: 1 }}>
      <Box flex={1} bg='black' justifyContent='center'>

        {stage === 1 && (
          <VStack p={4} space='md'>
            <Box>
              <Input
                borderColor='white'
                borderWidth={2}
                placeholder="Email"
                variant='outline'
                size="md"
                w="$full"
              >
                <InputField cursorColor='white' w="$full" placeholder="Email" />
              </Input>
            </Box>
            <Box>
              {isLoading ? (
                <ActivityIndicator mt={4} size="medium" color="white" />
              ) : (
                <Button
                  bg='white'
                  borderColor='white'
                  borderWidth={2}
                  variant='outline'
                  onPress={handleNextClick}
                >
                  <Text color='black'>Next</Text>
                  <ArrowRight color='black' size={24} />
                </Button>
              )}
            </Box>
          </VStack>
        )}

        {stage === 2 && (
          <VStack p={4} space='md'>
            <Box>
              <Input
                borderColor='white'
                borderWidth={2}
                placeholder="OTP"
                variant='outline'
                size="md"
                w="$full"
              >
                <InputField cursorColor='white' w="$full" placeholder="OTP" />
              </Input>
            </Box>
            <Box>
              <Button
                bg='white'
                borderColor='white'
                borderWidth={2}
                variant='outline'
                onPress={handleVerifyClick}
              >
                <Text color='black'>Verify OTP</Text>
              </Button>
            </Box>
          </VStack>
        )}

      </Box>
      <Box bg='black' h="$1/6">
        <Button borderColor='white' bgColor='white' borderWidth={2} variant="solid" onPress={() => console.log('Request Account')}>
          <Text bold  color="black">Request Account</Text>
        </Button>
      </Box>
    </KeyboardAvoidingView>
  );
}

export default Login;