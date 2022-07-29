import { Text, StyleSheet, TouchableOpacity, Alert, View, TextInput } from 'react-native'
import React, { Component } from 'react'


export default class StateProps extends Component { 
    constructor(props) {
      super(props)
    
      this.state = {
         username : '',
         password : '',
         isLogin : false
      }
    }

    login = () =>{
       if(!this.state.username && !this.state.password){
        Alert.alert("Error" , "Username Password Harus diisi")
       }else if(this.state.username != 'ade' && this.state.password != '123'){
        Alert.alert("Error" , "Username atau Password Salah")
       }else if(this.state.username == 'ade' && this.state.password == '123'){
        this.setState({
            isLogin : true
        })
       }  
    }
  render() {
    const {username, password, isLogin} = this.state
    return (
      <View style = {styles.container}>
        <Text style = {styles.title} >Belajar Membuat Form</Text>
        <View style={styles.garis}/>
        {/* Isi */}
        <View  style={styles.isi}>
           <View style={styles.wrapperinput}>
                <Text>Username : </Text>
                <TextInput style={styles.textInput}
                    placeholder="Masukan Username"
                    value={username}
                    onChangeText={(username) => this.setState({username})}
                />
           </View>
           <View style={styles.wrapperinput}>
                <Text>Password : </Text>
                <TextInput style={styles.textPassword}
                    placeholder="Masukan Password"
                    value={password}
                    onChangeText={(password) => this.setState({password})}
                    secureTextEntry={true}
                />
           </View>
           <View>
            <TouchableOpacity style={styles.button} onPress={() => this.login()}>
                <Text style={styles.textButton}>LOGIN</Text>
            </TouchableOpacity>
            {isLogin &&
                <Text style={{marginTop:10}}>Selamat berhasil login : {username} </Text>
            }
           </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    container : { padding:30 },
    title : {
        fontSize :20,
        fontWeight :'bold',
        textAlign:'center',
    },
    garis : {
        borderBottomWidth:1,
        marginTop:10,
    },
    isi : {
        marginTop: 30,
    },
    textInput : {
        marginTop :5,
        borderWidth : 1,
        padding : 10,
        borderColor : 'grey',
        borderRadius : 10,
    },
    textPassword : {
        marginTop : 5,
        borderWidth : 1,
        padding : 10,
        borderColor : 'grey',
        borderRadius : 10,
    },
    wrapperinput : {
        marginTop: 10,
    },
    button : {
        backgroundColor:'skyblue',
        marginTop :20,
        padding: 10,
        borderRadius : 5,
    }, 
    textButton : {
        textAlign: 'center',
        fontWeight: 'bold', 
    }
   
}) 