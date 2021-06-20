//importing Images 
// import React from 'react'

import athlete from './img/athlete-small.png';
import theracer from './img/theracer-small.png';
import goodtimes from './img/goodtimes-small.png';
import athlete2 from './img/athlete2.png';
import theracer2 from './img/the-racer2.jpg';
import goodtimes2 from './img/good-times2.jpg'; 


export const MovieState = () => {
    return[
        {
            title:'The Athelete',
            mainImg:athlete,
            secondaryImg: athlete2,
            url:'/work/the-athlete',
            awards:[
                {
                    title:'good photo contrast in city.',
                    description:"This is the contest arrenged by city photographer club. to see the tallents of youth."
                },
                {
                    title:'good photo location in city.',
                    description:"This is the contest arrenged by city photographer club. to see the location for photos in city."
                }
            ]
        },
        {
            title:'Good Times',
            mainImg:goodtimes,
            secondaryImg: goodtimes2,
            url:'/work/good-times',
            awards:[
                {
                    title:'Family Spot.',
                    description:"This is the contest arrenged by city photographer club. to showcase the family places inside the City."
                },
                {
                    title:'Enjoy Times',
                    description:"This is the contest arrenged by city photographer club. To enjoy Times with nature."
                }
            ]
        },
        {
            title:'The Racer',
            mainImg:theracer,
            secondaryImg: theracer2,
            url:'/work/the-racer',
            awards:[
                {
                    title:'Truly Tallent',
                    description:"This is the contest arrenged by news channel. to show the advancement of city"
                },
                {
                    title:'youth Views',
                    description:"This is the contest arrenged by rotery club. to show the youth interest in todays age."
                }
            ]
        }
    ]
}
// export default MovieState;