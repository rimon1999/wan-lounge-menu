import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Linking,
  SafeAreaView,
} from 'react-native';

interface LanguageButtonProps {
  title: string;
  onPress: () => void;
}

const LanguageButton: React.FC<LanguageButtonProps> = ({ title, onPress }) => (
  <TouchableOpacity 
    style={styles.languageButton} 
    onPress={onPress}
    accessible={true}
    accessibilityLabel={`Select ${title} language`}
  >
    <Text style={styles.languageButtonText}>{title}</Text>
  </TouchableOpacity>
);

const RestaurantLanding: React.FC<{ navigation: any }> = ({ navigation }) => {
  const handleLanguageSelect = (language: string) => {
    console.log(`Selected language: ${language}`);
    // Navigate to CategorySelection screen after language selection
    navigation.navigate('CategorySelection'); // Adjust as per your navigation structure
    // Implement additional language change logic if necessary
  };

  const handleSocialMediaPress = (platform: string) => {
    // Add your social media links here
    const links = {
      facebook: 'https://facebook.com/montanarestaurant',
      instagram: 'https://instagram.com/montanarestaurant',
      snapchat: 'https://snapchat.com/add/montanarestaurant',
    };
    Linking.openURL(links[platform as keyof typeof links]);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        {/* Restaurant Name */}
        <Text style={styles.title}>Wan Lounge</Text>

        {/* Language Selection */}
        <View style={styles.languageContainer}>
          <LanguageButton
            title="کوردی"
            onPress={() => handleLanguageSelect('kurdish')}
          />
          <View style={styles.languageButtonsRow}>
            <LanguageButton
              title="عربي"
              onPress={() => handleLanguageSelect('arabic')}
            />
            <LanguageButton
              title="English"
              onPress={() => handleLanguageSelect('english')}
            />
          </View>
        </View>

        {/* Social Media Icons */}
        <View style={styles.socialMediaContainer}>
          <TouchableOpacity
            onPress={() => handleSocialMediaPress('facebook')}
            style={styles.socialIcon}
          >
            <Text style={styles.socialIconText}>Facebook</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => handleSocialMediaPress('instagram')}
            style={styles.socialIcon}
          >
            <Text style={styles.socialIconText}>Instagram</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => handleSocialMediaPress('snapchat')}
            style={styles.socialIcon}
          >
            <Text style={styles.socialIconText}>Snapchat</Text>
          </TouchableOpacity>
        </View>

        {/* Location Information */}
        <Text style={styles.location}>Zaxo, New Zaxo</Text>
      </View>
    </SafeAreaView>
  );
};

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
  title: {
    fontSize: 24,
    color: '#887559',
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
    backgroundColor: '#F5F5F1',
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
    color: '#887559',
    fontSize: 16,
  },
  location: {
    color: '#887559',
    fontSize: 16,
  },
});

export default RestaurantLanding;
