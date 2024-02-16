import { Tabs } from 'expo-router/tabs';
import { Home, Wallet, Settings, CreditCard } from 'lucide-react-native';
import { Box, Text } from '@gluestack-ui/themed'

export default function AppLayout() {


    return (
        <Tabs screenOptions={{
            tabBarStyle: {
                paddingBottom: 6,
                height: 60
            }
        }}>
            <Tabs.Screen
                // Name of the route to hide.
                name="index"
                options={{
                    headerTitle: () => <Box p={10}><Text color="$black" fontFamily='Inter_500Medium' size="lg" fontWeight="bold">Welcome Munyaradzi</Text></Box>,
                    headerTitleAlign: 'center',
                    tabBarIcon: ({ color, size }) => <Home color={color} size={size} />,
                    tabBarLabel: 'Home',
                    tabBarActiveTintColor: 'black',
                }}
            />

            <Tabs.Screen name="orders" options={{
                title: 'Orders',
                tabBarIcon: ({ color, size }) => <CreditCard color={color} size={size} />,
                tabBarActiveTintColor: 'black',
                tabBarInactiveTintColor: 'gray',
                tabBarLabel: 'Wallet',
            }} />

     

            <Tabs.Screen name="store" options={{
                title: 'Store',
                tabBarIcon: ({ color, size }) => <Settings color={color} size={size} />,
                tabBarActiveTintColor: 'black',
                tabBarInactiveTintColor: 'gray',
                tabBarLabel: 'Settings',
            }} />

        </Tabs>
    );
}