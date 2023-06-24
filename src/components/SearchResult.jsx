import React from "react";
import Link from 'next/link'
import { Card, CardHeader, CardMedia, CardActionArea } from "@mui/material";

export const SearchResult = (props) => {
  const { show } = props;
  const { name, image } = show;
  return (
    <CardActionArea>
      <Link href={`/shows/${show.id}`}>
      <Card style={{ display: "flex", flexDirection: "column", height: "100%" }}>
        <CardHeader title={name} style={{ flex: 1 }} />
        {
          image?.medium || image?.original ? (
            <CardMedia
            component="img"
            image={image.medium || image.original}
            alt={name}
          />
          ): null
        }

    </Card>
    </Link>
    </CardActionArea>
  );
};
