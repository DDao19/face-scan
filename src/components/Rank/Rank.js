const Rank = ({ user }) => {
  return (
    <div className="text-center rank">
      <h3>{`${user.name}, your current upload count so far is...`}</h3>
      <h2 className="text-white">{user.entries}</h2>
    </div>
  );
};

export default Rank;
