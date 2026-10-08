import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import { company } from "./company";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Project N — 다음 프로젝트를 만듭니다",
  description:
    "Project N은 아이디어를 앱과 웹 서비스로 구현하는 독립 개발 스튜디오입니다. 자체 제품을 만들고, 새로운 프로젝트에 함께합니다.",
  openGraph: {
    title: "Project N",
    description: "아이디어를 앱과 웹 서비스로 구현하는 독립 개발 스튜디오",
    siteName: company.brand,
    locale: "ko_KR",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="ko" className={manrope.variable}>
      <body>{children}</body>
    </html>
  );
}
