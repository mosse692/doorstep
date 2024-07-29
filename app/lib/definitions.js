import * as z from "zod";

// const propertySchema = z.object({
//   id: z.number().int().positive().optional(),
//   title: z.string().max(30),
//   prop_type: z.enum([
//     "APARTMENT",
//     "HOUSE",
//     "CONDO",
//     "SEMI-DETACHED HOUSE",
//     "LAND",
//   ]),
//   purpose: z.enum(["FOR SALE", "FOR RENT"]),
//   desc1: z.string().max(40),
//   address1: z.string().max(30),
//   region: z.string().max(15),
//   area: z.string().max(10),
//   country: z.string().max(15),
//   n_of_bedrooms: z.number().int().optional(),
//   n_of_bathrooms: z.number().int().optional(),
//   car_space: z.number().int().optional(),
//   price: z.number().positive().precision(2),
//   floor_area: z.number().positive().precision(2).optional(),
//   land_size: z.number().positive().precision(2).optional(),
//   year_built: z.number().int().optional(),
//   furnishing: z.enum(["FURNISHED", "UNFURNISHED"]).optional(),
//   secure_dep: z.number().positive().precision(2).optional(),
//   agent_fee: z.enum(["YES", "NO"]).optional(),
//   featured: z.boolean().default(false),
// });

// const imageSchema = z.object({
//   id: z.number().int().positive().optional(),
//   property_id: z.number().int().positive(),
//   img_path: z.string().max(255),
// });

export const SignupFormSchema = z.object({
  id: z.number().int().positive().optional(),
  name: z.string().min(2).max(50),
  email: z.string().email().max(50),
  password: z
    .string()
    .min(8, {
      message: "Password must contain at least 8 Characters. ",
    })
    .max(50)
    .regex(/[a-zA-Z]/, {
      message: "Password must contain at least one letter. ",
    })
    .regex(/[0-9]/, { message: "Password must contain at least one number. " })
    .regex(/[^a-zA-Z0-9]/, {
      message: "Password must contain at least one special character. ",
    }),
  property_id: z.number().int().positive().optional(),
});

export const LoginFormSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email." }),
  password: z.string().min(1, { message: "Password field must not be empty." }),
});
