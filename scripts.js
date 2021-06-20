const ws = new WebSocket('ws://localhost:8082')

ws.addEventListener('open', () => {
    console.log('Conectado :)')

    ws.send('Consegui acessar!')
})

ws.addEventListener('message', ({data}) => {
    console.log(data)
})