import React from 'react';
import * as packageJson from '../package.json';

function App() {
	return (
		<>
			<h1>React Typescript</h1>
			<pre>
				{`
          .
          ├── README.md
          ├── package-lock.json
          ├── package.json
          ├── public
          │   ├── favicon.ico
          │   ├── index.html
          │   ├── logo192.png
          │   ├── logo512.png
          │   ├── manifest.json
          │   └── robots.txt
          ├── src
          │   ├── App.tsx
          │   ├── assets
          │   │   ├── images
          │   │   └── scss
          │   │       ├── _bootstrap.scss
          │   │       └── styles.scss
          │   ├── components
          │   ├── hooks
          │   ├── index.tsx
          │   ├── layouts
          │   ├── modules
          │   │   ├── api
          │   │   ├── auth
          │   │   ├── notifications
          │   │   ├── providers
          │   │   ├── routes
          │   │   └── utils
          │   ├── react-app-env.d.ts
          │   └── views
          │       ├── private
          │       └── public
          └── tsconfig.json
        `}
			</pre>
			<pre>{JSON.stringify(packageJson, null, 2)}</pre>
		</>
	);
}

export default App;
