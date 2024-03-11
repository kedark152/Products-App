import { Card, CardContent, Typography } from "@mui/material";

export const ProductCard = ({ key, product }) => {
  const { title, description } = product;
  return (
    <Card
      style={{
        width: "500px",
        borderWidth: "2px",
      }}
    >
      <CardContent>
        <Typography variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="div">
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
};
