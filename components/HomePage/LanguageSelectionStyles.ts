// LanguageSelectionStyles.ts
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1B1B1B',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  logo: {
    width: '50%',
    height: '25%',
    borderRadius: 10,
    marginBottom: 70, // Adjusted spacing between logo and title
    marginTop: -40, // Use a negative margin to move it up slightly
  },
  title: {
    fontSize: 24,
    color: '#FDEAC1',
    fontWeight: 'bold',
    marginBottom: 40,
    textAlign: 'center',
  },
  languageContainer: {
    width: '100%',
    maxWidth: 300,
    marginBottom: 40,
  },
  languageButtonsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  languageButton: {
    backgroundColor: '#FDEAC1',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginHorizontal: 5,
    flex: 1,
  },
  languageButtonText: {
    textAlign: 'center',
    fontSize: 16,
    color: '#000',
  },
  socialMediaContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 30,
  },
  socialIcon: {
    marginHorizontal: 15,
  },
  socialIconText: {
    color: '#FDEAC1',
    fontSize: 16,
  },
  location: {
    color: '#FDEAC1',
    fontSize: 16,
  },
});

export default styles;
