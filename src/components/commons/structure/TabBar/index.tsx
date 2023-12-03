import React from 'react'
import { Text } from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import { BottomTabBarProps } from '@react-navigation/bottom-tabs'

import { AppointmentsIcon } from '../../../../assets/Icons/Home/AppointmentsIcon'
import { HomeIcon } from '../../../../assets/Icons/Home/HomeIcon'
import { UserIcon } from '../../../../assets/Icons/Home/UserIcon'
import SugarSenseTheme from '../../../../global/theme/index'
import { ButtonContainer, Container, IconContainer } from './styles'

type TabBarProps = BottomTabBarProps

export const TabBar: React.FC<TabBarProps> = ({
  state,
  descriptors,
  navigation
}) => {
  const insets = useSafeAreaInsets()

  return (
    <Container paddingBottom={Math.max(insets.bottom, 16)}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key]
        let label
        let icon
        const isFocused = state.index === index

        switch (route.name) {
          case 'Home':
            label = 'Home'
            icon = (
              <HomeIcon
                color={
                  isFocused
                    ? SugarSenseTheme.colors.textPrimary
                    : SugarSenseTheme.colors.textSecondary
                }
              />
            )
            break

          case 'Appointments':
            label = 'Medições'
            icon = (
              <AppointmentsIcon
                color={
                  isFocused
                    ? SugarSenseTheme.colors.textPrimary
                    : SugarSenseTheme.colors.textSecondary
                }
              />
            )
            break

          case 'Profile':
            label = 'Perfil'
            icon = (
              <UserIcon
                color={
                  isFocused
                    ? SugarSenseTheme.colors.textPrimary
                    : SugarSenseTheme.colors.textSecondary
                }
              />
            )
            break
        }

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true
          })

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name)
          }
        }

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key
          })
        }

        return (
          <ButtonContainer
            accessibilityRole="button"
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onLongPress={onLongPress}
            onPress={onPress}
            key={label}
          >
            <IconContainer>{icon}</IconContainer>
            <Text
              style={{
                fontSize: RFValue(10),
                fontWeight: '400',
                color: isFocused
                  ? SugarSenseTheme.colors.textPrimary
                  : SugarSenseTheme.colors.textSecondary
              }}
            >
              {label}
            </Text>
          </ButtonContainer>
        )
      })}
    </Container>
  )
}
