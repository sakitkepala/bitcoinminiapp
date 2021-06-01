Lihat harga jual dan beli Bitcoin hari ini, konversikan dari Rupiah ke Bitcoin, atau dari Bitcoin ke Rupiah juga.

## Demo

Bisa cek di sini: [bitcoinminiapp.herokuapp.com](https://bitcoinminiapp.herokuapp.com)

## Stack

Aplikasi [Laravel](https://laravel.com) simpel (versi 7.x) dengan View/frontend [React JS](https://reactjs.org/), dibantu [Inertia.js](https://inertiajs.com/) untuk [mengintegrasikan](https://reinink.ca/articles/introducing-inertia-js) routing dan controller Laravel dengan aplikasi single-page React, sehingga Laravel bisa digunakan sebagai framework monolitik seperti biasa dan tidak perlu menyediakan API khusus di backend.

Stack ini semata-mata untuk coba mendemonstrasikan _proof of concept_ bagaimana aplikasi Laravel yang mempunyai front-end single-page React mengonsumsi Web API pihak ketiga yang sebenarnya, dan bahwa konsumsi API tersebut bisa dilakukan di front-end tanpa melalui Laravel terlebih dahulu.

Sumber data dari sini: [blockchain.info/api/exchange_rates_api](https://blockchain.info/api/exchange_rates_api).

## Setup development

```
git clone https://github.com/sakitkepala/FrontEnd-Bitcoin-AndikaPriyotamaD.git bitcoin
cd bitcoin

// Install dependensi projek (Laravel 7.x, PHP 7.2)
composer install

// Install & build asset JS & CSS untuk environment development
yarn install && yarn dev

// Jalankan server Laravel & front-end
php artisan server
yarn watch // atau `npm run watch`
```

Untuk front-end, projek ini menggunakan [package manager Yarn](https://yarnpkg.com/), tidak NPM seperti default dari Laravel, tapi tetap bisa menggunakan perintah `npm install && npm run dev`, bila Yarn terinstall di mesin. Bila tidak berhasil, hapus file `yarn.lock` lalu update `script` di `package.json` menjadi kurang-lebih seperti berikut untuk bisa menggunakan NPM:

```
// Ganti perintah `yarn` dengan perintah `npm run`...
{
    ...
    "scripts": {
        "dev": "npm run development",
        "watch": "npm run development -- --watch",
        "prod": "npm run production",
        ...
    },
    ...
}
```

## ☕ 👋🏼
