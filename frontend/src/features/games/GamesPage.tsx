import { Container, Grid } from "@mui/material";
import { Link } from "react-router-dom";
import { useAppSelector } from "../../store/store";

export default function GamePage() {
  const { games } = useAppSelector((state) => state.games);

  return (
    <Container>
      <Grid container>
        {games &&
          games.map((game) => (
            <Grid key={game._id} item xs={4}>
              <Link to={`/game/${game._id}`}>
                <Grid
                  sx={{
                    borderRadius: 2,
                    margin: 2,
                    padding: 3,
                    backgroundImage:
                      "linear-gradient(90deg, rgb(12,237,147), rgb(13,200,220))",
                    minheight: 50,
                    minwidth: 50,
                  }}
                >
                  <h4>{game.name ? game.name : "No name"}</h4>
                </Grid>
              </Link>
            </Grid>
          ))}
      </Grid>
    </Container>
  );
}
