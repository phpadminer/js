/**************
 * 一个简易的静态node服务器
 * ghosthao
 * 2020-07-29
 */
import * as http from "http";
import {IncomingMessage, ServerResponse} from "http";
import * as fs from "fs";
import * as path from "path";
import * as url from "url";

let server = http.createServer();
const PUBLIC_DIR = path.resolve(__dirname, 'public');
server.on('request', (request: IncomingMessage, response: ServerResponse) => {
    const Path: string = request.url || "";
    if (Path !== '/favicon.ico') {
        const pathname  = url.parse(Path);
        const pathName: string = String(pathname).substr(1) || 'index.html';
        const extName = path.extname(pathName) || 'other';
        const maps = {
            '.ico': 'image/x-icon',
            '.html': 'text/html',
            '.js': 'text/javascript',
            '.json': 'application/json',
            '.css': 'text/css',
            '.png': 'image/png',
            '.jpg': 'image/jpeg',
            '.wav': 'audio/wav',
            '.mp3': 'audio/mpeg',
            '.svg': 'image/svg+xml',
            '.pdf': 'application/pdf',
            '.doc': 'application/msword',
        };
        // @ts-ignore
        let contentType = (maps[extName] ? maps[extName] : 'text/html') + ';charset=utf-8';
        fs.readFile(path.resolve(PUBLIC_DIR, pathName), (error, data) => {
            response.setHeader('Content-Type', contentType);
            response.setHeader('Cache-Control', 'max-age=31536000');
            if (!extName) {
                response.statusCode = 403;
                response.end('对不起 您没有权限访问文件夹');
            } else if (error && error.errno === -2) {
                response.statusCode = 404;
                response.end('对不起 您所找的资源不存在');
            } else {
                response.statusCode = 200;
                response.end(data);
            }
        });
    }
});

server.listen(1234);