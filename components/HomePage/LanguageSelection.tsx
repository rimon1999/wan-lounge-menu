// RestaurantLanding.tsx
import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Linking,
  SafeAreaView,
  Image
} from 'react-native';
import styles from './LanguageSelectionStyles'; // Import the styles

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

const LanguageSelection: React.FC<{ navigation: any }> = ({ navigation }) => {
  const handleLanguageSelect = (language: string) => {
    console.log(`Selected language: ${language}`);
    navigation.navigate('CategorySelection');
  };

  const handleSocialMediaPress = (platform: string) => {
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
    <Image
      source={require('../../assets/images/Logo.png')} 
      style={styles.logo} 
    />   

    <Text style={styles.title}>Your Favorite Coffee Spot</Text>

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

    <View style={styles.socialMediaContainer}>
      <TouchableOpacity
        onPress={() => handleSocialMediaPress('facebook')}
        style={styles.socialIcon}
      >
    <Image 
      source={require('../../assets/images/Facebook.png')} 
      style={{ width: 70, height: 70, borderRadius: 10 }} 
      /> 
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => handleSocialMediaPress('instagram')}
        style={styles.socialIcon}
      >
    <Image 
      source={require('../../assets/images/Instagram.png')} 
      style={{ width: 70, height: 70, borderRadius: 10 }} 
      />  
           </TouchableOpacity>
      
    </View>

    <Text style={styles.location}>Zaxo, New Zaxo</Text>
  </View>
</SafeAreaView>

  );
};

export default LanguageSelection;
