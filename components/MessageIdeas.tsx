import Colors from '@/constants/Colors';
import { Text, ScrollView, TouchableOpacity, StyleSheet, View } from 'react-native';

const PredefinedMessages = [
  { title: 'Conocer mi saldo', text: "Quiero conocer mi saldo" },
  { title: 'Obtener una TDC', text: '¿Qué tarjeta me conviene?' },
  { title: 'Quiero invertir', text: "¿Dónde podria invertir?" },
];

type Props = {
  onSelectCard: (message: string) => void;
};

const MessageIdeas = ({ onSelectCard }: Props) => {
  return (
    <View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: 20,
          paddingVertical: 10,
          gap: 16,
        }}>
        {PredefinedMessages.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={styles.card}
            onPress={() => onSelectCard(`${item.title} ${item.text}`)}>
            <Text style={{ fontSize: 16, fontWeight: '500' }}>{item.title}</Text>
            <Text style={{ color: Colors.grey, fontSize: 14 }}>{item.text}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: Colors.input,
    padding: 14,
    borderRadius: 10,
  },
});
export default MessageIdeas;
