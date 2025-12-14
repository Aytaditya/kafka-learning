const { kafka } = require('./client')

async function init() {
  const consumer = kafka.consumer({ groupId: 'rider-update-group' })

  await consumer.connect()
  console.log('Consumer connected')

  await consumer.subscribe({
    topic: 'rider-updates',
    fromBeginning: true,
  })

  await consumer.run({
    eachMessage: async ({ topic, partition, message }) => {
      const key = message.key?.toString()
      const value = message.value?.toString()

      console.log({
        topic,
        partition,
        key,
        value: JSON.parse(value),
      })
    },
  })
}

init().catch(console.error)
