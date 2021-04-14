const pageServices = {
  getURLParams: (_parameter: string) => {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(_parameter);
  },
  getDataFromSessionStorage: (_key: string) => {
    return window.sessionStorage.getItem(_key);
  },
};

export default pageServices;
