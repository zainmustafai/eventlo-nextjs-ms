import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  publicRoutes: ["/", "/api", "/events", "/events/:id", "/api/uploadthing","/api/webhooks/clerk"],
  ignoredRoutes: ["/events", "/events/:id", "/api/uploadthing"],
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
