import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StackActions } from '@react-navigation/native'
import { TextInput, Button } from 'react-native-paper';
import apiHelper from '../module/apiHelper'

export default function SignIn({ navigation }) {
  const [userId, setUserId] = React.useState("");
  const [password, setPassword] = React.useState("");

  const signIn = async ({ userId: userId, password: password }) => {
    const url = '/sign-in'
    const method = 'post'
    const body = {
      userId: userId,
      password: password
    }
    const res = await apiHelper({ url: url, method: method, body: body })
    if (res?.data?.success) {
      console.log(res.data)
      navigation.navigate('Home')
    }
  }

  return (
    <View style={styles.container}>
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
      <Button icon="login" mode="contained" onPress={() => signIn({ userId: userId, password: password })}>
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
    marginBottom: '25px',
  }
});
