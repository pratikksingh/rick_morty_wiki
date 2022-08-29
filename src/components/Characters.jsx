import React from "react";
import Card from "./Card";

const CHARACTERS_NOT_FOUND = "Characters not found :(";

export default function Characters({ characters, characterInfo }) {
  if (characters) {
    return (
      <>
        {characters.map((character) => {
          return (
            <Card
              page="/"
              characterInfo={characterInfo}
              key={character.id}
              {...character}
            />
          );
        })}
      </>
    );
  }
  return <p>{CHARACTERS_NOT_FOUND}</p>;
}
