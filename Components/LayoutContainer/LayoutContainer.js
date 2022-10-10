import { StyleSheet, Text, View } from 'react-native';

import Colors from '../../constants/colors';

const LayoutContainer = ({ children }) => {
  return <View style={styles.root}>{children}</View>;
};

export default LayoutContainer;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    padding: 24,
    backgroundColor: Colors.primary700,
  },
});
