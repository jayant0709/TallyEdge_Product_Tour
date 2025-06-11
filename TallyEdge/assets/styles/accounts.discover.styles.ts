import { COLORS } from '@/constants/colors';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    header: {
        flex: 1,
        backgroundColor: COLORS.white,
        flexDirection: 'row',
        height: 80,
        width: '100%',
    },
    headerLeft: {
        flex: 1,
        padding: 10,
    },
    heading: {
        flexDirection: 'row',
    },
    headingText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: COLORS.text,
    }
});