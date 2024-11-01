import {SafeAreaView, StatusBar} from 'react-native'
import moment from 'moment'
import 'moment/locale/es'
import {globalStyles} from './presentation/themes/theme'
import {NavigationContainer} from '@react-navigation/native'
import {HomeScreen} from './presentation/screens/home/HomeScreen'

/**
 * General Settings
 */
moment.locale('es')

/**
 * App Component
 */
function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <SafeAreaView style={globalStyles.safeAreaContainer}>
        <StatusBar />
        <HomeScreen />
      </SafeAreaView>
    </NavigationContainer>
  )
}

export default App
