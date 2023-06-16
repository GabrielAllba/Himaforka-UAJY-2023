const Detail = ({ params }: { params: { id: string } }) => {
  return (
    <main>
      <div className="flex min-h-screen flex-col items-center justify-center p-2">
        <h1>{params.id}</h1>
      </div>
    </main>
  );
};

export default Detail;
