import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import PersonIcon from "@mui/icons-material/Person";
import LockIcon from "@mui/icons-material/Lock";
import CircularProgress from "@mui/material/CircularProgress";

const url = "http://quranapp.somee.com/api/Dashboard/LoginAdmin";
const schema = yup
  .object({
    email: yup
      .string()
      .trim()
      .required("البريد الإلكتروني مطلوب")
      .email("يجب أن يكون البريد الإلكتروني صالحًا"),
    password: yup.string().required("كلمة المرور مطلوبة"),
  })
  .required();

const SignInForm = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onSubmit",
    reValidateMode: "onSubmit",
    defaultValues: {
      email: "",
      password: "",
    },
  });

  useEffect(() => {
    const firstInput = document.querySelector("input");
    firstInput && firstInput.focus();
  }, []);

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    console.log("Form Data:", data);

    const formData = new FormData();
    formData.append("Email", data.email);
    formData.append("Password", data.password);

    try {
      const response = await fetch(url, {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        const result = await response.json();
        console.log("Response:", result);

        navigate("/app");
      } else {
        const errorData = await response.json();
        console.error("Login failed", errorData);
        setError("email", { message: errorData.message });
      }
    } catch (error) {
      console.error("Error:", error);
      setError("email", { message: "An error occurred" });
    } finally {
      setIsSubmitting(false);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex justify-center items-center h-screen -mt-12">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white p-8 rounded w-full max-w-sm"
        style={{ width: "300px" }}
      >
        <h2 className="text-4xl font-bold mb-3 text-center">مرحبا بك</h2>
        <p className="text-gray-400 text-center mb-6">
          الورد اليومي لحفظ القرأن
        </p>
        <TextField
          {...register("email")}
          label="البريد الإلكتروني"
          error={!!errors.email}
          helperText={errors.email?.message}
          fullWidth
          sx={{
            marginY: "20px",
          }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <PersonIcon style={{ color: "#03AA77" }} />
              </InputAdornment>
            ),
          }}
          InputLabelProps={{
            shrink: true,
            style: { color: "#03AA77" },
          }}
          variant="standard"
        />
        <TextField
          {...register("password")}
          type={showPassword ? "text" : "password"}
          label="كلمة المرور"
          error={!!errors.password}
          helperText={errors.password?.message}
          fullWidth
          sx={{
            marginb: "20px",
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <IconButton
                  onClick={togglePasswordVisibility}
                  edge="start"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? (
                    <VisibilityOff style={{ color: "#03AA77" }} />
                  ) : (
                    <Visibility style={{ color: "#03AA77" }} />
                  )}
                </IconButton>
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment position="end">
                <LockIcon style={{ color: "#03AA77" }} />
              </InputAdornment>
            ),
          }}
          InputLabelProps={{
            shrink: true,
            style: { color: "#03AA77" },
          }}
          variant="standard"
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          disabled={isSubmitting}
          style={{
            backgroundColor: "#03AA77",
            color: "#ffffff",
            marginTop: "20px",
          }}
        >
          {isSubmitting ? <CircularProgress size={24} /> : "تسجيل الدخول"}
        </Button>
      </form>
    </div>
  );
};

export default SignInForm;
