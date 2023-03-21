This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## demo

启动项目之后，我们可以直接访问`网站域名/1/1`
其中`/1/1`会命中到`[uid]/[did].tsx`
这是一个 SSG 动态增量页面

## 更新 SSG 页面缓存

我们在使用`getStaticProps`的时候设置了`revalidate`即数据有效时间，
例如我们设置`revaildate=60`,则表示在`60s`之内，当前页面的数据是不会发生变化，不会去请求数据库的数据，而是直接使用`json`数据
那我们假设更新了页面的内容，但是`revaildate`的有效时间又还没有过期，这样用户就无法访问的最新的内容，那我们就可以使用使用`next.js`的`API`功能对页面进行强制重新验证

```
https://<你的网站>/api/revalidate?secret=<你设置的token>&path=<你要更新的页面路径>
```

`token`记得在项目的`.env`文件中配置，到时候是需要与`.env`文件的变量比对的

其中`/api/revalidate(这个可以自己定义名字，在pages下面的api目录下面)?secret(可以自己定义)=<你设置的token>&path=<你要更新的页面路径>`

更多的详情可以查看当前项目的`/pages/api/revalidate.js`
