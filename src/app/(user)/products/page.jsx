// mui
import { Box, Container } from "@mui/material";

// components
import HeaderBreadcrumbs from "@/components/headerBreadcrumbs";
import ProductList from "@/components/_main/products";

export default async function Listing() {
  return (
    <Box>
      <Box sx={{ bgcolor: "background.default" }}>
        <Container maxWidth="xl">
          <HeaderBreadcrumbs
            heading="Products"
            links={[
              {
                name: "Home",
                href: "/",
              },
              {
                name: "Products",
              },
            ]}
          />

          <ProductList />
        </Container>
      </Box>
    </Box>
  );
}
