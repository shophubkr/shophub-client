"use client";

import type { FormEvent } from "react";

const ForgetPw = () => {
  const onSubmitToEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const target = e.currentTarget;
    const email = (target.elements.namedItem("email") as HTMLInputElement).value;
  };

  return (
    <form
      onSubmit={onSubmitToEmail}
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        margin: "0 288px",
      }}
    >
      <h1>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
          <span>비밀번호를</span>
          <span>잊으셨나요?</span>
        </div>
      </h1>
      <section style={{ marginTop: "16px" }}>
        <section
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            color: "gray",
            marginBottom: "32px",
          }}
        >
          <span>인증받으신 이메일 주소로</span>
          <span>비밀번호 재설정 링크를 보내드립니다</span>
        </section>
        <section
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "32px",
          }}
        >
          <input name="email" placeholder="아이디(이메일 계정)을 입력해주세요" style={{ width: "100%" }} />
          <button style={{ width: "100%" }}>재설정 링크</button>
        </section>
      </section>
    </form>
  );
};

export default ForgetPw;
