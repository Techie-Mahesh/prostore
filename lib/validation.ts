import { z } from "zod";
import { formatNumberWithDecimal } from "./utils";
const currency = z.string().refine(
  (value) => {
    const num = Number(value);
    if (isNaN(num)) return false;
    return /^\d+(\.\d{2})?$/.test(formatNumberWithDecimal(num));
  },
  {
    message: "Price must have exactly two decimal places (e.g., 49.99)",
  }
);

export const insertProductSchema = z.object({
  name: z.string().min(3, "Product name must be at least 3 characters long"),
  slug: z.string().min(3, "Product slug must be at least 3 characters long"),
  category: z.string().min(3, "Category must be at least 3 characters long"),
  description: z
    .string()
    .min(10, "Description must be at least 10 characters long"),
  images: z.array(z.string()).min(1, "At least one image is required"),
  brand: z.string().min(2, "Brand must be at least 2 characters long"),
  numReviews: z.number().min(0, "Number of reviews must be a positive number"),
  stock: z.coerce.number(),
  isFeatured: z.boolean().optional().default(false),
  banner: z.string().nullable().optional().default(null),
  price: currency,
});
