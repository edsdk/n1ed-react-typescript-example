# Sample N1ED + TinyMCE usage in React app (TypeScript)

This project is a sample how to create a new React app and integrate TinyMCE 6 with N1ED into it.

This will allow you to edit HTML easily with help of TinyMCE and a lot of widgets provided by N1ED.

* N1ED website: [https://n1ed.com](https://n1ed.com)
* N1ED + TinyMCE React integration: [https://n1ed.com/doc/install-n1ed-react-component](https://n1ed.com/doc/install-n1ed-react-component)
* N1ED React NPM package: [https://www.npmjs.com/package/@edsdk/n1ed-react](https://www.npmjs.com/package/@edsdk/n1ed-react)

## How to run

Install all required modules into ```node_modules``` by running the command:

    npm ci

Now to run it type in console:     
    
    npm run start
    
Then open into your browser [http://localhost:3000](http://localhost:3000) and check N1ED is started.

In your own project do not forget to set your own N1ED API key. This will link your N1ED to configuration you will visually build in [N1ED Dashboard](https://n1ed.com/dashboard).

## How it was created:

You can do the same when creating your own app.

Console commands:

    npm install -g create-react-app
    create-react-app n1ed-react-typescript-example --use-npm --template typescript
    cd n1ed-react-typescript-example
    npm i --save @edsdk/n1ed-react
    
Then ```src/App.tsx``` file was modified to include N1ED editor into the application.
   