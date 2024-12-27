import { View, StyleSheet, Text } from 'react-native';
import { TpButton } from 'react-native-new-lib';

// global
import 'templarios-2.0/tokens/css/global.min.css';
// congressos
import 'templarios-2.0/tokens/css/congressos/base.min.css';
import 'templarios-2.0/tokens/css/congressos/components/components.min.css';
import 'templarios-2.0/tokens/css/congressos/schemes/dark.min.css';
import 'templarios-2.0/tokens/css/congressos/themes/default.min.css';

export default function App() {
  // html class

  return (
    <div className="tp-congressos">
      <View style={styles.container}>
        <TpButton>
          <Text>Solid</Text>
        </TpButton>
        <TpButton tpFill="solid">
          <Text>Solid</Text>
        </TpButton>
        <TpButton tpFill="clear">
          <Text>Clear</Text>
        </TpButton>
      </View>
    </div>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
