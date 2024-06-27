import {
  Stack,
  Grid,
  Typography,
  Box,
  Chip,
  Divider,
  Button,
} from "@mui/material";
import Iconify from "../../../components/Iconify";
import Comments from "./Comments";
import { AddCommentForm } from "./AddCommentForm";
import { useForm } from "react-hook-form";
import ImagesPreview from "./ImagesPreview";
import { fCurrencyVND } from "../../../utils/formatNumber";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../app/redux/cart/cartSlice";
import { useNavigate } from "react-router-dom";
import { PATH_APP } from "../../../routes/paths";
import { mockData } from "./_mockData";

const DetailContainer = ({ data }) => {
  const dispatch = useDispatch();
  const router = useNavigate();

  const { rating, comments } = mockData || {};

  const { price, size } = data ?? {};
  const { name, image, description, milkBrand, startAge, endAge } =
    data?.product ?? {};

  const defaultValues = {
    comment: "",
    rating: 0,
  };

  const methods = useForm({
    // resolver: yupResolver(RegisterSchema(t)),
    defaultValues,
    mode: "onSubmit",
  });

  // handle register
  async function postComment(data) {
    // send req to server and handle error
    try {
      // await dispatch(authApi.endpoints.register.initiate(data), { track: false }).unwrap();
      // enqueueSnackbar("Register successfully");
      // navigate(PATH_AUTH.login)
    } catch (error) {
      // console.log(error);
      // enqueueSnackbar("Register failed", { variant: 'error' });
    }
  }
  // handle submision
  const onSubmit = (data) => postComment(data);

  const handleAddToCart = () => {
    dispatch(addToCart(data));
  };

  const handlePaymentPage = () => {
    router(PATH_APP.checkout);
  };

  const handlePaymentNow = () => {
    handleAddToCart();
    handlePaymentPage();
  };

  return (
    <Grid container p={1}>
      <Grid item xs={12} sm={6}>
        <ImagesPreview image={image?.content} />
      </Grid>
      <Grid item xs={12} sm={6}>
        <Stack direction={"column"} spacing={1}>
          <Typography
            component="div"
            color={(theme) => theme.palette.grey[500]}
          >
            Thương hiệu{" "}
            <Box display="inline" sx={{ textDecoration: "underline" }}>
              {milkBrand?.name}
            </Box>
          </Typography>
          <Typography variant="h5">{name}</Typography>
          <Stack direction={"row"}>
            <Chip
              size="small"
              label={milkBrand?.company?.nation}
              variant="filled"
            />
          </Stack>
          <Stack direction={"row"} justifyContent={"space-between"}>
            <Typography variant="body2" fontWeight={400}>
              {fCurrencyVND(price)}
            </Typography>
            <Stack direction={"row"} spacing={1}>
              <Stack direction={"row"} spacing={1} alignItems={"center"}>
                <Iconify icon={"emojione:star"} />
                <Typography variant="body2" fontWeight={600}>
                  {rating}/5
                </Typography>
              </Stack>
              <Typography variant="body2">|</Typography>
              <Typography
                component="div"
                color={(theme) => theme.palette.grey[500]}
                variant="body2"
              >
                <Box display="inline" sx={{ fontWeight: 600 }}>
                  {135}{" "}
                </Box>
                Bình luận
              </Typography>
            </Stack>
          </Stack>
          <Stack direction={"column"} spacing={1}>
            <Typography variant="body2" fontWeight={600}>
              Mô tả
            </Typography>
            <Typography variant="body2">{description}</Typography>
          </Stack>
          <Stack direction={"column"} spacing={1}>
            <Typography variant="body2" fontWeight={600}>
              Phân loại
            </Typography>
            <Stack direction={"row"} spacing={1}>
              <Chip
                label={`${startAge} - ${endAge} tuổi`}
                sx={{
                  borderRadius: 1,
                  border: "1px solid",
                  borderColor: "#edeff1",
                  cursor: "pointer",
                }}
              />
              <Chip
                label={`${size} ml`}
                sx={{
                  borderRadius: 1,
                  border: "1px solid",
                  borderColor: "#edeff1",
                  cursor: "pointer",
                }}
              />
            </Stack>
          </Stack>
          <Stack direction={"row"} justifyContent={"space-between"}>
            <Button
              size={"large"}
              variant="contained"
              sx={{
                borderRadius: 4,
              }}
              onClick={handleAddToCart}
            >
              Thêm vào giỏ hàng
            </Button>
            <Button
              size={"large"}
              color="warning"
              variant="contained"
              sx={{
                borderRadius: 4,
              }}
              onClick={handlePaymentNow}
            >
              Mua ngay
            </Button>
          </Stack>
          <Stack direction={"column"} spacing={1}>
            <Typography variant="body2" fontWeight={600}>
              Bình luận
            </Typography>
            <Comments data={comments} />
            <Stack direction={"row"} width={1}>
              <Button
                variant="text"
                sx={{
                  background: "none",
                  p: 0,
                  "&:hover": {
                    background: "none",
                    textDecorationLine: "underline",
                  },
                }}
              >
                Hiển thị thêm...
              </Button>
            </Stack>
            <AddCommentForm methods={methods} onSubmit={onSubmit} />
          </Stack>
        </Stack>
      </Grid>
    </Grid>
  );
};

export default DetailContainer;
