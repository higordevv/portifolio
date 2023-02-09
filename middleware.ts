import { withAuth } from "next-auth/middleware";
import { useRouter } from "next/router";

export default withAuth({
  callbacks: {
    authorized({ req, token }) {
      if (req.nextUrl.pathname === "/admin") {
        return token?.userRole === "admin";
      }
      return !!token;
    },
  },
});
export const config = { matcher: ["/admin"] };
