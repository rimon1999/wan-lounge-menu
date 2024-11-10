import React, { useState, FC, useEffect } from 'react';
import { Animated, ScrollView, View, Text, Image, TouchableOpacity } from 'react-native';

interface DrinkItem {
  id: number;
  name: string;
  price: string;
  pictureUrl: any;
}

interface MenuSectionProps {
  title: string;
  sections: Record<string, { name: string; items: DrinkItem[] }>;
  initialSection: keyof MenuSectionProps['sections'];
}

const MenuSection: FC<MenuSectionProps> = ({ title, sections, initialSection }) => {
  const [selectedSection, setSelectedSection] = useState(initialSection);
  const [displayedSection, setDisplayedSection] = useState(initialSection);
  const [animations, setAnimations] = useState<Animated.Value[]>([]);
  const [isAnimating, setIsAnimating] = useState(false);

  // Initialize animations on mount
  useEffect(() => {
    initializeAnimations(initialSection);
  }, []); // Empty dependency array for mount only

  // Handle section changes
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

  return (
    <View style={{ flex: 1, backgroundColor: 'black', padding: 12 }}>
      <View style={{ alignItems: 'center', marginBottom: 20 }}>
        <Text style={{ fontSize: 24, color: '#FACE8D', fontFamily: 'Dancing Script' }}>{title}</Text>
        <Text style={{ fontSize: 32, color: 'white', fontWeight: 'bold' }}>Menu</Text>
      </View>

      <View style={{ flexDirection: 'row', justifyContent: 'center', marginBottom: 20 }}>
        {Object.keys(sections).map((section) => (
          <TouchableOpacity
            key={section}
            onPress={() => changeSection(section)}
            style={{ marginHorizontal: 10 }}
            disabled={isAnimating}
          >
            <Text 
              style={{ 
                color: selectedSection === section ? '#FACE8D' : 'white',
                fontSize: 16
              }}
            >
              {sections[section].name}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <ScrollView style={{ flex: 1 }}>
        <View style={{ marginBottom: 40 }}>
          <Text style={{ color: '#FACE8D', fontSize: 24, marginBottom: 10 }}>
            {sections[displayedSection].name}
          </Text>
          
          {sections[displayedSection].items.map((item, index) => (
            <Animated.View
              key={item.id}
              style={{
                flexDirection: 'row',
                marginBottom: 10,
                borderWidth: 1,
                borderColor: 'transparent',
                borderRadius: 10,
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
              <Image 
                source={item.pictureUrl} 
                style={{ width: 90, height: 72, borderRadius: 10 }} 
              />
              <View style={{ marginLeft: 16, flex: 1 }}>
                <Text style={{ fontSize: 18, fontWeight: '500', color: 'white' }}>
                  {item.name}
                </Text>

                <Text style={{ fontSize: 16, color: 'white', fontWeight: 'bold' }}>
                  {item.price}
                </Text>
              </View>
            </Animated.View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default MenuSection;