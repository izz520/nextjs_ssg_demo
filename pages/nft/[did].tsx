import axios from "axios";

const NftDetail = ({ cardInfo }: { cardInfo: any }) => {
    console.log(cardInfo);

    return (
        <div>
            <img src={cardInfo.shareImg} alt="" />
        </div>
    )
}

export const getStaticPaths = () => {
    return {
        paths: [
            {
                params: {
                    did: "7857b52eeef6b431a1fece5d05b9e2d2b2e421ec"
                },
            },
            {
                params: {
                    did: "edeef912ef6f7f0aad5d7965d4c452f828944790"
                },
            },
            {
                params: {
                    did: "3538b0290a88d40b313ce446b5eb44558f81ccb1"
                },
            }
        ],
        fallback: true
    }
}
export const getStaticProps = async ({ params }: { params: { did: string } }) => {
    const res = await axios.get(`https://api.likn.co/api/doc/allInOne?docId=${params.did}`);
    console.log(res.data.data);
    return {
        props: {
            cardInfo: res.data.data
        },
        revalidate: 60 * 60
    }
}

export default NftDetail;