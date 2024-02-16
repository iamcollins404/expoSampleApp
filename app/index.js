import React, { useState } from 'react';
import { Box, Button, ButtonText, HStack, Text, VStack } from '@gluestack-ui/themed';
import { BadgeDollarSign, Users, Kanban } from 'lucide-react-native';
import * as Haptics from 'expo-haptics';
import { router } from 'expo-router';



const Auth = () => {
    const [showLoginForm, setShowLoginForm] = useState(false);

    const LoginPressed = () => {
        Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
        router.push('/login');
    };

    const renderLoginForm = () => (
        <VStack space="md">
            <Input placeholder="Email" />
            <Input placeholder="Password" type="password" />
            <Button variant="solid" onPress={() => console.log('Submit login')}>
                <Text>Login</Text>
            </Button>
        </VStack>
    );

    return (

        <Box flex={1} justifyContent="center" bgColor='black' alignItems='center'>
            <Box h="$3/5">

            </Box>


            <Box h="$1/5">
                <VStack space="md">
                    <Box flexDirection='row' alignItems='center'>
                        <BadgeDollarSign size={24} color="white" />
                        <Text fontFamily='Inter_500Medium' ml={10} textAlign='center' bold size="xl" color="white">

                            Track Your Daily Sales
                        </Text>
                    </Box>
                    <Box flexDirection='row' alignItems='center'>
                        <Users size={24} color="white" />
                        <Text fontFamily='Inter_500Medium' ml={10} textAlign='center' bold size="xl" color="white">

                            Monitor Your Customers
                        </Text>
                    </Box>
                    <Box flexDirection='row' alignItems='center'>
                        <Kanban size={24} color="white" />
                        <Text fontFamily='Inter_500Medium' ml={10} textAlign='center' bold size="xl" color="white">

                            Manage From Anywhere
                        </Text>
                    </Box>
                </VStack>


            </Box>

            <Box w="90%" h="$1/5" >
                <Button mb="$3" borderColor='white' borderWidth={2} variant="outline" onPress={LoginPressed}>
                    <Text bold sixe="2xl" color="$white">Login</Text>
                </Button>

                <Button borderColor='$gray300' bg='$green300' borderWidth={2} variant="solid" onPress={() => console.log('Login pressed')}>
                    <Text bold sixe="2xl" color="$black">Request Account</Text>
                </Button>
            </Box>



        </ Box>

    );
};

export default Auth;