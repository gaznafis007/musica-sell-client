import { async } from "@firebase/util";
import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../../Context/AuthProvider";

const AddProducts = () => {
  const { user } = useContext(AuthContext);
  const { data: categories = [], refetch } = useQuery({
    queryKey: ["items"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/items");
      const data = res.json();
      return data;
    },
  });
  const { register, handleSubmit, formState } = useForm();
  const handleAddProduct = (data, event) => {
    event.preventDefault();
    const image = data.image[0];
    const formData = new FormData();
    formData.append("image", image);
    fetch(
      `https://api.imgbb.com/1/upload?key=5e7b7d750921021d24c614f8e3520b78`,
      {
        method: "POST",
        body: formData,
      }
    )
      .then((res) => res.json())
      .then((imgData) => {
        if (imgData.success) {
          const sellerName = user?.displayName;
          const sellerEmail = user?.email;
          const name = data.productName;
          const category = data.productCategory;
          const price = data.resalePrice;
          const originalPrice = data.originalPrice;
          const address = data.address;
          const condition = data.condition;
          const product = {
            sellerName,
            sellerEmail,
            name,
            category,
            imgUrl: imgData.data.url,
            price,
            originalPrice,
            address,
            condition,
          };
          fetch("http://localhost:5000/products", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(product),
          })
            .then((res) => res.json())
            .then((productData) => {
              console.log(productData);
              if (productData.acknowledged) {
                event.target.reset();
                refetch();
              }
            });
        }
      });
  };
  return (
    <form onSubmit={handleSubmit(handleAddProduct)} className="mx-auto">
      <div className="form-control">
        <label className="label">
          <span className="label-text">Seller's Name</span>
        </label>
        <input
          type="text"
          {...register("sellerName")}
          defaultValue={user?.displayName}
          disabled
          className="input input-bordered max-w-sm"
        />
      </div>
      <div className="form-control">
        <label className="label">
          <span className="label-text">Seller's email</span>
        </label>
        <input
          type="text"
          {...register("sellerEmail")}
          defaultValue={user?.email}
          disabled
          className="input input-bordered max-w-sm"
        />
      </div>
      <div className="form-control">
        <label className="label">
          <span className="label-text">Product's Name</span>
        </label>
        <input
          type="text"
          {...register("productName")}
          className="input input-bordered max-w-sm"
        />
      </div>
      <div className="form-control">
        <label className="label">
          <span className="label-text">Category</span>
        </label>
        <select
          className="select select-bordered max-w-sm"
          {...register("productCategory")}
        >
          {categories.map((category, idx) => (
            <option key={idx} value={category.name}>
              {category.name}
            </option>
          ))}
        </select>
      </div>
      <div className="form-control">
        <label className="label">
          <span className="label-text">Resale Price</span>
        </label>
        <input
          type="text"
          {...register("resalePrice")}
          className="input input-bordered max-w-sm"
        />
      </div>
      <div className="form-control">
        <label className="label">
          <span className="label-text">Original Price</span>
        </label>
        <input
          type="text"
          {...register("originalPrice")}
          className="input input-bordered max-w-sm"
        />
      </div>
      <div className="form-control">
        <label className="label">
          <span className="label-text">Use time</span>
        </label>
        <input
          type="text"
          {...register("useTime")}
          className="input input-bordered max-w-sm"
        />
      </div>
      <div className="form-control">
        <label className="label">
          <span className="label-text">Pickup Address</span>
        </label>
        <input
          type="text"
          {...register("address")}
          className="input input-bordered max-w-sm"
        />
      </div>
      <div className="form-control">
        <label className="label">
          <span className="label-text">Product Image</span>
        </label>
        <input
          type="file"
          {...register("image")}
          className="file-input file-input-bordered w-full max-w-sm"
        />
      </div>
      <div className="form-control">
        <label className="label">
          <span className="label-text">Product Condition</span>
        </label>
        <select
          className="select select-bordered max-w-sm"
          {...register("condition")}
        >
          <option value="Best">Best</option>
          <option value="Best">Good</option>
          <option value="Best">Scratched</option>
        </select>
      </div>
      <input
        type="submit"
        value="Add products"
        className="btn btn-primary my-4"
      />
    </form>
  );
};

export default AddProducts;
