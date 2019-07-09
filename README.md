# IMUSTACMFE

> IMUSTACM front-end project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

## 第三方组件
### Prism
使用方法
```
<template>
    <pre><code class="language-c">{{c_code}}</code></pre>
</template>
<script>
import Prism from "prismjs";
export default {
    data(){
        return {
            c_code: `
#include <stdio.h>
int main()
{
    int a,b;
    while(scanf("%d %d",&a,&b) != EOF)
        printf("%d\\n",a+b);
    return 0;
}
`
        }
    },
    methods: {},
    components: {},
    mounted: function() {
        Prism.highlightAll();
    }
}
</script>
```
