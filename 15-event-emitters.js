// const EventEmitter = require('events');
// const customEmiiter = new EventEmitter();

// const produtos = customEmiiter.on('response', (a, b)=>{
//     console.log(`O resultado de ${a} itens + ${b} itens é de ${a + b} itens`);
// })

// customEmiiter.on('response', (a, b)=>{
//     console.log(`O resultado de ${a} itens + ${b} itens é de ${a + b} itens`);
// })

// console.log(produtos)

// customEmiiter.emit('response', 30, 4)


// const EventEmitter = require('events');
// const customEmiiter = new EventEmitter();

// customEmiiter.on('response', ()=>{
//     const soma = 1+2
//     console.log(`data recived ${soma}`)
// })

// customEmiiter.on('response', ()=>{
//     const mult = 3*3
//     console.log(`data recived ${mult}`)
// })
// customEmiiter.emit('response')


// const http = require('http')

// //Using Event Emitter API
// const server = http.createServer()
// //emits request event 
// // subscribe to it / listen for it / respond to it
// server.on('request', (req, res) => {
//     res.end('Welcome')
// })

// server.listen(3001)