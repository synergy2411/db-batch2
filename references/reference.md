# to generate react project with typescript

- npx create-react-app blog-app --template typescript

- cd blog-app

- npm start

# to install bootstrap

- npm install bootstrap
- import bootstrap in index.tsx

# useEffect Flavors

- useEffect(cb) -> will run for every render cycle of component
- useEffect(cb, []) ( componentDidMount )-> will run only once, at the time of intial redering of component
- useEffect(cb, [Dependency]) (componentDidUpdate) -> cb run at initial rendering of component & will run whenever the dependency changes
- useEffect(cb -> cleanUpFn, [Dependency]) (componentWillUnmount)->
  > cb run at initial rendering of component
  > dependency will change
  > cleanupFn runs
  > cb runs
  > cleanUpFn will run when the component is about to unload from browser

# redux basics

- npm init -y [Generate package.json file]
- npm i redux

- npm install @reduxjs/toolkit react-redux
