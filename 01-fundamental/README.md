- Create react app

```
npx create-react-app my-app
cd my-app
npm start
```

- Remove Boilerplate

  - remove src folder
  - create src folder and index.js inside

  ```JS
  import React from 'react';
  import ReactDOM from 'react-dom/client';
  <!-- import App from './App'; -->

  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
  ```

- Components

  - start with CAPITAL LETTER
  - must return JSX
    - group element: ` <React.Fragment></React.Fragment>`
      `<></> `
    - className instead of class
    - {} going back to JS
    - style={{ color:'#eee' }}

- images

  - external: url
  - local public/src folder

- props
  - pass key/value pairs

https://github.com/john-smilga/react-course-v3/tree/main/01-fundamentals
