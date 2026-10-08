import type { Metadata } from "next";
import Link from "next/link";
import { company, mailHref } from "../company";

export const metadata: Metadata = {
  title: "개인정보처리방침 — Project N",
  description: `${company.name}(Project N)의 개인정보처리방침입니다.`,
};

const EFFECTIVE_DATE = "2026년 10월 8일";

export default function PrivacyPage() {
  return (
    <>
      <header className="header">
        <div className="header__inner">
          <Link href="/" className="logo" aria-label="Project N 홈">
            <svg width="18" height="18" viewBox="0 0 100 100" aria-hidden="true">
              <rect x="10" y="8" width="20" height="84" fill="#D5F35A" />
              <rect x="70" y="8" width="20" height="84" fill="#D5F35A" />
              <polygon points="10,8 30,8 90,92 70,92" fill="#D5F35A" />
            </svg>
            <span className="logo__text">Project N</span>
          </Link>
          <nav className="nav" aria-label="주요 메뉴">
            <Link href="/#about">About</Link>
            <Link href="/#contact">Contact</Link>
          </nav>
          <div className="header__cta">
            <Link className="btn btn--s" href="/#contact">
              문의하기
            </Link>
          </div>
        </div>
      </header>

      <main className="doc">
        <div className="doc__inner">
          <h1 className="doc__title">개인정보처리방침</h1>
          <p className="doc__meta">시행일: {EFFECTIVE_DATE}</p>

          <p className="doc__lead">
            {company.name}(이하 &ldquo;Project N&rdquo;)은 「개인정보 보호법」을
            준수하며, 이용자의 개인정보를 소중하게 다룹니다. 이 방침은 Project
            N의 웹사이트와 Project N이 제공하는 앱·웹 서비스에 적용됩니다.
          </p>

          <section className="doc__section">
            <h2>1. 수집하는 개인정보와 수집 방법</h2>
            <p>
              Project N은 서비스 제공에 필요한 최소한의 개인정보만 수집합니다.
            </p>
            <ul>
              <li>
                <strong>문의 시</strong>: 이메일 주소, 이름(선택), 문의 내용 등
                이용자가 이메일로 직접 보내주신 정보
              </li>
              <li>
                <strong>서비스 이용 시</strong>: 접속 기기 정보, 운영체제·앱
                버전, 접속 일시, 오류 기록 등 서비스 이용 과정에서 자동으로
                생성되는 정보
              </li>
              <li>
                개별 서비스에서 추가 정보를 수집하는 경우, 해당 서비스 안에서
                항목과 목적을 별도로 안내하고 동의를 받습니다.
              </li>
            </ul>
          </section>

          <section className="doc__section">
            <h2>2. 개인정보의 이용 목적</h2>
            <ul>
              <li>문의 응대 및 프로젝트 협의</li>
              <li>서비스 제공, 유지, 오류 분석 및 품질 개선</li>
              <li>법령상 의무 이행 및 분쟁 대응</li>
            </ul>
          </section>

          <section className="doc__section">
            <h2>3. 보유 및 이용 기간</h2>
            <p>
              개인정보는 수집 목적이 달성되면 지체 없이 파기합니다. 다만 다음의
              경우 해당 기간 동안 보관합니다.
            </p>
            <ul>
              <li>문의 내역: 문의 처리 완료 후 1년</li>
              <li>
                관계 법령에 따라 보존이 필요한 정보: 해당 법령에서 정한 기간
                (예: 전자상거래 등에서의 소비자 보호에 관한 법률에 따른 계약·
                결제·소비자 불만 관련 기록 3~5년)
              </li>
            </ul>
          </section>

          <section className="doc__section">
            <h2>4. 제3자 제공 및 처리 위탁</h2>
            <p>
              Project N은 이용자의 동의가 있거나 법령에 근거가 있는 경우를
              제외하고 개인정보를 제3자에게 제공하지 않습니다. 서비스 운영을 위해
              이메일(Google), 앱 배포·분석 도구 등 외부 서비스를 이용할 수 있으며,
              이 경우 해당 사업자의 보호 조치에 따라 처리됩니다.
            </p>
          </section>

          <section className="doc__section">
            <h2>5. 이용자의 권리</h2>
            <p>
              이용자는 언제든지 자신의 개인정보에 대해 열람, 정정, 삭제, 처리
              정지를 요청할 수 있습니다. 요청은 아래 연락처로 보내주시면 지체
              없이 처리합니다.
            </p>
          </section>

          <section className="doc__section">
            <h2>6. 개인정보의 파기</h2>
            <p>
              전자적 파일은 복구할 수 없는 방법으로 삭제하고, 종이 문서는
              분쇄하거나 소각합니다.
            </p>
          </section>

          <section className="doc__section">
            <h2>7. 안전성 확보 조치</h2>
            <ul>
              <li>개인정보 접근 권한을 운영자로 제한</li>
              <li>비밀번호 및 2단계 인증을 통한 계정 보호</li>
              <li>전송 구간 암호화(HTTPS) 적용</li>
            </ul>
          </section>

          <section className="doc__section">
            <h2>8. 개인정보 보호책임자</h2>
            <dl className="doc__dl">
              <div>
                <dt>책임자</dt>
                <dd>{company.ceo} (대표)</dd>
              </div>
              <div>
                <dt>이메일</dt>
                <dd>
                  <a href={mailHref}>{company.email}</a>
                </dd>
              </div>
            </dl>
          </section>

          <section className="doc__section">
            <h2>9. 방침의 변경</h2>
            <p>
              이 방침은 법령이나 서비스 변경에 따라 수정될 수 있으며, 변경 시 이
              페이지에 시행일과 함께 공지합니다.
            </p>
          </section>

          <p className="doc__back">
            <Link href="/">← 홈으로</Link>
          </p>
        </div>
      </main>

      <footer className="footer">
        <div className="footer__inner">
          <dl className="footer__info">
            <div>
              <dt>상호</dt>
              <dd>{company.name}</dd>
            </div>
            <div>
              <dt>대표자</dt>
              <dd>{company.ceo}</dd>
            </div>
            <div>
              <dt>사업자등록번호</dt>
              <dd>{company.registrationNumber}</dd>
            </div>
            <div>
              <dt>주소</dt>
              <dd>{company.address}</dd>
            </div>
            <div>
              <dt>이메일</dt>
              <dd>
                <a href={mailHref}>{company.email}</a>
              </dd>
            </div>
          </dl>
          <div className="footer__links">
            <Link href="/privacy">개인정보처리방침</Link>
            <span className="footer__copy">
              © {company.year} {company.brand}
            </span>
          </div>
        </div>
      </footer>
    </>
  );
}
