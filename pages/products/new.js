import { useRouter } from "next/router";
import { useRef } from "react";
import Layout from "../../components/layout";
import Navbar from "../../components/navbar";
import ProductForm from "../../components/product/form";
import { addProduct } from "../../data/products";
export default function NewProduct() {
  const formEl = useRef();
  const router = useRouter();

  const saveProduct = () => {
    const { name, description, price, category, location, quantity } =
      formEl.current;

    // Validate that a category is selected
    if (!category.value || category.value === "0") {
      alert("Please select a category for your product");
      return;
    }

    const product = {
      name: name.value,
      description: description.value,
      price: price.value,
      category_id: parseInt(category.value),
      location: location.value,
      quantity: parseInt(quantity.value),
    };
    addProduct(product)
      .then((res) => {
        if (res && res.id) {
          router.push(`/products/${res.id}`);
        } else {
          // Fallback to products list if no id returned
          router.push("/products");
        }
      })
      .catch((error) => {
        console.error("Error creating product:", error);
        // Could add user-facing error handling here
      });
  };

  return (
    <ProductForm
      formEl={formEl}
      saveEvent={saveProduct}
      title="Add a new product"
      router={router}
    ></ProductForm>
  );
}

NewProduct.getLayout = function getLayout(page) {
  return (
    <Layout>
      <Navbar />
      {page}
    </Layout>
  );
};
