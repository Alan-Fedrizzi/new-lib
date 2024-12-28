import { View, StyleSheet } from 'react-native';
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
    <div className="tp-congressos" style={styles.container}>
      <View style={styles.container}>
        <TpButton onPress={() => console.log('pressed')}>Solid</TpButton>
        <TpButton tpFill="solid" onPress={() => console.log('pressed')}>
          Solid
        </TpButton>
        <TpButton tpFill="clear" onPress={() => console.log('pressed')}>
          Clear
        </TpButton>
        <TpButton tpDisabled onPress={() => console.log('pressed')}>
          Solid Disabled
        </TpButton>
        <TpButton
          tpFill="solid"
          tpDisabled
          onPress={() => console.log('pressed')}
        >
          Solid Disabled
        </TpButton>
        <TpButton
          tpFill="clear"
          tpDisabled
          onPress={() => console.log('pressed')}
        >
          Clear Disabled
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
    height: '100%',
    backgroundColor: '#121616',
  },
});
