# Query Encode Base64

Mixin, amely a beküldött objectből base64 encodeolt query stringet gyártani, valamint a query-t base64 decodeolni.

## Install

```
import queryEncodeBase64 from 'query-encode-base64';
app.use(queryEncodeBase64);
```

## Usage

### queryEncodeBase64(query_object, extend_object)


```
const encoded_query = this.queryEncodeBase64(this.$route.query);
const encoded_query_extend = this.queryEncodeBase64(this.$route.query,{search: this.search});
```

### queryDecodeBase64(base64_string)

```
const decoded_query = this.queryDecodeBase64(this.$route.query);
```