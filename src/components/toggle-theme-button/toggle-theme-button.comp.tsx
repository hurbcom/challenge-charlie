import { useTheme } from '@styles/theme-provider'
import * as Styles from './toggle-theme-button.styles'
import { ReactComponent as SunIcon } from '@assets/icons/sun.svg'
import { ReactComponent as MoonIcon } from '@assets/icons/moon.svg'

export const ToggleThemeButton = () => {
    const { theme, toggleTheme, themeName } = useTheme()

    return (
        <Styles.IconButton onClick={() => toggleTheme()} data-testid="button">
            {themeName === 'light' ? (
                <SunIcon
                    fill={theme.typography.colors.primary}
                    data-testid="sun"
                />
            ) : (
                <MoonIcon
                    fill={theme.typography.colors.primary}
                    data-testid="moon"
                />
            )}
        </Styles.IconButton>
    )
}
