const pageServices = {
  getURLParams: (_parameter: string) => {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(_parameter);
  },
  getFolderDataFromSessionStorage: (_key: string) => {
    return JSON.parse(window.sessionStorage.getItem(_key));
  },
  setDataToSessionStorage: (_key: string, _value: string) => {
    return window.sessionStorage.setItem(_key, _value);
  },
};

export default pageServices;
