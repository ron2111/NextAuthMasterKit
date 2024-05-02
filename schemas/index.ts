import * as z from "zod";

export const LoginSchema = z.object({
  email: z.string().email({
    message: "Email is required",
  }),
  password: z.string().min(1, {
    message: "Password is Required",
  }),
  // not fixing the exactlength here as some users might have registered beofe the current validation system
});
