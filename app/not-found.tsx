const NotFound: React.Page = () => {
  return (
    <section className="w-full h-[calc(100dvh-140px)] max-w-4xl mx-4 flex flex-col justify-center lg:mx-auto">
      <h1 className="mb-8 text-2xl  font-semibold tracking-tighter">
        404 - Page Not Found
      </h1>
      <p>The page you are looking for does not exist.</p>
    </section>
  );
};
export default NotFound;
