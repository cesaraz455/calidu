import {Pressable, StyleSheet, Text} from 'react-native'
import {globalColors} from '../../themes/theme'
import moment from 'moment'

export interface ClassCardProps {
  name: string
  startTime: Date
  endTime: Date
  location: string
  group: string
  teacherName?: string
  studentCount?: number
}

export const ClassCard = ({
  name,
  startTime,
  endTime,
  location,
  group,
  teacherName,
  studentCount,
}: ClassCardProps) => {
  const currentDate = moment()
  const startTimeAux = moment(startTime)
  const endTimeAux = moment(endTime)
  const isNow =
    currentDate.isAfter(startTimeAux) && currentDate.isBefore(endTimeAux)
  const relativeDate = isNow ? 'Ahora' : moment(startTime).from(currentDate)
  const relativeTime = `${startTimeAux.format('hh:mm A')} - ${endTimeAux.format(
    'hh:mm A',
  )}`

  return (
    <Pressable
      style={styles.card}
      onPress={() => {
        console.info('press')
      }}>
      <Text style={styles.highlightedText}>{name}</Text>
      <Text style={{...styles.basicText, ...styles.boldText}}>
        {relativeDate} de {relativeTime}
      </Text>
      <Text style={styles.basicText}>{location}</Text>

      <Text style={styles.basicText}>{teacherName}</Text>
      <Text style={styles.basicText}>{studentCount} estudiantes</Text>

      <Text style={styles.basicText}>{group}</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFF',
    borderRadius: 10,
    paddingHorizontal: 21,
    paddingVertical: 16,
    boxShadow: '0 0 2px rgba(0, 0, 0, 0.2)',
  },
  basicText: {
    fontSize: 16,
  },
  boldText: {
    fontWeight: '500',
  },
  highlightedText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: globalColors.secondary,
    textDecorationLine: 'underline',
  },
})
