import { COLORS } from '@/constants/colors';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F9F9',
    // padding: 16,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    backgroundColor: COLORS.white,
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  headingText: {
    fontSize: 18,
    fontWeight: '900',
    color: COLORS.text,
    marginLeft: 10,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: COLORS.text,
    marginBottom: 10,
    marginLeft: 15,
  },
  card: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: COLORS.white,
    borderRadius: 12,
    paddingVertical: 16,
    paddingHorizontal: 20,
    shadowColor: '#333333',
    shadowOpacity: 0.05,
    shadowRadius: 5,
    elevation: 4,
    marginBottom: 20,
    marginHorizontal: 15,
  },
  cardText: {
    fontSize: 15,
    fontWeight: '600',
    color: COLORS.text,
  },
  footerTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 15,
  },
  footerText: {
    fontSize: 14,
    color: '#555',
  },
  linkText: {
    fontSize: 14,
    color: '#6E31DC',
    fontWeight: '600',
    textDecorationLine: 'underline',
  },
});
