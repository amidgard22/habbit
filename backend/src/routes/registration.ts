import { Router } from "express";
import { prisma } from "../db";
import { hashPassword } from "../utils/hash";

const router = Router();

router.post("/", async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password)
    return res.status(400).json({ error: "Missing fields" });

  try {
    const hashedPassword = await hashPassword(password);
    const user = await prisma.user.create({
      data: { email, password: hashedPassword },
    });
    res.json({ status: res.statusCode });
  } catch (e) {
    res.status(500).json({ error: "User creation failed" });
  }
});

export default router;
