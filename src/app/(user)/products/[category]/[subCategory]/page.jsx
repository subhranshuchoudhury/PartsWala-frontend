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
  const { data } = await api.getSubCategorySlugs();
  return data?.map((cat) => {
    return {
      subCategory: cat.slug,
      category: cat.parentCategory.slug,
    };
  });
}

export async function generateMetadata({ params }) {
  const { data: response } = await api.getSubCategoryBySlug(params.subCategory);

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
  const { category, subCategory } = params;
  const { data: subCategoryData } = await api.getSubCategoryTitle(subCategory);

  return (
    <Box>
      <Box sx={{ bgcolor: "background.default" }}>
        <Container maxWidth="xl">
          <HeaderBreadcrumbs
            heading={subCategoryData?.name}
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
                name: subCategoryData?.parentCategory?.name,
                href: `/products/${category}`,
              },
              {
                name: subCategoryData?.name,
              },
            ]}
          />
          <ProductList subCategory={subCategoryData} />
        </Container>
      </Box>
    </Box>
  );
}
