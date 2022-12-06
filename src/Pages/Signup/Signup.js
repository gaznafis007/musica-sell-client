import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import Lottie from "lottie-react";
import signup from "./login.json";
import { AuthContext } from "../../Context/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import { setToken } from "../../api/token";

const Signup = () => {
  //   const imgKey = process.env.REACT_APP_imgKey;
  //   console.log(imgKey);
  const { signUp, getProfile } = useContext(AuthContext);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const saveUser = (name, email, role, imgURL) => {
    const saveUser = {
      name: name,
      email: email,
      seller: role,
      imgURL: imgURL,
    };
    fetch("https://musica-sell-server.vercel.app/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(saveUser),
    })
      .then((res) => res.json())
      .then((savedData) => {
        console.log(savedData);
        if (savedData.acknowledged) {
          navigate("/");
        }
      });
  };
  const handleSignUp = (data) => {
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
          const imgUrl = imgData.data.url;
          const name = data.name;
          const email = data.email;
          const password = data.password;
          signUp(email, password)
            .then((res) => {
              const user = res.user;
              getProfile(name, imgUrl);
              //   setToken(user);
              const role = data.role;
              console.log(user);
              saveUser(name, email, role, imgUrl);
            })
            .catch((err) => {
              console.log(err.message);
            });
        }
      });
  };
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl ml-4 font-bold">Sign Up Here!</h1>
          <Lottie animationData={signup}></Lottie>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleSubmit(handleSignUp)} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="name"
                {...register("name", { required: true })}
                aria-invalid={errors.name ? "true" : "false"}
                className="input input-bordered"
              />
              {errors.name && <p className="text-error">Name is required</p>}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                placeholder="email"
                {...register("email", { required: "Email is required" })}
                className="input input-bordered"
              />
              {errors.email && <p className="text-error">Email is required</p>}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Upload your image</span>
              </label>
              <input
                type="file"
                {...register("image")}
                className="file-input file-input-bordered w-full max-w-xs"
              />
            </div>
            <div className="form-control">
              <label className="label cursor-pointer">
                <span className="label-text">Are you seller?</span>
                <input
                  type="checkbox"
                  {...register("role")}
                  className="checkbox"
                />
              </label>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 8,
                    message: "Password must contain 8 characters",
                  },
                  pattern: {
                    value: /^(?=.*[A-Z])(?=.*[0-9])/,
                    message:
                      "Password must contain a capital letter and a number",
                  },
                })}
                className="input input-bordered"
              />
              {errors.password && (
                <p className="text-error">{errors?.password?.message}</p>
              )}
              <label className="label">
                <Link to="/login" className="label-text-alt link link-hover">
                  Have and Account? Login!
                </Link>
              </label>
            </div>
            <div className="form-control mt-6">
              <input
                type="submit"
                value="Sign up"
                className="btn btn-primary"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
