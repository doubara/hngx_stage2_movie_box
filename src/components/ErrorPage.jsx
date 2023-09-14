export default function ErrorPage(props) {

  return (
    <div className="text-black grid place-content-center h-80 border text-center" id="error-page">
      <h1>Oops!</h1>
      <p className="py-5">Sorry, an unexpected error has occurred.</p>
      <p className="f">
        Looks like you may NEED A DATA CONNECTION
      </p>
    </div>
  );
}