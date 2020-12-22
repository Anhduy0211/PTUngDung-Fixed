import React, { Component } from 'react';
import {View,Text} from 'react-native';
import { Card, Image,Divider,Button,Icon } from 'react-native-elements';
import * as MailComposer from 'expo-mail-composer';
class ContactUs extends Component {
    sendMail() {
        MailComposer.composeAsync({
          recipients: ['confusion@food.net'],
          subject: 'From Confusion',
          body: 'Hello my friends ...'
        });
      }
    render(){
        return (   
                <Card style={{fontWeight:'bold'}}>
                    <Card.Title>Contact Information</Card.Title>
                   
                    <Card.Divider/>         
                    <Text >
                    HoaSen University, Quang Trung 1, SoongSil House
                    </Text>
                    <Text>
                    Tel: (+84) 336627161
                    </Text>
                    <Text>
                    Fax: (+84) xxxxxxxxxxx
                     </Text>
                    <Text>
                    Email:anhduy.nguyen0211@gmail.com
                    </Text>
                    <Button title=' Send Email' buttonStyle={{ backgroundColor: '#7cc' }}
                        icon={<Icon name='envelope-o' type='font-awesome' color='white' />}
                        onPress={this.sendMail} />     
                </Card>  
        )
    }
}
export default ContactUs;