import { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import PersonIcon from "@mui/icons-material/Person";
import LockIcon from "@mui/icons-material/Lock";
import { useNavigate } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
const schema = yup.object().shape({
  username: yup.string().required("اسم المستخدم مطلوب"),
  password: yup
    .string()
    .min(6, "يجب أن تكون كلمة المرور 6 أحرف على الأقل")
    .required("كلمة المرور مطلوبة"),
});

const SignInForm = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const onSubmit = (data) => {
    console.log("Form Data:", data);
    navigate("/dashboard");
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white p-8 rounded w-full max-w-sm"
        style={{ width: "300px", marginBottom: "20px" }} // Set form width to 300px and add margin bottom
      >
        <h2 className="text-4xl font-bold mb-3 text-center">مرحبا بك</h2>
        <p className="text-[#A0A0A0] text-center mb-6">
          الورد اليومي لحفظ القرأن
        </p>

        <Controller
          name="username"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              label="اسم المستخدم"
              fullWidth
              error={!!errors.username}
              helperText={errors.username ? errors.username.message : ""}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <PersonIcon style={{ color: "#03AA77" }} />
                  </InputAdornment>
                ),
                classes: { root: "input-field" },
                style: {
                  borderColor: errors.username ? "#f44336" : "#03AA77",
                  marginBottom: "20px",
                },
              }}
              InputLabelProps={{
                shrink: true,
                classes: { root: "input-label" },
                style: { color: "#03AA77" },
              }}
              variant="standard"
            />
          )}
        />

        <Controller
          name="password"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              label="كلمة المرور"
              type={showPassword ? "text" : "password"}
              fullWidth
              error={!!errors.password}
              helperText={errors.password ? errors.password.message : ""}
              inputProps={{ style: { textAlign: "right" } }} // Align text to the right
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <IconButton
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="start"
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
                classes: { root: "input-field" },
                style: {
                  borderColor: errors.password ? "#f44336" : "#03AA77",
                  marginBottom: "30px",
                },
              }}
              InputLabelProps={{
                shrink: true,
                classes: { root: "input-label" },
                style: { color: "#03AA77" },
              }}
              variant="standard"
            />
          )}
        />

        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          style={{
            backgroundColor: "#03AA77",
            color: "#ffffff",
            width: "100%",
          }}
        >
          تسجيل الدخول
        </Button>
      </form>
    </div>
  );
};

export default SignInForm;
