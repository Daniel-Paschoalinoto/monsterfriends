const Card = ({ email, name, id }) => {
  return (
    <div className="tc bg-light-green dib br3 pa3 ma2 pa3 grow bw2 shadow-5">
      <img src={`https://robohash.org/${id}?set=set2&size=200x200`} alt="mosters" />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default Card;
