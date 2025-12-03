import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";

export default function InfoBox({info}){
    const INIT_URL=
    "https://images.unsplash.com/photo-1603288967520-f3e04381dc02?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const HOT_URL=
    "https://images.unsplash.com/photo-1447601932606-2b63e2e64331?q=80&w=679&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const COLD_URL=
    "https://images.unsplash.com/photo-1612208695882-02f2322b7fee?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const RAIN_URL=
    "https://images.unsplash.com/photo-1475116127127-e3ce09ee84e1?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";



    return (
  <div className="infoBox">
    <div className="cardContainer">
      <Card
        sx={{
          maxWidth: 360,
          borderRadius: "20px",
          boxShadow: "0px 8px 25px rgba(0,0,0,0.15)",
          overflow: "hidden",
          backdropFilter: "blur(10px)",
          background: "rgba(255,255,255,0.75)"
        }}
      >
        <CardMedia
          sx={{
            height: 180,
            position: "relative",
            filter: "brightness(0.9)"
          }}
          image={
            info.humidity > 80
              ? RAIN_URL
              : info.temp > 15
              ? HOT_URL
              : COLD_URL
          }
        />

        <CardContent sx={{ textAlign: "center", padding: "22px" }}>
          <Typography
            gutterBottom
            variant="h4"
            component="div"
            sx={{ fontWeight: 700, color: "#1e1e1e" }}
          >
            {info.city}
          </Typography>

          <Typography
            variant="body2"
            component="span"
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "6px",
              fontSize: "16px",
              color: "#333"
            }}
          >
            <div>🌡️ Feels Like: <b>{info.feelsLike}°C</b></div>
            <div>🌡️ Temperature: <b>{info.temp}°C</b></div>
            <div>💧 Humidity: <b>{info.humidity}%</b></div>
            <div>⬆️ Max: <b>{info.tempMax}°C</b></div>
            <div>⬇️ Min: <b>{info.tempMin}°C</b></div>
          </Typography>
        </CardContent>
      </Card>
    </div>
  </div>
);
}
