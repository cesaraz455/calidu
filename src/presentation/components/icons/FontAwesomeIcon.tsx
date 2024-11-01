import Icon from 'react-native-vector-icons/FontAwesome5'

interface FontAwesomeIconProps {
  name: string
  size?: number
  color?: string
  solid?: boolean
  light?: boolean
}

export const FontAwesomeIcon = ({
  name = '',
  size = 24,
  color = 'black',
  solid = false,
  light = false,
}: FontAwesomeIconProps) => {
  return (
    <Icon name={name} size={size} color={color} solid={solid} light={light} />
  )
}
