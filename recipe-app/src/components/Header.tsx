const Header = () => {
  return (
    <div className="header container">
      <div className="border rounded m-3 p-5 shadow bg-light">
        <h1 className="display-1">Recipe Search API</h1>
        <h3 className="lead">
          This website contains the ingredients of tens of thousands of dishes.
          Enter any dish and view its ingredients.
        </h3>
      </div>
    </div>
  );
};

export default Header;
