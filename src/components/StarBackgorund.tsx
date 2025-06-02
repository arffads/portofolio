const StarBackground = () => {
  const stars = Array.from({ length: 30 });

  return (
    <>
      {stars.map((_, i) => (
        <span
          key={i}
          className="absolute star"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 10}s`,
            animationDuration: `${4 + Math.random() * 4}s`,
          }}
        ></span>
      ))}
    </>
  );
};

export default StarBackground;
