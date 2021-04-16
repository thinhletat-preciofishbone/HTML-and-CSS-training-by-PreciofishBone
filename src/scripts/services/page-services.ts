const pageServices = {
  getURLParams: (_parameter: string) => {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(_parameter);
  },
  getFolderDataFromBrowserStorage: (_key: string) => {
    return JSON.parse(window.localStorage.getItem(_key));
  },
  setDataToBrowserStorage: (_key: string, _value: string) => {
    return window.localStorage.setItem(_key, _value);
  },
};

export default pageServices;
