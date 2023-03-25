const app = require('./app');
const PORT = process.env.PORT||2500;
app.listen(PORT,()=>{
console.log(`server is running in port: http://localhost:${PORT}`);
})