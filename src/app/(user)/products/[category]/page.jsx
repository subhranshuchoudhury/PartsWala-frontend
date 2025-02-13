// mui
import { Box, Container } from "@mui/material";

// components
import HeaderBreadcrumbs from "@/components/headerBreadcrumbs";
import ProductList from "@/components/_main/products";

// api
import * as api from "@/services";

export const dynamic = "auto";
export const revalidate = 10;

export async function generateStaticParams() {
  const { data } = await api.getCategorySlugs();
  const mapped = data?.map((cat) => {
    return {
      category: cat.slug,
    };
  });
  return mapped;
}

export async function generateMetadata({ params }) {
  const { data: response } = await api.getCategoryBySlug(params.category);

  // const images = category.images.map((img) => img.url);
  return {
    title: response.metaTitle,
    description: response.metaDescription,
    title: response.name,
    openGraph: {
      title: response.name,
      description: response.metaDescription,
      images: [response.cover.url],
    },
  };
}

export default async function Listing({ params }) {
  const { category } = params;
  const { data: categoryData } = await api.getCategoryTitle(category);

  return (
    <Box>
      <Box sx={{ bgcolor: "background.default" }}>
        <Container maxWidth="xl">
          <HeaderBreadcrumbs
            heading={categoryData?.name}
            links={[
              {
                name: "Home",
                href: "/",
              },
              {
                name: "Products",
                href: "/products",
              },
              {
                name: categoryData?.name,
              },
            ]}
          />

          <ProductList category={categoryData} />
        </Container>
      </Box>
    </Box>
  );
}
