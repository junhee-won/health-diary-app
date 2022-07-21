import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { TextInput, Button } from 'react-native-paper';

export default function SignIn() {
    const [userId, setUserId] = React.useState("");
    const [password, setPassword] = React.useState("");

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <TextInput
        mode="outlined"
        label="아이디"
        value={userId}
        onChangeText={userId => setUserId(userId)}
        style={styles.input}
        />
      <TextInput
        mode="outlined"
        label="비밀번호"
        value={password}
        onChangeText={password => setPassword(password)}
        style={styles.input}
        secureTextEntry={true}
      />
      <Button icon="login" mode="contained" onPress={() => console.log(`id: ${userId}, password: ${password}`)}>
        로그인
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    width: '200px',
    // height: '50px',
    marginBottom: '25px',
  }
});
