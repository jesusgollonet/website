import Layout from '../../components/layout.js';

export default function Post({ postData }) {
    console.log(postData);
    return (
        <Layout>
            <h1>{postData.title}</h1>

            <p>{postData.date}</p>
        </Layout>
    );
}

export async function getStaticPaths() {
    return {
        paths: [
            {
                params: {
                    id: 'a',
                },
            },
            {
                params: {
                    id: 'b',
                },
            },
        ],
        fallback: false,
    };
}
export async function getInitialProps(params) {
    return {
        props: {
            title: 'a',
            niceDate: '12 march 77',
            content: 'aaaa',
        },
    };
}

export async function getStaticProps(params) {
    return {
        props: {
            postData: {
                date: 'abc',
                title: 'alskdjf',
            },
        },
    };
}
