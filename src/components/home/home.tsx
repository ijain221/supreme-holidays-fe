import { Box, Button, Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material"
import { styled } from "@mui/system"
import React, { useEffect, useState } from "react"
import ReactTextTransition, { presets } from "react-text-transition";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleRight } from '@fortawesome/free-solid-svg-icons';

interface HomeProps {
    setIsHome: Function
    setIsPackages: Function
}

const HomeTopCard =styled(Box)({
    backgroundImage: `url(${"home.jpg"})`,
    height: '30rem'
})

const HomeBottomCard =styled(Box)({
    marginTop: '3rem',
    display: 'flex',
})

const BottomCards = styled(Card)({
    marginLeft: '2.5rem',
})

const texts = [
    "Thinking of Luxury?",
    "Thinking of Vacation?",
    "Thinking of Air Travel?",
    "Thinking of your Travel Partner?"]

const Home: React.FC<HomeProps> = ({ setIsHome, setIsPackages }) => {

    function handleViewPackage(){
        setIsHome(false)
        setIsPackages(true)
    }

    const [textIndex, setTextIndex] = useState(0);

    useEffect(() => {
        let interval = setInterval(() => {
          setTextIndex(getRandomNumber(0, texts.length-1))
        }, 3000);
    
        return () => {
          clearInterval(interval);
        };
      }, []);

    return <>
        <Box marginBottom={'2.5rem'}>
            <HomeTopCard>
                    <Typography align={'center'} color={'white'} fontSize={'4rem'} paddingTop={'8rem'}>
                    <ReactTextTransition
                     springConfig={presets.gentle}
                     inline
                     >
                        {texts[textIndex]}
                    </ReactTextTransition>
                    <br/><b>Think of Supreme <span style={{color: 'red'}}>!</span></b>
                    </Typography>
            </HomeTopCard>
            <HomeBottomCard>
                <BottomCards sx={{ width: 750 }}>
                    <CardActionArea>
                        <CardMedia
                        component="img"
                        height="140"
                        image="bali.jpg"
                        alt="bali"
                        />
                        <CardContent>
                        <Typography gutterBottom variant="h6" component="div">
                            Bali
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                        A magical blend of culture, 
                        people, nature, activities, weather, culinary delights, nightlife, and beautiful accommodation
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                </BottomCards>

                <BottomCards sx={{ width: 750 }}>
                    <CardActionArea>
                        <CardMedia
                        component="img"
                        height="140"
                        image="europe.jpg"
                        alt="europe"
                        />
                        <CardContent>
                        <Typography gutterBottom variant="h6" component="div">
                            Europe
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Experience the magic and lust of europe from mountains to plains, from oceans to 
                            human marvels. 
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                </BottomCards>

                <BottomCards sx={{ width: 750 }}>
                    <CardActionArea>
                        <CardMedia
                        component="img"
                        height="140"
                        image="turkey.jpg"
                        alt="turkey"
                        />
                        <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Turkey
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            The bridge between Asia and Europe, experience culture and diversity to its extent with
                            beatiful cities and sight seeing.
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                </BottomCards>

                <BottomCards sx={{ width: 750}}>
                    <CardActionArea>
                        <CardMedia
                        component="img"
                        height="140"
                        image="dubai.jpg"
                        alt="dubai"
                        />
                        <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Dubai
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            The land of sand, oil and luxury, experience the luxury and 
                            marvels of mordern day humans in land of oil.
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                </BottomCards>

                <BottomCards sx={{ width: 750}}>
                    <CardActionArea>
                        <CardMedia
                        component="img"
                        height="140"
                        image="vietnam.jpg"
                        alt="vietnam"
                        />
                        <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Vietnam
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            The southeast Asian country is has it all, vibrant city life to serene waters 
                            and deep forests.
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                </BottomCards>

                <BottomCards sx={{ width: 750 }}>
                    <CardActionArea>
                        <CardMedia
                        component="img"
                        height="140"
                        image="thailand.jpg"
                        alt="thailand"
                        />
                        <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Thailand
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Beautiful beaches, magnificent temples, and flavorful cuisines, Thailand has it all. 
                            Experience luxury in Thailand with Supreme.
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                </BottomCards>
                <Box marginLeft={'1rem'} marginRight={'1rem'} marginTop={'7.5rem'}>
                    <Button onClick={handleViewPackage}>
                    <FontAwesomeIcon icon={faArrowCircleRight}  size={'4x'}/>
                    </Button>
                </Box>
            </HomeBottomCard>
        </Box>
    </>
}

function getRandomNumber(min: number, max: number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

export default Home