export default function ErrorPage({error}) {

  return (
    <div className="text-black grid place-content-center h-80 border text-center" id="error-page">
      <h1>Oops!</h1>
      <p className="py-5">Sorry, an unexpected error has occurred.</p>
      <p className="text-black mt-4">
        {error.status === 404 ? <p>You may need an INTERNET CONNECTION</p> : error.message}
      </p>
    </div>
  );
}