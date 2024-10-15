import { faker } from "@faker-js/faker";
import React from "react";
import { FixedSizeList } from "react-window";

const bigList = [...Array(5000)].map(() => ({
  name: faker.person.firstName(),
  email: faker.internet.email(),
  avatar: faker.image.avatar(),
}));

export default function Lists() {
  const renderRow = ({ index, style }) => (
    <div style={{ ...style, ...{ display: "flex" } }}>
      <img src={bigList[index].avatar} alt={bigList[index].name} width={50} />
      <p>
        {bigList[index].name} - {bigList[index].email}
      </p>
    </div>
  );

  return (
    <FixedSizeList
      height={window.innerHeight}
      width={window.innerWidth - 20}
      itemCount={bigList.length}
      itemSize={50}
    >
      {renderRow}
    </FixedSizeList>
  );
}
