const mockProducts = [
  {
    id: 1,
    imageUrl:
      "https://product.hstatic.net/1000282430/product/sua-thanh-trung-khong-duong-950ml_5d7f6fc7714e405194f39d291f6db9a6_grande.jpg",
    category: "Sữa Bột",
    name: "Sữa bầu Friso Mum Gold hương cam",
    price: 450000,
  },
  {
    id: 2,
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTF7Y_i4Tew58RoKJ0H22-4wgRI1ayIO_tIA&s",
    category: "Sữa Bột",
    name: "Sữa bột Enfa A+ số 1",
    price: 420000,
  },
  {
    id: 3,
    imageUrl:
      "data:image/jpeg;base64,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",
    category: "Sữa Bột",
    name: "Sữa bột Dielac Alpha Step 2",
    price: 380000,
  },
  {
    id: 4,
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7iwplZiNYbr-7QRQNe6vD0Z8-lhWSVpi5Mg&s",
    category: "Sữa Bột",
    name: "Sữa bột Abbott Grow 3",
    price: 350000,
  },
  {
    id: 5,
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1NaPKldtMsmm5uSjiPsuEMdn_eyZ6TaShrg&s",
    category: "Sữa Bột",
    name: "Sữa bột Optimum Gold Step 3",
    price: 400000,
  },
  {
    id: 6,
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ03baC-NLTwE_dnqqNmzLSxe357nX9ZtG_QA&s",
    category: "Sữa Bột",
    name: "Sữa bầu Similac Mom hương vani",
    price: 460000,
  },
  {
    id: 7,
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1RFZ-xb0s77AsLjGIZYM6jBtFl3hEPQCJgg&s",
    category: "Sữa Bột",
    name: "Sữa bột Nan Optipro số 4",
    price: 410000,
  },
  {
    id: 8,
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaVp-RS1p366fUdp1WfkXmG4p5WcSdtmWy0w&s",
    category: "Sữa Bột",
    name: "Sữa bột Meiji số 9",
    price: 390000,
  },
  {
    id: 9,
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJLRN4Z_LTDxlVLyJU0wvOaYmSnb_PLkSCDQ&s",
    category: "Sữa Bột",
    name: "Sữa bột Anlene Gold hương vani",
    price: 370000,
  },
  {
    id: 10,
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDHpJs1qvh4jhV7JOdJquDyU0BKTaMHwL3FA&s",
    category: "Sữa Bột",
    name: "Sữa bột PediaSure BA hương vani",
    price: 430000,
  },
];

export default mockProducts;
