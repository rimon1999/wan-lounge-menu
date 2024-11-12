import React, { useState, FC, useEffect } from 'react';
import { Animated, ScrollView, View, Text, Image, TouchableOpacity, Dimensions, Modal, TouchableWithoutFeedback } from 'react-native';

interface DrinkItem {
  id: number;
  name: string;
  price: string;
  pictureUrl: any;
}

interface MenuSectionProps {
  title: string;
  sections: Record<string, { name: string; iconUrl: any; items: DrinkItem[] }>;
  initialSection: keyof MenuSectionProps['sections'];
}

const MenuSection: FC<MenuSectionProps> = ({ title, sections, initialSection }) => {
  const [selectedSection, setSelectedSection] = useState(initialSection);
  const [displayedSection, setDisplayedSection] = useState(initialSection);
  const [animations, setAnimations] = useState<Animated.Value[]>([]);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isImageModalVisible, setIsImageModalVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState<any>(null);

  const screenWidth = Dimensions.get('window').width;
  const imageSize = (screenWidth - 36) / 2; // 2 items per row with space for margin/padding

  useEffect(() => {
    initializeAnimations(initialSection);
  }, []);

  useEffect(() => {
    if (selectedSection !== displayedSection) {
      setIsAnimating(true);
      const newAnimations = sections[selectedSection].items.map(() => new Animated.Value(0));
      setAnimations(newAnimations);

      setTimeout(() => {
        setDisplayedSection(selectedSection);
        animateItems(newAnimations);
      }, 50);
    }
  }, [selectedSection]);

  const initializeAnimations = (section: keyof typeof sections) => {
    const initialAnimations = sections[section].items.map(() => new Animated.Value(0));
    setAnimations(initialAnimations);
    animateItems(initialAnimations);
  };

  const animateItems = (animationArray: Animated.Value[]) => {
    const animations = animationArray.map((anim, index) => {
      return Animated.timing(anim, {
        toValue: 1,
        duration: 400,
        delay: index * 100,
        useNativeDriver: true,
      });
    });

    Animated.stagger(100, animations).start(() => {
      setIsAnimating(false);
    });
  };

  const changeSection = (section: keyof typeof sections) => {
    if (!isAnimating && section !== selectedSection) {
      setSelectedSection(section);
    }
  };

  const openImageModal = (image: any) => {
    setSelectedImage(image);
    setIsImageModalVisible(true);
  };

  const closeImageModal = () => {
    setIsImageModalVisible(false);
    setSelectedImage(null);
  };

  return (
    <ScrollView style={{ flex: 1, backgroundColor: 'black', padding: 12 }}>
      <View style={{ marginBottom: 12 }}>
        <Text style={{ fontSize: 22, color: '#FACE8D', fontFamily: 'Dancing Script', textAlign: 'center' }}>{title}</Text>
        <Text style={{ fontSize: 28, color: 'white', fontWeight: 'bold', textAlign: 'center' }}>Menu</Text>
      </View>

      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ marginBottom: 12 }}>
        {Object.keys(sections).map((section) => (
          <TouchableOpacity
            key={section}
            onPress={() => changeSection(section)}
            style={{ paddingVertical: 6, paddingHorizontal: 14 }}
            disabled={isAnimating}
          >
            <View style={{ alignItems: 'center' }}>
              <Image
                source={sections[section].iconUrl}
                style={{ width: 80, height: 80, marginBottom: 5 }}
              />
              <Text
                style={{
                  color: selectedSection === section ? '#FACE8D' : 'white',
                  fontSize: 16,
                  textAlign: 'center',
                }}
              >
                {sections[section].name}
              </Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <Text style={{ color: '#FACE8D', fontSize: 22, marginBottom: 8 }}>
        {sections[displayedSection].name}
      </Text>

      <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' }}>
        {sections[displayedSection].items.map((item, index) => (
          <Animated.View
            key={item.id}
            style={{
              width: imageSize, // Square size for image
              marginBottom: 16,
              padding: 10,
              backgroundColor: '#1f1f1f',
              borderRadius: 8,
              transform: [
                {
                  translateY: animations[index]?.interpolate({
                    inputRange: [0, 1],
                    outputRange: [50, 0],
                  }) || 0,
                },
              ],
              opacity: animations[index]?.interpolate({
                inputRange: [0, 1],
                outputRange: [0, 1],
              }) || 0,
            }}
          >
            <TouchableOpacity onPress={() => openImageModal(item.pictureUrl)}>
              <Image
                source={item.pictureUrl}
                style={{
                  width: '100%',
                  height: imageSize, // Ensure the height is the same as width (square)
                  borderRadius: 8,
                  marginBottom: 8,
                  resizeMode: 'cover',
                }}
              />
            </TouchableOpacity>
            <View>
              <Text style={{ fontSize: 18, fontWeight: '500', color: 'white', textAlign: 'center' }}>
                {item.name}
              </Text>
              <Text style={{ fontSize: 16, color: 'white', fontWeight: 'bold', marginTop: 2, textAlign: 'center' }}>
                {item.price}
              </Text>
            </View>
          </Animated.View>
        ))}
      </View>

      {/* Image Modal */}
      <Modal
        visible={isImageModalVisible}
        animationType="fade"
        transparent={true}
        onRequestClose={closeImageModal}
      >
        <TouchableWithoutFeedback onPress={closeImageModal}>
          <View style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
          }}>
            <Image
              source={selectedImage}
              style={{
                width: screenWidth * 0.8,
                height: screenWidth * 0.8,
                borderRadius: 16,
              }}
            />
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </ScrollView>
  );
};

export default MenuSection;
