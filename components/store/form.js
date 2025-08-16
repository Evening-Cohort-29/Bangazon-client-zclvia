import { Input } from "../../components/form-elements";
import CardLayout from "../card-layout";

export default function StoreForm({
  nameEl,
  descriptionEl,
  saveEvent,
  title,
  router,
  children,
  error,
  isSubmitting,
}) {
  return (
    <CardLayout title={title}>
      <>
        {children}
        {error && <div className="notification is-danger">{error}</div>}
        <Input
          id="name"
          refEl={nameEl}
          type="text"
          placeholder="Store Name"
          required
        />
        <textarea
          placeholder="Add a Description..."
          className="textarea"
          ref={descriptionEl}
          required
        ></textarea>
      </>
      <>
        <a
          className={`card-footer-item ${isSubmitting ? "is-loading" : ""}`}
          onClick={isSubmitting ? null : saveEvent}
          style={{ cursor: isSubmitting ? "not-allowed" : "pointer" }}
        >
          {isSubmitting ? "Creating..." : "Save"}
        </a>
        <a className="card-footer-item" onClick={() => router.back()}>
          Cancel
        </a>
      </>
    </CardLayout>
  );
}
