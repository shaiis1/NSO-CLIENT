const development = {
    api: 'https://localhost:7058'
  }
  
  const config =
  process.env.REACT_APP_STAGE === 'development'
      ? development
      : ''
  
  export default {
    ...config
  }