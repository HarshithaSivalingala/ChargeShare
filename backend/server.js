import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("I am testing you");
});
// app.use(express.json());
// app.use("/api/products", productRoutes);
// app.use("/api/users", userRoutes);
// app.use("/api/orders", orderRoutes);
// app.use("/api/upload", uploadRoutes);
// app.get("/api/config/paypal", (req, res) =>
//   res.send(process.env.PAYPAL_CLIENT_ID)
// );
// app.use(notFound);
// app.use(errorHandler);

// const __dirname = path.resolve();
// app.use("/uploads", express.static(path.join(__dirname, "/uploads")));

const PORT = 5005;

app.listen(
  PORT,
  console.log(`server running in mode on port ${PORT}`)
);
