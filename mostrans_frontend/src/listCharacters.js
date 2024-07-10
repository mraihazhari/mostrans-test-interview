import React, {useEffect, useState} from "react";
import {
Container,
Typography,
Box,
TextField,
Grid,
Button,
Card,
CardActions,
CardHeader,
CardContent,
CardMedia,
Dialog,
DialogTitle,
DialogActions,
DialogContent
} from "@mui/material";
import axios from "axios";
import Navbar from "./components/navbar";
import { getCharacter } from "./api/getCharacter";


function ListCharacters() {
    
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [detailCharacter, setDetailCharacter] = useState(false);
    const [idCharacter, setIdCharacter] = useState(null);

    const DetailPage = () => {
        return(
            <Dialog open={detailCharacter} onClose={() => setDetailCharacter(false)}>
                <DialogContent>
                <Card sx={{ 
                            display: 'flex',
                            }}>
                            <Box sx={{ display: 'flex', 
                                flexDirection: 'column', 
                                }}>
                                <CardContent sx={{ flex: '1 0 auto' }}>
                                <Typography component="div" variant="h3">
                                 {data[idCharacter]?.name}
                                </Typography>
                                <Typography variant="h5" color="text.secondary" component="div"
                                sx={{
                                    marginTop: 2
                                }}>
                                 Status : {data[idCharacter]?.status}
                                </Typography>
                                <Typography variant="h5" color="text.secondary" component="div">
                                 Species : {data[idCharacter]?.species}
                                </Typography>
                                <Typography variant="h5" color="text.secondary" component="div">
                                 Type : {data[idCharacter]?.type}
                                </Typography>
                                <Typography variant="h5" color="text.secondary" component="div">
                                 Gender : {data[idCharacter]?.gender}
                                </Typography>
                                <Typography variant="h5" color="text.secondary" component="div">
                                 Origin : {data[idCharacter]?.origin?.name}
                                </Typography>
                                </CardContent>
                                <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
                                {/* icon button */}
                                </Box>
                            </Box>
                            <CardMedia
                                component="img"
                                sx={{ 
                                    width: 180,
                                    marginLeft: 5
                                }}
                                image={data[idCharacter]?.image}
                            />
                        </Card>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setDetailCharacter(false)}>Close</Button>
                </DialogActions>
            </Dialog>
        )
    }

    useEffect(() => {
        getCharacter()
        .then((data) => {
            setData(data);
            setLoading(false);
        })
        .catch((error) => {
            setError(error);
            setLoading(false);
        });
    }, []);

    async function handleOpenDetail (id) {
        console.log(id);
        setIdCharacter(id);
        setDetailCharacter(true);
    }

    return (
        <Container
        sx={{
            marginBottom: 5
        }}>
            <Navbar />
            <Container disableGutters maxWidth="sm" component="main" sx={{ pt: 8, pb: 6 }}>
                <Typography
                component="h4"
                variant="h4"
                align="center"
                color="text.primary"
                gutterBottom
                >
                List Chracters
                </Typography>
                <Box
                sx={{
                    height: 30,
                    width: 500,
                    maxWidth: '75%',
                    margin: 'auto',
                }}
                >
                {/* send search event to function */}
                <TextField fullWidth label="Search Character" id="searchkreator"/>
                </Box>
            </Container>
            <Container maxWidth="md" component="main">
            <Grid container spacing={5} alignItems="flex-end">
                {data?.map((character) => (
                // Enterprise card is full width at sm breakpoint
                <Grid
                    item
                    key={character.name}
                    xs={12}
                    sm={6}
                    md={4}
                >
                        <Card sx={{ 
                            display: 'flex',
                            //semua card harus memiliki tinggi yang sama
                            height: 190,
                            }}>
                            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                <CardContent sx={{ flex: '1 0 auto' }}>
                                <Typography component="div" variant="h5">
                                    {character.name}
                                </Typography>
                                <Typography variant="subtitle1" color="text.secondary" component="div">
                                    {character.species}
                                </Typography>
                                </CardContent>
                                <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
                                {/* icon button */}
                                <Button
                                    variant="outlined"
                                    sx={{
                                        borderColor: 'green',
                                        color: 'green',
                                        '&:hover': {
                                        borderColor: 'green',
                                        backgroundColor: 'rgba(0, 128, 0, 0.1)', // Optional: Adds a slight green background on hover
                                        },
                                    }}
                                    onClick={() => {
                                        //redirect to detail page
                                        handleOpenDetail(character.id - 1);
                                    }}
                                    >
                                    <Typography
                                    sx={{
                                        color: 'green',
                                        fontSize: 12,
                                    }}
                                    >Lihat Detail</Typography>
                                    </Button>
                                </Box>
                            </Box>
                            <CardMedia
                                component="img"
                                sx={{ 
                                    width: 100,
                                    marginLeft: 'auto'
                                }}
                                image={character.image}
                            />
                        </Card>
                </Grid>
                ))}
            </Grid>
            </Container>
            {
                DetailPage()
            }
        </Container>
    );
}

export default ListCharacters;