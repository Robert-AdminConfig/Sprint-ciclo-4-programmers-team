import { /* inject, */ BindingScope, injectable} from '@loopback/core';

@injectable({scope: BindingScope.TRANSIENT})
export class NotificacionesRobertService {
  constructor(/* Add @inject to inject parameters */) {}

  /*
   * Add service methods here
   */
  EnviarSMS ():void{
    console.log('HOLA SOY ROBERT');
    const accountSid = 'AC13c312cbe883211a2795a346faab54fe'; // Your Account SID from www.twilio.com/console
const authToken = 'aee8be9c68901bd06afd44310e66a548'; // Your Auth Token from www.twilio.com/console

const twilio = require('twilio');
const client = new twilio(accountSid, authToken);

client.messages
  .create({
    body: 'Mensaje de Prueba team programmers, JENCY, MARLIN, FERNEY Y ROBERT DAW Ciclo 4, G3 Nov 21 de 2021s',
    to: '+573118138298', // Text this number
    from: '+19123725050', // From a valid Twilio number
  })
  .then((message: any) => console.log(message.sid));
  }
}
