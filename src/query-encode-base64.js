var queryEncodeBase64 = {
  	methods: {
        queryEncodeBase64(query_object, extend_object) {
            let local_query = this.queryFilter(query_object);
            local_query = this.queryFilter({...local_query, ...extend_object});
            return Object.values(local_query).length ?  window.btoa(encodeURIComponent(JSON.stringify(local_query))) : '';
        },
        queryDecodeBase64(base64_string) {
            return JSON.parse(decodeURIComponent(window.atob(base64_string)))
        },
        queryFilter(query_object) {
            const query = Object.entries(query_object).filter(item => {
                if(item[1] === null) return false;
                if (typeof item[1] === 'object') {
                    return Object.keys(item[1]).length;
                }
                if (typeof item[1] === 'string') {
                    return item[1];
                }
                if(typeof item[1] === 'number') {
                    return String(item[1]);
                }
                return false;
            }).reduce((acc, item) => {
                acc[item[0]] = item[1];
                return acc;
            }, {})
            return query;
        }
    }
}


export default queryEncodeBase64