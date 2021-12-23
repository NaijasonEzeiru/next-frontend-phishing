import Layout from "../../component/Layout";

const Category = ({ category, categories}) => {
    return (
        <Layout categories = {categories}>
            <h1>{category.name}</h1>
            <Articles articles={category.articles} />
        </Layout>
    )
}


export getStaticPaths = async() => {
    const res = await fetch("http://localhost:1337/categories")
    const categories = res.json();

    return {
        paths: categories.map((category) => ({
            params: {
                slug: category.slug,
            },
        })),
        fallback: blocking,
    }
}



export getStaticProps = async({ params }) => {
    const res = (await fetch("http://localhost:1337/categories?slug=${params.slug}"))[0];
    const category = res.json();
    const response = await fetch('http://localhost:1337/categories');
    const categories = response.json();

    return {
        props: { category, categories },
        revalidate: 2,
    };
}

export default Category