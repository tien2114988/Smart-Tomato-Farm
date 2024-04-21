var mqtt = require('mqtt')

var options = {
    host: 'c73bd1c56f45418d8508c933ca205712.s1.eu.hivemq.cloud',
    port: 8883,
    protocol: 'mqtts',
    username: 'ptho1504',
    password: 'Ptho1504'
}

// initialize the MQTT client
var client = mqtt.connect(options);

// setup the callbacks
client.on('connect', function () {
    console.log('Connected');
});

client.on('error', function (error) {
    console.log(error);
});

client.on('message', function (topic, message) {
    // called each time a message is received
    console.log('Received message:', topic, message.toString());
});

// subscribe to topic 'my/test/topic'
client.subscribe('Temp');


// publish message 'Hello' to topic 'my/test/topic'
// client.publish('my/test/topic', 'Hello');
client.publish('viet_hcmut/feeds/khuvuc1.led1', 'Hello 111');