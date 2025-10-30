"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = [
    'strapi::logger',
    'strapi::errors',
    'strapi::security',
    'strapi::cors',
    'strapi::poweredBy',
    'strapi::query',
    {
        name: 'strapi::body',
        config: {
            formLimit: '256mb', // Límite para formularios
            jsonLimit: '256mb', // Límite para JSON
            textLimit: '256mb', // Límite para texto
            formidable: {
                // Aquí defines el límite MÁXIMO de subida de archivos
                maxFileSize: 200 * 1024 * 1024, // = 200MB
            },
        },
    },
    'strapi::session',
    'strapi::favicon',
    'strapi::public',
];
