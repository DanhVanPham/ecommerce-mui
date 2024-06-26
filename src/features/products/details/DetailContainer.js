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

const DetailContainer = ({ data }) => {
  const dispatch = useDispatch();
  const router = useNavigate();

  // Call api
  const mockData = {
    brand: "Friso Gold",
    name: "Sữa bầu Friso Mum Gold hương cam",
    originName: "Hà Lan",
    price: "620.000",
    rating: "4.1",
    offerDesc:
      "Hóa đơn từ 500,000đ được mua sản phẩm giá sốc (Không kèm khuyến mãi khác)\n\
Núm ti, ti ngậm giảm 20% khi mua kèm sữa, tã, bình sữa (không kèm khuyến mãi khác)(click xem chi tiết).\n\
Tinh dầu thiên nhiên, đồ dùng cho bé giảm 15% khi mua kèm sữa, tã (Không kèm khuyến mãi khác)(click xem chi tiết)\n\
Mắt kính giảm 50% khi mua kèm hóa đơn sữa, tã bất kỳ (không kèm khuyến mãi khác)(click xem chi tiết).\n\
Xe tập đi, đồ chơi giảm từ 18% đến 31% khi mua kèm hóa đơn sữa, tã bất kỳ (không kèm khuyến mãi khác)(click xem chi tiết).\n\
Nhập mã VNPAYAVA2 giảm từ 10,000đ đến 20,000đ (Áp dụng tùy giá trị đơn hàng) khi thanh toán qua VNPAY-QR (Xem chi tiết tại đây)\n\
Quà khi mua 2 sản phẩm (hết quà hoàn 25.000₫)",
    desc: "Sữa bầu Friso Mum Gold hương cam là sản phẩm dành cho mẹ mang thai và cho con bú. Sữa với công thức Dualcare+ cho một nền tảng dinh dưỡng vững chắc cho sự phát triển của bé từ khi còn ở trong bụng mẹ. ",
    nutrients: [
      {
        id: 1,
        name: "400g",
      },
      {
        id: 2,
        name: "500g",
      },
    ],
    comments: [
      {
        id: 1,
        name: "Nguyễn Hữu Tuấn",
        createdAt: "10/05/2024",
        rating: 4,
        message:
          "Chất lượng của sản phẩm thì không phải bàn cãi, nhưng cách đóng gói để đưa sản phẩm đến tay khách hàng thật sự không tốt lắm nên tôi trừ 1 sao",
      },
      {
        id: 2,
        name: "Lê Trần",
        createdAt: "05/05/2024",
        rating: 4,
        message: "Rất tốt, cả sản phẩm và người bán",
      },
      {
        id: 2,
        name: "Trần Trọng Lê",
        createdAt: "05/05/2024",
        rating: 1,
        message: "Uống chả bổ béo gì",
      },
    ],
  };

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
        <ImagesPreview images={image?.content} />
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
          <Box
            sx={{
              display: "flex",
              width: 1,
              boxShadow: 5,
              borderRadius: 1,
              p: 1,
            }}
          >
            <Stack direction={"column"} width={1} spacing={2}>
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
              <Divider />
              <Stack direction={"column"} spacing={1}>
                <Stack direction={"row"} alignItems={"center"} spacing={1}>
                  <Iconify
                    icon={"ph:check-circle"}
                    sx={{
                      color: (theme) => theme.palette.success.main,
                      width: 18,
                      height: 18,
                    }}
                  />
                  <Typography variant="body2">
                    Hoàn tiền đổi trả trong 7 ngày
                  </Typography>
                </Stack>
                <Stack direction={"row"} alignItems={"center"} spacing={1}>
                  <Iconify
                    icon={"ph:check-circle"}
                    sx={{
                      color: (theme) => theme.palette.success.main,
                      width: 18,
                      height: 18,
                    }}
                  />
                  <Typography variant="body2">
                    Miễn phí giao hàng đơn từ 500.000 đ trong 10 km đầu tiên
                  </Typography>
                </Stack>
                <Stack direction={"row"} alignItems={"center"} spacing={1}>
                  <Iconify
                    icon={"ph:check-circle"}
                    sx={{
                      color: (theme) => theme.palette.success.main,
                      width: 18,
                      height: 18,
                    }}
                  />
                  <Typography variant="body2">
                    Giao hàng thu tiền, thanh toán
                  </Typography>
                </Stack>
              </Stack>
            </Stack>
          </Box>
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
