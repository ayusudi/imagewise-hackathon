import { withAuth } from "next-auth/middleware";

export default withAuth(
  {
    callbacks: {
      authorized: ({ token }) => !!token,
    },
    pages: {
      signIn: "/"
    }
  }
);

export const config = {
  matcher: ["/features", "/features/:path*", "/result/:path*"],
};
