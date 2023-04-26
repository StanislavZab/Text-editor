const fs = require('fs');
const jsonServer = require('json-server');
const path = require('path');
const fileUpload = require('express-fileupload');
const crypto = require('crypto');

const server = jsonServer.create();

const router = jsonServer.router(path.resolve(__dirname, 'db.json'));

server.use(fileUpload({}));
server.use(jsonServer.defaults({}));
server.use(jsonServer.bodyParser);

server.use(async (req, res, next) => {
    await new Promise((res) => {
        setTimeout(res, 800);
    });
    next();
});

server.get('/files', (req, res) => {
    try {
        const fileList = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'fileList.json'), 'UTF-8'));
        const data = [];
        fileList.forEach((file) => {
            data.push({
                id: file.id,
                size: file.size,
                name: file.name,
            });
        });

        res.json(data);
    } catch (e) {
        console.log(e);
        return res.status(500).json({ message: e.message });
    }
});

server.get('/files/:id', (req, res) => {
    try {
        const fileList = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'fileList.json'), 'UTF-8'));
        const { id } = req.params;
        const file = fileList.find((item) => item.id === id);

        if (!file) {
            return res.status(400).json({ message: 'Filealready exist' });
        }
        const data = fs.readFileSync(file.path, 'UTF-8');
        res.json({ data, filename: file.name });
    } catch (e) {
        console.log(e);
        return res.status(500).json({ message: e.message });
    }
});

server.post('/files/:id', (req, res) => {
    try {
        const { data } = req.body;
        const fileList = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'fileList.json'), 'UTF-8'));
        const { id } = req.params;
        const file = fileList.find((item) => item.id === id);

        if (!file) {
            return res.status(400).json({ message: 'Filealready exist' });
        }

        if (fs.writeFileSync(file.path, data)) {
            return res.status(500).json({ message: e.message });
        }
        res.sendStatus(200);
    } catch (e) {
        console.log(e);
        return res.status(500).json({ message: e.message });
    }
});

server.delete('/files/:id', (req, res) => {
    try {
        const fileList = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'fileList.json'), 'UTF-8'));
        const { id } = req.params;
        const file = fileList.find((item) => item.id === id);
        console.log(file);

        if (file) {
            fs.unlinkSync(file.path);
        }

        fs.writeFileSync(path.resolve(__dirname, 'fileList.json'), JSON.stringify(fileList.filter((item) => item.id !== req.params.id)));
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

        const fileList = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'fileList.json'), 'UTF-8'));
        fileList.push({
            id: crypto.randomBytes(16).toString('hex'), name: file.name, size: formatBytes(file.size), path: pathFile,
        });
        fs.writeFileSync(path.resolve(__dirname, 'fileList.json'), JSON.stringify(fileList));

        res.sendStatus(200);
    } catch (e) {
        console.log(e);
        return res.status(500).json({ message: 'Upload error' });
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
