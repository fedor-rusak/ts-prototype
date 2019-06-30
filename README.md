# ts-prototype

[![license](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

Simple project to verify if typescript can be used for simple web projects.

## Usage instructions

Be sure to use fresh nodejs distribution like 10.x i.e.

And have Docker installation.

First install node dependencies via:

```
npm install
```

Start MongoDB server:

```
npm run mongo-start
```

If everything went as expected you can use typescript transpiler and start an app:

```
npm start
```

After Ctrl+C and stopping you server don't forget to stop MongoDB:

```
npm run mongo-stop
```

## Development process

Make the changes you want in \*.ts files. Then run linter:

```
npm run lint
```

Fix if linter complains about anything.