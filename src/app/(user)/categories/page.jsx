// react
import React from "react";
// mui
import { Typography, Grid, Box, Stack, Container } from "@mui/material";

// component
import CategoryCard from "@/components/cards/category";

// api
import * as api from "@/services";

export const revalidate = 0;
export const dynamic = "error";

export default async function Categories() {
  const data = await api.getAllCategoriesByUser();

  return (
    <Container maxWidth="xl">
      <Stack
        direction={"column"}
        sx={{
          gap: 3,
          mt: 5,
        }}
      >
        <Box>
          <Typography variant="h2" color="text.primary" textAlign="center">
            Categories
          </Typography>
          <Typography variant="body1" color="text.secondary" textAlign="center">
            List of all categories
          </Typography>
        </Box>
        <Box>
          <Grid
            container
            spacing={2}
            justifyContent="center"
            alignItems="center"
          >
            {data?.data?.map((inner) => (
              <React.Fragment key={Math.random()}>
                <Grid item lg={2} md={3} sm={4} xs={4}>
                  <CategoryCard category={inner} isLoading={false} />
                </Grid>
              </React.Fragment>
            ))}
            {!Boolean(data?.data.length) && (
              <Typography variant="h3" color="error.main" textAlign="center">
                Categories not found
              </Typography>
            )}
          </Grid>
        </Box>
      </Stack>
    </Container>
  );
}
