const fs = require('fs');
const jsonServer = require('json-server');
const path = require('path');
const fileUpload = require('express-fileupload');

const server = jsonServer.create();

const router = jsonServer.router(path.resolve(__dirname, 'db.json'));

server.use(fileUpload({}));
server.use(jsonServer.defaults({}));
server.use(jsonServer.bodyParser);

const getFileInfoFromFolder = (route) => {
    const files = fs.readdirSync(route, 'utf8');
    const response = [];
    for (const file of files) {
        const extension = path.extname(file);
        const fileSizeInBytes = fs.statSync(route + file).size;
        response.push({ name: file, extension, fileSizeInBytes });
    }
    return response;
};

server.use(async (req, res, next) => {
    await new Promise((res) => {
        setTimeout(res, 800);
    });
    next();
});

server.get('/files', (req, res) => {
    try {
        const result = getFileInfoFromFolder('json-server/books/');
        const data = [];
        for (file of result) {
            console.log(file);
            data.push({ ...file, fileSizeInBytes: formatBytes(file.fileSizeInBytes) });
        }

        res.json(data);
    } catch (e) {
        console.log(e);
        return res.status(500).json({ message: e.message });
    }
});

server.get('/files/:id', (req, res) => {
    try {
        const data = fs.readFileSync(path.resolve(__dirname, 'books', req.params.id), 'UTF-8');
        res.json({ data, filename: req.params.id });
    } catch (e) {
        console.log(e);
        return res.status(500).json({ message: e.message });
    }
});

server.delete('/files/:id', (req, res) => {
    try {
        const data = fs.unlinkSync(path.resolve(__dirname, 'books', req.params.id));
        res.sendStatus(200);
    } catch (e) {
        console.log(e);
        return res.status(501);
    }
});

server.put('/upload', (req, res) => {
    try {
        const { file } = req.files;
        const pathFile = path.resolve(__dirname, 'books', file.name);

        if (fs.existsSync(pathFile)) {
            return res.status(400).json({ message: 'Filealready exist' });
        }

        file.mv(pathFile);

        res.sendStatus(200);
    } catch (e) {
        console.log(e);
        return res.status(500).json({ message: e.message });
    }
});

server.use(router);

// запуск сервера
server.listen(8000, () => {
    console.log('server is running on 8000 port');
});

function formatBytes(bytes, decimals = 2) {
    if (!+bytes) return '0 Bytes';
    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ['Bytes', 'KiB', 'MiB', 'GiB', 'TiB', 'PiB', 'EiB', 'ZiB', 'YiB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return `${parseFloat((bytes / k ** i).toFixed(dm))} ${sizes[i]}`;
}
