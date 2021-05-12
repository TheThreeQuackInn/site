import {useContext} from 'react';
import {ThemeContext} from '../../components/providers/Theme';

/**
 * Use theme
 */
export default function useTheme() {
    return useContext(ThemeContext);
}
