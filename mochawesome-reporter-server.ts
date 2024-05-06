import * as express from 'express';
import * as path from 'path';

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, './cypress/reports/html'))); // Serve the HTML report

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './cypress/reports/html/index.html'));
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});