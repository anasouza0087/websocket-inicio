const webSocket = require('ws')

const wss = new webSocket.Server({port: 8082})

wss.on('connection', ws => {
    console.log('Cliente conectado :)')

    ws.on('message', data => {
        console.log(`Mensagem recebida: ${data}`)

        ws.send(data.toUpperCase())
    })

    ws.on('close', () => {
        console.log('Cliente desconectado :(')
    })
})