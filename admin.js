const {kafka}=require('./client')

async function init(){
    const admin=kafka.admin()
    await admin.connect()
    console.log('Admin connected')

    // Create a new topic
    await admin.createTopics({
        topics:[
            {topic:'rider-updates',numPartitions:2,replicationFactor:1},
        ],
    })
    console.log('Topic created')

    // List all topics
    const topics=await admin.listTopics()
    console.log('Topics:',topics)

    await admin.disconnect()
    console.log('Admin disconnected')
}

init().catch(console.error)