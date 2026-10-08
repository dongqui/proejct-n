import Link from "next/link";
import { company, mailHref } from "./company";
import { ContactActions } from "./ContactActions";

function Logo() {
  return (
    <svg width="18" height="18" viewBox="0 0 100 100" aria-hidden="true">
      <rect x="10" y="8" width="20" height="84" fill="#D5F35A" />
      <rect x="70" y="8" width="20" height="84" fill="#D5F35A" />
      <polygon points="10,8 30,8 90,92 70,92" fill="#D5F35A" />
    </svg>
  );
}

export default function Home() {
  return (
    <>
      <header className="header">
        <div className="header__inner">
          <a href="#top" className="logo" aria-label="Project N 홈">
            <Logo />
            <span className="logo__text">Project N</span>
          </a>
          <nav className="nav" aria-label="주요 메뉴">
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </nav>
          <div className="header__cta">
            <a className="btn btn--s" href="#contact">
              문의하기
            </a>
          </div>
        </div>
      </header>

      <main id="top">
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero__inner">
            <svg
              className="hero__mark"
              viewBox="0 0 120 100"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <path
                d="M4 96 V4 L116 96 V4"
                fill="none"
                stroke="#D5F35A"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                vectorEffect="non-scaling-stroke"
              />
            </svg>
            <h1 id="hero-title" className="hero__title">
              다음 프로젝트를
              <br />
              만듭니다.
            </h1>
            <div className="hero__actions">
              <a className="btn btn--l" href="#contact">
                프로젝트 문의
              </a>
              <a href="#about" className="hero__secondary">
                소개 보기 ↓
              </a>
            </div>
          </div>
        </section>

        <section id="about" className="about" aria-labelledby="about-title">
          <div className="about__inner">
            <p className="about__lead">
              Project N은 아이디어를{" "}
              <span className="hl">앱과 웹 서비스</span>로 구현하는 독립 개발
              스튜디오입니다. <span className="hl">자체 제품</span>을 만들고,{" "}
              <span className="hl">새로운 프로젝트</span>에 함께합니다.
            </p>

            <div className="about__detail">
              <h2 id="about-title" className="about__title">
                아직 정해지지 않은 N에서 시작합니다.
              </h2>
              <p className="about__body">
                Project N은 문제를 발견하고, 작은 제품으로 구현하고, 실제 사용을
                통해 개선합니다. 자체 프로젝트를 이어가는 동시에 방향이 맞는 외부
                프로젝트에도 참여합니다.
              </p>
              <p className="about__body">
                운영자가 직접 기획과 개발을 맡는 독립 스튜디오입니다.
              </p>
            </div>
          </div>
        </section>

        <section
          id="contact"
          className="contact"
          aria-labelledby="contact-title"
        >
          <div className="contact__inner">
            <h2 id="contact-title" className="contact__title">
              함께 만들 프로젝트가 있나요?
            </h2>
            <p className="contact__lead">
              만들고 싶은 것과 현재 상황을 알려주세요. 정리된 기획서가 없어도
              괜찮습니다.
            </p>
            <p className="contact__hint">
              프로젝트 개요, 희망 일정, 예산 범위를 함께 보내주시면 좋습니다.
            </p>
            <ContactActions />
          </div>
        </section>
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
