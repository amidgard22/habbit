import { Router } from "express";
import { prisma } from "../db";
import jwt from "jsonwebtoken";
import { comparePassword } from "../utils/hash";

const router = Router();

router.post("/", async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password)
    return res.status(400).json({ error: "Missing fields" });

  const user = await prisma.user.findUnique({ where: { email } });
  if (!user) return res.status(401).json({ error: "Invalid credentials" });

  const isValid = await comparePassword(password, user.password);
  if (!isValid) return res.status(401).json({ error: "Invalid credentials" });

  const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET!, {
    expiresIn: "1h",
  });
  res.json({ accessToken: token, user: user });
});

export default router;
