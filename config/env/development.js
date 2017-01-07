module.exports = {
  env: 'development',
  jwt: {
    client_secret: 'lets go',
    duration: '100 years'
  },
  gh: {
    client_id: '',
    redirect_uri: 'http://localhost:3000/',
    gatekeeper: 'http://localhost:3000/'
  }
};
