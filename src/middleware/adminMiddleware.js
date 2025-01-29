function adminMiddleware(req, res, next) {
  try {
    if (!req.user) {
      return res
        .status(401)
        .json({ message: "Unauthorized: User not logged in" });
    }

    const user = users.find((u) => u.id === req.user.id);

    if (!user || user.role !== "admin") {
      return res
        .status(403)
        .json({ message: "Forbidden: Admin privileges required" });
    }

    next();
  } catch (err) {
    console.error("Error in adminMiddleware:", err);
    res.status(500).json({ message: "Internal server error" });
  }
}

module.exports = adminMiddleware;
