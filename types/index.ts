import { insertProductSchema } from "@/lib/validation";
import z from "zod";

export interface Product extends z.infer<typeof insertProductSchema> {
  id: string;
  createdAt: Date;
  rating: string;
  numReviews: number;
}
