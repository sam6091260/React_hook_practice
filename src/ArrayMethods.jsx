function ArrayMethods() {
  const data = [
    {
      id: 1,
      name: "shane",
      cash: 2000,
      favor: "apple",
    },
    {
      id: 2,
      name: "amber",
      cash: 3300,
      favor: "watermelon",
    },
    {
      id: 3,
      name: "babby",
      cash: 500,
      favor: "guava",
    },
    {
      id: 4,
      name: "ted",
      cash: 5000,
      favor: "melon",
    },
  ];

  return (
    <div>
      {data.map((item) => {
        return (
          <div key={item.id}>
            <ul>
              <li>{item.name}</li>
              <li>{item.cash}</li>
              <li>{item.favor}</li>
            </ul>
          </div>
        );
      })}
    </div>
  );
}

export default ArrayMethods;
