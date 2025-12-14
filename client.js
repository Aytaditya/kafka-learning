const {Kafka}=require('kafkajs')

module.exports.kafka=new Kafka({
    brokers: ['192.168.29.24:9092'],
    clientId:'my-app',
})