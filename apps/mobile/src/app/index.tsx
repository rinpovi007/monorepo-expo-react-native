import { Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function HomeScreen() {
  return (
    <SafeAreaView>
      <Text style={{ color: 'red' }}>This is a test Text</Text>
    </SafeAreaView>
  );
}

