import {ScrollView, StyleSheet, Text, View} from 'react-native'
import {ClassCard} from '../../components/class/ClassCard'
import data from './data.json'
import {globalColors} from '../../themes/theme'

export const ClassesScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Mis clases pendientes</Text>
      <ScrollView style={styles.scrollView}>
        <View style={styles.classesContainer}>
          {data.map(
            ({
              id,
              name,
              startTime,
              endTime,
              location,
              group,
              teacherName,
              studentCount,
            }) => {
              return (
                <ClassCard
                  key={id}
                  name={name}
                  startTime={new Date(startTime)}
                  endTime={new Date(endTime)}
                  location={location}
                  group={group}
                  teacherName={teacherName}
                  studentCount={studentCount}
                />
              )
            },
          )}
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#F3F8FE',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    color: globalColors.darkGray,
    marginVertical: 16,
  },
  scrollView: {
    flex: 1,
  },
  classesContainer: {
    flex: 1,
    display: 'flex',
    gap: 16,
  },
})
