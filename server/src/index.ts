import { createApp } from './config/app';

const port = Number(process.env.PORT ?? 3001);
const app = createApp();

app.listen(port, () => {
  console.log(`NextChapter API escuchando en http://localhost:${port}`);
});
