// import { API_URL } from "@/config";
// import NextAuth from "next-auth/next";
// import CredentialsProvider from "next-auth/providers/credentials";

// export const authOptions = {
//   providers: [
//     CredentialsProvider({
//       name: "Credentials",

//       authorize: async (credentials) => {
//         const { ...values } = credentials;

//         const url = `${API_URL}/sms/admin/login`;

//         const response = await fetch(url, {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify(values),
//         });

//         const user = await response.json();

//         if (response.ok) {
//           console.log("admin login", user);

//           return user;
//         } else {
//           console.log("error", user);
//           // throw new Error(user.error);
//           throw new Error(user.message);
//         }
//       },
//     }),
//   ],

//   pages: {
//     signIn: "/sign-in",
//     // error: "/404",
//   },

//   callbacks: {
//     async jwt({ token, user }) {
//       if (user) {
//         token.token = user.token;
//         token.id = user.id;
//       }

//       return token;
//     },

//     async session({ token, session }) {
//       if (token) {
//         session.user.token = token.token;
//         session.user.id = token.id;
//       }

//       return session;
//     },
//   },
// };

// export default NextAuth(authOptions);

//with axios
import { API_URL } from "@/config";
import axios from "axios";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",

      authorize: async (credentials) => {
        const { ...values } = credentials;

        const url = `${API_URL}/sms/admin/login`;

        const config = {
          headers: {
            "Content-Type": "application/json",
          },
        };

        return (
          axios
            .post(url, values, config)
            .then((data) => {
              const user = data.data;
              return user;
            })
            .catch((error) => {
              throw new Error(error.response.data.message);
            }) || null
        );
      },
    }),
  ],

  pages: {
    signIn: "/sign-in",
    // error: "/404",
  },

  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.token = user.token;
        token.id = user.id;
      }

      return token;
    },

    async session({ token, session }) {
      if (token) {
        session.user.token = token.token;
        session.user.id = token.id;
      }

      return session;
    },
  },
};

export default NextAuth(authOptions);
