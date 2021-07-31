const Rank = ({ user }) => {
  return (
    <div className="text-center rank">
      <h3>{`${user.name}, your current upload count so far is...`}</h3>
    </div>
  );
};

export default Rank;
