var contentful = require('contentful');

import printData from './printData';

var client = contentful.createClient({
    space: 'f0manxfuw9zp',
    accessToken: '_DDuZYhCD2gBapTIdwPPTkVEqP3vmb_H-8hMg7XpAPI'
});

function getAllPost(getAllEntries) {

    client.getEntries()
        .then(function (entries) {
            printData(entries.items);
        });
}

function getPost(id) {

    client.getEntry(id + '')
        .then(function (entry) {
            let post = {
                isNew: entry.fields.isNew,
                title: entry.fields.title,
                description: entry.fields.description,
                image: entry.fields.image.fields.file.url,
                altImage: entry.fields.image.fields.file.fileName
            };
        });
}

export default { getPost, getAllPost };