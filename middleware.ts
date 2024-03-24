import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  publicRoutes: [
    "/api/webhooks(.*)",
    "/",
    "/api/webhooks/clerk(.*)",
    "/add-banner",
    "/add-featured",
  ],
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
