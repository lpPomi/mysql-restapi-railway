import app from './app.js';
import { PORT } from './config.js';

//app.listen(3000);
app.listen(PORT);

console.log('Server on port ', PORT);
