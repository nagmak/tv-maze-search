import React from "react";
import { Rating, Link, Button, Card, CardActions, CardContent, Typography } from '@mui/material';
import Image from 'next/image'

export const ShowContentCard = (props) => {
    const showContent = props.props;
    const datePremiered = showContent.premiered ? new Date(showContent.premiered).getFullYear(): null;
    const dateEnded = showContent.ended ? new Date(showContent.ended).getFullYear() : null;
    let genres = '';
    let days = '';

    if (showContent.genres) {
      showContent.genres.forEach((genre, i) => {
        if (i < showContent.genres.length - 1) {
          genres = genres + genre + ' | '
        } else {
          genres = genres + genre
        }
      })
    }

    if (showContent.schedule && showContent.schedule.days) {
      showContent.schedule?.days?.forEach((day, i) => {
        if (i < showContent.schedule.days.length - 1) {
          days = days + day + ', '
        } else {
          days = days + day
        }
      })
    }

  return (
    <Card sx={{ minWidth: 350 }}>
      <CardContent>
      <Typography variant="h6">
        Show Info
      </Typography>

      { showContent.network?.name || datePremiered || dateEnded ? (
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            <b>Network:</b>
            {showContent.network?.country?.code ? (
              <Image
                src={`https://flagcdn.com/w20/${showContent.network.country.code.toLowerCase()}.png`}
                alt={`${showContent.network.country.code} flag`}
                width={20}
              />
            ) : null}

              {showContent.network?.name ? showContent.network?.name : null} ({datePremiered ? datePremiered: null} - {dateEnded ? dateEnded : 'present'})
          </Typography>
        ): null}
        
        {showContent.schedule && (days || showContent.schedule.time || showContent.schedule.runtime) ? (
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            <b>Schedule:</b> {days ? days: null}s at {showContent.schedule?.time ? showContent.schedule.time: null} ({showContent.runtime ? showContent.runtime: null} min)
          </Typography>
        ): null}

        { showContent.status ? (
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            <b>Status:</b> {showContent.status}
          </Typography>
        ): null}

        { showContent.type ? (
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            <b>Show Type:</b> {showContent.type}
          </Typography>
        ) : null}

        { showContent.genres ? (
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            <b>Genres:</b> {genres}
           </Typography>
          ): null
        }

       { showContent.officialSite ? (
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            <b>Official site:</b> <Link href={showContent.officialSite} underline="none">{showContent.officialSite}</Link>
          </Typography>
        ): null }

        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        <Rating name="half-rating-read" max={10} precision={0.5} defaultValue={2.5} value={showContent.rating?.average ? showContent.rating.average : 0} readOnly /> ( votes)
        </Typography>
      </CardContent>
    </Card>
  );
}