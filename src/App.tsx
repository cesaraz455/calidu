import {
  SafeAreaView,
  ScrollView,
  StatusBar,
} from 'react-native';
import moment from 'moment';
import { ClassCard} from './presentation/components'
import 'moment/locale/es';
import { globalStyles } from './presentation/themes/theme';
import { ClassCardProps } from './presentation/components/ClassCard/ClassCard';

/**
 * General Settings
 */
moment.locale('es')

const data : Array<ClassCardProps> = [
  {
    name: 'Programación orientada a objetos',
    startTime: new Date('2024-10-29T20:33Z'),
    endTime: new Date('2024-10-29T23:00Z'),
    location: 'Edificio Euler Sala 403',
    group: 'Grupo 1',
    teacherName: 'César Dario Suarez Montañez',    
    studentCount: 26,
  },
  {
    name: 'Pensamiento algorítmico',
    startTime: new Date('2024-10-29T20:33Z'),
    endTime: new Date('2024-10-29T23:00Z'),
    location: 'Edificio Euler Sala 403',
    group: 'Grupo 1',
    teacherName: 'César Dario Suarez Montañez',    
    studentCount: 26,
  },
  {
    name: 'Pensamiento sistémico',
    startTime: new Date('2024-10-29T20:33Z'),
    endTime: new Date('2024-10-29T23:00Z'),
    location: 'Edificio Euler Sala 403',
    group: 'Grupo 1',
    teacherName: 'César Dario Suarez Montañez',    
    studentCount: 26,
  },
  {
    name: 'Matemáticas discretas',
    startTime: new Date('2024-10-29T20:33Z'),
    endTime: new Date('2024-10-29T23:00Z'),
    location: 'Edificio Euler Sala 403',
    group: 'Grupo 1',
    teacherName: 'César Dario Suarez Montañez',    
    studentCount: 26,
  },
  {
    name: 'Estructura de datos',
    startTime: new Date('2024-10-29T20:33Z'),
    endTime: new Date('2024-10-29T23:00Z'),
    location: 'Edificio Euler Sala 403',
    group: 'Grupo 1',
    teacherName: 'César Dario Suarez Montañez',    
    studentCount: 26,
  },
  {
    name: 'Estructura de datos',
    startTime: new Date('2024-10-29T20:33Z'),
    endTime: new Date('2024-10-29T23:00Z'),
    location: 'Edificio Euler Sala 403',
    group: 'Grupo 1',
    teacherName: 'César Dario Suarez Montañez',    
    studentCount: 26,
  },
  {
    name: 'Estructura de datos',
    startTime: new Date('2024-10-29T20:33Z'),
    endTime: new Date('2024-10-29T23:00Z'),
    location: 'Edificio Euler Sala 403',
    group: 'Grupo 1',
    teacherName: 'César Dario Suarez Montañez',    
    studentCount: 26,
  },
]

/**
 * App Component
 */
function App(): React.JSX.Element {
  return (
    <SafeAreaView style={globalStyles.safeAreaContainer}>
      <StatusBar />
      <ScrollView>
        {data.map((item, index) => {
          return <ClassCard key={index} {...item} />
        })}
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;
