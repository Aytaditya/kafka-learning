const {kafka}=require('./client')

async function init(){
    const producer=kafka.producer()
    await producer.connect()
    console.log('Producer connected')

    // Send a message to the topic
    await producer.send({
        topic:'rider-updates',
        messages:[
            {key:'location-update',value:JSON.stringify({name:'Aditya Aryan',location:'South',timestamp:Date.now()})},
        ],
    })
    console.log('Message sent')

    await producer.disconnect()
    console.log('Producer disconnected')
}

init().catch(console.error)