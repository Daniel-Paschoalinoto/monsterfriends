import Card from "./Card";

const CardList = ({ monsters }) => {
  return (
    <div>
      {monsters.map((user) => {
        return (
          <Card
            key={user.id}
            id={user.id}
            name={user.name}
            email={user.email}
          />
        );
      })}
    </div>
  );
};

export default CardList;
