import { RFValue } from 'react-native-responsive-fontsize'

const borderColor = '#e2e4e4'
const borderRadius = `${RFValue(48)}px`

export default {
  colors: {
    primary: '#f88602',
    secondary: '#fdB439',

    textPrimary: '#000',
    textSecondary: '#999999',

    textError: '#c93535',
    textButton: '#fff',

    textLabel: '#393C41',

    backgroundColorDivider: '#393C41',

    backgroundPrimary: '#fff',
    backgroundSecondary: '#fafafa',

    backgroundColorInput: '#ededed',
    backgroundColorSearchBar: '#ededed',

    backgroundColorButtonAction: '#fff',

    borderColorInput: borderColor,
    borderColorCard: borderColor,
    borderColorTabBar: borderColor
  },

  layout: {
    borderRadiusInput: borderRadius,
    borderRadiusButton: borderRadius,
    borderRadiusModal: `${RFValue(16)}px`
  }
}
