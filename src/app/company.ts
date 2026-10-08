/** 사업자등록증명 기준 회사 정보 */
export const company = {
  brand: "Project N",
  name: "프로젝트엔",
  ceo: "김동진",
  registrationNumber: "432-33-01882",
  address: "경기도 이천시 경충대로2762번길 29-107, 102 - S21호(관고동)",
  email: "projectn.contact@gmail.com",
  year: 2026,
} as const;

export const mailSubject = "[Project N] 프로젝트 문의";

/** 기본 메일 앱으로 여는 링크 */
export const mailHref = `mailto:${company.email}?subject=${encodeURIComponent(mailSubject)}`;
