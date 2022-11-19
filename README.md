# chatbot-demo

https://artflowai.notion.site/Take-Home-Project-Simple-Chatbot-f90e9fb759be4530ad44981f51906fad

## How to run this demo

System requirements:

- Node.js 16+
- Docker
- Git

Start back-end app:

```bash
# switch to the folder
cd back-end

# configure environment variables
cp .env.example .env

# install dependencies
npm install

# migrate database structure
node ace migration:run

# start server with auto-reload
npm run dev
```

Start the front-end app:

```bash
# switch to the folder
cd ../front-end

# configure environment variables
cp .env.example .env

# install dependencies
npm install

# start server with hot-module-replacement
npm run dev
```
