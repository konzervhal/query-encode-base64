import queryEncodeBase64 from'./query-encode-base64';

const plugin = {
  install (Vue) {
    Vue.mixin(queryEncodeBase64);
  }
}

export default plugin