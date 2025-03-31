const Product = require("../models/productModel");

const getAllProducts = async (req, res) => {
    try {
        const products = await Product.find().populate("sub_category");
        res.status(200).json(products);
    } catch (error) {
        console.error("Lỗi khi lấy sản phẩm:", error);
        res.status(500).json({ message: "Lỗi server!" });
    }
};

module.exports = {
    getAllProducts,
};