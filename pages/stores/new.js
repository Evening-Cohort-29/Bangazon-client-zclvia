import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import Layout from "../../components/layout";
import Navbar from "../../components/navbar";
import StoreForm from "../../components/store/form";
import { useAppContext } from "../../context/state";
import { addStore } from "../../data/stores";

export default function NewStore() {
  const { setProfile, profile } = useAppContext();
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const nameEl = useRef();
  const descriptionEl = useRef();
  const router = useRouter();

  // Redirect if user already has a store
  useEffect(() => {
    if (profile.store) {
      router.push(`/stores/${profile.store.id}`);
    }
  }, [profile, router]);

  // Don't render the form if user already has a store
  if (profile.store) {
    return <div>Redirecting to your store...</div>;
  }

  const saveStore = () => {
    const name = nameEl.current.value.trim();
    const description = descriptionEl.current.value.trim();

    // Basic validation
    if (!name) {
      setError("Store name is required");
      return;
    }

    if (!description) {
      setError("Store description is required");
      return;
    }

    setError("");
    setIsSubmitting(true);

    addStore({
      name: name,
      description: description,
    })
      .then((res) => {
        setProfile({
          ...profile,
          store: res,
        });
        router.push(`/stores/${res.id}`);
      })
      .catch((err) => {
        setError(`Failed to create store: ${err.message}`);
        setIsSubmitting(false);
      });
  };

  return (
    <StoreForm
      nameEl={nameEl}
      descriptionEl={descriptionEl}
      saveEvent={saveStore}
      router={router}
      title="Create your store"
      error={error}
      isSubmitting={isSubmitting}
    >
      <p>
        Give your new store a name and description. Then add products on the
        next page
      </p>
    </StoreForm>
  );
}

NewStore.getLayout = function getLayout(page) {
  return (
    <Layout>
      <Navbar />
      {page}
    </Layout>
  );
};
