import axios from "axios";
import Head from 'next/head';
const Detail = ({ time }: { time: any }) => {
    return (
        <>
            <Head>
                <title>{time}</title>
            </Head>
            <div>{time}</div>
        </>
    )
}

export const getStaticPaths = async () => {
    // let list = [
    //     {
    //         uid: '1',
    //         did: '1'
    //     },
    //     {
    //         uid: '1',
    //         did: '2'
    //     }
    // ]
    const res = await axios.get("https://ssgdemo.usemock.com/paths");
    // console.log(res.data.data);
    const list = res.data.data;
    const paths = list.map((item: { uid: any; did: any; }) => ({
        params: {
            uid: item.uid,
            did: item.did
        },
    }))
    console.log(paths);
    return {
        paths,
        // fallback: true
        fallback: "blocking"
        // fallback: false
    }
}

export const getStaticProps = async ({ params }: { params: { uid: string, did: string } }) => {
    console.log(params);
    const res = await axios.get(`https://ssgdemo.usemock.com/${params.uid}/${params.did}`);
    console.log(res.data.data.time);
    return {
        props: {
            time: res.data.data.time
        },
        revalidate: 60
    }
}

export default Detail;
