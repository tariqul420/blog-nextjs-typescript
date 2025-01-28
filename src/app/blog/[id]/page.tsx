type Params = {
  id: string;
};

export async function generateMetadata({ params }: { params: Params }) {
  const { id } = await params;
  const data = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const blog = await data.json();

  return {
    title: 'Tariqul Blog || ' + blog?.title,
    description: blog?.body,
  };
}

const page = async ({ params }: { params: Params }) => {
  const { id } = await params;
  const data = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const blog = await data.json();

  return (
    <div className="card bg-base-100">
      <div className="card-body">
        <h2 className="card-title text-2xl">{blog?.title}</h2>
        <p>{blog?.body}</p>
      </div>
    </div>
  );
};

export default page;
