const you = ({ posts }) => {
    return (
        <div>
            {posts.map((post) => 
                (
                    <div key={post.id}>
                        <h1> {post.title} </h1>
                        <p>{post.description}</p>
                    </div>
                )
            )}
        </div>
    )
};

export default you;

export const getStaticProps = async() => {
    const res = await fetch("http://localhost:1337/articles");
    const posts = await res.json();

    return {
        props: {posts}
    }
};